import { gql } from '@apollo/client';

const currentUser = gql`
  query {
    currentUser {
      _id
      additionInfo {
        bonus
        dealCount
      }
      lastName
      email
      phoneNumber
      avatar
      fullName
      firstName
      address
    }
  }
`;

const userDetail = gql`
  query userDetail($_id: String) {
    userDetail(_id: $_id) {
      _id
      additionInfo {
        bonus
        dealCount
      }
      lastName
      email
      phoneNumber
      avatar
      fullName
      firstName
      address
    }
  }
`;

const invitations = gql`
  query {
    invitations {
      _id
      email
      phoneNumber
      createdAt
      status
    }
  }
`;

export { currentUser, userDetail, invitations };
