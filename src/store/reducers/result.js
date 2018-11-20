import * as actionTypes from '../actions/actions';

const initialState = {
  results: []
};

const reducerResult = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.value
        })
      };
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newResults = [...state.results];
      // newResults.splice(id, 1);
      const updatedResults = state.results.filter(result => result.id !== action.resultElId);
      return {
        ...state,
        results: updatedResults,
      };
    default:
      break;
  }

  return state;
};

export default reducerResult;
