import * as actionTypes from './actionTypes';

/** 
 * Action creators
*/

// Increment
export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
}

// Decrement
export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
}

// Add 5
export const addFive = (value) => {
  return {
    type: actionTypes.ADD_FIVE,
    value: value,
  };
}

// Substract 5
export const substractFive = (value) => {
  return {
    type: actionTypes.SUBSTRACT_FIVE,
    value: value,
  };
}