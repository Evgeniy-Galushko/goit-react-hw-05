// import { useState, useEffect } from "react";
import { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { MovieCast } from "./MovieCast/MovieCast";
import { MovieReviews } from "./MovieReviews/MovieReviews";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const NotFound = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);

function App() {
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
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
