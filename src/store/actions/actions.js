export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_FIVE = 'ADD_FIVE';
export const SUBSTRACT_FIVE = 'SUBSTRACT_FIVE';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

/** 
 * Action creators
*/

// Increment
export const increment = () => {
  return {
    type: INCREMENT,
  };
}

// Decrement
export const decrement = () => {
  return {
    type: DECREMENT,
  };
}

// Add 5
export const addFive = (value) => {
  return {
    type: ADD_FIVE,
    value: value,
  };
}

// Substract 5
export const substractFive = (value) => {
  return {
    type: SUBSTRACT_FIVE,
    value: value,
  };
}

// Store result
export const storeResult = value => {
  return {
    type: STORE_RESULT,
    value: value,
  };
}

// Delete result
export const deleteResult = id => {
  return {
    type: DELETE_RESULT,
    resultElId: id,
  };
}