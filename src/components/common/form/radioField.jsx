import React from 'react';
import PropTypes from 'prop-types';

const RadioFeild = ({ options, name, onChange, value, label }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  // console.log('radio options',options);
  // console.log('radio value', value);
  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <div>
        {options.map((option) => (
          <div
            className="form-check form-check-inline"
            key={option.name + '_' + option.value}
          >
            <input
              className="form-check-input"
              type="radio"
              name={name}
              id={option.name + '_' + option.value}
              checked={option.value.toLowerCase() === value.toLowerCase()}
              value={option.value}
              onChange={handleChange}
            />
            <label
              htmlFor={option.name + '_' + option.value}
              className="form-check-label"
            >
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

RadioFeild.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string
};

export default RadioFeild;
