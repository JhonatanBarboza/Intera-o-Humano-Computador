/* Componentes reutilizáveis renderizados via JS — protótipo estático */

function statusBadgeHTML(status) {
  const labels = { disponivel: "Para adoção", em_processo: "Em processo", adotado: "Adotado" };
  const classes = { disponivel: "badge-disponivel", em_processo: "badge-processo", adotado: "badge-adotado" };
  return `<span class="status-tag ${classes[status]}"><span class="paw-icon">🐾</span> ${labels[status]}</span>`;
}

function animalCardHTML(animal) {
  const abrigo = getAbrigoById(animal.abrigoId);
  const fav = isFavorito(animal.id);
  return `
    <article class="animal-card" data-animal-id="${animal.id}">
      <div class="animal-card__photo">
        <span class="status-tag ${STATUS_BADGE_CLASS[animal.status]} status-tag--overlay">
          <span class="paw-icon">🐾</span> ${animal.status === "disponivel" ? "Para adoção" : animal.status === "em_processo" ? "Em processo" : "Adotado"}
        </span>
        <button class="fav-btn ${fav ? "is-active" : ""}" data-fav-toggle="${animal.id}" aria-label="Favoritar ${animal.nome}" aria-pressed="${fav}">
          ${fav ? "♥" : "♡"}
        </button>
        <span class="photo-emoji" aria-hidden="true">${animal.icone}</span>
      </div>
      <div class="animal-card__body">
        <h3 class="animal-card__name">${animal.nome}</h3>
        <div class="animal-card__meta">
          <span>${animal.sexo === "Macho" ? "♂" : "♀"} ${animal.idade}</span>
          <span class="chip">🐾 ${animal.porte}</span>
          <span class="chip chip--accent">♥ ${animal.temperamento}</span>
        </div>
        <p class="animal-card__desc">${animal.resumo}</p>
        <div class="animal-card__footer">
          <span class="animal-card__local">📍 ${abrigo.nome} - ${abrigo.cidade.split(" - ")[1] || abrigo.cidade}</span>
          <a class="btn btn-secondary btn-sm" href="perfil-animal.html?id=${animal.id}">Ver mais →</a>
        </div>
      </div>
    </article>
  `;
}

function renderAnimalGrid(container, animais, emptyMessage) {
  if (!container) return;
  if (!animais.length) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-state__icon">🐾</span>
        <h3>${emptyMessage || "Nenhum animal encontrado"}</h3>
        <p>Tente ajustar os filtros ou volte mais tarde — novos animais chegam sempre!</p>
      </div>
    `;
    return;
  }
  container.innerHTML = animais.map(animalCardHTML).join("");
  attachFavButtons(container);
}

function attachFavButtons(scope) {
  const root = scope || document;
  root.querySelectorAll("[data-fav-toggle]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute("data-fav-toggle");
      const nowFav = toggleFavorito(id);
      btn.classList.toggle("is-active", nowFav);
      btn.setAttribute("aria-pressed", String(nowFav));
      btn.textContent = nowFav ? "♥" : "♡";
    });
  });
}
