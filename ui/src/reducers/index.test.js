import rootReducer, { initialState } from "./";

describe("rootReducer", () => {
  it("should handle REQUESTING_CONDITIONS", () => {
    const state = rootReducer(initialState, {
      type: "REQUESTING_CONDITIONS"
    });
    expect(state).toEqual({
      conditions: [],
      hasError: false,
      isRequesting: true
    });
  });

  it("should handle  RECEIVED_CONDITIONS", () => {
    const state = rootReducer(initialState, {
      type: "RECEIVED_CONDITIONS"
    });
    expect(state).toEqual({
      conditions: [],
      hasError: false,
      isRequesting: false
    });
  });

  it("should handle RECEIVED_CONDITIONS_FAILURE", () => {
    const state = rootReducer(initialState, {
      type: " RECEIVED_CONDITIONS_FAILURE"
    });
    expect(state).toEqual({
      conditions: [],
      hasError: false,
      isRequesting: false
    });
  });

  it("should handle default state", () => {
    const state = rootReducer(initialState, {});
    expect(state).toEqual({
      conditions: [],
      hasError: false,
      isRequesting: false
    });
  });
});
