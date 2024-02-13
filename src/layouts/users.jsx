import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "./userPage";
import UsersList from "../components/usersList";

const Users = () => {
  const params = useParams();
  const { userId } = params;

//   console.log(useParams());
//   console.log(params);
//   console.log(userId);

  return <>{userId ? <UserPage userId={userId} /> : <UsersList />}</>;
  // return <h1>users</h1>
};

export default Users;
