import s from "./MovieDetailsPage.modules.css";
import { useParams } from "react-router-dom";

export default function MovieDetailsPage(data) {
  const [productId] = useParams();
  console.log(data);
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w220_and_h330_face${data}`}
        alt={data}
        className={s.img}
      />
      <div className={s.div}>
        <h2 className={s.h}>{data}</h2>
        <p className={s.p}>{data}</p>
      </div>
    </div>
  );
}
