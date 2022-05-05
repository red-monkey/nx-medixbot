import styled from '@emotion/styled';
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  useLazyQuery,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import React, { useState } from 'react';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: `${process.env['NX_API_URL']}/graphql`,
  }) as never,
});

const StyledApp = styled.div`
  // Your style here
`;

const SINGLE_UPLOAD = gql`
  query PredictImage($image: Upload!) {
    predictImage(image: $image) {
      accuracy
      foodName
      nutrients {
        protein
        fat
        carb
      }
      referenceWeight
    }
  }
`;

type Props = {
  title: string;
  content: string;
};
const Item: React.FC<Props> = ({ title, content }) => {
  return (
    <div
      style={{
        padding: 5,
        borderRadius: 10,
        border: '1px solid #BECADA',
        marginBottom: 5,
      }}
    >
      <p>
        <b>{title}</b>: {content}
      </p>
    </div>
  );
};

const Prediction = () => {
  const [image, setImage] = useState('');
  const [upload, { loading, error, data }] = useLazyQuery(SINGLE_UPLOAD);
  const onChange = ({
    target: {
      validity,
      files: [file],
    },
  }: any) => {
    if (validity.valid) {
      upload({
        variables: {
          image: file,
        },
      });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;

  return (
    <StyledApp>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="https://i.ibb.co/b1VjGLk/looggoo.png"
          alt="logo"
          width="50%"
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <label style={{ marginRight: 5 }}>Upload your food picture</label>
        <input
          type="file"
          accept="image/*"
          required
          onChange={(e) => {
            onChange(e);
            setImage(URL.createObjectURL(e.target.files![0]));
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 15,
          width: '60%',
          minHeight: '200px',
          margin: 'auto',
          borderRadius: 10,
          border: '1px solid #BECADA',
          overflow: 'hidden',
        }}
      >
        {image && <img src={image || '#'} width="100%" />}
      </div>

      {data?.predictImage && (
        <>
          <div>
            <h3 style={{ color: '#EB5757', textAlign: 'center' }}>
              I am {data?.predictImage.accuracy} sure that this is a{' '}
              {data?.predictImage.foodName}
            </h3>
          </div>

          <div>
            <Item title="Food name" content={data?.predictImage.foodName} />
            <Item title="Accuracy" content={data?.predictImage.accuracy} />
            <Item
              title="Carb"
              content={data?.predictImage.nutrients.carb.toString()}
            />
            <Item
              title="Protein"
              content={data?.predictImage.nutrients.protein.toString()}
            />
            <Item
              title="Fat"
              content={data?.predictImage.nutrients.fat.toString()}
            />
            <Item
              title="Reference"
              content={data?.predictImage.nutrients.referenceWeight}
            />
          </div>
        </>
      )}
    </StyledApp>
  );
};

export function App() {
  return (
    <ApolloProvider client={client}>
      <Prediction />
    </ApolloProvider>
  );
}

export default App;
