import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function NavHeader() {
  return (
    <nav className={s.heder}>
      <NavLink to="/" className={s.hederNav}>
        Home
      </NavLink>
      <NavLink to="/movies" className={s.hederNav}>
        Movies
      </NavLink>
    </nav>
  );
}
