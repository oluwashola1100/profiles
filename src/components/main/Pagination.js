import React from "react";

const Pagination = ({ recordsPerPage, totalRecords, paginate }) => {
  const pageNumbers = [];
  let Numbers = totalRecords / recordsPerPage;

  for (let i = 1; i <= Math.ceil(Numbers); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="pagination">
      <li className="icon">
        <a href="#!">
          <i>chevron_left</i>
        </a>
      </li>
      {pageNumbers.map((number) => (
        <li key={number} style={{ marginLeft: "5px" }}>
          <button className="btn" onClick={() => paginate(number)}>
            {number}
          </button>
        </li>
      ))}
      <li className="icon">
        <a href="#!">
          <i>chevron_right</i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
