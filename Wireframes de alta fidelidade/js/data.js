/* Dados mockados — Patas que Acolhem (protótipo estático, sem backend) */

const ABRIGOS = [
  {
    id: "esperanca",
    nome: "Abrigo Esperança",
    cidade: "São Carlos - SP",
    slogan: "Cuidando hoje, por um futuro melhor.",
    icone: "🏠",
    telefone: "(16) 99876-5432",
    email: "contato@abrigoesperanca.org.br",
    endereco: "Rua das Acácias, 210 — Jardim Esperança",
    sobre:
      "O Abrigo Esperança é uma organização sem fins lucrativos dedicada ao resgate, cuidado e adoção de animais em situação de abandono em São Carlos e região. Acreditamos que todo animal merece uma segunda chance, um lar seguro e muito amor. Trabalhamos com uma equipe de voluntários apaixonados por causa animal, promovendo o bem-estar, a saúde e a dignidade de cada animal que passa por aqui.",
    impacto: { resgatados: 247, adocoes: 186, voluntarios: 32 },
    mapaPos: { top: "32%", left: "58%" },
  },
  {
    id: "larbichanos",
    nome: "Lar dos Bichanos",
    cidade: "São Carlos - SP",
    slogan: "Um lar temporário até o lar definitivo.",
    icone: "🐾",
    telefone: "(16) 99123-4567",
    email: "contato@lardosbichanos.org.br",
    endereco: "Av. dos Ipês, 780 — Vila Nery",
    sobre:
      "O Lar dos Bichanos nasceu do sonho de uma protetora independente que hoje reúne uma pequena rede de voluntários. Focamos principalmente em gatos resgatados das ruas, oferecendo cuidados veterinários, castração e socialização antes da adoção.",
    impacto: { resgatados: 132, adocoes: 98, voluntarios: 14 },
    mapaPos: { top: "55%", left: "35%" },
  },
  {
    id: "patasunidas",
    nome: "Patas Unidas",
    cidade: "Ribeirão Preto - SP",
    slogan: "Juntos por mais lares e menos abandono.",
    icone: "🐕",
    telefone: "(16) 99654-3210",
    email: "contato@patasunidas.org.br",
    endereco: "Rua Barão do Amazonas, 45 — Centro",
    sobre:
      "A Patas Unidas atua há 8 anos no resgate de cães em situação de rua e maus-tratos na região de Ribeirão Preto. Além da adoção, promovemos campanhas de castração popular e educação sobre posse responsável.",
    impacto: { resgatados: 310, adocoes: 245, voluntarios: 41 },
    mapaPos: { top: "70%", left: "72%" },
  },
];

