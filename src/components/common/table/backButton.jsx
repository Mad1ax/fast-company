import React from 'react';
import { useLocation, useNavigate } from 'react-router';
const BackHistoryButton = () => {
  const location = useLocation();
  const navigate=useNavigate()
  const navigateString = location.pathname.slice(0,(location.pathname.length-5))
  return (
    <button className="btn btn-primary" onClick={()=>navigate(navigateString)}>
      <i className="bi bi-caret-left"></i>
      Назад
    </button>
  );
};

export default BackHistoryButton;
