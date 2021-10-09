import { AnyAction } from 'redux'

// Initial state
export type MainState = {
  readonly appCounter: number;
};

const initialState: MainState = {
  appCounter: 0,
};

// Actions
const INCREMENT_APP_COUNTER = 'MainState/INCREMENT_APP_COUNTER';

// Action creators
export function incrementAppCounter(): AnyAction {
  return {
      type: INCREMENT_APP_COUNTER,
  };
}

// Reducer
export default function MainReducer(state: MainState = initialState, action: AnyAction) {
  switch (action.type) {
    case INCREMENT_APP_COUNTER:
      return Object.assign({}, state, {
        appCounter: state.appCounter + 1,
      });
    default:
      return state;
  }
}