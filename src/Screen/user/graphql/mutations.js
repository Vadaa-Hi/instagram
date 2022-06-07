import {gql} from '@apollo/client';

const notificationsMarkAsRead = gql`
  mutation ($_ids: [String], $contentTypeId: String) {
    notificationsMarkAsRead(_ids: $_ids, contentTypeId: $contentTypeId)
  }
`;

export {notificationsMarkAsRead};
