import { Suspense, useEffect, useState } from "react";
import { useQueryLoader } from "react-relay/hooks";
import { KeywordPullDown } from "./component/keywordPullDown";
import RepositoryName from "./graphQl/RepositoryName";
import RepositoryList from "./repositoryList";

const MainContent = () => {
  const [keyword, setKeyword] = useState("react");

  const [queryReference, loadQuery, disposeQuery] = useQueryLoader(RepositoryName);

  useEffect(() => {
    loadQuery({ query: `${keyword} in:readme` }, { fetchPolicy: "store-or-network" });
    return () => {
      disposeQuery();
    };
  }, [loadQuery, disposeQuery, keyword]);

  return (
    <Suspense fallback={"Loading..."}>
      <div className="container">
        <KeywordPullDown value={keyword} onSelected={(v) => setKeyword(v)} />
        {queryReference != null ? <RepositoryList queryReference={queryReference} /> : null}
      </div>
    </Suspense>
  );
};

export default MainContent;
