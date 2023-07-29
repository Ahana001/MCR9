export const ActionTypes = {
  INITIAL_SET_SNACKS: "INITIAL_SET_SNACKS",
};

export const initialState = {};

export function DataReducer(state, action) {
  let result;
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ActionTypes.INITIAL_SET_SNACKS: {
      result = {
        ...state,
        snacks: action.payload.snacks,
      };
      break;
    }
  }
  return result;
}
