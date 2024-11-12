import s from "./MovieDetailsPage.modules.css";
import { useLocation } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

export default function MovieDetailsPage(data) {
  const location = useLocation();
  const backLinkHref = location.state ?? "/movies";

  console.log(data);
  return (
    <div>
      <div>
        <button to={backLinkHref}>
          <GoArrowLeft size="15px" />
          Go back
        </button>
        <img
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${data}`}
          alt={data}
          className={s.img}
        />
      </div>
      <div className={s.div}>
        <h2 className={s.h}>{data}</h2>
        <p className={s.p}>{data}</p>
      </div>
    </div>
  );
}
