import {
  getRandomQuoteStart,
  getRandomQuoteSuccess,
  getRandomQuoteFail
} from "./quote-garden.actions";

export const getRandomQuote = () => async dispatch => {
  dispatch(getRandomQuoteStart());

  try {
    const response = await fetch(
      "https://quote-garden.herokuapp.com/quotes/random"
    );
    if (response.status !== 200) {
      console.err(`Error ${response.status}`);
      return;
    }

    const data = await response.json();

    dispatch(getRandomQuoteSuccess(data));
    
  } catch (err) {

    console.err(`Fetch Error ${err}`);
    dispatch(getRandomQuoteFail(err));
  }
};
