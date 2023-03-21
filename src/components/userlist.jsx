import React from "react";
import "../style/userlist.css";
import UserInforamtion from "./userinfo";

const userlist = ({ handleNextClick, users, handleBackClick }) => {
  return (
    <>
      <div className="userlist">
        <div className=" header user">
          <div className="id">ID</div>
          <div className="name top">Name</div>
          <div className="email top">EmailAddress</div>
          <div className="gender top">Phone</div>
          <div className="gender top">Company</div>
        </div>
        {users.map((user, index) => (
          <UserInforamtion user={user} key={index} />
        ))}
        <div className="handle_buttons">
          <button onClick={handleBackClick} className="prev_button">
            &#8249;
          </button>
          <button onClick={handleNextClick} className="next_button">
            &#8250;
          </button>
        </div>
      </div>
    </>
  );
};

export default userlist;
