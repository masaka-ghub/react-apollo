import { usePreloadedQuery } from "react-relay/hooks";
import RepositoryName from "./graphQl/RepositoryName";

const RepositoryList = ({ queryReference }) => {
  const data = usePreloadedQuery(RepositoryName, queryReference);

  return (
    <ul className="list-group">
      {data.search.nodes.map((r, i) => (
        <li key={i}>
          <a href={r.url}>{r.url}</a>
        </li>
      ))}
    </ul>
  );
};

export default RepositoryList;
