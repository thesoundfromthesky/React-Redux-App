import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getRandomQuote } from "./store";

import { ShootingStar } from "./components/ShootingStar";
import { Spinner } from "./components/Spinner";

function App() {
  const { quoteText, quoteAuthor, isFetching } = useSelector(
    state => state.quoteGardenReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomQuote());
  }, [dispatch]);

  return (
    <div className="App">
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          <div className="quoteText">{quoteText}</div>
          <div className="quoteAuthor">{quoteAuthor}</div>
        </>
      )}
      <ShootingStar />
    </div>
  );
}

export default App;
