import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profileContainer">
      <img
        src="https://i0.wp.com/nevernoob.com/wp-content/uploads/2014/01/noob.jpg?fit=667%2C476&ssl=1&w=640"
        alt="Avatar"
        className="profilePic"
      />
      <span className="profile">
        <h4 className="profileInfo">Hi Reader,</h4>
        <p className="profileInfo">Here is your News!</p>
      </span>
    </div>
  );
}
