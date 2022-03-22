import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./../context/GlobalScope";
import CardWatchlist from "./CardWatchlist";

export default function Watchlist() {
  const { watchlist } = useContext(GlobalContext);
  useEffect(() => {
    const titleWatchlist = () => {
      if (watchlist.length === 1) {
        return watchlist.length + " movie";
      }
      return watchlist.length + " movies";
    };
    document.title = titleWatchlist();
  }, [watchlist]);
  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {watchlist.length > 0 ? (
        watchlist.map((item) => <CardWatchlist key={item.id} item={item} />)
      ) : (
        <h1 className=" text-2xl text-center pt-10">Add movie to watchlist</h1>
      )}
    </div>
  );
}
