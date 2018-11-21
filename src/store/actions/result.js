import * as actionTypes from './actionTypes';

// Store result
const saveResult = (value) => {
  return {
    type: actionTypes.STORE_RESULT,
    value: value,
  };
}

export const storeResult = value => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // const oldCounter = getState().ctr.counter;
      // console.log('oldCounter', oldCounter);
      
      dispatch(saveResult(value));
    }, 1000);
  }
}

// Delete result
export const deleteResult = id => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: id,
  };
}