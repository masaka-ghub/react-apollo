import { useState } from "react";

export const KeywordPullDown = ({ keyword, onSelected }) => {
  const [selected, setSelected] = useState(keyword);

  return (
    <select
      value={selected}
      onChange={(e) => {
        setSelected(e.target.value);
        onSelected(e.target.value);
      }}>
      <option value="react">React</option>
      <option value="vue">Vue</option>
      <option value="angular">Angular</option>
    </select>
  );
};
