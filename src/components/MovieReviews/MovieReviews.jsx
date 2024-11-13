import { useParams } from "react-router-dom";
import s from "./MovieReviews.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import { requestReviews } from "../../requests-API";

export function MovieReviews() {
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    async function movieReviews() {
      try {
        setLoader(true);
        const data = await requestReviews(movieId);
        setReviews(data.results);
        console.log(data.results);
      } catch (error) {
        error;
        setErrorMessage(true);
      } finally {
        setLoader(false);
      }
    }

    movieReviews();
  }, [movieId]);

  return (
    <>
      {errorMessage && <ErrorMessage />}
      {loader && <Loader />}
      {reviews.length > 0 ? (
        <ul className={s.reviewsUl}>
          {reviews.map(({ author, id, content }) => {
            return (
              <li key={id} className={s.reviewsLi}>
                <h3 className={s.reviewsH}>Author: {author}.</h3>
                <p className={s.reviewsP}>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={s.reviewsDiv}>
          <h3>We don`t have any reviews for this movie.</h3>
        </div>
      )}
    </>
  );
}
