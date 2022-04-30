import {gql} from '@apollo/client';
export const LOGIN_WITH_EMAIL_MUTATION = gql`
  mutation LoginWithEmail($email: String!, $password: String!) {
    loginWithEmail(email: $email, password: $password) {
      tokens {
        access {
          token
          expires
        }
        refresh {
          token
          expires
        }
      }
      user {
        id
        firstname
        lastname
        email
      }
    }
  }
`;

export const LOGIN_WITH_PHONE_MUTATION = gql`
  mutation LoginWithTel($tel: String!, $password: String!) {
    loginWithTel(tel: $tel, password: $password) {
      user {
        id
        firstname
        lastname
        email
      }
      tokens {
        access {
          expires
          token
        }
        refresh {
          token
          expires
        }
      }
    }
  }
`;
