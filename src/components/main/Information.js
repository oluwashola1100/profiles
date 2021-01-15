import React, { useState } from "react";

import InformationItem from "./InformationItem";

const tabItems = [
  {
    id: 1,
    title: "Contact",
    content: "step 1 content",
  },
  {
    id: 2,
    title: "Other",
    content: "step 2 content",
  },
];

const Information = ({ ...item }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="wrapper">
      <div className="tabs">
        {tabItems.map(({ id, title }) => (
          <InformationItem
            key={id}
            title={title}
            onItemClicked={() => setActive(id)}
            isActive={active === id}
          />
        ))}
      </div>

      <div className="content">
        {tabItems.map(({ id, content }) => {
          return active === id && id === 1 ? (
            <ul>
              <li>{item.Email}</li>
              <li>{item.PhoneNumber}</li>
              <li>{item.DomainName}</li>
              <li>{item.URL}</li>
            </ul>
          ) : active === id && id === 2 ? (
            <ul>
              <li>{item.Gender}</li>
              <li>{item.Latitude}</li>
              <li>{item.Longitude}</li>
              <li>{item.MacAddress}</li>
            </ul>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};

export default Information;
