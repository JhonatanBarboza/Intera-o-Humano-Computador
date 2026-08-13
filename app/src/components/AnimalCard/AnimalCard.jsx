import { getAbrigoById } from "../../data";
import { useFavorites } from "../../hooks/useFavorites";
import { StatusBadge } from "../StatusBadge/StatusBadge";
import { Chip } from "../Chip/Chip";
import { Button } from "../Button/Button";
import styles from "./AnimalCard.module.css";

export function AnimalCard({ animal }) {
  const abrigo = getAbrigoById(animal.abrigoId);
  const { isFavorito, toggleFavorito } = useFavorites();
  const fav = isFavorito(animal.id);

  return (
    <article className={styles.card}>
      <div className={styles.photo}>
        <div className={styles.statusOverlay}>
          <StatusBadge status={animal.status} />
        </div>
        <button
          type="button"
          className={[styles.favBtn, fav ? styles.favActive : ""].join(" ")}
          aria-label={`Favoritar ${animal.nome}`}
          aria-pressed={fav}
          onClick={(e) => {
            e.preventDefault();
            toggleFavorito(animal.id);
          }}
        >
          {fav ? "♥" : "♡"}
        </button>
        <span className={styles.emoji} aria-hidden="true">
          {animal.icone}
        </span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{animal.nome}</h3>
        <div className={styles.meta}>
          <span>{animal.sexo === "Macho" ? "♂" : "♀"} {animal.idade}</span>
          <Chip>🐾 {animal.porte}</Chip>
          <Chip accent>♥ {animal.temperamento}</Chip>
        </div>
        <p className={styles.desc}>{animal.resumo}</p>
        <div className={styles.footer}>
          <span className={styles.local}>📍 {abrigo.nome}</span>
          <Button to={`/animal/${animal.id}`} variant="secondary" size="sm">
            Ver mais →
          </Button>
        </div>
      </div>
    </article>
  );
}
