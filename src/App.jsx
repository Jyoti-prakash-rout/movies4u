import { useState } from "react";

import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";
function App() {
   const [movies, setMovies] = useState([]);
  return (
    <>
      <div className="w-full max-w-8xl font-mono">
        <div className="app">
          <Navbar setMovies={setMovies} />
          <main>
            <MovieList movies={movies} setMovies={setMovies} />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
 