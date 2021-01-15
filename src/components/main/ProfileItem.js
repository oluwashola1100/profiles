import React from "react";
import Information from "./Information";

const ProfileItem = ({ ...item }) => {
  return (
    <div className="card">
      <div className="top">
        <div className="front">
          <div className="logo">{item.PaymentMethod}</div>
          <div className="chip">
            <div className="chip-line"></div>
            <div className="chip-line"></div>
            <div className="chip-line"></div>
            <div className="chip-line"></div>
            <div className="chip-main"></div>
          </div>
          <div className="card-number">{item.CreditCardNumber}</div>
          <div className="card-holder">{`${item.FirstName} ${item.LastName}`}</div>
          <div className="master">{item.CreditCardType}</div>
        </div>
      </div>
      <Information {...item} />
    </div>
  );
};

export default ProfileItem;
