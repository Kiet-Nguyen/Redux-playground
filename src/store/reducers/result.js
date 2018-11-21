import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updatedResults = state.results.filter(result => result.id !== action.resultElId);
  return updateObject(state, { results: updatedResults });
}

const reducerResult = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(
        state, 
        {
          results: state.results.concat({
            id: new Date(),
            value: action.value
          })
        }
      );

    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
      
    default:
      return state;
  }
};

export default reducerResult;
