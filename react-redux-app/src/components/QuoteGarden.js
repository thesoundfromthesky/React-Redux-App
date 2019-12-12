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

  useEffect(() => {
    const handle = setInterval(() => {
      dispatch(getRandomQuote());
    }, 8000);
    return () => {
      clearInterval(handle);
    };
  }, [dispatch]);

  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : (
        <div className="quote">
          <div className="quoteText">{quoteText}</div>
          <div className="quoteAuthor">{quoteAuthor && `-${quoteAuthor}`}</div>
        </div>
      )}
    </>
  );
}
