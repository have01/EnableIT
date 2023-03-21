import React, { useEffect, useState } from "react";
import Userlist from "../components/userlist";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [userperPage, setuserperPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(
      `https://give-me-users-forever.vercel.app/api/users/${userperPage}/next`
    );
    const data = await response.json();
    setUsers(data.users.splice(0, 10));
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [userperPage]);

  const handleNextClick = () => {
    setuserperPage(userperPage + 10);
  };

  const handleBackClick = () => {
    if (userperPage >= 10) {
      setuserperPage(userperPage - 10);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Userlist
      handleNextClick={handleNextClick}
      users={users}
      handleBackClick={handleBackClick}
    />
  );
};

export default Home;
