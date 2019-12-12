import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomQuote } from "../store";
import { Spinner } from "./Spinner";
import "./QuoteGarden.css";

export function QuoteGarden() {
  const { quoteText, quoteAuthor, isFetching } = useSelector(
    state => state.quoteGardenReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomQuote());
  }, [dispatch]);

  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : (
        <div className="quote">
          <div className="quoteText">{quoteText}</div>
          <div className="quoteAuthor">{quoteAuthor}</div>
        </div>
      )}
    </>
  );
}
