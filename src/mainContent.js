import { useState } from "react";
import { useLazyLoadQuery } from "react-relay/hooks";
import { KeywordPullDown } from "./component/keywordPullDown";
import RepositoryName from "./graphQl/RepositoryName";

const MainContent = () => {
  const [keyword, setKeyword] = useState("react");
  const data = useLazyLoadQuery(
    RepositoryName,
    { query: `${keyword} in:readme` },
    { fetchPolicy: "store-and-network" }
  );

  return (
    <div className="container">
      <KeywordPullDown value={keyword} onSelected={(v) => setKeyword(v)} />
      <ul className="list-group">
        {data.search.nodes.map((r, i) => (
          <li key={i}>
            <a href={r.url}>{r.url}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainContent;
