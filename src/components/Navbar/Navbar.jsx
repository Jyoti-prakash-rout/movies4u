import React, { useEffect } from "react";
import { useState } from "react";

import "./Navbar.css";
import fire from "../../assets/fire.png";
import star from "../../assets/glowing-star.png";
import party from "../../assets/partying-face.png";

const Navbar = ({ setMovies }) => {
  const [search, setSearch] = useState("");

  const searchMovies = async () => {
    if (!search.trim()) return; // prevent empty search
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ef0aebe9c04e087721d23dcd90792cfb&query=${search}`
    );
    const data = await response.json();
    setMovies(data.results || []);
    setSearch("");
  };

  return (
    <>
      <nav className="navbar">
        <h1>Movies4u</h1>
        <div className="flex">
          <div className="mr-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Movies..."
              className="outline-none border-2 py-2 w-80 h-10 placeholder:text-amber-200 border-amber-400 rounded-md hover:border-amber-500"
            />
          </div>
          <div>
            <button
              onClick={searchMovies}
              className="h-10 bg-amber-400 text-white rounded-r-md cursor-pointer">
              Search
            </button>
          </div>
        </div>
        <div className="navbar_links">
          <a href="">
            Popular <img src={fire} alt="Fire Emoji" className="navbar_emoji" />
          </a>
          <a href="">
            Top Rated
            <img src={star} alt="Star Emoji" className="navbar_emoji" />
          </a>
          <a href="">
            Upcoming
            <img src={party} alt="Party Emoji" className="navbar_emoji" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
