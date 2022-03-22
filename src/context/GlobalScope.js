import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};
// create context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  //   actions

  const addMovieToWatchlist = (item) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: item });
  };
  const removeFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: id });
  };
  const addMovieToWatched = (item) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: item });
  };
  // move to watchlist
  const moveToWatchlist = (item) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: item });
  };
  // remover from watched
  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  };
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
