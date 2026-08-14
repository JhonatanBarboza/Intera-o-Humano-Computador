import styles from "./EmptyState.module.css";

export function EmptyState({ icon = "🐾", title, description, action }) {
  return (
    <div className={styles.empty}>
      <span className={styles.icon}>{icon}</span>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {action}
    </div>
  );
}
