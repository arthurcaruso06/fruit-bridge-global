export type Language = "pt" | "en" | "es";

interface Step {
  number: string;
  title: string;
  desc: string;
}
interface TeamSection {
  title: string;
  text: string;
}
interface Contact {
  name: string;
  email: string;
  phone: string;
  department: string;
}

export interface TranslationSet {
  nav: {
    home: string;
    history: string;
    team: string;
    products: string;
    sas: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    experience: string;
    international: string;
    quality: string;
    cta1: string;
    cta2: string;
  };
  about: { title: string; text: string };
  process: { title: string; steps: Step[] };
  differentials: { title: string; items: string[] };
  global: { title: string; text: string };
  products: { title: string; items: string[] };
  partners: { title: string; main: string[]; all: string[] };
  teamPreview: { text: string; cta: string };
  sasPreview: { title: string; text: string; cta: string };
  historyPage: { title: string; paragraphs: string[] };
  teamPage: { title: string; intro: string; sections: TeamSection[] };
  sasPage: { title: string; paragraphs: string[] };
  contactPage: {
    title: string;
    phone: string;
    address: string;
    contactsTitle: string;
    contacts: Contact[];
  };
  footer: { rights: string; tagline: string };
}

const contacts: Contact[] = [
  { name: "André Schenk", email: "andre@vivafruta.com.br", phone: "+55 11 98178-4445", department: "CO" },
  { name: "Rosana Melo", email: "rosana@vivafruta.com.br", phone: "+55 11 99403-5089", department: "Controler" },
  { name: "Eduardo Tomazian", email: "eduardo@vivafruta.com.br", phone: "+55 11 94242-4445", department: "Comercial" },
  { name: "Marcio Nascimento", email: "marcio@vivafruta.com.br", phone: "+55 11 97278-4445", department: "Qualidade" },
  { name: "Jefferson Ramos", email: "jefferson@vivafruta.com.br", phone: "+55 11 91663-4445", department: "Qualidade" },
  { name: "Daniel da Silva", email: "daniel@vivafruta.com.br", phone: "+55 11 97190-4445", department: "Qualidade" },
  { name: "Letícia Piassi", email: "leticia@vivafruta.com.br", phone: "+55 11 97470-4445", department: "Operacional" },
  { name: "Karina Luiza", email: "karina@vivafruta.com.br", phone: "+55 11 93484-4445", department: "Operacional" },
  { name: "Roberta Leme", email: "roberta@vivafruta.com.br", phone: "+55 11 98444-9729", department: "Financeiro" },
];

const partners = {
  main: ["Paramount", "Novafruit", "Blue Whale"],
  all: [
    "Agroland",
    "Chilfresh",
    "Especial Frutas",
    "Exportadora Lecaros",
    "Exportadora Propal SA",
    "Frueat by Moudiris",
    "Fruilomar",
    "Frutaria",
    "Los Lirios",
    "Luis Vicente",
    "Nogal",
    "Paloma",
    "Roberto Salerno SA",
    "Shanghai",
    "Spreafico - CL",
  ],
};

