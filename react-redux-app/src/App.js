import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getRandomQuote } from "./store";

function App() {
  const data = useSelector(state => state.quoteGardenReducer);
  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomQuote());
  }, [dispatch]);

  return <div className="App"></div>;
}

export default App;
