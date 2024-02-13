import React from 'react';

const Quality = ({...qual}) => {
  // console.log(qual);
  return (
    <span key={qual._id} className={'badge m-1 bg-' + qual.color}>
      {qual.name}
    </span>
  );
};

export default Quality;
