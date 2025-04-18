import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

export default function NavHeader() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <nav className={s.heder}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={buildLinkClass}>
        Movies
      </NavLink>
    </nav>
  );
}
