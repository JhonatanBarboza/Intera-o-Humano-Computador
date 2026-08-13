export { ABRIGOS } from "./abrigos";
export { ANIMAIS, STATUS_LABEL, STATUS_BADGE_TONE } from "./animais";
export { POSTS } from "./posts";

import { ABRIGOS } from "./abrigos";
import { ANIMAIS } from "./animais";
import { POSTS } from "./posts";

export function getAnimalById(id) {
  return ANIMAIS.find((a) => a.id === id);
}

export function getAbrigoById(id) {
  return ABRIGOS.find((a) => a.id === id);
}

export function getAnimaisPorAbrigo(abrigoId) {
  return ANIMAIS.filter((a) => a.abrigoId === abrigoId);
}

export function getPostsPorAbrigo(abrigoId) {
  return POSTS.filter((p) => p.abrigoId === abrigoId);
}

export function getPostById(id) {
  return POSTS.find((p) => p.id === id);
}

/**
 * Caminhos das fotos de um animal, servidas de /public (ex: /animais/thor/foto1.png).
 * A quantidade varia por animal — vem do campo `totalFotos` de cada registro
 * em animais.js, que reflete quantas fotos existem de fato em
 * public/animais/<id>/.
 */
export function getAnimalFotos(animalId) {
  const animal = getAnimalById(animalId);
  const total = animal?.totalFotos ?? 1;
  return Array.from({ length: total }, (_, i) => `/animais/${animalId}/foto${i + 1}.png`);
}
