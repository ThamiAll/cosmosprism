export interface Ability {
  name: string
  description: string
}

export interface HeroTheme {
  primary: string
  glow: string
  border: string
  badgeBg: string
  badgeText: string
  subText?: string   // <--- O ponto de interrogação faz o erro sumir na hora!
}

export interface Character {
  id: string
  name: string
  title: string
  element: string
  imageSrc: string
  videoSrc: string
  videoFallbackSrc: string
  lore: string
  abilities: Ability[]
  theme: HeroTheme
}

export const heroes: Character[] = [
  {
    id: 'cosmo',
    name: 'Cosmo',
    title: 'O Tecelão Estelar',
    element: 'luz-estelar',
    imageSrc: '/images/heroes/cosmo.png',
    videoSrc: '/videos/heroes/cosmo-loop.mp4',
    videoFallbackSrc: '/videos/heroes/cosmo-loop.mp4',
    lore: 'O guardião central do Grande Prisma. Ele empunha a lâmina de pura ressonância estelar e canaliza a energia das constelações para purificar a corrupção do vazio.',
    theme: {
      primary: '#62e8ff',
      glow: 'rgba(98, 232, 255, 0.35)',
      border: 'border-cosmic-cyan/40',
      badgeBg: 'bg-cosmic-cyan/10',
      badgeText: 'text-cosmic-cyan',
      subText: 'text-cosmic-cyan',
    },
    abilities: [
      {
        name: 'Corte Cósmico',
        description: 'Desfere um golpe de lâmina estelar cortando o espaço e projetando lâminas de luz prismática.',
      },
      {
        name: 'Ressonância do Prisma',
        description: 'Canaliza o núcleo de luz, criando um campo de estilhaços que repele e desintegra ataques inimigos.',
      },
      {
        name: 'Supernova Primordial',
        description: 'Eleva a espada canalizando o poder de um pulsar cósmico para explodir em dano massivo em área.',
      },
    ],
  },
  {
    id: 'vespera',
    name: 'Vespera',
    title: 'A Lâmina do Crepúsculo',
    element: 'sombra-magenta',
    imageSrc: '/images/heroes/vespera.png',
    videoSrc: '/videos/heroes/vespera-loop.mp4',
    videoFallbackSrc: '/videos/heroes/vespera-loop.mp4',
    lore: 'Nascida nas dobras entre as dimensões, canaliza a essência sombria das nebulosas para desferir golpes rápidos e letais antes que os inimigos percebam.',
    theme: {
      primary: '#c084fc',
      glow: 'rgba(192, 132, 252, 0.35)',
      border: 'border-purple-500/40',
      badgeBg: 'bg-purple-500/10',
      badgeText: 'text-purple-300',
      subText: 'text-purple-400',
    },
    abilities: [
      {
        name: 'Passo Umbral',
        description: 'Teleporta-se instantaneamente pelas sombras, deixando um rastro de poeira estelar cintilante.',
      },
      {
        name: 'Gume Prismático Sombrio',
        description: 'Executa uma sequência veloz de cortes duplos com adagas de plasma carmesim e roxo.',
      },
      {
        name: 'Eclipse Total',
        description: 'Mergulha a arena em trevas absolutas, confundindo adversários e aumentando drasticamente sua agilidade.',
      },
    ],
  },
  {
    id: 'solaris',
    name: 'Solaris',
    title: 'O Portador da Aurora',
    element: 'fogo-solar',
    imageSrc: '/images/heroes/solaris.png',
    videoSrc: '/videos/heroes/solaris-loop.mp4',
    videoFallbackSrc: '/videos/heroes/solaris-loop.mp4',
    lore: 'Um colosso ancestral forjado no coração das estrelas primordiais. Carrega a fúria e o calor incandescente das supernovas para incinerar qualquer vestígio de corrupção do vazio.',
    theme: {
      primary: '#fbbf24',
      glow: 'rgba(251, 191, 36, 0.4)',
      border: 'border-amber-500/40',
      badgeBg: 'bg-amber-500/10',
      badgeText: 'text-amber-400',
      subText: 'text-amber-400',
    },
    abilities: [
      {
        name: 'Chama Radiante',
        description: 'Funde esferas de plasma cósmico e dispara uma rajada devastadora de luz solar pura.',
      },
      {
        name: 'Escudo de Fótons',
        description: 'Ergue uma barreira térmica giratória que absorve projéteis e converte em poder arcano.',
      },
      {
        name: 'Julgamento Solar',
        description: 'Invoca uma coluna de fogo celestial que purifica o campo de batalha por completo.',
      },
    ],
  },
  {
    id: 'lyra',
    name: 'Lyra',
    title: 'A Tecelã Harmônica',
    element: 'eco-sonoro',
    imageSrc: '/images/heroes/lyra.png',
    videoSrc: '/videos/heroes/lyra-loop.mp4',
    videoFallbackSrc: '/videos/heroes/lyra-loop.mp4',
    lore: 'Mestra das frequências que sustentam o cosmos. Sua música sintoniza os fragmentos e cura os tecidos da realidade.',
    theme: {
      primary: '#38bdf8',
      glow: 'rgba(56, 189, 248, 0.35)',
      border: 'border-sky-500/40',
      badgeBg: 'bg-sky-500/10',
      badgeText: 'text-sky-300',
      subText: 'text-sky-400',
    },
    abilities: [
      {
        name: 'Sinfonia Astral',
        description: 'Gera pulsos sonoros que atordoam inimigos e aumentam o ritmo de conjuração dos aliados.',
      },
      {
        name: 'Barreira Harmônica',
        description: 'Cria uma redoma de ondas sonoras que desacelera projéteis hostis.',
      },
      {
        name: 'Ressonância Absoluta',
        description: 'Libera uma frequência suprema capaz de restaurar a vida dos aliados e desmantelar feitiços sombrios.',
      },
    ],
  },
  {
    id: 'nyra',
    name: 'Nyra',
    title: 'A Sentinela das Marés',
    element: 'éter-aquático',
    imageSrc: '/images/heroes/nyra.png',
    videoSrc: '/videos/heroes/nyra-loop.mp4',
    videoFallbackSrc: '/videos/heroes/nyra-loop.mp4',
    lore: 'Controla os rios de éter cósmico que fluem pelo espaço profundo, adaptando suas correntes para defesa e ataque implacável.',
    theme: {
      primary: '#2dd4bf',
      glow: 'rgba(45, 212, 191, 0.35)',
      border: 'border-teal-500/40',
      badgeBg: 'bg-teal-500/10',
      badgeText: 'text-teal-300',
      subText: 'text-teal-400',
    },
    abilities: [
      {
        name: 'Corrente Prismática',
        description: 'Dispara jatos de fluido celestial que aprisionam os adversários em vórtices de pura pressão.',
      },
      {
        name: 'Bruma Etérea',
        description: 'Cobre o terreno com uma névoa cósmica que confere invisibilidade parcial e regeneração.',
      },
      {
        name: 'Maelstrom Dimensional',
        description: 'Abre um redemoinho aquático-espacial que suga e colapsa a defesa dos inimigos na área.',
      },
    ],
  },
  {
    id: 'kaelen',
    name: 'Kaelen',
    title: 'O Guardião das Rochas Vivas',
    element: 'terra-cristalina',
    imageSrc: '/images/heroes/kaelen.png',
    videoSrc: '/videos/heroes/kaelen-loop.mp4',
    videoFallbackSrc: '/videos/heroes/kaelen-loop.mp4',
    lore: 'Forjado a partir do núcleo de asteroides ancestrais, ele é a fortaleza inabalável que protege o restante dos guardiões.',
    theme: {
      primary: '#34d399',
      glow: 'rgba(52, 211, 153, 0.35)',
      border: 'border-emerald-500/40',
      badgeBg: 'bg-emerald-500/10',
      badgeText: 'text-emerald-300',
      subText: 'text-emerald-400',
    },
    abilities: [
      {
        name: 'Impacto Sísmico',
        description: 'Golpeia o chão erguendo monólitos de cristal pontiagudos que empalam os inimigos.',
      },
      {
        name: 'Carapaça de Meteorito',
        description: 'Endurece seu corpo com crostas minerais densas, tornando-se imune a efeitos de controle.',
      },
      {
        name: 'Colapso Gravitacional',
        description: 'Manipula a massa ao redor gerando uma atração gravitacional esmagadora contra o solo.',
      },
    ],
  },
]

