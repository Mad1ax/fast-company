import React from 'react';
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    let phrase = '';
    if (number === 0) {
      phrase = `никто с тобой не тусанет`;
    } else if (number > 1 && number < 5) {
      phrase = `${number} человека тусанут с тобой`;
    } else {
      phrase = `${number} человек тусанёт с тобой`;
    }
    return phrase;
  };

  return (
    <>
    <h2>
      <span className={'m-1 badge bg-' + (length > 0 ? 'primary' : 'danger')}>
        {renderPhrase(length)}
      </span>
    </h2>
    </>
  );
};

export default SearchStatus;


SearchStatus.propTypes = {
 length: PropTypes.number,
};
