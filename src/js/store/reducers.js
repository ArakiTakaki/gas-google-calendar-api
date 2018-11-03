import * as Actions from "./actions";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case Actions.INCREMENT:
      return { ...state, number: state.number + 1 };
    case Actions.DECREMENT:
      return { ...state, number: state.number - 1 };
    case Actions.INCREMENT_RESPONSE:
      return { ...state, number: state.number + payload };
    case Actions.SET_NAME_ACTION:
      return { ...state, name: payload };
    case Actions.PROGRESS_START:
      return { ...state, progress: true };
    case Actions.PROGRESS_END:
      return { ...state, progress: false };
    default:
      return state;
  }
};

export default reducer;
