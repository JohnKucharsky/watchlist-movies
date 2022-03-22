import React, { useContext } from "react";
import { GlobalContext } from "./../context/GlobalScope";

export default function Card({ item, type }) {
  const { moveToWatchlist, removeFromWatched } = useContext(GlobalContext);
  return (
    <div className="mx-auto mt-5 border border-gray-200 rounded-lg shadow">
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
          onClick={() => removeFromWatched(item.id)}
          className="mt-2 w-full bg-red-600 disabled:bg-gray-400 text-white font-semibold rounded-lg shadow hover:shadow-lg hover:scale-95 transition-all py-2 text-lg"
        >
          Remove
        </button>
        <button
          onClick={() => moveToWatchlist(item)}
          className="mt-2 w-full bg-yellow-600 disabled:bg-gray-400 text-white font-semibold rounded-lg shadow hover:shadow-lg hover:scale-95 transition-all py-2 text-lg"
        >
          Move to Watchlist
        </button>
      </div>
    </div>
  );
}
