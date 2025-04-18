import { useParams } from "react-router-dom";
import s from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { requestCast } from "../../requests-API";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";

export function MovieCast() {
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const [listOfActors, setListOfActors] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    async function movieCast() {
      try {
        setLoader(true);
        const data = await requestCast(movieId);
        setListOfActors(data.cast);
      } catch (error) {
        error;
        setErrorMessage(true);
      } finally {
        setLoader(false);
      }
    }

    movieCast();
  }, [movieId]);

  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";
  return (
    <>
      {errorMessage && <ErrorMessage />}
      {loader && <Loader />}
      <ul className={s.movieCast}>
        {listOfActors.map(
          ({ id, original_name, profile_path, name, character }) => {
            return (
              <li key={id} className={s.movieCastLi}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w220_and_h330_face${profile_path}`
                      : defaultImg
                  }
                  alt={original_name}
                  className={s.movieCastImg}
                />
                <h3 className={s.movieCastH}>Name: {name}</h3>
                <p className={s.movieCastP}>Role: {character}</p>
              </li>
            );
          }
        )}
      </ul>
    </>
  );
}
