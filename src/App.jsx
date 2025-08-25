import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
      <div className="w-full max-w-8xl">
        <div className="app">
          <Navbar />
          <main>
            <MovieList />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
 