import React, { useEffect, useState } from 'react';
import API from '../../../API';
import PropTypes from 'prop-types';

import UserCard from '../../ui/userCard';
import QualitiesCard from '../../ui/qualitiesCard';
import MeetingsCard from '../../ui/meetingsCard';
import Comments from '../../ui/comments';
// import Comments from '../../ui/comments';

const UserPage = ({ userId }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    API.users.getById(userId).then((data) => setUser(data));
  }, []);

  if (user) {
    return (
      <div className="container">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <UserCard user={user} />
            <QualitiesCard data={user.qualities} />
            <MeetingsCard value={user.completedMeetings} />
          </div>
          <div className="col-md-8">
            <Comments />

          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default UserPage;

UserPage.propTypes = {
  userId: PropTypes.string
};

// import React, { useEffect, useState } from 'react';
// import API from '../../../API';
// import PropTypes from 'prop-types';
// import Qualities from '../../ui/qualities';
// import { useNavigate } from 'react-router-dom';

// const UserPage = ({ userId }) => {
//   const [user, setUser] = useState();

//   useEffect(() => {
//     API.users.getById(userId).then((data) => setUser(data));
//   }, []);

//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(`/users/${userId}/edit`);
//   };

//   if (user) {
//     return (
//       <>
//         <h1>Имя: {user.name}</h1>
//         <h2>Профессия: {user.profession.name}</h2>
//         <h2>Email: {user.email}</h2>
//         <h2>Пол: {user.sex}</h2>
//         <Qualities qualities={user.qualities} />
//         <h4>Всего встреч: {user.completedMeetings}</h4>
//         <h2>Оценка: {user.rate}</h2>
//         <button onClick={handleClick}>изменить</button>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <div>Loading...</div>
//       </>
//     );
//   }
// };

// export default UserPage;

// UserPage.propTypes = {
//   userId: PropTypes.string
// };
