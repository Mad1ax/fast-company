import React from "react";
import Users from "./layouts/users";
import NavBar from "./components/navBar";
import MainPage from "./layouts/mainPage";
import LoginPage from "./layouts/loginPage";
// import UsersPage from "../layouts/usersPage";
import { Routes, Route } from "react-router-dom";
// import UsersList from "./components/usersList";
// import UserPage from "./layouts/userPage";

function App() {
  // const [data,setData]=useState([])
  // const dddd = [{name:1,id:1,},{name:2,id:2,},{name:3,id:3,},{name:4,id:4,},]

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/users/:userId?" element={<Users />} />
        {/* <Route path="/users/:usersId?" element={<UserPage />} /> */}
        {/* <Route path="*" element={<MainPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
