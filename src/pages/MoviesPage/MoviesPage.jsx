import { useEffect, useState } from "react";
import { requestMovies } from "../../requests-API";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import MovieList from "../../components/MovieList/MovieList";
import { Routes, Route, NavLink } from "react-router-dom";

export default function MoviesPage() {
  const [moviesRequest, setMoviesRequest] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [errorMessage, setErrorMessage] = useState(false);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);

  const handleSubmit = (text) => {
    setMoviesRequest([]);
    setPage(1);
    setSearchText(text);
  };

  console.log(moviesRequest);

  useEffect(() => {
    async function request() {
      try {
        if (searchText === "") {
          return;
        }
        setLoader(true);
        setErrorMessage(false);
        const data = await requestMovies(searchText, page);
        console.log(data.data.results);
        setTotalNumberOfPages(data.data.total_pages);
        setMoviesRequest((prevImages) => [...prevImages, ...data.data.results]);
      } catch (error) {
        setErrorMessage(true);
      } finally {
        setLoader(false);
      }
    }
    request();
  }, [searchText, page]);

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      {errorMessage && <ErrorMessage />}
      <SearchBar handleSubmit={handleSubmit} />
      {loader && <Loader />}
      <MovieList homeRequest={moviesRequest} />
      {page < totalNumberOfPages && (
        <LoadMoreBtn onClick={handleClick}>Load more</LoadMoreBtn>
      )}
    </>
  );
}
