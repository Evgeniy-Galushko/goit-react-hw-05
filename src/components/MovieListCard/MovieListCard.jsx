import s from "./MovieListCard.module.css";
import { Link, useLocation } from "react-router-dom";

export default function MovieListCard({ id, src, overview, title }) {
  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";
  const location = useLocation();
  return (
    <Link to={`/movies/${id}`} state={location}>
      <divn className={s.divs}>
        <img
          src={
            src
              ? `https://image.tmdb.org/t/p/w220_and_h330_face${src}`
              : defaultImg
          }
          alt={title}
          className={s.img}
        />
        <div className={s.div}>
          <h1 className={s.h}>{title}</h1>
          <p className={s.p}>{overview}</p>
        </div>
      </divn>
    </Link>
  );
}
