import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserCard = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation()

  const handleClick = () => {
    navigate(`${location.pathname}/edit`);
  };

  // console.log(user);
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <button
            className="position-absolute top-0 end-0 btn btn-danger btn-sm"
            onClick={handleClick}
          >
            <i className="bi bi-gear"></i>
          </button>
          <div className="d-flex flex-column align-items-center text-center position-relative">
            <img
              className="rounded-circle"
              width="150"
              src={`https://api.dicebear.com/7.x/personas/svg?seed=Charlie`}
            ></img>
            <div className="mt-3">
              <h4>{user.name}</h4>
              <p className="text-secondary mb-1">{user.profession.name}</p>
              <div className="text-muted">
                <i
                  className="bi bi-caret-down-fill text-primary"
                  role="button"
                ></i>
                <i className="bi bi-caret-up text-secondary" role="button"></i>
                <span className="ms-2">{user.rate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

UserCard.propTypes = {
  user: PropTypes.object
};

export default UserCard;
