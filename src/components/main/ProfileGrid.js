import React, { useState } from "react";
import ProfileItem from "./ProfileItem";

const ProfileGrid = ({ ...item }) => {
  return <ProfileItem {...item} />;
};

export default ProfileGrid;
