import {
  REQUESTING_CONDITIONS,
  RECEIVED_CONDITIONS,
  RECEIVED_CONDITIONS_FAILURE
} from "../actions/conditions";

export const initialState = {
  isRequesting: false,
  conditions: [],
  hasError: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTING_CONDITIONS:
      return { ...state, isRequesting: true };
    case RECEIVED_CONDITIONS:
      return { ...state, isRequesting: false, conditions: action.payload };
    case RECEIVED_CONDITIONS_FAILURE:
      return { ...state, isRequesting: false, hasError: true };
    default:
      return state;
  }
};

export default rootReducer;
