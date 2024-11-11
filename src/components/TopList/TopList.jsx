import s from "./TopList.module.css";
import TopListCard from "../TopListCard/TopListCard";

export default function TopList({ homeRequest }) {
  return (
    <ul className={s.ul}>
      {homeRequest.map(({ id, backdrop_path, overview, title }) => {
        return (
          <li key={id} className={s.li}>
            <TopListCard
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