const ANIMAIS = [
  {
    id: "thor",
    nome: "Thor",
    especie: "Cachorro",
    icone: "🐕",
    raca: "Vira-lata",
    porte: "Médio",
    idade: "2 anos",
    idadeCategoria: "adulto",
    sexo: "Macho",
    temperamento: "Brincalhão",
    vacinado: true,
    castrado: true,
    necessidadesEspeciais: false,
    status: "disponivel",
    abrigoId: "esperanca",
    resumo: "Thor é muito carinhoso, adora brincar e se dá bem com outros cães. Ideal para famílias!",
    descricao:
      "Oi, eu sou o Thor! 🐾 Sou um cachorro muito carinhoso, brincalhão e cheio de energia. Adoro correr, brincar com bolinhas e estar perto de pessoas. Sou dócil, me dou bem com outros cães e adoro receber carinho. Estou em busca de uma família que tenha tempo, amor e espaço para dividir muitas aventuras comigo!",
    fotos: ["🐕", "🐕", "🐕", "🐕"],
  },
  {
    id: "luna",
    nome: "Luna",
    especie: "Gato",
    icone: "🐈",
    raca: "SRD",
    porte: "Pequeno",
    idade: "1 ano",
    idadeCategoria: "jovem",
    sexo: "Fêmea",
    temperamento: "Dócil",
    vacinado: true,
    castrado: true,
    necessidadesEspeciais: false,
    status: "disponivel",
    abrigoId: "esperanca",
    resumo: "Luna é uma gatinha tranquila e carinhosa. Adora um colo e se adapta bem a apartamentos.",
    descricao:
      "Oi, eu sou a Luna! 🐾 Sou uma gata tranquila, independente na medida certa e muito carinhosa quando ganho confiança. Adoro um colo à tardinha e uma janela ensolarada para observar o mundo. Já sou castrada e vacinada, e me adapto super bem a apartamentos.",
    fotos: ["🐈", "🐈", "🐈"],
  },
  {
    id: "bento",
    nome: "Bento",
    especie: "Cachorro",
    icone: "🐕",
    raca: "Golden Retriever (mix)",
    porte: "Pequeno",
    idade: "6 meses",
    idadeCategoria: "filhote",
    sexo: "Macho",
    temperamento: "Dócil",
    vacinado: true,
    castrado: false,
    necessidadesEspeciais: false,
    status: "disponivel",
    abrigoId: "larbichanos",
    resumo: "Bento é um filhote cheio de energia e amor. Procura uma família para crescer junto!",
    descricao:
      "Oi, eu sou o Bento! 🐾 Ainda sou filhote e estou aprendendo tudo sobre o mundo — inclusive a andar na coleira sem puxar (prometo que estou treinando!). Sou muito dócil, adoro crianças e outros animais. Vou precisar de castração assim que atingir a idade recomendada.",
    fotos: ["🐕", "🐕"],
  },
  {
    id: "mia",
    nome: "Mia",
    especie: "Gato",
    icone: "🐈",
    raca: "SRD",
    porte: "Pequeno",
    idade: "8 meses",
    idadeCategoria: "jovem",
    sexo: "Fêmea",
    temperamento: "Calmo",
    vacinado: true,
    castrado: false,
    necessidadesEspeciais: false,
    status: "em_processo",
    abrigoId: "larbichanos",
    resumo: "Mia é curiosa, meiga e adora companhia. Uma ótima amiga para o dia a dia!",
    descricao:
      "Oi, eu sou a Mia! 🐾 Sou curiosa por natureza, adoro explorar cada cantinho da casa e depois relaxar num colo quentinho. Me dou bem com crianças e sou bastante sociável. Atualmente estou em processo de adoção, mas fique de olho — às vezes as coisas mudam!",
    fotos: ["🐈", "🐈"],
  },
  {
    id: "toby",
    nome: "Toby",
    especie: "Cachorro",
    icone: "🐕",
    raca: "Vira-lata caramelo",
    porte: "Médio",
    idade: "3 anos",
    idadeCategoria: "adulto",
    sexo: "Macho",
    temperamento: "Independente",
    vacinado: true,
    castrado: true,
    necessidadesEspeciais: true,
    status: "disponivel",
    abrigoId: "patasunidas",
    resumo: "Toby é tranquilo, protetor e já castrado. Precisa de cuidados especiais com a pata dianteira.",
    descricao:
      "Oi, eu sou o Toby! 🐾 Sou um caramelo clássico: leal, protetor e um pouco desconfiado no começo, mas depois que confio, sou o cão mais companheiro que existe. Tive um acidente antes de ser resgatado e minha pata dianteira precisa de cuidados especiais, mas isso não me impede de correr atrás de bolinha!",
    fotos: ["🐕", "🐕", "🐕"],
  },
  {
    id: "nina",
    nome: "Nina",
    especie: "Gato",
    icone: "🐈",
    raca: "Siamês (mix)",
    porte: "Pequeno",
    idade: "5 anos",
    idadeCategoria: "adulto",
    sexo: "Fêmea",
    temperamento: "Independente",
    vacinado: true,
    castrado: true,
    necessidadesEspeciais: false,
    status: "adotado",
    abrigoId: "patasunidas",
    resumo: "Nina já encontrou seu novo lar! Obrigado a todos que se interessaram.",
    descricao:
      "Oi, eu sou a Nina! 🐾 Sou independente, elegante e sei exatamente o que quero (spoiler: comida e um bom sol na janela). Já fui adotada e estou muito feliz na minha nova casa — obrigada a todos que passaram por aqui e se interessaram por mim!",
    fotos: ["🐈", "🐈"],
  },
  {
    id: "mel",
    nome: "Mel",
    especie: "Cachorro",
    icone: "🐕",
    raca: "Vira-lata",
    porte: "Grande",
    idade: "4 anos",
    idadeCategoria: "adulto",
    sexo: "Fêmea",
    temperamento: "Calmo",
    vacinado: true,
    castrado: true,
    necessidadesEspeciais: false,
    status: "disponivel",
    abrigoId: "esperanca",
    resumo: "Mel é serena, obediente e adora um cantinho tranquilo pra deitar. Ótima para casas com quintal.",
    descricao:
      "Oi, eu sou a Mel! 🐾 Sou uma cachorra grande, mas com energia de vovó tranquila — adoro uma soneca ao sol e passeios calmos. Sou muito obediente e já ando bem na coleira. Fico melhor em casas com espaço e quintal, mas o mais importante mesmo é ter uma família que me dê carinho.",
    fotos: ["🐕", "🐕"],
  },
];

