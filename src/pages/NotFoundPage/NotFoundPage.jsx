import { NavLink, useLocation } from "react-router-dom";
import s from "./NotFoundPage.module.css";
import { useRef } from "react";
import { GoArrowLeft } from "react-icons/go";

export default function NotFoundPage() {
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? `/`);

  return (
    <div className={s.div}>
      <h1 className={s.divH}>
        Dear user, You have entered a non-existent page! Click{" "}
        <span className={s.divHSpan}>&ldquo;Go back&rdquo;</span> or click on
        <span className={s.divHSpan}> &ldquo;Home&rdquo;</span>.
      </h1>
      <NavLink
        to={backLinkHref.current}
        state={location}
        className={s.divNavlink}
      >
        <GoArrowLeft size="30px" className={s.arrow} />
        Go back
      </NavLink>
    </div>
  );
}
