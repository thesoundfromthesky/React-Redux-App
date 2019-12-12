import {
  GET_RANDOM_QUOTE_START,
  GET_RANDOM_QUOTE_SUCCESS,
  GET_RANDOM_QUOTE_FAIL
} from "./quote-garden.actions";

const initialState = {
  _id: "",
  quoteText: "",
  quoteAuthor: "",
  isLoading: false,
  error: ""
};

export function quoteGardenReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_RANDOM_QUOTE_START:
      return { ...state, isFetching: true };
    case GET_RANDOM_QUOTE_SUCCESS:
      return { ...payload, error: "", isFetching: false };
    case GET_RANDOM_QUOTE_FAIL:
      return { ...state, error: payload, isFetching: false };
    default:
      return state;
  }
}