const pt: TranslationSet = {
  nav: {
    home: "Home",
    history: "Nossa História",
    team: "Nosso Time",
    products: "Produtos",
    sas: "SAS",
    contact: "Contatos",
  },
  hero: {
    title: "Conectando boas pessoas.",
    subtitle:
      "Representamos produtores globais e garantimos qualidade na chegada, conectando origem e mercado com precisão.",
    experience: "+20 anos de experiência",
    international: "Atuação internacional",
    quality: "Controle de qualidade na chegada",
    cta1: "Nossa História",
    cta2: "Produtos",
  },
  about: {
    title: "Sobre",
    text: "Empresa fundada em São Paulo, a Viva Fruta é referência em comércio internacional de frutas frescas. Atuamos com representação comercial estratégica e controle rigoroso de qualidade, conectando produtores globais ao mercado com agilidade e valor agregado.",
  },
  process: {
    title: "Como Trabalhamos",
    steps: [
      { number: "01", title: "Origem", desc: "Produtores internacionais selecionados" },
      { number: "02", title: "Representação", desc: "Negociação e estratégia comercial" },
      { number: "03", title: "Logística", desc: "Acompanhamento de embarques internacionais" },
      { number: "04", title: "Qualidade na chegada", desc: "Inspeção rigorosa de cada lote" },
      { number: "05", title: "Mercado", desc: "Distribuição e conexão com clientes" },
    ],
  },
  differentials: {
    title: "Diferenciais",
    items: [
      "Controle de qualidade na chegada da carga",
      "Presença ativa na operação logística",
      "Relação direta com produtores internacionais",
      "Atuação estratégica no mercado brasileiro",
      "Agilidade comercial",
      "Estrutura eficiente",
    ],
  },
  global: {
    title: "Atuação Global",
    text: "Conectamos produtores globais aos principais mercados, com presença ativa nas origens e acompanhamento próximo em toda a cadeia.",
  },
  products: {
    title: "Produtos",
    items: [
      "Alho",
      "Ameixa",
      "Cebola",
      "Cereja",
      "Kiwi",
      "Laranja",
      "Limão",
      "Maçã",
      "Melão",
      "Mirtilo",
      "Nectarina",
      "Pera",
      "Pêssego",
      "Pomelo",
      "Romã",
      "Tangerina",
      "Uva",
    ],
  },
  partners: { title: "Parceiros", ...partners },
  teamPreview: {
    text: "Na Viva, nossa força está no time que faz acontecer.",
    cta: "Conheça nosso time",
  },
  sasPreview: {
    title: "SAS",
    text: "Conheça a SAS, nossa empresa de trade especializada na comercialização e distribuição de frutas frescas importadas.",
    cta: "Saiba mais",
  },
  historyPage: {
    title: "Nossa História",
    paragraphs: [
      'A Viva Fruta nasceu em São Paulo, em 2012, pelas mãos de André Schenk. "Comecei, por acidente, no ramo das frutas em 1997, quando estudava nos EUA. Me apaixonei pelo negócio, sua dinâmica e pela ausência de fronteiras. Tive a oportunidade de conhecer vários países, de fazer muitos amigos mundo afora. Sou feliz por trabalhar em um ramo onde nunca temos dois dias iguais, e aprendo todos os dias."',
      'Administrador de Empresas de formação, André hoje é um veterano no comércio internacional de frutas. A experiência adquirida nos Estados Unidos lhe trouxe a oportunidade e o prazer de trabalhar por vários anos para um importante grupo do "mundo da fruta". O escritório atua na área de representação e no comércio internacional de frutas frescas.',
      '"Minha maior satisfação é poder conectar boas pessoas, boas empresas e ter certeza de fazer um trabalho que agregue valor ao negócio."',
      "André trouxe inovações na forma como o trabalho de representação é feito no Brasil; a mais marcante foi a implementação do controle de qualidade na chegada da mercadoria, um grande diferencial no trabalho da Viva Fruta.",
    ],
  },
  teamPage: {
    title: "Nosso Time",
    intro:
      "Na Viva, nossa força está no time que faz acontecer. Somos especialistas em conectar produtos frescos a quem precisa, com uma atuação comercial ágil e estratégica",
    sections: [
      {
        title: "Time de Qualidade",
        text: "Nossa equipe realiza uma inspeção rigorosa na chegada das frutas, assegurando que cada lote esteja em perfeito estado, cumprindo todos os requisitos de frescor, segurança e qualidade exigidos pelo mercado.",
      },
      {
        title: "Time Comercial",
        text: "Profissionais que conhecem o mercado, entendem as necessidades dos clientes e atuam com agilidade para oferecer as melhores soluções, fortalecendo parcerias e abrindo portas.",
      },
      {
        title: "Time Financeiro",
        text: "Organizado, transparente e eficiente, nosso financeiro facilita as negociações, garantindo segurança e flexibilidade para todas as partes envolvidas.",
      },
      {
        title: "Time Operacional",
        text: "Responsável pela análise e gestão completa dos documentos, além do acompanhamento rigoroso dos embarques, garantindo que toda a logística ocorra dentro do prazo e com máxima eficiência.",
      },
    ],
  },
  sasPage: {
    title: "SAS",
    paragraphs: [
      "A SAS é uma empresa de trade especializada na comercialização e distribuição de frutas frescas importadas, com foco em atender atacadistas, distribuidores e grandes centros de abastecimento, como o CEASA.",
      "Atuando de forma estratégica e alinhada com operações de importação, a SAS tem como principal missão potencializar a presença de produtos no mercado, oferecendo soluções comerciais ágeis, relacionamento próximo com os clientes e atuação direta nos principais pontos de distribuição.",
      "Com uma operação enxuta, eficiente e altamente conectada às demandas do setor hortifruti, a SAS se posiciona como uma ponte entre importadores e fornecedores, agregando valor à cadeia e garantindo a entrega de produtos com qualidade e frescor.",
    ],
  },
  contactPage: {
    title: "Contatos",
    phone: "+55 11 3641-2744",
    address:
      "Av. José Cesar de Oliveira, 181 – Conj. 506/507\nCEP: 05317-000, São Paulo/SP - Brasil",
    contactsTitle: "Contatos",
    contacts,
  },
  footer: {
    rights: "Todos os direitos reservados.",
    tagline: "Trading internacional de frutas frescas",
  },
};

