import React from "react";

export default function Header({ user }) {
  return (
    <header>
      <div className="dateHeader">
        <h1>Friday, February 5, 2021</h1>
      </div>

      <div className="user">
        <img
          src={user.avatar}
          className="userAvatar"
          alt="sample avatar illustration"
        ></img>
        <h2>{user.name}</h2>
      </div>
    </header>
  );
}
