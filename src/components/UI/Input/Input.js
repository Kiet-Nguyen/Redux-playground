import React from 'react';

import classes from './Input.module.css';

const Input = ({
  elementType,
  placeholder,
  labelName,
}) => {
  let inputElement = null;

  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          className={classes.InputElement}
          placeholder={placeholder}
        />
      );
      break;

    case 'textarea':
      inputElement = (
        <textarea
          className={classes.InputElement}
          placeholder={placeholder}
        />
      );
      break;

    case 'select':
      inputElement = (
        <select
          className={classes.InputElement}
          placeholder={placeholder}
        >

        </select>
      );
      break;
  
    default:
      inputElement = (
        <input
          className={classes.InputElement}
          placeholder={placeholder}
        />
      );
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>
        {labelName}
      </label>

      {inputElement}
    </div>
  );
}

export default Input;
