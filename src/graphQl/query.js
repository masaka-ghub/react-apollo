import { gql } from "@apollo/client";

export const repositoryQuery = (keyword) => gql`
  {
      search(type: REPOSITORY, query: "${keyword} in:readme", last: 20) {
        repositoryCount
        nodes {
          ... on Repository {
            id
            url
            name
            description
            createdAt
          }
        }
      }
    }
`;