const en: TranslationSet = {
  nav: {
    home: "Home",
    history: "Our History",
    team: "Our Team",
    products: "Products",
    sas: "SAS",
    contact: "Contact",
  },
  hero: {
    title: "Connecting good people.",
    subtitle:
      "We represent global producers and ensure quality upon arrival, connecting origin and market with precision.",
    experience: "+20 years of experience",
    international: "International presence",
    quality: "Quality control upon arrival",
    cta1: "Our History",
    cta2: "Products",
  },
  about: {
    title: "About",
    text: "Founded in São Paulo, Viva Fruta is a reference in international fresh fruit trading. We operate with strategic commercial representation and rigorous quality control, connecting global producers to the market with agility and added value.",
  },
  process: {
    title: "How We Work",
    steps: [
      { number: "01", title: "Origin", desc: "Selected international producers" },
      { number: "02", title: "Representation", desc: "Negotiation and commercial strategy" },
      { number: "03", title: "Logistics", desc: "International shipment tracking" },
      { number: "04", title: "Quality upon arrival", desc: "Rigorous inspection of each lot" },
      { number: "05", title: "Market", desc: "Distribution and client connection" },
    ],
  },
  differentials: {
    title: "Differentials",
    items: [
      "Quality control upon cargo arrival",
      "Active presence in logistics operations",
      "Direct relationship with international producers",
      "Strategic operation in the Brazilian market",
      "Commercial agility",
      "Efficient structure",
    ],
  },
  global: {
    title: "Global Presence",
    text: "We connect global producers to key markets, with active presence at origins and close monitoring throughout the entire chain.",
  },
  products: {
    title: "Products",
    items: [
      "Garlic",
      "Plum",
      "Onion",
      "Cherry",
      "Kiwi",
      "Orange",
      "Lemon",
      "Apple",
      "Melon",
      "Blueberry",
      "Nectarine",
      "Pear",
      "Peach",
      "Pomelo",
      "Pomegranate",
      "Tangerine",
      "Grape",
    ],
  },
  partners: { title: "Partners", ...partners },
  teamPreview: {
    text: "At Viva, our strength lies in the team that makes it happen.",
    cta: "Meet our team",
  },
  sasPreview: {
    title: "SAS",
    text: "Discover SAS, our trade company specialized in the commercialization and distribution of imported fresh fruits.",
    cta: "Learn more",
  },
  historyPage: {
    title: "Our History",
    paragraphs: [
      'Viva Fruta was born in São Paulo in 2012, founded by André Schenk. "I started, by accident, in the fruit business in 1997, while studying in the USA. I fell in love with the business, its dynamics and the absence of borders. I had the opportunity to visit many countries and make many friends around the world. I am happy to work in a field where no two days are the same, and I learn every day."',
      'With a degree in Business Administration, André is today a veteran in international fruit trade. The experience gained in the United States brought him the opportunity and pleasure of working for several years for an important group in the "fruit world". The office operates in the area of representation and international fresh fruit trade.',
      '"My greatest satisfaction is being able to connect good people, good companies and being sure to do work that adds value to the business."',
      "André brought innovations in the way representation work is done in Brazil; the most notable was the implementation of quality control upon cargo arrival, a major differential in Viva Fruta's work.",
    ],
  },
  teamPage: {
    title: "Our Team",
    intro:
      "At Viva, our strength lies in the team that makes it happen. We are specialists in connecting fresh products to those who need them, with agile and strategic commercial operations",
    sections: [
      {
        title: "Quality Team",
        text: "Our team performs rigorous inspection upon fruit arrival, ensuring that each lot is in perfect condition, meeting all freshness, safety and quality requirements demanded by the market.",
      },
      {
        title: "Commercial Team",
        text: "Professionals who know the market, understand client needs and act with agility to offer the best solutions, strengthening partnerships and opening doors.",
      },
      {
        title: "Financial Team",
        text: "Organized, transparent and efficient, our financial team facilitates negotiations, ensuring security and flexibility for all parties involved.",
      },
      {
        title: "Operations Team",
        text: "Responsible for the complete analysis and management of documents, as well as rigorous shipment monitoring, ensuring that all logistics occur on time and with maximum efficiency.",
      },
    ],
  },
  sasPage: {
    title: "SAS",
    paragraphs: [
      "SAS is a trade company specialized in the commercialization and distribution of imported fresh fruits, focused on serving wholesalers, distributors and large supply centers, such as CEASA.",
      "Operating strategically and aligned with import operations, SAS's main mission is to maximize product presence in the market, offering agile commercial solutions, close customer relationships and direct operations at key distribution points.",
      "With a lean, efficient operation highly connected to the demands of the horticultural sector, SAS positions itself as a bridge between importers and suppliers, adding value to the chain and ensuring the delivery of products with quality and freshness.",
    ],
  },
  contactPage: {
    title: "Contact",
    phone: "+55 11 3641-2744",
    address:
      "Av. José Cesar de Oliveira, 181 – Suite 506/507\nZIP: 05317-000, São Paulo/SP - Brazil",
    contactsTitle: "Contacts",
    contacts,
  },
  footer: { rights: "All rights reserved.", tagline: "International fresh fruit trading" },
};

