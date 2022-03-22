import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./../context/GlobalScope";
import CardWatched from "./CardWatched";

export default function Watched() {
  const { watched } = useContext(GlobalContext);
  useEffect(() => {
    const titleWatchlist = () => {
      if (watched.length === 1) {
        return watched.length + " movie";
      }
      return watched.length + " movies";
    };
    document.title = titleWatchlist();
  }, [watched]);
  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {watched.length > 0 ? (
        watched.map((item) => <CardWatched key={item.id} item={item} />)
      ) : (
        <h1 className=" text-2xl text-center pt-10">Add movie to watched</h1>
      )}
    </div>
  );
}
