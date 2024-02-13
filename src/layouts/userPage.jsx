import React, { useEffect, useState } from "react";
// import React from 'react';

import API from "../API";
import PropTypes from "prop-types";
import QualitiesList from "../components/qualitiesList";
import { useNavigate } from "react-router-dom";

const UserPage = ({ userId }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    API.users.getById(userId).then((data) => setUser(data));
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/users");
  };

  if (user) {
    return (
      <>
        <h1>Имя: {user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <QualitiesList qualities={user.qualities} />
        <h4>Всего встреч: {user.completedMeetings}</h4>
        <h2>Оценка: {user.rate}</h2>
        <button onClick={handleClick}>все пользователи</button>
      </>
    );
  } else {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }
};

export default UserPage;

UserPage.propTypes = {
  userId: PropTypes.string
};
