import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  counter: 0
};

const reducerCounter = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // const newState = Object.assign({}, state);
      // newState.counter = state.counter + 1;
      // return newState;
      return updateObject(state, { counter: state.counter + 1 });
    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });

    case actionTypes.ADD_FIVE:
      return updateObject(state, { counter: state.counter + action.value });

    case actionTypes.SUBSTRACT_FIVE:
      return updateObject(state, { counter: state.counter - action.value });

    default:
      return state;
  }
};

export default reducerCounter;
