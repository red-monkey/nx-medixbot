import * as sgMail from '@sendgrid/mail';
import { config, logger } from '../configs';

const sendEmail = async (
  to: string,
  from: string,
  subject: string,
  text: string,
  html: string
) => {
  sgMail.setApiKey(config.email.sendGridAPIKey);
  const msg = {
    to,
    from,
    subject,
    text,
    html,
  };
  sgMail
    .send(msg)
    .then(() => {
      logger.info(`📧 Email Sent to ${to}`);
    })
    .catch((error) => {
      logger.warn(error);
    });
};

const sendResetPasswordEmail = async (to: string, newPassword: string) => {
  const subject = '🔐 Reset password';
  const text = `Dear user,
  Here your new password: ${newPassword}
  If you did not request any password resets, then please let us now.`;
  const html = `<p>Dear user,
  Here your new password: <b>${newPassword}</b>
  If you did not request any password resets, then please let us now.<p>`;
  await sendEmail(to, 'nodeApp', subject, text, html);
};

const sendVerificationEmail = async (to: string, token: string) => {
  const subject = 'Email Verification';
  const verificationEmailUrl = `${config.verificationEmailUrl}:${config.port}/api/auth/verify-email/${token}`;
  const text = `Dear user,
  To verify your email, click on this link: ${verificationEmailUrl}
  If you did not create an account, then ignore this email.`;
  const html = `<p>Dear user,
  To verify your email, click <a href="${verificationEmailUrl}">Here</a> <br>
  If you did not create an account, then ignore this email.`;
  await sendEmail(to, 'nodeApp', subject, text, html);
};

export default {
  sendEmail,
  sendResetPasswordEmail,
  sendVerificationEmail,
};
