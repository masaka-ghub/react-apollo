import graphql from "babel-plugin-relay/macro";

const query = graphql`
  query RepositoryNameQuery($query: String!) {
    search(type: REPOSITORY, query: $query, last: 20) {
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

export default query;
