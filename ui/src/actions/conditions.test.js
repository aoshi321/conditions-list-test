import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  fetchConditions,
  REQUESTING_CONDITIONS,
  RECEIVED_CONDITIONS,
  RECEIVED_CONDITIONS_FAILURE,
  API_URL
} from "./conditions";
import fetchMock from "fetch-mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const data = {
  conditions: [
    {
      snippet:
        "Alzheimer's disease is the most common cause of dementia. Dementia is a group of symptoms associated with a decline in the way your brain functions, affecting your memory and the way you behave.",
      label: "Alzheimer's disease",
      synonyms: ["AD", "Alzheimer disease", "Alzheimers disease"],
      keywords: ["Alzheimer's disease", "dementia"],
      image:
        "http://assets.your.md/conditions/alzheimers-disease/card/alzheimers-disease-male-card.jpg"
    }
  ]
};

describe("Conditions actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("Should successfully get conditions", () => {
    fetchMock.mock(`${API_URL}/conditions`, {
      body: data
    });

    const expectedActions = [
      { type: REQUESTING_CONDITIONS },
      {
        type: RECEIVED_CONDITIONS,
        payload: data.conditions
      }
    ];
    const store = mockStore({});

    return store.dispatch(fetchConditions()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should dispatch ' RECEIVED_CONDITIONS_FAILURE' action if request fails ", () => {
    fetchMock.mock(`${API_URL}/conditions`, 500);

    const expectedActions = [
      { type: REQUESTING_CONDITIONS },
      {
        type: RECEIVED_CONDITIONS_FAILURE
      }
    ];
    const store = mockStore({});

    return store.dispatch(fetchConditions()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
