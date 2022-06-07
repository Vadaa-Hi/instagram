import {gql} from '@apollo/client';

const login = gql`
  mutation login(
    $phoneNumber: String
    $password: String!
    $email: String!
    $deviceToken: String
  ) {
    login(
      phoneNumber: $phoneNumber
      password: $password
      email: $email
      deviceToken: $deviceToken
    )
  }
`;
const usersUpdate = gql`
  mutation usersUpdate(
    $_id: String!
    $phoneNumber: String
    $firstName: String
    $lastName: String
  ) {
    usersUpdate(
      _id: $_id
      firstName: $firstName
      lastName: $lastName
      phoneNumber: $phoneNumber
    ) {
      _id
      additionInfo {
        bonus
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

const usersChangePassword = gql`
  mutation usersChangePassword(
    $currentPassword: String!
    $newPassword: String!
  ) {
    usersChangePassword(
      currentPassword: $currentPassword
      newPassword: $newPassword
    ) {
      _id
    }
  }
`;

const inviteUser = gql`
  mutation inviteUser($email: String, $phoneNumber: String) {
    inviteUser(email: $email, phoneNumber: $phoneNumber)
  }
`;

export {usersUpdate, usersChangePassword, inviteUser, login};
