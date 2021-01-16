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
              <li>
                <i class="bx bxs-envelope"></i>
                {item.Email}
              </li>
              <li>
                <i class="bx bxs-phone"></i>
                {item.PhoneNumber}
              </li>
              <li>
                <i class="bx bx-world"></i>
                {item.DomainName}
              </li>
              <li>
                <i class="bx bx-link"></i>
                {item.URL}
              </li>
            </ul>
          ) : active === id && id === 2 ? (
            <ul>
              <li>Gender: {item.Gender}</li>
              <li>Latitude: {item.Latitude}</li>
              <li>Longitude: {item.Longitude}</li>
              <li>MacAddress: {item.MacAddress}</li>
              <li>LastLogin: {item.LastLogin}</li>
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
