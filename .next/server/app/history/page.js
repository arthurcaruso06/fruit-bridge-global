(() => {
  var e = {};
  ((e.id = 429),
    (e.ids = [429]),
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
      3189: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => n.a,
            __next_app__: () => c,
            pages: () => p,
            routeModule: () => u,
            tree: () => d,
          }));
        var i = r(260),
          a = r(8203),
          s = r(5155),
          n = r.n(s),
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
                "history",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 5230)),
                        "C:\\Users\\gabri\\fruit-bridge-global\\src\\app\\history\\page.tsx",
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
          p = ["C:\\Users\\gabri\\fruit-bridge-global\\src\\app\\history\\page.tsx"],
          c = { require: r, loadChunk: () => Promise.resolve() },
          u = new i.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: "/history/page",
              pathname: "/history",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      2878: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 5230));
      },
      5926: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 9658));
      },
      9658: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => o }));
        var i = r(5512),
          a = r(9187),
          s = r(5972);
        let n = {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        };
        function o() {
          let { t: e } = (0, s.B)();
          return (0, i.jsxs)("div", {
            className: "pt-32 pb-24 lg:pt-40 lg:pb-32",
            children: [
              (0, i.jsxs)("div", {
                className: "mx-auto max-w-4xl px-6 lg:px-12 mb-20",
                children: [
                  (0, i.jsx)(a.P.div, {
                    initial: { opacity: 0, width: 0 },
                    animate: { opacity: 1, width: "4rem" },
                    transition: { duration: 0.8 },
                    className: "h-px bg-primary mb-8",
                  }),
                  (0, i.jsx)(a.P.h1, {
                    initial: { opacity: 0, y: 40 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, delay: 0.1 },
                    className: "font-serif text-4xl lg:text-6xl font-light text-foreground",
                    children: e.historyPage.title,
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "mx-auto max-w-4xl px-6 lg:px-12",
                children: (0, i.jsxs)("div", {
                  className: "relative",
                  children: [
                    (0, i.jsx)(a.P.div, {
                      initial: { height: 0 },
                      whileInView: { height: "100%" },
                      viewport: { once: !0 },
                      transition: { duration: 1.5, ease: "easeOut" },
                      className:
                        "absolute left-0 lg:left-8 top-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent",
                    }),
                    (0, i.jsx)("div", {
                      className: "space-y-12 pl-8 lg:pl-20",
                      children: e.historyPage.paragraphs.map((e, t) => {
                        let r = e.startsWith('"');
                        return (0, i.jsxs)(
                          a.P.div,
                          {
                            ...n,
                            transition: { ...n.transition, delay: 0.12 * t },
                            className: "relative",
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "absolute -left-8 lg:-left-20 top-2 w-2 h-2 rounded-full bg-primary/50",
                              }),
                              r
                                ? (0, i.jsx)("blockquote", {
                                    className:
                                      "text-xl lg:text-2xl font-serif italic text-primary leading-relaxed py-4 px-6 bg-primary/5 border-l-2 border-primary/30",
                                    children: e,
                                  })
                                : (0, i.jsx)("p", {
                                    className:
                                      "text-lg text-foreground/75 leading-relaxed font-light",
                                    children: e,
                                  }),
                            ],
                          },
                          t,
                        );
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
      },
      5230: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => i }));
        let i = (0, r(6760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"C:\\\\Users\\\\gabri\\\\fruit-bridge-global\\\\src\\\\app\\\\history\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "C:\\Users\\gabri\\fruit-bridge-global\\src\\app\\history\\page.tsx",
          "default",
        );
      },
      8162: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => a }));
        var i = r(8077);
        let a = async (e) => [
          {
            type: "image/png",
            sizes: "502x497",
            url: (0, i.fillMetadataSegment)(".", await e.params, "icon.png") + "?e65eaff8f9abf9fc",
          },
        ];
      },
    }));
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    i = t.X(0, [638, 237, 77, 210], () => r(3189));
  module.exports = i;
})();
