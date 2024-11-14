import s from "./MovieDetailsPage.module.css";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { useEffect, useRef, useState } from "react";
import { requestMoviesId } from "../../requests-API";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import VideoModal from "../../components/VideoModal/VideoModal";

export default function MovieDetailsPage() {
  const [errorMessage, setErrorMessage] = useState(false);
  const [loader, setLoader] = useState(false);

  const [videModal, setVideoModal] = useState(false);
  const [videoId, setVideoId] = useState(false);

  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkHref = useRef(location.state ?? `/movies`);
  // console.log(location.state.search);

  const { movieId } = useParams();

  useEffect(() => {
    async function movieDetail() {
      try {
        setLoader(true);
        const data = await requestMoviesId(movieId);
        setMovie(data);
      } catch (error) {
        error;
        setErrorMessage(true);
      } finally {
        setLoader(false);
      }
    }

    movieDetail();
  }, [movieId]);

  const handleClick = () => {
    setVideoModal(true);
    setVideoId(movieId);
  };

  function closeModal() {
    setVideoModal(false);
  }

  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  return (
    <>
      <NavLink to={backLinkHref.current} state={location} className={s.navlink}>
        <GoArrowLeft size="20px" className={s.arrow} />
        Go bac
      </NavLink>
      <VideoModal
        videoId={videoId}
        isOpen={videModal}
        onRequestClose={closeModal}
      />
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
              {
                <button onClick={handleClick} className={s.button}>
                  Trailer
                </button>
              }
            </div>
          </>
        )}
      </div>
      <div className={s.divPagesCast}>
        <h2 className={s.hTwo}>Additional information</h2>
        <ul>
          <li>
            <NavLink to={`/movies/${movieId}/cast`} className={s.navLink}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${movieId}/reviews`} className={s.navLink}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
