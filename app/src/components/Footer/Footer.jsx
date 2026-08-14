import { Heart } from "lucide-react";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      Juntos por um mundo com mais lares e menos abandono. <Heart size={14} fill="currentColor" className={styles.heart} />
    </footer>
  );
}
