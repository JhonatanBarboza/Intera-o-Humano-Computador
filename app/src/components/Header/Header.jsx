import { NavLink } from "react-router-dom";
import { useFavorites } from "../../hooks/useFavorites";
import { Button } from "../Button/Button";
import styles from "./Header.module.css";

const navLinkClass = ({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link);

export function Header() {
  const { favoritos } = useFavorites();

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.brand}>
        <span className={styles.mark}>🐾</span>
        <span>
          <h1>Patas que Acolhem</h1>
          <span className={styles.tagline}>Mais lares. Mais histórias felizes.</span>
        </span>
      </NavLink>

      <nav className={styles.nav}>
        <NavLink to="/" end className={navLinkClass}>
          🏠 Início
        </NavLink>
        <NavLink to="/abrigos" className={navLinkClass}>
          🏢 Abrigos
        </NavLink>
        <NavLink to="/favoritos" className={navLinkClass}>
          ♥ Favoritos
          {favoritos.length > 0 && <span className={styles.favBadge}>{favoritos.length}</span>}
        </NavLink>
      </nav>

      <div className={styles.actions}>
        <Button to="/painel" variant="ghost" size="sm">
          Área da instituição
        </Button>
        <Button to="/abrigo/esperanca" variant="primary" size="sm">
          ♥ Quero Ajudar
        </Button>
      </div>
    </header>
  );
}
