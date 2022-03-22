import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="px-4 py-3 text-xl border border-b-gray-200 text-gray-500">
      <nav className="flex items-center justify-between ">
        <div>
          <Link to="/">
            <div className="border border-gray-200 rounded-xl px-3 py-1">
              Watchlist
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-5 sm:gap-10 justify-around">
          <Link to="/watched">
            <div className="border border-gray-200 rounded-xl px-3 py-1">
              Watched
            </div>
          </Link>
          <Link to="/add">
            <div className="border border-gray-200 rounded-xl px-3 py-1">
              Add
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
