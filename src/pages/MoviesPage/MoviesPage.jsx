import { useEffect, useState } from "react";
import { requestMovies } from "../../requests-API";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

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

  console.log(searchText);

  useEffect(() => {
    async function request() {
      try {
        if (searchText === "") {
          return;
        }
        setLoader(true);
        const data = await requestMovies(searchText, page);
        console.log(data);
        setMoviesRequest(data.data.results);
        setTotalNumberOfPages(data);
      } catch (error) {
        console.log(error);
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
      {page < totalNumberOfPages && (
        <LoadMoreBtn onClick={handleClick}>Load more</LoadMoreBtn>
      )}
    </>
  );
}
