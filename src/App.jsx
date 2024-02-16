import React from 'react';
import Users from './layouts/users';
import NavBar from './components/ui/navBar';
import MainPage from './layouts/mainPage';
import Login from './layouts/login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/users/:userId?/:edit?" element={<Users />} />
        <Route path="/login/:type?" element={<Login />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
