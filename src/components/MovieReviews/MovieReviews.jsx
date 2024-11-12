import { Link } from "react-router-dom";
import s from "./MovieReviews.module.css";

export function MovieReviews(id) {
  return (
    <>
      <Link to={`/movies/${id}/reviews`}>
        <ul>
          <li>
            <h2 className={s.h}>Reviews</h2>
          </li>
        </ul>
      </Link>
    </>
  );
}
