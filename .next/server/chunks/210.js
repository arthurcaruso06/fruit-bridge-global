((exports.id = 210),
  (exports.ids = [210]),
  (exports.modules = {
    1317: (e, a, t) => {
      (Promise.resolve().then(t.t.bind(t, 3219, 23)),
        Promise.resolve().then(t.t.bind(t, 4863, 23)),
        Promise.resolve().then(t.t.bind(t, 5155, 23)),
        Promise.resolve().then(t.t.bind(t, 802, 23)),
        Promise.resolve().then(t.t.bind(t, 9350, 23)),
        Promise.resolve().then(t.t.bind(t, 8530, 23)),
        Promise.resolve().then(t.t.bind(t, 8921, 23)));
    },
    4885: (e, a, t) => {
      (Promise.resolve().then(t.t.bind(t, 6959, 23)),
        Promise.resolve().then(t.t.bind(t, 3875, 23)),
        Promise.resolve().then(t.t.bind(t, 8903, 23)),
        Promise.resolve().then(t.t.bind(t, 7174, 23)),
        Promise.resolve().then(t.t.bind(t, 4178, 23)),
        Promise.resolve().then(t.t.bind(t, 7190, 23)),
        Promise.resolve().then(t.t.bind(t, 1365, 23)));
    },
    5236: (e, a, t) => {
      (Promise.resolve().then(t.bind(t, 3852)),
        Promise.resolve().then(t.bind(t, 4898)),
        Promise.resolve().then(t.bind(t, 5858)));
    },
    5092: (e, a, t) => {
      (Promise.resolve().then(t.bind(t, 8784)),
        Promise.resolve().then(t.bind(t, 2558)),
        Promise.resolve().then(t.bind(t, 5972)));
    },
    8784: (e, a, t) => {
      "use strict";
      t.d(a, { Footer: () => c });
      var r = t(5512),
        o = t(8531),
        i = t.n(o),
        n = t(5972),
        s = t(7318);
      function c() {
        let { t: e } = (0, n.B)();
        return (0, r.jsx)("footer", {
          className: "bg-foreground text-primary-foreground",
          children: (0, r.jsxs)("div", {
            className: "mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-20",
            children: [
              (0, r.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16",
                children: [
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("img", {
                        src: s.A.src,
                        alt: "Viva Fruta",
                        className: "h-16 w-auto brightness-0 invert",
                      }),
                      (0, r.jsx)("p", {
                        className:
                          "mt-4 text-sm text-primary-foreground/60 leading-relaxed max-w-xs",
                        children: e.footer.tagline,
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("h4", {
                        className:
                          "text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/40 mb-6",
                        children:
                          "Home" === e.nav.home
                            ? "Navigation"
                            : "Inicio" === e.nav.home
                              ? "Navegaci\xf3n"
                              : "Navega\xe7\xe3o",
                      }),
                      (0, r.jsxs)("nav", {
                        className: "flex flex-col gap-3",
                        children: [
                          (0, r.jsx)(i(), {
                            href: "/",
                            className:
                              "text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors",
                            children: e.nav.home,
                          }),
                          (0, r.jsx)(i(), {
                            href: "/history",
                            className:
                              "text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors",
                            children: e.nav.history,
                          }),
                          (0, r.jsx)(i(), {
                            href: "/team",
                            className:
                              "text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors",
                            children: e.nav.team,
                          }),
                          (0, r.jsx)(i(), {
                            href: "/sas",
                            className:
                              "text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors",
                            children: e.nav.sas,
                          }),
                          (0, r.jsx)(i(), {
                            href: "/contact",
                            className:
                              "text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors",
                            children: e.nav.contact,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("h4", {
                        className:
                          "text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/40 mb-6",
                        children: e.contactPage.contactsTitle,
                      }),
                      (0, r.jsxs)("div", {
                        className: "space-y-3 text-sm text-primary-foreground/70",
                        children: [
                          (0, r.jsx)("p", { children: e.contactPage.phone }),
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsx)("p", {
                                className:
                                  "text-xs uppercase tracking-wider text-primary-foreground/40 mb-1",
                                children: "Viva Fruta",
                              }),
                              (0, r.jsx)("p", {
                                className: "whitespace-pre-line",
                                children: e.contactPage.address,
                              }),
                              (0, r.jsx)("p", {
                                className: "mt-1",
                                children: "CNPJ: 18.792.280/0001-83",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsx)("p", {
                                className:
                                  "text-xs uppercase tracking-wider text-primary-foreground/40 mb-1",
                                children: "Viva Fruta SAS",
                              }),
                              (0, r.jsx)("p", {
                                children: "Gral. Dr Arturo J. Balinas – Montevideo, Uruguai",
                              }),
                              (0, r.jsx)("p", { children: "RUT: 219035730017" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "mt-16 pt-8 border-t border-primary-foreground/10 text-xs text-primary-foreground/40",
                children: ["\xa9 ", new Date().getFullYear(), " Viva Frutas. ", e.footer.rights],
              }),
            ],
          }),
        });
      }
    },
    2558: (e, a, t) => {
      "use strict";
      t.d(a, { Header: () => p });
      var r = t(5512),
        o = t(8531),
        i = t.n(o),
        n = t(9334),
        s = t(5972),
        c = t(8009),
        l = t(5480),
        d = t(9187),
        m = t(7318);
      let u = [
        { code: "pt", label: "PT" },
        { code: "en", label: "EN" },
        { code: "es", label: "ES" },
      ];
      function p() {
        let { language: e, setLanguage: a, t } = (0, s.B)(),
          [o, p] = (0, c.useState)(!1),
          [g, h] = (0, c.useState)(!1),
          [f, b] = (0, c.useState)(!1),
          v = (0, n.usePathname)(),
          x = "/" === v,
          y = [
            { href: "/", label: t.nav.home },
            { href: "/history", label: t.nav.history },
            { href: "/team", label: t.nav.team },
            { href: "/sas", label: t.nav.sas },
            { href: "/contact", label: t.nav.contact },
          ],
          A = o || !x || f ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent",
          P = o || !x ? "text-foreground" : "text-primary-foreground";
        return (0, r.jsxs)("header", {
          className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${A} ${g ? "-translate-y-full" : "translate-y-0"}`,
          children: [
            (0, r.jsx)("div", {
              className: "mx-auto max-w-7xl px-6 lg:px-12",
              children: (0, r.jsxs)("div", {
                className: "flex h-20 items-center justify-between",
                children: [
                  (0, r.jsx)(i(), {
                    href: "/",
                    className: "flex items-center transition-colors",
                    children: (0, r.jsx)("img", {
                      src: m.A.src,
                      alt: "Viva Fruta",
                      className: `h-14 w-auto transition-all duration-500 ${o || !x ? "" : "brightness-0 invert"}`,
                    }),
                  }),
                  (0, r.jsx)("nav", {
                    className: "hidden lg:flex items-center gap-10",
                    children: y.map((e) =>
                      (0, r.jsx)(
                        i(),
                        {
                          href: e.href,
                          className: `text-sm font-medium tracking-wide transition-colors hover:opacity-70 ${P} ${v === e.href ? "!opacity-100 border-b border-current" : ""}`,
                          children: e.label,
                        },
                        e.href,
                      ),
                    ),
                  }),
                  (0, r.jsx)("div", {
                    className: "hidden lg:flex items-center gap-1",
                    children: u.map((t) =>
                      (0, r.jsx)(
                        "button",
                        {
                          onClick: () => a(t.code),
                          className: `px-2 py-1 text-xs font-medium tracking-wider transition-colors ${e === t.code ? `${P} opacity-100` : `${P} opacity-50 hover:opacity-75`}`,
                          children: t.label,
                        },
                        t.code,
                      ),
                    ),
                  }),
                  (0, r.jsx)("button", {
                    onClick: () => b(!f),
                    className: `lg:hidden p-2 ${o || !x ? "text-foreground" : "text-primary-foreground"}`,
                    "aria-label": "Menu",
                    children: (0, r.jsx)("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "1.5",
                      children: f
                        ? (0, r.jsx)("path", { d: "M6 6l12 12M6 18L18 6" })
                        : (0, r.jsx)("path", { d: "M4 8h16M4 16h16" }),
                    }),
                  }),
                ],
              }),
            }),
            (0, r.jsx)(l.N, {
              children:
                f &&
                (0, r.jsx)(d.P.div, {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: { opacity: 0, height: 0 },
                  className: "lg:hidden bg-background border-t border-border overflow-hidden",
                  children: (0, r.jsxs)("div", {
                    className: "px-6 py-8 flex flex-col gap-6",
                    children: [
                      y.map((e) =>
                        (0, r.jsx)(
                          i(),
                          {
                            href: e.href,
                            className: `text-foreground text-lg font-serif tracking-wide ${v === e.href ? "text-primary" : ""}`,
                            children: e.label,
                          },
                          e.href,
                        ),
                      ),
                      (0, r.jsx)("div", {
                        className: "flex gap-3 pt-4 border-t border-border",
                        children: u.map((t) =>
                          (0, r.jsx)(
                            "button",
                            {
                              onClick: () => a(t.code),
                              className: `px-3 py-1.5 text-sm font-medium tracking-wider transition-colors ${e === t.code ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
                              children: t.label,
                            },
                            t.code,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
            }),
          ],
        });
      }
    },
    5972: (e, a, t) => {
      "use strict";
      t.d(a, { LanguageProvider: () => l, B: () => d });
      var r = t(5512),
        o = t(8009);
      let i = [
          { name: "Andr\xe9 Schenk", email: "andre@vivafruta.com.br", phone: "+55 11 98178-4445" },
          { name: "Rosana Melo", email: "rosana@vivafruta.com.br", phone: "+55 11 99403-5089" },
          {
            name: "Eduardo Tomazian",
            email: "eduardo@vivafruta.com.br",
            phone: "+55 11 94242-4445",
          },
          {
            name: "Marcio Nascimento",
            email: "marcio@vivafruta.com.br",
            phone: "+55 11 97278-4445",
          },
          { name: "Karina Luiza", email: "karina@vivafruta.com.br", phone: "+55 11 93484-4445" },
          { name: "Daniel da Silva", email: "daniel@vivafruta.com.br", phone: "+55 11 97190-4445" },
          {
            name: "Let\xedcia Piassi",
            email: "leticia@vivafruta.com.br",
            phone: "+55 11 97470-4445",
          },
          { name: "Roberta Leme", email: "roberta@vivafruta.com.br", phone: "+55 11 98444-9729" },
          {
            name: "Jefferson Ramos",
            email: "jefferson@vivafruta.com.br",
            phone: "+55 11 91663-4445",
          },
        ],
        n = {
          main: ["Paramount", "Novafruit", "Blue Whale"],
          all: [
            "Agroland",
            "Chilfresh",
            "Especial Frutas",
            "Exportadora Lecaros",
            "Exportadora Propal SA",
            "Frueat by Moudiris",
            "Fruilomar",
            "Fruits De Ponent",
            "Frutaria",
            "Los Lirios",
            "Luis Vicente",
            "Nogal",
            "Paloma",
            "Roberto Salerno SA",
            "Shanghai",
            "Spreafico - CL",
          ],
        },
        s = {
          pt: {
            nav: {
              home: "Home",
              history: "Nossa Hist\xf3ria",
              team: "Nosso Time",
              products: "Produtos",
              sas: "SAS",
              contact: "Contatos",
            },
            hero: {
              title: "Conectando boas pessoas.",
              subtitle:
                "Representamos produtores globais e garantimos qualidade na chegada, conectando origem e mercado com precis\xe3o.",
              experience: "+20 anos de experi\xeancia",
              international: "Atua\xe7\xe3o internacional",
              quality: "Controle de qualidade na chegada",
              cta1: "Nossa Hist\xf3ria",
              cta2: "Produtos",
            },
            about: {
              title: "Sobre",
              text: "Empresa fundada em S\xe3o Paulo, a Viva Frutas \xe9 refer\xeancia em com\xe9rcio internacional de frutas frescas. Atuamos com representa\xe7\xe3o comercial estrat\xe9gica e controle rigoroso de qualidade, conectando produtores globais ao mercado com agilidade e valor agregado.",
            },
            process: {
              title: "Como Trabalhamos",
              steps: [
                { number: "01", title: "Origem", desc: "Produtores internacionais selecionados" },
                {
                  number: "02",
                  title: "Representa\xe7\xe3o",
                  desc: "Negocia\xe7\xe3o e estrat\xe9gia comercial",
                },
                {
                  number: "03",
                  title: "Log\xedstica",
                  desc: "Acompanhamento de embarques internacionais",
                },
                {
                  number: "04",
                  title: "Qualidade na chegada",
                  desc: "Inspe\xe7\xe3o rigorosa de cada lote",
                },
                {
                  number: "05",
                  title: "Mercado",
                  desc: "Distribui\xe7\xe3o e conex\xe3o com clientes",
                },
              ],
            },
            differentials: {
              title: "Diferenciais",
              items: [
                "Controle de qualidade na chegada da carga",
                "Presen\xe7a ativa na opera\xe7\xe3o log\xedstica",
                "Rela\xe7\xe3o direta com produtores internacionais",
                "Atua\xe7\xe3o estrat\xe9gica no mercado brasileiro",
                "Agilidade comercial",
                "Estrutura eficiente",
              ],
            },
            global: {
              title: "Atua\xe7\xe3o Global",
              text: "Conectamos produtores globais aos principais mercados, com presen\xe7a ativa nas origens e acompanhamento pr\xf3ximo em toda a cadeia.",
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
                "Lim\xe3o",
                "Ma\xe7\xe3",
                "Mel\xe3o",
                "Mirtilo",
                "Nectarina",
                "Pera",
                "P\xeassego",
                "Pomelo",
                "Rom\xe3",
                "Tangerina",
                "Uva",
              ],
            },
            partners: { title: "Parceiros", ...n },
            teamPreview: {
              text: "Na Viva, nossa for\xe7a est\xe1 no time que faz acontecer.",
              cta: "Conhe\xe7a nosso time",
            },
            sasPreview: {
              title: "SAS",
              text: "Conhe\xe7a a SAS, nossa empresa de trade especializada na comercializa\xe7\xe3o e distribui\xe7\xe3o de frutas frescas importadas.",
              cta: "Saiba mais",
            },
            historyPage: {
              title: "Nossa Hist\xf3ria",
              paragraphs: [
                'A Viva Fruta nasceu em S\xe3o Paulo, em 2012, pelas m\xe3os de Andr\xe9 Schenk. "Comecei, por acidente, no ramo das frutas em 1997, quando estudava nos EUA. Me apaixonei pelo neg\xf3cio, sua din\xe2mica e pela aus\xeancia de fronteiras. Tive a oportunidade de conhecer v\xe1rios pa\xedses, de fazer muitos amigos mundo afora. Sou feliz por trabalhar em um ramo onde nunca temos dois dias iguais, e aprendo todos os dias."',
                'Administrador de Empresas de forma\xe7\xe3o, Andr\xe9 hoje \xe9 um veterano no com\xe9rcio internacional de frutas. A experi\xeancia adquirida nos Estados Unidos lhe trouxe a oportunidade e o prazer de trabalhar por v\xe1rios anos para um importante grupo do "mundo da fruta". O escrit\xf3rio atua na \xe1rea de representa\xe7\xe3o e no com\xe9rcio internacional de frutas frescas.',
                '"Minha maior satisfa\xe7\xe3o \xe9 poder conectar boas pessoas, boas empresas e ter certeza de fazer um trabalho que agregue valor ao neg\xf3cio."',
                "Andr\xe9 trouxe inova\xe7\xf5es na forma como o trabalho de representa\xe7\xe3o \xe9 feito no Brasil; a mais marcante foi a implementa\xe7\xe3o do controle de qualidade na chegada da mercadoria, um grande diferencial no trabalho da Viva Fruta.",
              ],
            },
            teamPage: {
              title: "Nosso Time",
              intro:
                "Na Viva, nossa for\xe7a est\xe1 no time que faz acontecer. Somos especialistas em conectar produtos frescos a quem precisa, com uma atua\xe7\xe3o comercial \xe1gil e estrat\xe9gica",
              sections: [
                {
                  title: "Time de Qualidade",
                  text: "Nossa equipe realiza uma inspe\xe7\xe3o rigorosa na chegada das frutas, assegurando que cada lote esteja em perfeito estado, cumprindo todos os requisitos de frescor, seguran\xe7a e qualidade exigidos pelo mercado.",
                },
                {
                  title: "Time Comercial",
                  text: "Profissionais que conhecem o mercado, entendem as necessidades dos clientes e atuam com agilidade para oferecer as melhores solu\xe7\xf5es, fortalecendo parcerias e abrindo portas.",
                },
                {
                  title: "Time Financeiro",
                  text: "Organizado, transparente e eficiente, nosso financeiro facilita as negocia\xe7\xf5es, garantindo seguran\xe7a e flexibilidade para todas as partes envolvidas.",
                },
                {
                  title: "Time Operacional",
                  text: "Respons\xe1vel pela an\xe1lise e gest\xe3o completa dos documentos, al\xe9m do acompanhamento rigoroso dos embarques, garantindo que toda a log\xedstica ocorra dentro do prazo e com m\xe1xima efici\xeancia.",
                },
              ],
            },
            sasPage: {
              title: "SAS",
              paragraphs: [
                "A SAS \xe9 uma empresa de trade especializada na comercializa\xe7\xe3o e distribui\xe7\xe3o de frutas frescas importadas, com foco em atender atacadistas, distribuidores e grandes centros de abastecimento, como o CEASA.",
                "Atuando de forma estrat\xe9gica e alinhada com opera\xe7\xf5es de importa\xe7\xe3o, a SAS tem como principal miss\xe3o potencializar a presen\xe7a de produtos no mercado, oferecendo solu\xe7\xf5es comerciais \xe1geis, relacionamento pr\xf3ximo com os clientes e atua\xe7\xe3o direta nos principais pontos de distribui\xe7\xe3o.",
                "Com uma opera\xe7\xe3o enxuta, eficiente e altamente conectada \xe0s demandas do setor hortifruti, a SAS se posiciona como uma ponte entre importadores e fornecedores, agregando valor \xe0 cadeia e garantindo a entrega de produtos com qualidade e frescor.",
              ],
            },
            contactPage: {
              title: "Contatos",
              phone: "+55 11 3641-2744",
              address:
                "Av. Jos\xe9 Cesar de Oliveira, 181 – Conj. 506/507\nCEP: 05317-000, S\xe3o Paulo/SP - Brasil",
              contactsTitle: "Contatos",
              contacts: i,
            },
            footer: {
              rights: "Todos os direitos reservados.",
              tagline: "Trading internacional de frutas frescas",
            },
          },
          en: {
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
              text: "Founded in S\xe3o Paulo, Viva Frutas is a reference in international fresh fruit trading. We operate with strategic commercial representation and rigorous quality control, connecting global producers to the market with agility and added value.",
            },
            process: {
              title: "How We Work",
              steps: [
                { number: "01", title: "Origin", desc: "Selected international producers" },
                {
                  number: "02",
                  title: "Representation",
                  desc: "Negotiation and commercial strategy",
                },
                { number: "03", title: "Logistics", desc: "International shipment tracking" },
                {
                  number: "04",
                  title: "Quality upon arrival",
                  desc: "Rigorous inspection of each lot",
                },
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
            partners: { title: "Partners", ...n },
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
                'Viva Fruta was born in S\xe3o Paulo in 2012, founded by Andr\xe9 Schenk. "I started, by accident, in the fruit business in 1997, while studying in the USA. I fell in love with the business, its dynamics and the absence of borders. I had the opportunity to visit many countries and make many friends around the world. I am happy to work in a field where no two days are the same, and I learn every day."',
                'With a degree in Business Administration, Andr\xe9 is today a veteran in international fruit trade. The experience gained in the United States brought him the opportunity and pleasure of working for several years for an important group in the "fruit world". The office operates in the area of representation and international fresh fruit trade.',
                '"My greatest satisfaction is being able to connect good people, good companies and being sure to do work that adds value to the business."',
                "Andr\xe9 brought innovations in the way representation work is done in Brazil; the most notable was the implementation of quality control upon cargo arrival, a major differential in Viva Fruta's work.",
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
                "Av. Jos\xe9 Cesar de Oliveira, 181 – Suite 506/507\nZIP: 05317-000, S\xe3o Paulo/SP - Brazil",
              contactsTitle: "Contacts",
              contacts: i,
            },
            footer: {
              rights: "All rights reserved.",
              tagline: "International fresh fruit trading",
            },
          },
          es: {
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
                "Representamos productores globales y garantizamos calidad en la llegada, conectando origen y mercado con precisi\xf3n.",
              experience: "+20 a\xf1os de experiencia",
              international: "Actuaci\xf3n internacional",
              quality: "Control de calidad en la llegada",
              cta1: "Nuestra Historia",
              cta2: "Productos",
            },
            about: {
              title: "Sobre",
              text: "Empresa fundada en S\xe3o Paulo, Viva Frutas es referencia en comercio internacional de frutas frescas. Actuamos con representaci\xf3n comercial estrat\xe9gica y control riguroso de calidad, conectando productores globales al mercado con agilidad y valor agregado.",
            },
            process: {
              title: "C\xf3mo Trabajamos",
              steps: [
                {
                  number: "01",
                  title: "Origen",
                  desc: "Productores internacionales seleccionados",
                },
                {
                  number: "02",
                  title: "Representaci\xf3n",
                  desc: "Negociaci\xf3n y estrategia comercial",
                },
                {
                  number: "03",
                  title: "Log\xedstica",
                  desc: "Seguimiento de embarques internacionales",
                },
                {
                  number: "04",
                  title: "Calidad en la llegada",
                  desc: "Inspecci\xf3n rigurosa de cada lote",
                },
                {
                  number: "05",
                  title: "Mercado",
                  desc: "Distribuci\xf3n y conexi\xf3n con clientes",
                },
              ],
            },
            differentials: {
              title: "Diferenciales",
              items: [
                "Control de calidad en la llegada de la carga",
                "Presencia activa en la operaci\xf3n log\xedstica",
                "Relaci\xf3n directa con productores internacionales",
                "Actuaci\xf3n estrat\xe9gica en el mercado brasile\xf1o",
                "Agilidad comercial",
                "Estructura eficiente",
              ],
            },
            global: {
              title: "Actuaci\xf3n Global",
              text: "Conectamos productores globales a los principales mercados, con presencia activa en los or\xedgenes y acompa\xf1amiento cercano en toda la cadena.",
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
                "Lim\xf3n",
                "Manzana",
                "Mel\xf3n",
                "Ar\xe1ndano",
                "Nectarina",
                "Pera",
                "Melocot\xf3n",
                "Pomelo",
                "Granada",
                "Mandarina",
                "Uva",
              ],
            },
            partners: { title: "Socios", ...n },
            teamPreview: {
              text: "En Viva, nuestra fuerza est\xe1 en el equipo que hace que las cosas sucedan.",
              cta: "Conoce nuestro equipo",
            },
            sasPreview: {
              title: "SAS",
              text: "Conozca la SAS, nuestra empresa de trade especializada en la comercializaci\xf3n y distribuci\xf3n de frutas frescas importadas.",
              cta: "Saber m\xe1s",
            },
            historyPage: {
              title: "Nuestra Historia",
              paragraphs: [
                'Viva Fruta naci\xf3 en S\xe3o Paulo, en 2012, de la mano de Andr\xe9 Schenk. "Comenc\xe9, por accidente, en el ramo de las frutas en 1997, cuando estudiaba en los EE.UU. Me enamor\xe9 del negocio, su din\xe1mica y la ausencia de fronteras. Tuve la oportunidad de conocer varios pa\xedses, de hacer muchos amigos en todo el mundo. Soy feliz por trabajar en un ramo donde nunca tenemos dos d\xedas iguales, y aprendo todos los d\xedas."',
                'Administrador de Empresas de formaci\xf3n, Andr\xe9 hoy es un veterano en el comercio internacional de frutas. La experiencia adquirida en los Estados Unidos le trajo la oportunidad y el placer de trabajar por varios a\xf1os para un importante grupo del "mundo de la fruta". La oficina act\xfaa en el \xe1rea de representaci\xf3n y en el comercio internacional de frutas frescas.',
                '"Mi mayor satisfacci\xf3n es poder conectar buenas personas, buenas empresas y tener la certeza de hacer un trabajo que agregue valor al negocio."',
                "Andr\xe9 trajo innovaciones en la forma como el trabajo de representaci\xf3n se hace en Brasil; la m\xe1s notable fue la implementaci\xf3n del control de calidad en la llegada de la mercader\xeda, un gran diferencial en el trabajo de Viva Fruta.",
              ],
            },
            teamPage: {
              title: "Nuestro Equipo",
              intro:
                "En Viva, nuestra fuerza est\xe1 en el equipo que hace que las cosas sucedan. Somos especialistas en conectar productos frescos a quien los necesita, con una actuaci\xf3n comercial \xe1gil y estrat\xe9gica",
              sections: [
                {
                  title: "Equipo de Calidad",
                  text: "Nuestro equipo realiza una inspecci\xf3n rigurosa en la llegada de las frutas, asegurando que cada lote est\xe9 en perfecto estado, cumpliendo todos los requisitos de frescura, seguridad y calidad exigidos por el mercado.",
                },
                {
                  title: "Equipo Comercial",
                  text: "Profesionales que conocen el mercado, entienden las necesidades de los clientes y act\xfaan con agilidad para ofrecer las mejores soluciones, fortaleciendo alianzas y abriendo puertas.",
                },
                {
                  title: "Equipo Financiero",
                  text: "Organizado, transparente y eficiente, nuestro financiero facilita las negociaciones, garantizando seguridad y flexibilidad para todas las partes involucradas.",
                },
                {
                  title: "Equipo Operacional",
                  text: "Responsable del an\xe1lisis y gesti\xf3n completa de los documentos, adem\xe1s del seguimiento riguroso de los embarques, garantizando que toda la log\xedstica ocurra dentro del plazo y con m\xe1xima eficiencia.",
                },
              ],
            },
            sasPage: {
              title: "SAS",
              paragraphs: [
                "La SAS es una empresa de trade especializada en la comercializaci\xf3n y distribuci\xf3n de frutas frescas importadas, con foco en atender mayoristas, distribuidores y grandes centros de abastecimiento, como el CEASA.",
                "Actuando de forma estrat\xe9gica y alineada con operaciones de importaci\xf3n, la SAS tiene como principal misi\xf3n potencializar la presencia de productos en el mercado, ofreciendo soluciones comerciales \xe1giles, relaci\xf3n cercana con los clientes y actuaci\xf3n directa en los principales puntos de distribuci\xf3n.",
                "Con una operaci\xf3n eficiente y altamente conectada a las demandas del sector hortofrut\xedcola, la SAS se posiciona como un puente entre importadores y proveedores, agregando valor a la cadena y garantizando la entrega de productos con calidad y frescura.",
              ],
            },
            contactPage: {
              title: "Contacto",
              phone: "+55 11 3641-2744",
              address:
                "Av. Jos\xe9 Cesar de Oliveira, 181 – Conj. 506/507\nCEP: 05317-000, S\xe3o Paulo/SP - Brasil",
              contactsTitle: "Contactos",
              contacts: i,
            },
            footer: {
              rights: "Todos los derechos reservados.",
              tagline: "Trading internacional de frutas frescas",
            },
          },
        },
        c = (0, o.createContext)(null);
      function l({ children: e }) {
        let [a, t] = (0, o.useState)("pt"),
          i = s[a];
        return (0, r.jsx)(c.Provider, {
          value: { language: a, setLanguage: t, t: i },
          children: e,
        });
      }
      function d() {
        let e = (0, o.useContext)(c);
        if (!e) throw Error("useTranslation must be used within LanguageProvider");
        return e;
      }
    },
    1354: (e, a, t) => {
      "use strict";
      (t.r(a), t.d(a, { default: () => c, metadata: () => s }));
      var r = t(2740),
        o = t(5858),
        i = t(4898),
        n = t(3852);
      t(1135);
      let s = {
        title: "Viva Frutas — Trading Internacional de Frutas",
        description:
          "Representamos produtores globais e garantimos qualidade na chegada, conectando origem e mercado com precis\xe3o.",
      };
      function c({ children: e }) {
        return (0, r.jsx)("html", {
          lang: "pt",
          children: (0, r.jsx)("body", {
            children: (0, r.jsxs)(o.LanguageProvider, {
              children: [
                (0, r.jsx)(i.Header, {}),
                (0, r.jsx)("main", { children: e }),
                (0, r.jsx)(n.Footer, {}),
              ],
            }),
          }),
        });
      }
    },
    3852: (e, a, t) => {
      "use strict";
      t.d(a, { Footer: () => r });
      let r = (0, t(6760).registerClientReference)(
        function () {
          throw Error(
            "Attempted to call Footer() from the server but Footer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "C:\\Users\\gabri\\fruit-bridge-global\\src\\components\\Footer.tsx",
        "Footer",
      );
    },
    4898: (e, a, t) => {
      "use strict";
      t.d(a, { Header: () => r });
      let r = (0, t(6760).registerClientReference)(
        function () {
          throw Error(
            "Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "C:\\Users\\gabri\\fruit-bridge-global\\src\\components\\Header.tsx",
        "Header",
      );
    },
    5858: (e, a, t) => {
      "use strict";
      t.d(a, { LanguageProvider: () => o });
      var r = t(6760);
      let o = (0, r.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call LanguageProvider() from the server but LanguageProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "C:\\Users\\gabri\\fruit-bridge-global\\src\\i18n\\LanguageContext.tsx",
        "LanguageProvider",
      );
      (0, r.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call useTranslation() from the server but useTranslation is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "C:\\Users\\gabri\\fruit-bridge-global\\src\\i18n\\LanguageContext.tsx",
        "useTranslation",
      );
    },
    7318: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => r });
      let r = {
        src: "/_next/static/media/logo-viva-fruta.e65eaff8.png",
        height: 497,
        width: 502,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUdLQ4NEwcFBQQEBAQEBAQDAwMEBAQsUQx3viiC1isOf0y2AAAACnRSTlMBPBonUkMxD0uwdjQcvwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADJJREFUeJw1yMkJgEAABMG5V/NPWFDsV9EAevDF68f9rh6TprHOaQKksiTAYcUBirzxARSQAKYXyvzhAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    1135: () => {},
  }));
