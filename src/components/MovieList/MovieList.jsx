import s from "./MovieList.module.css";
import MovieListCard from "../MovieListCard/MovieListCard";

export default function MovieList({ homeRequest }) {
  return (
    <ul className={s.ul}>
      {homeRequest.map(({ id, backdrop_path, overview, title }) => {
        return (
          <li key={id} className={s.li}>
            <MovieListCard
              id={id}
              src={backdrop_path}
              overview={overview}
              title={title}
            />
          </li>
        );
      })}
    </ul>
  );
}
