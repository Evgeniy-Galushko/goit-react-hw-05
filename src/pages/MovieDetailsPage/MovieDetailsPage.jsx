import s from "./MovieDetailsPage.module.css";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { useEffect, useRef, useState } from "react";
import { requestMoviesId } from "../../requests-API";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";

export default function MovieDetailsPage() {
  const [errorMessage, setErrorMessage] = useState(false);
  const [loader, setLoader] = useState(false);

  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/movies");

  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    async function movieDetail() {
      try {
        setLoader(true);
        const data = await requestMoviesId(movieId);
        setMovie(data);
        console.log(data);
      } catch (error) {
        setErrorMessage(true);
      } finally {
        setLoader(false);
      }
    }

    movieDetail();
  }, [movieId]);

  const defaultImg = "../../img/000.jpg";

  console.log(movie);

  return (
    <>
      <NavLink to={backLinkHref.current} className={s.navlink}>
        <GoArrowLeft size="20px" className={s.arrow} />
        Go bac
      </NavLink>
      <div className={s.divPages}>
        {errorMessage && <ErrorMessage />}
        {loader && <Loader />}
        {movie !== null && (
          <>
            <div>
              <img
                className={s.divPagesImg}
                src={
                  movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/w220_and_h330_face${movie.backdrop_path}`
                    : defaultImg
                }
              />
            </div>
            <div className={s.divPagesDiv}>
              <h2 className={s.hTwo}>
                {movie.original_title}({movie.release_date.slice(0, 4)})%
              </h2>
              <p className={s.paragraph}>
                User score: {movie.popularity.toFixed()}%
              </p>
              <h3>Overview</h3>
              <p className={s.paragraph}>{movie.overview}</p>
              <h3 className={s.hThree}>Genres</h3>
              <ul className={s.genres}>
                {movie.genres.map(({ id, name }) => {
                  return (
                    <li key={id}>
                      <p className={s.paragraph}>{name}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </div>
      <div className={s.divPagesCast}>
        <h2 className={s.hTwo}>Additional information</h2>
      </div>
    </>
  );
}
