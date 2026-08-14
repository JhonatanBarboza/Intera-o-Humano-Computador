import { AnimalCard } from "../AnimalCard/AnimalCard";
import { EmptyState } from "../EmptyState/EmptyState";
import styles from "./AnimalGrid.module.css";

export function AnimalGrid({ animais, emptyTitle = "Nenhum animal encontrado", emptyDescription, emptyAction }) {
  if (!animais.length) {
    return (
      <div className={styles.grid}>
        <EmptyState icon="🐾" title={emptyTitle} description={emptyDescription} action={emptyAction} />
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {animais.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
}
