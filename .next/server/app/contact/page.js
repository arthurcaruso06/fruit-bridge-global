(() => {
  var e = {};
  ((e.id = 977),
    (e.ids = [977]),
    (e.modules = {
      846: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      9121: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/action-async-storage.external.js");
      },
      3295: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
      },
      9294: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      3033: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      3873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      9551: (e) => {
        "use strict";
        e.exports = require("url");
      },
      4729: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => n.a,
            __next_app__: () => p,
            pages: () => c,
            routeModule: () => m,
            tree: () => d,
          }));
        var a = r(260),
          s = r(8203),
          i = r(5155),
          n = r.n(i),
          o = r(7292),
          l = {};
        for (let e in o)
          0 >
            ["default", "tree", "pages", "GlobalError", "__next_app__", "routeModule"].indexOf(e) &&
            (l[e] = () => o[e]);
        r.d(t, l);
        let d = [
            "",
            {
              children: [
                "contact",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 6450)),
                        "C:\\Users\\gabri\\fruit-bridge-global\\src\\app\\contact\\page.tsx",
                      ],
                    },
                  ],
                },
                {
                  metadata: {
                    icon: [async (e) => (await Promise.resolve().then(r.bind(r, 8162))).default(e)],
                    apple: [],
                    openGraph: [],
                    twitter: [],
                    manifest: void 0,
                  },
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 1354)),
                "C:\\Users\\gabri\\fruit-bridge-global\\src\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(r.t.bind(r, 9937, 23)),
                "next/dist/client/components/not-found-error",
              ],
              forbidden: [
                () => Promise.resolve().then(r.t.bind(r, 9116, 23)),
                "next/dist/client/components/forbidden-error",
              ],
              unauthorized: [
                () => Promise.resolve().then(r.t.bind(r, 1485, 23)),
                "next/dist/client/components/unauthorized-error",
              ],
              metadata: {
                icon: [async (e) => (await Promise.resolve().then(r.bind(r, 8162))).default(e)],
                apple: [],
                openGraph: [],
                twitter: [],
                manifest: void 0,
              },
            },
          ],
          c = ["C:\\Users\\gabri\\fruit-bridge-global\\src\\app\\contact\\page.tsx"],
          p = { require: r, loadChunk: () => Promise.resolve() },
          m = new a.AppPageRouteModule({
            definition: {
              kind: s.RouteKind.APP_PAGE,
              page: "/contact/page",
              pathname: "/contact",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      1858: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 6450));
      },
      5066: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 2622));
      },
      2622: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => o }));
        var a = r(5512),
          s = r(9187),
          i = r(5972);
        let n = {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        };
        function o() {
          let { t: e } = (0, i.B)();
          return (0, a.jsxs)("div", {
            className: "pt-32 pb-24 lg:pt-40 lg:pb-32",
            children: [
              (0, a.jsxs)("div", {
                className: "mx-auto max-w-5xl px-6 lg:px-12 mb-16",
                children: [
                  (0, a.jsx)(s.P.div, {
                    initial: { opacity: 0, width: 0 },
                    animate: { opacity: 1, width: "4rem" },
                    transition: { duration: 0.8 },
                    className: "h-px bg-primary mb-8",
                  }),
                  (0, a.jsx)(s.P.h1, {
                    initial: { opacity: 0, y: 40 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, delay: 0.1 },
                    className: "font-serif text-4xl lg:text-6xl font-light text-foreground",
                    children: e.contactPage.title,
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "mx-auto max-w-5xl px-6 lg:px-12 mb-20",
                children: (0, a.jsxs)(s.P.div, {
                  ...n,
                  className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "p-8 lg:p-10 border border-border bg-card hover:border-primary/30 transition-all duration-500",
                      children: [
                        (0, a.jsx)("span", {
                          className: "text-2xl mb-4 block",
                          children: "\uD83D\uDCDE",
                        }),
                        (0, a.jsx)("h3", {
                          className:
                            "text-xs font-medium tracking-[0.2em] uppercase text-primary/60 mb-4",
                          children:
                            "Contatos" === e.contactPage.title
                              ? "Telefone"
                              : "Contact" === e.contactPage.title
                                ? "Phone"
                                : "Tel\xe9fono",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-lg text-foreground font-light",
                          children: e.contactPage.phone,
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "p-8 lg:p-10 border border-border bg-card hover:border-primary/30 transition-all duration-500",
                      children: [
                        (0, a.jsx)("span", {
                          className: "text-2xl mb-4 block",
                          children: "\uD83D\uDCCD",
                        }),
                        (0, a.jsx)("h3", {
                          className:
                            "text-xs font-medium tracking-[0.2em] uppercase text-primary/60 mb-4",
                          children:
                            "Contatos" === e.contactPage.title
                              ? "Endere\xe7o"
                              : "Contact" === e.contactPage.title
                                ? "Address"
                                : "Direcci\xf3n",
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "text-foreground/80 whitespace-pre-line leading-relaxed font-light",
                          children: e.contactPage.address,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)("div", {
                className: "mx-auto max-w-5xl px-6 lg:px-12",
                children: [
                  (0, a.jsxs)(s.P.div, {
                    ...n,
                    className: "flex items-center gap-4 mb-10",
                    children: [
                      (0, a.jsx)("div", { className: "h-px w-12 bg-primary/30" }),
                      (0, a.jsx)("h2", {
                        className: "font-serif text-2xl lg:text-3xl font-light text-foreground",
                        children: e.contactPage.contactsTitle,
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
                    children: e.contactPage.contacts.map((e, t) =>
                      (0, a.jsxs)(
                        s.P.div,
                        {
                          ...n,
                          transition: { ...n.transition, delay: 0.06 * t },
                          className:
                            "group p-6 lg:p-8 border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-500",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4",
                              children: (0, a.jsx)("span", {
                                className: "text-primary font-serif text-sm font-medium",
                                children: e.name
                                  .split(" ")
                                  .map((e) => e[0])
                                  .join(""),
                              }),
                            }),
                            (0, a.jsx)("h3", {
                              className: "font-medium text-foreground mb-3",
                              children: e.name,
                            }),
                            (0, a.jsxs)("div", {
                              className: "space-y-2 text-sm",
                              children: [
                                (0, a.jsx)("a", {
                                  href: `mailto:${e.email}`,
                                  className:
                                    "block text-primary hover:text-primary/80 transition-colors",
                                  children: e.email,
                                }),
                                (0, a.jsx)("a", {
                                  href: `tel:${e.phone.replace(/\s/g, "")}`,
                                  className:
                                    "block text-muted-foreground hover:text-foreground transition-colors",
                                  children: e.phone,
                                }),
                              ],
                            }),
                          ],
                        },
                        e.email,
                      ),
                    ),
                  }),
                ],
              }),
              (0, a.jsx)(s.P.div, {
                ...n,
                className: "mx-auto max-w-5xl px-6 lg:px-12 mt-20",
                children: (0, a.jsx)("div", {
                  className: "h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent",
                }),
              }),
            ],
          });
        }
      },
      6450: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => a }));
        let a = (0, r(6760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"C:\\\\Users\\\\gabri\\\\fruit-bridge-global\\\\src\\\\app\\\\contact\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "C:\\Users\\gabri\\fruit-bridge-global\\src\\app\\contact\\page.tsx",
          "default",
        );
      },
      8162: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => s }));
        var a = r(8077);
        let s = async (e) => [
          {
            type: "image/png",
            sizes: "502x497",
            url: (0, a.fillMetadataSegment)(".", await e.params, "icon.png") + "?e65eaff8f9abf9fc",
          },
        ];
      },
    }));
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    a = t.X(0, [638, 237, 77, 210], () => r(4729));
  module.exports = a;
})();
