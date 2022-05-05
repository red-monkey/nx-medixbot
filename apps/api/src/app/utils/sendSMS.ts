import * as twilio from 'twilio';
import { config } from '../configs';

export const sendSMS = async (phoneNumber: string) => {
  const client = twilio(config.twilio.accountSID, config.twilio.authToken);
  return await client.messages.create({
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    from: '+19804093199',
    to: phoneNumber,
  });
};
