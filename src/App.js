import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

import "./App.css";
import ProfileGrid from "./components/main/ProfileGrid";

const App = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 20;

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
        item.FirstName.toLowerCase().includes(search.toLowerCase()) ||
          item.LastName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, items]);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;

  const pageCount = Math.ceil(items.length / PER_PAGE);

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
        {filteredProfiles.slice(offset, offset + PER_PAGE).map((item) => (
          <ProfileGrid {...item} />
        ))}
      </div>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
};

export default App;
