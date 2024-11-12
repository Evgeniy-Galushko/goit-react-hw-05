import s from "./MovieListCard.module.css";
import { Link, useLocation } from "react-router-dom";

export default function MovieListCard({ id, src, overview, title }) {
  const defaultImg = "../../img/000.jpg";
  return (
    <>
      <Link to={id}>
        <h1 className={s.h}>{title}</h1>
      </Link>
      <div className={s.div}>
        <img
          src={
            src
              ? `https://image.tmdb.org/t/p/w220_and_h330_face${src}`
              : defaultImg
          }
          alt={title}
          className={s.img}
        />
        <p className={s.p}>{overview}</p>
      </div>
    </>
  );
}
