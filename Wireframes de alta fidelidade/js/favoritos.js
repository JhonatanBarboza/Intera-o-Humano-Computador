/* Gerenciamento de favoritos via localStorage — protótipo front-end apenas */

const FAVORITOS_KEY = "patas-que-acolhem:favoritos";

function getFavoritos() {
  try {
    const raw = localStorage.getItem(FAVORITOS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function isFavorito(animalId) {
  return getFavoritos().includes(animalId);
}

function toggleFavorito(animalId) {
  const atuais = getFavoritos();
  const idx = atuais.indexOf(animalId);
  if (idx >= 0) {
    atuais.splice(idx, 1);
  } else {
    atuais.push(animalId);
  }
  localStorage.setItem(FAVORITOS_KEY, JSON.stringify(atuais));
  atualizarContadorFavoritos();
  return atuais.includes(animalId);
}

function atualizarContadorFavoritos() {
  const badges = document.querySelectorAll("[data-favoritos-count]");
  const total = getFavoritos().length;
  badges.forEach((el) => {
    el.textContent = total;
    el.style.display = total > 0 ? "inline-flex" : "none";
  });
}

document.addEventListener("DOMContentLoaded", atualizarContadorFavoritos);
