import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { PerfilAnimal } from "./pages/PerfilAnimal/PerfilAnimal";
import { Abrigos } from "./pages/Abrigos/Abrigos";
import { PerfilAbrigo } from "./pages/PerfilAbrigo/PerfilAbrigo";
import { Favoritos } from "./pages/Favoritos/Favoritos";
import { Painel } from "./pages/Painel/Painel";
import { PainelCadastro } from "./pages/PainelCadastro/PainelCadastro";
import { PaginaNaoEncontrada } from "./pages/PaginaNaoEncontrada/PaginaNaoEncontrada";

function App() {
  return (
    <Routes>
      <Route path="/" element={<home />} />
      <Route path="/animal/:id" element={<PerfilAnimal />} />
      <Route path="/abrigos" element={<Abrigos />} />
      <Route path="/abrigo/:id" element={<PerfilAbrigo />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/painel" element={<Painel />} />
      <Route path="/painel/cadastro" element={<PainelCadastro />} />
      <Route path="*" element={<PaginaNaoEncontrada />} />
    </Routes>
  );
}

export default App;
