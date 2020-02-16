export const REQUESTING_CONDITIONS = "REQUESTING_CONDITIONS";
export const RECEIVED_CONDITIONS = "RECIEVED_CONDTIONS";
export const RECEIVED_CONDITIONS_FAILURE = "RECIEVED_CONDTIONS_FAILURE";
export const API_URL = "http://localhost:8080";

export const fetchConditions = () => async dispatch => {
  dispatch({ type: REQUESTING_CONDITIONS });
  try {
    const response = await fetch(`${API_URL}/conditions`);
    const { conditions } = await response.json();
    dispatch({ type: RECEIVED_CONDITIONS, payload: conditions });
  } catch (e) {
    dispatch({ type: RECEIVED_CONDITIONS_FAILURE });
  }
};
