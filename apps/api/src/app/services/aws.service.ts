import { EAWSS3BucketName } from '@medixbot/types';
import * as AWS from 'aws-sdk';
import * as stream from 'stream';
import { v4 as uuidv4 } from 'uuid';
import { config } from '../configs';

type S3UploadStream = {
  writeStream: stream.PassThrough;
  promise: Promise<AWS.S3.ManagedUpload.SendData>;
};

class AWSS3Uploader {
  private s3: AWS.S3;

  constructor(region?: string) {
    AWS.config.update({
      region: region || 'eu-central-1',
      accessKeyId: config.aws.accessKeyId,
      secretAccessKey: config.aws.secretAccessKey,
    });

    this.s3 = new AWS.S3();
  }

  private createUploadStream(
    key: string,
    bucket: EAWSS3BucketName
  ): S3UploadStream {
    const pass = new stream.PassThrough();
    return {
      writeStream: pass,
      promise: this.s3
        .upload({
          Bucket: bucket,
          Key: key,
          Body: pass,
        })
        .promise(),
    };
  }

  private createDestinationFilePath(mimetype: string): string {
    // Create a unique name for the file
    return `${uuidv4()}.${mimetype.split('/')[1]}`;
  }

  async uploadFile(file, bucket: EAWSS3BucketName) {
    const { createReadStream, filename, mimetype, encoding } = await file;

    // Create the destination file path
    const filePath = this.createDestinationFilePath(mimetype);

    // Create an upload stream that goes to S3
    const uploadStream = this.createUploadStream(filePath, bucket);

    // Pipe the file data into the upload stream
    createReadStream().pipe(uploadStream.writeStream);

    // Start the stream
    const result = await uploadStream.promise;

    // Get the link representing the uploaded file
    const url = result.Location;
    // (optional) save it to our database

    return { filename, mimetype, encoding, url, key: filePath };
  }
  getObject(key: string, bucket: EAWSS3BucketName) {
    return this.s3
      .getObject({
        Bucket: bucket,
        Key: key,
      })
      .createReadStream();
  }
}

export default { AWSS3: AWSS3Uploader };
