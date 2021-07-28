import { useQuery } from "@apollo/client";
import { useState } from "react";
import { KeywordPullDown } from "./component/keywordPullDown";
import { repositoryQuery } from "./graphQl/query";

function MainContent() {
  const [keyword, setKeyword] = useState("react");
  // 独自にカスタムフックを使ってもできることはできる
  // const { repositories } = useRepositories();

  // useQueryカスタムフックが用意されているのでそっちを使う
  console.log(keyword);
  const { loading, data } = useQuery(repositoryQuery(keyword));

  return (
    <div className="container">
      <KeywordPullDown value={keyword} onSelected={(v) => setKeyword(v)} />
      <ul className="list-group">
        {loading && "..."}
        {!loading &&
          data.search.nodes.map((r, i) => (
            <li key={i} className="list-group-item">
              <a href={r.url}>{r.url}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MainContent;
