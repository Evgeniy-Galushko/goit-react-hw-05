import s from "./TopListCard.module.css";

export default function ImageCard({
  src = "../../img/480х240.jpg",
  overview,
  title,
}) {
  return (
    <>
      <h1 className={s.h}>{title}</h1>
      <div className={s.div}>
        <img
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${src}`}
          alt={title}
          className={s.img}
        />
        <p className={s.p}>{overview}</p>
      </div>
    </>
  );
}
