export const GET_RANDOM_QUOTE_START = "GET_RANDOM_QUOTE_START";
export const GET_RANDOM_QUOTE_SUCCESS = "GET_RANDOM_QUOTE_SUCCESS";
export const GET_RANDOM_QUOTE_FAIL = "GET_RANDOM_QUOTE_FAIL";

export const getRandomQuoteStart = () => ({ type: GET_RANDOM_QUOTE_START });
export const getRandomQuoteSuccess = data => ({
  type: GET_RANDOM_QUOTE_SUCCESS,
  payload: data
});
export const getRandomQuoteFail = data => ({
  type: GET_RANDOM_QUOTE_FAIL,
  payload: data
});
