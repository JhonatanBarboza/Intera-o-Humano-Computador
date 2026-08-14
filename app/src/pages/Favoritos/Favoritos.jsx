import { PageShell } from "../../components/PageShell/PageShell";
import { Panel } from "../../components/Panel/Panel";
import { AnimalGrid } from "../../components/AnimalGrid/AnimalGrid";
import { useFavorites } from "../../hooks/useFavorites";
import { ANIMAIS } from "../../data";

export function Favoritos() {
  const { favoritos } = useFavorites();
  const animais = ANIMAIS.filter((animal) => favoritos.includes(animal.id));

  return (
    <PageShell>
      <main className="container">
        <Panel>
          <h2>Favoritos</h2>
        </Panel>
        <AnimalGrid
          animais={animais}
          emptyTitle="Você ainda não tem favoritos"
          emptyDescription="Clique no coração de um animal para guardá-lo aqui."
        />
      </main>
    </PageShell>
  );
}
