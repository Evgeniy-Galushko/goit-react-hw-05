import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { requestHome } from "../../requests-API";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import { requestMoviesId } from "../../requests-API";

export default function Home() {
  const [homeRequest, setHomeRequest] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loader, setLoader] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    async function request() {
      try {
        setLoader(true);
        setErrorMessage(false);
        setHomeRequest([]);
        const data = await requestHome();
        console.log(data.data.results);
        setHomeRequest(data.data.results);
      } catch (error) {
        setErrorMessage(true);
      } finally {
        setLoader(false);
      }
    }
    request();

    async function requestMovie() {}
  }, []);

  const movie = requestMoviesId();

  return (
    <div>
      {loader && <Loader />}
      {errorMessage && <ErrorMessage />}
      {homeRequest.length > 0 && (
        <MovieList homeRequest={homeRequest} movie={movie} />
      )}
    </div>
  );
}
