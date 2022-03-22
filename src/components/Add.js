import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Add() {
  const [query, setQuery] = useState("");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = query;
  }, [query]);
  function handleSubmit() {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=0dbbee5f733aec5889d2733410b5329b&language=en-US&query=${query}&page=1&include_adult=true`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.err) {
          setResults(data.results);
          setLoading(true);
        }
      });
  }
  return (
    <div>
      <div className=" w-80 bg-gray-100 rounded p-2 mx-auto mt-10">
        <form
          onSubmit={function (e) {
            e.preventDefault();
          }}
          className="flex text-gray-500"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full text-lg p-1 px-2 focus:outline-none"
          />
          <button
            onClick={() => handleSubmit()}
            className="px-2 border ml-2 rounded-lg shadow hover:shadow-sm"
          >
            Search
          </button>
        </form>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading &&
          results.map((item) => (
            <Card key={item.id} loading={loading} item={item} />
          ))}
      </div>
    </div>
  );
}
