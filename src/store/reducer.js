const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  // Increment
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  // Decrement 
  if (action.type === 'DECREMENT') {
    return {
      ...state,
      counter: state.counter - 1
    };
  }
  // Add five 
  if (action.type === 'ADD_FIVE') {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  // Substract five 
  if (action.type === 'SUBSTRACT_FIVE') {
    return {
      ...state,
      counter: state.counter - action.value
    };
  }

  return state;
};

export default reducer;
