import { useState } from "react";
import { useParams } from "react-router-dom";
import { Building2, Calendar, FileText, Flag, Heart, Home, Mail, Mars, MapPin, MessageCircle, PawPrint, Phone, Venus } from "lucide-react";
import { getAbrigoById, getAnimalById, getAnimalFotos } from "../../data";
import { useFavorites } from "../../hooks/useFavorites";
import { PageShell } from "../../components/PageShell/PageShell";
import { Panel } from "../../components/Panel/Panel";
import { Button } from "../../components/Button/Button";
import { StatusBadge } from "../../components/StatusBadge/StatusBadge";
import { PaginaNaoEncontrada } from "../PaginaNaoEncontrada/PaginaNaoEncontrada";
import styles from "./PerfilAnimal.module.css";

export function PerfilAnimal() {
  const { id } = useParams();
  const animal = getAnimalById(id);
  const { isFavorito, toggleFavorito } = useFavorites();
  const [fotoAtual, setFotoAtual] = useState(0);

  if (!animal) return <PaginaNaoEncontrada />;

  const abrigo = getAbrigoById(animal.abrigoId);
  const fotos = getAnimalFotos(animal.id);
  const fav = isFavorito(animal.id);
  const temVariasFotos = fotos.length > 1;
  const SexoIcon = animal.sexo === "Macho" ? Mars : Venus;

  const dados = [
    { label: "Espécie", value: animal.especie, icon: PawPrint, tone: "terracota" },
    { label: "Porte", value: animal.porte, icon: Flag, tone: "rosa" },
    { label: "Idade", value: animal.idade, icon: Calendar, tone: "laranja" },
    { label: "Sexo", value: animal.sexo, icon: SexoIcon, tone: "azul" },
  ];

  function fotoAnterior() {
    setFotoAtual((i) => (i - 1 + fotos.length) % fotos.length);
  }

  function proximaFoto() {
    setFotoAtual((i) => (i + 1) % fotos.length);
  }

  return (
    <PageShell>
      <main className="container">
        <div className={styles.topGrid}>
          <div className={styles.galeria}>
            <div className={styles.fotoPrincipal}>
              <img src={fotos[fotoAtual]} alt={animal.nome} />

              <span className={styles.badgeAdocao}>
                <PawPrint size={13} /> Para adoção
              </span>

              <button
                type="button"
                className={[styles.favBtn, fav ? styles.favBtnActive : ""].join(" ")}
                aria-label={fav ? `Remover ${animal.nome} dos favoritos` : `Adicionar ${animal.nome} aos favoritos`}
                aria-pressed={fav}
                onClick={() => toggleFavorito(animal.id)}
              >
                <Heart size={18} fill={fav ? "currentColor" : "none"} />
              </button>

              {temVariasFotos && (
                <>
                  <button type="button" className={`${styles.navBtn} ${styles.navPrev}`} aria-label="Foto anterior" onClick={fotoAnterior}>
                    ‹
                  </button>
                  <button type="button" className={`${styles.navBtn} ${styles.navNext}`} aria-label="Próxima foto" onClick={proximaFoto}>
                    ›
                  </button>
                  <div className={styles.dots}>
                    {fotos.map((_, i) => (
                      <span key={i} className={[styles.dot, i === fotoAtual ? styles.dotActive : ""].join(" ")} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className={styles.infoCol}>
            <Panel>
              <div className={styles.identidade}>
                <span className={styles.iconeCirculo} aria-hidden="true">
                  <PawPrint size={20} />
                </span>
                <h2 className={styles.nome}>{animal.nome}</h2>
              </div>
              <StatusBadge status={animal.status} variant="full" withDot />
            </Panel>

            <Panel>
              <div className={styles.dadosGrid}>
                {dados.map((dado) => (
                  <div className={styles.dadoItem} key={dado.label}>
                    <span className={[styles.dadoIcon, styles[`tone-${dado.tone}`]].join(" ")} aria-hidden="true">
                      <dado.icon size={18} />
                    </span>
                    <div>
                      <div className={styles.dadoLabel}>{dado.label}</div>
                      <div className={styles.dadoValue}>{dado.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </div>

        <Panel>
          <div className={styles.sectionTitle}>
            <span className={styles.sectionIcon} aria-hidden="true">
              <FileText size={17} />
            </span>
            <h3>Sobre mim</h3>
          </div>
          <p className={styles.descricao}>{animal.descricao}</p>
        </Panel>

        <div className={styles.acoes}>
          <Button
            variant="secondary"
            className={[styles.acaoBtn, styles.acaoFavoritar].join(" ")}
            onClick={() => toggleFavorito(animal.id)}
            aria-pressed={fav}
          >
            <Heart size={16} fill={fav ? "currentColor" : "none"} /> {fav ? "Adicionado aos favoritos" : "Adicionar aos favoritos"}
          </Button>
          <Button
            variant="primary"
            className={[styles.acaoBtn, styles.acaoFalar].join(" ")}
            href={`https://wa.me/55${abrigo.telefone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> Falar com o abrigo
          </Button>
        </div>

        <Panel>
          <div className={styles.sectionTitle}>
            <span className={styles.sectionIcon} aria-hidden="true">
              <Building2 size={17} />
            </span>
            <h3>Onde estou</h3>
          </div>

          <div className={styles.ondeEstou}>
            <div className={styles.abrigoInfo}>
              <span className={styles.abrigoAvatar} aria-hidden="true">
                <Home size={22} />
              </span>
              <div>
                <h4 className={styles.abrigoNome}>{abrigo.nome}</h4>
                <p className={styles.abrigoSlogan}>{abrigo.slogan}</p>
                <ul className={styles.abrigoContato}>
                  <li>
                    <MapPin size={15} aria-hidden="true" /> {abrigo.cidade}
                  </li>
                  <li>
                    <Phone size={15} aria-hidden="true" /> {abrigo.telefone}
                  </li>
                  <li>
                    <Mail size={15} aria-hidden="true" /> {abrigo.email}
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.mapaPlaceholder}>
              <div className={styles.mapaPin}>
                <MapPin size={18} className={styles.mapaPinIcon} aria-hidden="true" />
                <span>
                  <strong>{abrigo.nome}</strong>
                  <br />
                  {abrigo.cidade}
                </span>
              </div>
            </div>
          </div>
        </Panel>
      </main>
    </PageShell>
  );
}
