import { useEffect, useState } from "react";
import { client } from "../graphQl/client";
import { reactRepositoryQuery } from "../graphQl/query";

export const useRepositories = () => {
  const [repositories, setRepositries] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const queryResult = await client.query({
        query: reactRepositoryQuery,
      });
      setRepositries(queryResult.data.search.nodes);
    };

    fetch();
  }, []);

  return { repositories };
};
