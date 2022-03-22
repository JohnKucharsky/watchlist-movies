import React, { useContext } from "react";
import { GlobalContext } from "./../context/GlobalScope";

export default function Card({ item }) {
  const { addMovieToWatchlist, watchlist, watched, addMovieToWatched } =
    useContext(GlobalContext);

  let storedMovie = watchlist.find((i) => i.id === item.id);
  let storedMovieWatched = watched.find((i) => i.id === item.id);

  const watchlistDisabled = storedMovie ? true : false;
  const watchedDisabled = storedMovieWatched ? true : false;
  return (
    <div className="mx-auto mt-5">
      {item.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt=""
        />
      ) : (
        <img src="https://picsum.photos/500/750" alt="" />
      )}
      <div className="p-2">
        <div className="text-gray-900 text-xl"> {item.title}</div>
        <div className="text-gray-600 text-sm">
          {" "}
          {item.release_date && item.release_date.slice(0, 4)}{" "}
        </div>
        <button
          disabled={watchlistDisabled}
          onClick={() => addMovieToWatchlist(item)}
          className="mt-2 w-full bg-teal-600 disabled:bg-gray-400 text-white font-semibold rounded-lg shadow hover:shadow-lg hover:scale-95 transition-all py-2 text-lg"
        >
          {watchlistDisabled ? "Added to Watchlist" : "Add to Watchlist"}
        </button>
        <button
          disabled={watchedDisabled}
          onClick={() => addMovieToWatched(item)}
          className="mt-2 w-full bg-teal-600 disabled:bg-gray-400 text-white font-semibold rounded-lg shadow hover:shadow-lg hover:scale-95 transition-all py-2 text-lg"
        >
          {watchedDisabled ? "Added to Watched" : "Add to Watched"}
        </button>
      </div>
    </div>
  );
}
