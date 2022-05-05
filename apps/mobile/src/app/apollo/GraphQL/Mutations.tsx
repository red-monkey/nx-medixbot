import {gql} from '@apollo/client';
export const LOGIN_MUTATION = gql`
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    user {
      id
      fullName
      email
      tel
      gender
      userRole
      accountStatus
      registeredWith
      dateOfBirth
      country
      city
      state
      postCode
      languages
      membership
      profileImage
    }
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
  }
}
`;


export const REGISTER_MUTATION = gql`
mutation Register($data: IRegisterUser!) {
  register(data: $data) {
    user {
      id
      fullName
      email
      tel
      gender
      userRole
      accountStatus
      registeredWith
      dateOfBirth
      country
      city
      state
      postCode
      languages
      membership
      profileImage
    }
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
  }
}`