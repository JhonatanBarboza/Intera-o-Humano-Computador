import { PageShell } from "../../components/PageShell/PageShell";
import { Panel } from "../../components/Panel/Panel";
import { AnimalGrid } from "../../components/AnimalGrid/AnimalGrid";
import { ANIMAIS } from "../../data";
import styles from "./Home.module.css";

export function Home() {
  return (
    <PageShell>
      <main className="container">
        <Panel className={styles.hero}>
          <h2>Encontre seu novo melhor amigo</h2>
          <p className={styles.subtitulo}>Animais de várias ONGs e abrigos parceiros, esperando por um lar.</p>
        </Panel>

        <AnimalGrid animais={ANIMAIS} />
      </main>
    </PageShell>
  );
}
