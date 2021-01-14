import React, { useState } from "react";

const Search = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <input
      value={keyword}
      placeholder={"search profile"}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};
export default Search;
