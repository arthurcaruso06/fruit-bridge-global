(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [132],
  {
    3607: (e, a, t) => {
      Promise.resolve().then(t.bind(t, 8575));
    },
    8575: (e, a, t) => {
      "use strict";
      (t.r(a), t.d(a, { default: () => d }));
      var s = t(5155),
        i = t(5110),
        r = t(5656),
        l = t(4382);
      let n = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      };
      function d() {
        let { t: e } = (0, r.B)();
        return (0, s.jsxs)("div", {
          className: "pt-32 pb-24 lg:pt-40 lg:pb-32",
          children: [
            (0, s.jsxs)("div", {
              className: "mx-auto max-w-4xl px-6 lg:px-12 text-center mb-24",
              children: [
                (0, s.jsx)(i.P.div, {
                  initial: { opacity: 0, scale: 0.85 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                  className: "flex justify-center",
                  children: (0, s.jsx)("img", {
                    src: l.A.src,
                    alt: "Viva Fruta SAS",
                    className: "h-56 lg:h-72 w-auto",
                  }),
                }),
                (0, s.jsx)(i.P.div, {
                  initial: { opacity: 0, width: 0 },
                  animate: { opacity: 1, width: "5rem" },
                  transition: { duration: 0.8, delay: 0.5 },
                  className: "h-0.5 bg-gold mx-auto mt-10",
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "mx-auto max-w-3xl px-6 lg:px-12 space-y-16",
              children: e.sasPage.paragraphs.map((a, t) =>
                (0, s.jsx)(
                  i.P.div,
                  {
                    ...n,
                    transition: { ...n.transition, delay: 0.12 * t },
                    className: "relative",
                    children: (0, s.jsxs)("div", {
                      className: "flex items-start gap-6",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "hidden sm:flex flex-col items-center shrink-0 pt-1",
                          children: [
                            (0, s.jsx)("span", {
                              className:
                                "w-8 h-8 rounded-full border-2 border-primary/30 flex items-center justify-center text-xs font-bold text-primary",
                              children: t + 1,
                            }),
                            t < e.sasPage.paragraphs.length - 1 &&
                              (0, s.jsx)("div", {
                                className: "w-px flex-1 min-h-16 bg-border mt-3",
                              }),
                          ],
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "text-foreground/80 text-base lg:text-lg leading-[1.85] font-light",
                          children: a,
                        }),
                      ],
                    }),
                  },
                  t,
                ),
              ),
            }),
            (0, s.jsxs)(i.P.div, {
              ...n,
              className: "mx-auto max-w-3xl px-6 lg:px-12 mt-20",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-12",
                }),
                (0, s.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, s.jsx)("h3", {
                      className:
                        "text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4",
                      children: "Endere\xe7o",
                    }),
                    (0, s.jsxs)("p", {
                      className:
                        "text-foreground/80 text-base lg:text-lg font-light leading-relaxed",
                      children: [
                        "Gral. Dr Arturo J. Balinas",
                        (0, s.jsx)("br", {}),
                        "Montevideo, Uruguai",
                      ],
                    }),
                    (0, s.jsx)("p", {
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
    4382: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => s });
      let s = {
        src: "/_next/static/media/vivafruta-sas-logo.0df12bd8.png",
        height: 450,
        width: 555,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAD1BMVEVMaXFLQD96aVangFmjW1X7Dg6/AAAABXRSTlMARS8KKnzkjj8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAcSURBVHicY2DAAliYmJiYGRgYmBkZGRlBDHQAAAKsABiptD31AAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    (e.O(0, [110, 656, 441, 517, 358], () => a(3607)), (_N_E = e.O()));
  },
]);