const es: TranslationSet = {
  nav: {
    home: "Inicio",
    history: "Nuestra Historia",
    team: "Nuestro Equipo",
    products: "Productos",
    sas: "SAS",
    contact: "Contacto",
  },
  hero: {
    title: "Conectando buenas personas.",
    subtitle:
      "Representamos productores globales y garantizamos calidad en la llegada, conectando origen y mercado con precisión.",
    experience: "+20 años de experiencia",
    international: "Actuación internacional",
    quality: "Control de calidad en la llegada",
    cta1: "Nuestra Historia",
    cta2: "Productos",
  },
  about: {
    title: "Sobre",
    text: "Empresa fundada en São Paulo, Viva Fruta es referencia en comercio internacional de frutas frescas. Actuamos con representación comercial estratégica y control riguroso de calidad, conectando productores globales al mercado con agilidad y valor agregado.",
  },
  process: {
    title: "Cómo Trabajamos",
    steps: [
      { number: "01", title: "Origen", desc: "Productores internacionales seleccionados" },
      { number: "02", title: "Representación", desc: "Negociación y estrategia comercial" },
      { number: "03", title: "Logística", desc: "Seguimiento de embarques internacionales" },
      { number: "04", title: "Calidad en la llegada", desc: "Inspección rigurosa de cada lote" },
      { number: "05", title: "Mercado", desc: "Distribución y conexión con clientes" },
    ],
  },
  differentials: {
    title: "Diferenciales",
    items: [
      "Control de calidad en la llegada de la carga",
      "Presencia activa en la operación logística",
      "Relación directa con productores internacionales",
      "Actuación estratégica en el mercado brasileño",
      "Agilidad comercial",
      "Estructura eficiente",
    ],
  },
  global: {
    title: "Actuación Global",
    text: "Conectamos productores globales a los principales mercados, con presencia activa en los orígenes y acompañamiento cercano en toda la cadena.",
  },
  products: {
    title: "Productos",
    items: [
      "Ajo",
      "Ciruela",
      "Cebolla",
      "Cereza",
      "Kiwi",
      "Naranja",
      "Limón",
      "Manzana",
      "Melón",
      "Arándano",
      "Nectarina",
      "Pera",
      "Melocotón",
      "Pomelo",
      "Granada",
      "Mandarina",
      "Uva",
    ],
  },
  partners: { title: "Socios", ...partners },
  teamPreview: {
    text: "En Viva, nuestra fuerza está en el equipo que hace que las cosas sucedan.",
    cta: "Conoce nuestro equipo",
  },
  sasPreview: {
    title: "SAS",
    text: "Conozca la SAS, nuestra empresa de trade especializada en la comercialización y distribución de frutas frescas importadas.",
    cta: "Saber más",
  },
  historyPage: {
    title: "Nuestra Historia",
    paragraphs: [
      'Viva Fruta nació en São Paulo, en 2012, de la mano de André Schenk. "Comencé, por accidente, en el ramo de las frutas en 1997, cuando estudiaba en los EE.UU. Me enamoré del negocio, su dinámica y la ausencia de fronteras. Tuve la oportunidad de conocer varios países, de hacer muchos amigos en todo el mundo. Soy feliz por trabajar en un ramo donde nunca tenemos dos días iguales, y aprendo todos los días."',
      'Administrador de Empresas de formación, André hoy es un veterano en el comercio internacional de frutas. La experiencia adquirida en los Estados Unidos le trajo la oportunidad y el placer de trabajar por varios años para un importante grupo del "mundo de la fruta". La oficina actúa en el área de representación y en el comercio internacional de frutas frescas.',
      '"Mi mayor satisfacción es poder conectar buenas personas, buenas empresas y tener la certeza de hacer un trabajo que agregue valor al negocio."',
      "André trajo innovaciones en la forma como el trabajo de representación se hace en Brasil; la más notable fue la implementación del control de calidad en la llegada de la mercadería, un gran diferencial en el trabajo de Viva Fruta.",
    ],
  },
  teamPage: {
    title: "Nuestro Equipo",
    intro:
      "En Viva, nuestra fuerza está en el equipo que hace que las cosas sucedan. Somos especialistas en conectar productos frescos a quien los necesita, con una actuación comercial ágil y estratégica",
    sections: [
      {
        title: "Equipo de Calidad",
        text: "Nuestro equipo realiza una inspección rigurosa en la llegada de las frutas, asegurando que cada lote esté en perfecto estado, cumpliendo todos los requisitos de frescura, seguridad y calidad exigidos por el mercado.",
      },
      {
        title: "Equipo Comercial",
        text: "Profesionales que conocen el mercado, entienden las necesidades de los clientes y actúan con agilidad para ofrecer las mejores soluciones, fortaleciendo alianzas y abriendo puertas.",
      },
      {
        title: "Equipo Financiero",
        text: "Organizado, transparente y eficiente, nuestro financiero facilita las negociaciones, garantizando seguridad y flexibilidad para todas las partes involucradas.",
      },
      {
        title: "Equipo Operacional",
        text: "Responsable del análisis y gestión completa de los documentos, además del seguimiento riguroso de los embarques, garantizando que toda la logística ocurra dentro del plazo y con máxima eficiencia.",
      },
    ],
  },
  sasPage: {
    title: "SAS",
    paragraphs: [
      "La SAS es una empresa de trade especializada en la comercialización y distribución de frutas frescas importadas, con foco en atender mayoristas, distribuidores y grandes centros de abastecimiento, como el CEASA.",
      "Actuando de forma estratégica y alineada con operaciones de importación, la SAS tiene como principal misión potencializar la presencia de productos en el mercado, ofreciendo soluciones comerciales ágiles, relación cercana con los clientes y actuación directa en los principales puntos de distribución.",
      "Con una operación eficiente y altamente conectada a las demandas del sector hortofrutícola, la SAS se posiciona como un puente entre importadores y proveedores, agregando valor a la cadena y garantizando la entrega de productos con calidad y frescura.",
    ],
  },
  contactPage: {
    title: "Contacto",
    phone: "+55 11 3641-2744",
    address:
      "Av. José Cesar de Oliveira, 181 – Conj. 506/507\nCEP: 05317-000, São Paulo/SP - Brasil",
    contactsTitle: "Contactos",
    contacts,
  },
  footer: {
    rights: "Todos los derechos reservados.",
    tagline: "Trading internacional de frutas frescas",
  },
};

export const translations: Record<Language, TranslationSet> = { pt, en, es };
