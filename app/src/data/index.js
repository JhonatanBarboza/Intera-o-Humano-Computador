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

/** Quantas fotos cada animal tem em public/animais/<id>/ (foto1.jpg, foto2.jpg, foto3.jpg). */
export const FOTOS_POR_ANIMAL = 3;

/**
 * Caminhos das fotos de um animal servidas de /public (ex: /animais/thor/foto1.jpg).
 * Os arquivos ainda precisam ser adicionados manualmente em public/animais/<id>/.
 */
export function getAnimalFotos(animalId) {
  return Array.from({ length: FOTOS_POR_ANIMAL }, (_, i) => `/animais/${animalId}/foto${i + 1}.jpg`);
}
