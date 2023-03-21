import React from "react";

const userinfo = ({ user }) => {
  return (
    <>
      <div className="info_container user" key={user.ID}>
        <div className="id">{user.ID}</div>
        <div className="name top">{user.FirstNameLastName}</div>
        <div className="email top">{user.EmailAddress}</div>
        <div className="gender top">{user.Phone}</div>
        <div className="gender top">{user.Company}</div>
      </div>
    </>
  );
};

export default userinfo;
