import React, { useState, useEffect } from "react";
import axios from "axios";
// import ReactPaginate from "react-paginate";

import "./App.css";
import ProfileGrid from "./components/main/ProfileGrid";

const App = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const result = await axios(`http://api.enye.tech/v1/challenge/records`);
      // console.log(result.data.records.profiles);
      const results = result.data.records.profiles;
      // console.log(results);
      setItems(results);
    };

    fetchProfiles();
  }, []);

  useEffect(() => {
    setFilteredProfiles(
      items.filter((item) =>
        item.FirstName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, items]);

  return (
    <div className="main">
      <div className="header">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="cards">
        {filteredProfiles.map((item) => (
          <ProfileGrid {...item} />
        ))}
      </div>
    </div>
  );
};

export default App;
