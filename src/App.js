import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import ProfileGrid from "./components/main/ProfileGrid";
import Header from "./components/header/Header";
import Search from "./components/header/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchProfiles = async () => {
      const result = await axios(`http://api.enye.tech/v1/challenge/records`);
      // console.log(result.data.records.profiles);
      setItems(result.data.records.profiles);
    };

    fetchProfiles();
  }, []);

  const updateInput = async (input) => {
    const filtered = items.filter((item) => {
      return item.FirstName.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    items(filtered);
  };

  return (
    <div className="main">
      {/* {console.log(items)} */}
      <Search input={input} onChange={updateInput} />
      <ProfileGrid items={items} />
    </div>
  );
};

export default App;
