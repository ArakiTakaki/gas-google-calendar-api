export const INCREMENT = "INCREMENT";
export const increment = () => ({ type: INCREMENT });

export const DECREMENT = "DECREMENT";
export const decrement = () => ({ type: DECREMENT });

export const SET_NAME_ACTION = "SET_NAME_ACTION";
export const setNameAction = name => ({ type: SET_NAME_ACTION, payload: name });

export const INCREMENT_REQUEST = "INCREMENT_REQUEST";
export const incrementRequest = () => ({ type: INCREMENT_REQUEST });

export const INCREMENT_RESPONSE = "INCREMENT_RESPONCE";
export const incrementResponse = number => ({
  type: INCREMENT_RESPONSE,
  payload: number
});

export const PROGRESS_START = "PROCESSING_START";
export const progressStart = () => ({ type: PROGRESS_START });

export const PROGRESS_END = "PROCESSING_END";
export const progressEnd = () => ({ type: PROGRESS_END });
