(() => {
  var e = {};
  ((e.id = 132),
    (e.ids = [132]),
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
      1275: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => n.a,
            __next_app__: () => c,
            pages: () => p,
            routeModule: () => u,
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
                "sas",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 7187)),
                        "C:\\Users\\gabri\\fruit-bridge-global\\src\\app\\sas\\page.tsx",
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
          p = ["C:\\Users\\gabri\\fruit-bridge-global\\src\\app\\sas\\page.tsx"],
          c = { require: r, loadChunk: () => Promise.resolve() },
          u = new a.AppPageRouteModule({
            definition: {
              kind: s.RouteKind.APP_PAGE,
              page: "/sas/page",
              pathname: "/sas",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      1465: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 7187));
      },
      3321: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 4492));
      },
      4492: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => l }));
        var a = r(5512),
          s = r(9187),
          i = r(5972),
          n = r(1119);
        let o = {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        };
        function l() {
          let { t: e } = (0, i.B)();
          return (0, a.jsxs)("div", {
            className: "pt-32 pb-24 lg:pt-40 lg:pb-32",
            children: [
              (0, a.jsxs)("div", {
                className: "mx-auto max-w-4xl px-6 lg:px-12 text-center mb-24",
                children: [
                  (0, a.jsx)(s.P.div, {
                    initial: { opacity: 0, scale: 0.85 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                    className: "flex justify-center",
                    children: (0, a.jsx)("img", {
                      src: n.A.src,
                      alt: "Viva Fruta SAS",
                      className: "h-56 lg:h-72 w-auto",
                    }),
                  }),
                  (0, a.jsx)(s.P.div, {
                    initial: { opacity: 0, width: 0 },
                    animate: { opacity: 1, width: "5rem" },
                    transition: { duration: 0.8, delay: 0.5 },
                    className: "h-0.5 bg-gold mx-auto mt-10",
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "mx-auto max-w-3xl px-6 lg:px-12 space-y-16",
                children: e.sasPage.paragraphs.map((t, r) =>
                  (0, a.jsx)(
                    s.P.div,
                    {
                      ...o,
                      transition: { ...o.transition, delay: 0.12 * r },
                      className: "relative",
                      children: (0, a.jsxs)("div", {
                        className: "flex items-start gap-6",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "hidden sm:flex flex-col items-center shrink-0 pt-1",
                            children: [
                              (0, a.jsx)("span", {
                                className:
                                  "w-8 h-8 rounded-full border-2 border-primary/30 flex items-center justify-center text-xs font-bold text-primary",
                                children: r + 1,
                              }),
                              r < e.sasPage.paragraphs.length - 1 &&
                                (0, a.jsx)("div", {
                                  className: "w-px flex-1 min-h-16 bg-border mt-3",
                                }),
                            ],
                          }),
                          (0, a.jsx)("p", {
                            className:
                              "text-foreground/80 text-base lg:text-lg leading-[1.85] font-light",
                            children: t,
                          }),
                        ],
                      }),
                    },
                    r,
                  ),
                ),
              }),
              (0, a.jsxs)(s.P.div, {
                ...o,
                className: "mx-auto max-w-3xl px-6 lg:px-12 mt-20",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-12",
                  }),
                  (0, a.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, a.jsx)("h3", {
                        className:
                          "text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4",
                        children: "Endere\xe7o",
                      }),
                      (0, a.jsxs)("p", {
                        className:
                          "text-foreground/80 text-base lg:text-lg font-light leading-relaxed",
                        children: [
                          "Gral. Dr Arturo J. Balinas",
                          (0, a.jsx)("br", {}),
                          "Montevideo, Uruguai",
                        ],
                      }),
                      (0, a.jsx)("p", {
                        className: "mt-3 text-sm text-muted-foreground",
                        children: "RUT: 219035730017",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
      },
      7187: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => a }));
        let a = (0, r(6760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"C:\\\\Users\\\\gabri\\\\fruit-bridge-global\\\\src\\\\app\\\\sas\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "C:\\Users\\gabri\\fruit-bridge-global\\src\\app\\sas\\page.tsx",
          "default",
        );
      },
      1119: (e, t, r) => {
        "use strict";
        r.d(t, { A: () => a });
        let a = {
          src: "/_next/static/media/vivafruta-sas-logo.0df12bd8.png",
          height: 450,
          width: 555,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAD1BMVEVMaXFLQD96aVangFmjW1X7Dg6/AAAABXRSTlMARS8KKnzkjj8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAcSURBVHicY2DAAliYmJiYGRgYmBkZGRlBDHQAAAKsABiptD31AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 6,
        };
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
    a = t.X(0, [638, 237, 77, 210], () => r(1275));
  module.exports = a;
})();
