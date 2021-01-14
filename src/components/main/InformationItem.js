import React from "react";

const InformationItem = ({ title, onItemClicked, isActive }) => {
  return (
    <div
      className={isActive ? "tabitem" : "tabitem tabitem--inactive"}
      onClick={onItemClicked}
    >
      <p className="tabitem__title">{title}</p>
    </div>
  );
};

export default InformationItem;
