import { useState, useEffect } from "react";
import { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const NotFound = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);

function App() {
  // const [dataTopList, setDataTopList] = useState();

  return (
    <>
      <nav className="heder">
        <NavLink to="/" className="heder-nav">
          Home
        </NavLink>
        <NavLink to="/movies" className="heder-nav">
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading page...</div>}></Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
