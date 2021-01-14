import React from "react";
import ProfileItem from "./ProfileItem";

const ProfileGrid = ({ items }) => {
  return (
    <div className="cards">
      {items.map((item) => {
        return (
          <>
            <ProfileItem item={item} />
          </>
        );
      })}
    </div>
  );
};

export default ProfileGrid;
