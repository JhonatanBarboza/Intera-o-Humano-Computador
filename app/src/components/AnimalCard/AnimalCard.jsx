import { ArrowRight, Cat, Dog, Heart, Mars, MapPin, PawPrint, Venus } from "lucide-react";
import { getAbrigoById } from "../../data";
import { useFavorites } from "../../hooks/useFavorites";
import { StatusBadge } from "../StatusBadge/StatusBadge";
import { Chip } from "../Chip/Chip";
import { Button } from "../Button/Button";
import styles from "./AnimalCard.module.css";

const ESPECIE_ICON = {
  Cachorro: Dog,
  Gato: Cat,
};

export function AnimalCard({ animal }) {
  const abrigo = getAbrigoById(animal.abrigoId);
  const { isFavorito, toggleFavorito } = useFavorites();
  const fav = isFavorito(animal.id);
  const EspecieIcon = ESPECIE_ICON[animal.especie] ?? PawPrint;
  const SexoIcon = animal.sexo === "Macho" ? Mars : Venus;

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
          <Heart size={18} fill={fav ? "currentColor" : "none"} />
        </button>
        <EspecieIcon className={styles.especieIcon} aria-hidden="true" />
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{animal.nome}</h3>
        <div className={styles.meta}>
          <span>
            <SexoIcon size={14} /> {animal.idade}
          </span>
          <Chip>
            <PawPrint size={12} /> {animal.porte}
          </Chip>
          <Chip accent>
            <Heart size={12} fill="currentColor" /> {animal.temperamento}
          </Chip>
        </div>
        <p className={styles.desc}>{animal.resumo}</p>
        <div className={styles.footer}>
          <span className={styles.local}>
            <MapPin size={13} /> {abrigo.nome}
          </span>
          <Button to={`/animal/${animal.id}`} variant="secondary" size="sm">
            Ver mais <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </article>
  );
}
