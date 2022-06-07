import {gql} from '@apollo/client';

const KNOW = gql`
  query TracksForHome {
    tracksForHome {
      id
      title
      author {
        photo
        name
      }
    }
  }
`;

export {KNOW};