const POSTS = [
  {
    id: "resgate-vila-nery",
    abrigoId: "esperanca",
    data: "2026-04-12",
    dataFormatada: "12 Abr 2026",
    tipo: "resgate",
    titulo: "Resgate de 3 filhotes na Vila Nery",
    resumo: "Três filhotinhos foram resgatados e já estão em tratamento no abrigo. Em breve estarão disponíveis para adoção!",
    corpo:
      "Recebemos uma denúncia de moradores da Vila Nery sobre uma ninhada de filhotes abandonada próxima a um terreno baldio. Nossa equipe foi até o local e conseguiu resgatar os três filhotes, que estavam desidratados e com parasitas. Eles já passaram por avaliação veterinária, estão recebendo os cuidados necessários e, assim que estiverem prontos, entrarão para a nossa lista de animais disponíveis para adoção. Agradecemos a todos que ajudaram com a denúncia e com doações de ração e medicamentos!",
  },
  {
    id: "evento-parque-ecologico",
    abrigoId: "esperanca",
    data: "2026-04-05",
    dataFormatada: "05 Abr 2026",
    tipo: "evento",
    titulo: "Evento de adoção no Parque Ecológico",
    resumo: "Tivemos um dia incrível! 6 animais encontraram um novo lar. Obrigado a todos que participaram.",
    corpo:
      "No último sábado realizamos nossa feira de adoção mensal no Parque Ecológico, com apoio de voluntários e da prefeitura. Foram mais de 15 animais expostos e, ao final do dia, 6 deles já saíram para seus novos lares! Também arrecadamos doações de ração e itens de higiene para os animais que ainda estão no abrigo. Nosso muito obrigado a todos que compareceram e que ajudaram a divulgar o evento.",
  },
  {
    id: "campanha-castracao",
    abrigoId: "patasunidas",
    data: "2026-03-28",
    dataFormatada: "28 Mar 2026",
    tipo: "evento",
    titulo: "Campanha de castração popular em Ribeirão Preto",
    resumo: "Mais de 40 castrações realizadas em parceria com a clínica veterinária municipal.",
    corpo:
      "Ao longo do mês de março, a Patas Unidas organizou uma campanha de castração popular em parceria com a clínica veterinária municipal, atendendo tutores de baixa renda da região. Foram realizadas mais de 40 castrações gratuitas, contribuindo diretamente para o controle populacional e a redução do abandono de animais na cidade.",
  },
  {
    id: "resgate-gatos-feira",
    abrigoId: "larbichanos",
    data: "2026-03-15",
    dataFormatada: "15 Mar 2026",
    tipo: "resgate",
    titulo: "Resgate de colônia de gatos na Feira Coberta",
    resumo: "Cinco gatos que viviam nos arredores da feira municipal foram resgatados e castrados.",
    corpo:
      "Após meses de acompanhamento de uma colônia de gatos comunitários na região da Feira Coberta, conseguimos capturar, castrar e vacinar cinco deles com o apoio de protetores locais. Dois já estão disponíveis para adoção, enquanto os demais permanecem em observação antes de entrarem na fila de adoção.",
  },
];

function getAnimalById(id) {
  return ANIMAIS.find((a) => a.id === id);
}

function getAbrigoById(id) {
  return ABRIGOS.find((a) => a.id === id);
}

function getAnimaisPorAbrigo(abrigoId) {
  return ANIMAIS.filter((a) => a.abrigoId === abrigoId);
}

function getPostsPorAbrigo(abrigoId) {
  return POSTS.filter((p) => p.abrigoId === abrigoId);
}

function getPostById(id) {
  return POSTS.find((p) => p.id === id);
}

const STATUS_LABEL = {
  disponivel: "Disponível para adoção",
  em_processo: "Em processo de adoção",
  adotado: "Adotado",
};

const STATUS_BADGE_CLASS = {
  disponivel: "badge-disponivel",
  em_processo: "badge-processo",
  adotado: "badge-adotado",
};
