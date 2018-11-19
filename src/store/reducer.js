const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      };
    case 'ADD_FIVE':
      return {
        ...state,
        counter: state.counter + action.value
      };
    case 'SUBSTRACT_FIVE':
      return {
        ...state,
        counter: state.counter - action.value
      };
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: state.counter
        })
      };
    case 'DELETE_RESULT':
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

export default reducer;