export const villains: Character[] = [
  {
    id: 'null',
    name: 'Null',
    title: 'O Devorador de Fragmentos',
    element: 'vazio-abissal',
    imageSrc: '/images/villains/null.png',
    videoSrc: '/videos/villains/null-loop.mp4',
    videoFallbackSrc: '/videos/villains/null-loop.mp4',
    lore: 'Uma entidade nascida do abismo infinito entre as dimensões. Seu único propósito é consumir toda a luminescência estelar e transformar a floresta cósmica em matéria inerte e escuridão.',
    theme: {
      primary: '#e11d48',
      glow: 'rgba(225, 29, 72, 0.4)',
      border: 'border-rose-600/40',
      badgeBg: 'bg-rose-950/30',
      badgeText: 'text-rose-400',
      subText: 'text-rose-500',
    },
    abilities: [
      {
        name: 'Singularidade Negra',
        description: 'Cria um buraco negro em miniatura que atrai e comprime tudo ao redor.',
      },
      {
        name: 'Tentáculos do Vazio',
        description: 'Projéteis de sombra que drenam a energia prismática dos guardiões ao contato.',
      },
      {
        name: 'Aniquilação Entrópica',
        description: 'Libera uma onda de vácuo puro que desativa as habilidades ativas dos alvos.',
      },
    ],
  },
  {
    id: 'kryss',
    name: 'Kryss',
    title: 'A Rainha da Corrupção',
    element: 'plasma-carmesim',
    imageSrc: '/images/villains/kryss.png',
    videoSrc: '/videos/villains/kryss-loop.mp4',
    videoFallbackSrc: '/videos/villains/kryss-loop.mp4',
    lore: 'Outrora uma das mais nobres guardiãs estelares, foi consumida pela ganância dos cristais escuros e agora comanda as legiões de parasitas carmesins do abismo.',
    theme: {
      primary: '#f43f5e',
      glow: 'rgba(244, 63, 94, 0.4)',
      border: 'border-rose-500/40',
      badgeBg: 'bg-rose-900/20',
      badgeText: 'text-rose-400',
      subText: 'text-rose-400',
    },
    abilities: [
      {
        name: 'Espinhos Rubros',
        description: 'Faz brotar estacas de cristal corrompido que infectam a vida ao redor com veneno cósmico.',
      },
      {
        name: 'Enxame Parasitário',
        description: 'Invoca pequenas criaturas vorazes do vazio que desestabilizam o terreno.',
      },
      {
        name: 'Transfiguração Maldita',
        description: 'Corrompe os estilhaços de luz próximos, virando o poder dos próprios heróis contra eles.',
      },
    ],
  },
]