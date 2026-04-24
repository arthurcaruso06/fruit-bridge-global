(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    5868: (e, t, r) => {
      (Promise.resolve().then(r.t.bind(r, 347, 23)),
        Promise.resolve().then(r.bind(r, 4370)),
        Promise.resolve().then(r.bind(r, 5541)),
        Promise.resolve().then(r.bind(r, 5656)));
    },
    4370: (e, t, r) => {
      "use strict";
      r.d(t, { Footer: () => l });
      var n = r(5155),
        o = r(8173),
        a = r.n(o),
        s = r(5656),
        i = r(3535);
      function l() {
        let { t: e } = (0, s.B)();
        return (0, n.jsx)("footer", {
          className: "bg-foreground text-primary-foreground",
          children: (0, n.jsxs)("div", {
            className: "mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-20",
            children: [
              (0, n.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16",
                children: [
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)("img", {
                        src: i.A.src,
                        alt: "Viva Fruta",
                        className: "h-16 w-auto brightness-0 invert",
                      }),
                      (0, n.jsx)("p", {
                        className:
                          "mt-4 text-sm text-primary-foreground/60 leading-relaxed max-w-xs",
                        children: e.footer.tagline,
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)("h4", {
                        className:
                          "text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/40 mb-6",
                        children:
                          "Home" === e.nav.home
                            ? "Navigation"
                            : "Inicio" === e.nav.home
                              ? "Navegaci\xf3n"
                              : "Navega\xe7\xe3o",
                      }),
                      (0, n.jsxs)("nav", {
                        className: "flex flex-col gap-3",
                        children: [
                          (0, n.jsx)(a(), {
                            href: "/",
                            className:
                              "text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors",
                            children: e.nav.home,
                          }),
                          (0, n.jsx)(a(), {
                            href: "/history",
                            className:
                              "text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors",
                            children: e.nav.history,
                          }),
                          (0, n.jsx)(a(), {
                            href: "/team",
                            className:
                              "text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors",
                            children: e.nav.team,
                          }),
                          (0, n.jsx)(a(), {
                            href: "/sas",
                            className:
                              "text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors",
                            children: e.nav.sas,
                          }),
                          (0, n.jsx)(a(), {
                            href: "/contact",
                            className:
                              "text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors",
                            children: e.nav.contact,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)("h4", {
                        className:
                          "text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/40 mb-6",
                        children: e.contactPage.contactsTitle,
                      }),
                      (0, n.jsxs)("div", {
                        className: "space-y-3 text-sm text-primary-foreground/70",
                        children: [
                          (0, n.jsx)("p", { children: e.contactPage.phone }),
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("p", {
                                className:
                                  "text-xs uppercase tracking-wider text-primary-foreground/40 mb-1",
                                children: "Viva Fruta",
                              }),
                              (0, n.jsx)("p", {
                                className: "whitespace-pre-line",
                                children: e.contactPage.address,
                              }),
                              (0, n.jsx)("p", {
                                className: "mt-1",
                                children: "CNPJ: 18.792.280/0001-83",
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("p", {
                                className:
                                  "text-xs uppercase tracking-wider text-primary-foreground/40 mb-1",
                                children: "Viva Fruta SAS",
                              }),
                              (0, n.jsx)("p", {
                                children: "Gral. Dr Arturo J. Balinas – Montevideo, Uruguai",
                              }),
                              (0, n.jsx)("p", { children: "RUT: 219035730017" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className:
                  "mt-16 pt-8 border-t border-primary-foreground/10 text-xs text-primary-foreground/40",
                children: ["\xa9 ", new Date().getFullYear(), " Viva Frutas. ", e.footer.rights],
              }),
            ],
          }),
        });
      }
    },
    5541: (e, t, r) => {
      "use strict";
      r.d(t, { Header: () => C });
      var n = r(5155),
        o = r(8173),
        a = r.n(o),
        s = r(6658),
        i = r(5656),
        l = r(2115),
        c = r(4710),
        d = r(9234),
        h = r(1023),
        u = r(9656),
        m = r(2804),
        p = r(7249);
      function f(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      class x extends l.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if ((0, m.s)(t) && e.isPresent && !this.props.isPresent && !1 !== this.props.pop) {
            let e = t.offsetParent,
              r = ((0, m.s)(e) && e.offsetWidth) || 0,
              n = ((0, m.s)(e) && e.offsetHeight) || 0,
              o = getComputedStyle(t),
              a = this.props.sizeRef.current;
            ((a.height = parseFloat(o.height)),
              (a.width = parseFloat(o.width)),
              (a.top = t.offsetTop),
              (a.left = t.offsetLeft),
              (a.right = r - a.width - a.left),
              (a.bottom = n - a.height - a.top));
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function g(e) {
        var t, r;
        let { children: o, isPresent: a, anchorX: s, anchorY: i, root: c, pop: d } = e,
          h = (0, l.useId)(),
          u = (0, l.useRef)(null),
          m = (0, l.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
          { nonce: g } = (0, l.useContext)(p.Q),
          v = (function (...e) {
            return l.useCallback(
              (function (...e) {
                return (t) => {
                  let r = !1,
                    n = e.map((e) => {
                      let n = f(e, t);
                      return (r || "function" != typeof n || (r = !0), n);
                    });
                  if (r)
                    return () => {
                      for (let t = 0; t < n.length; t++) {
                        let r = n[t];
                        "function" == typeof r ? r() : f(e[t], null);
                      }
                    };
                };
              })(...e),
              e,
            );
          })(
            u,
            null !== (r = null === (t = o.props) || void 0 === t ? void 0 : t.ref) && void 0 !== r
              ? r
              : null == o
                ? void 0
                : o.ref,
          );
        return (
          (0, l.useInsertionEffect)(() => {
            let { width: e, height: t, top: r, left: n, right: o, bottom: l } = m.current;
            if (a || !1 === d || !u.current || !e || !t) return;
            u.current.dataset.motionPopId = h;
            let p = document.createElement("style");
            g && (p.nonce = g);
            let f = null != c ? c : document.head;
            return (
              f.appendChild(p),
              p.sheet &&
                p.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      h,
                      '"] {\n            position: absolute !important;\n            width: ',
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            ")
                    .concat(
                      "left" === s ? "left: ".concat(n) : "right: ".concat(o),
                      "px !important;\n            ",
                    )
                    .concat(
                      "bottom" === i ? "bottom: ".concat(l) : "top: ".concat(r),
                      "px !important;\n          }\n        ",
                    ),
                ),
              () => {
                var e;
                (null === (e = u.current) ||
                  void 0 === e ||
                  e.removeAttribute("data-motion-pop-id"),
                  f.contains(p) && f.removeChild(p));
              }
            );
          }, [a]),
          (0, n.jsx)(x, {
            isPresent: a,
            childRef: u,
            sizeRef: m,
            pop: d,
            children: !1 === d ? o : l.cloneElement(o, { ref: v }),
          })
        );
      }
      let v = (e) => {
        let {
            children: t,
            initial: r,
            isPresent: o,
            onExitComplete: a,
            custom: s,
            presenceAffectsLayout: i,
            mode: c,
            anchorX: h,
            anchorY: m,
            root: p,
          } = e,
          f = (0, d.M)(b),
          x = (0, l.useId)(),
          v = !0,
          A = (0, l.useMemo)(
            () => (
              (v = !1),
              {
                id: x,
                initial: r,
                isPresent: o,
                custom: s,
                onExitComplete: (e) => {
                  for (let t of (f.set(e, !0), f.values())) if (!t) return;
                  a && a();
                },
                register: (e) => (f.set(e, !1), () => f.delete(e)),
              }
            ),
            [o, f, a],
          );
        return (
          i && v && (A = { ...A }),
          (0, l.useMemo)(() => {
            f.forEach((e, t) => f.set(t, !1));
          }, [o]),
          l.useEffect(() => {
            o || f.size || !a || a();
          }, [o]),
          (t = (0, n.jsx)(g, {
            pop: "popLayout" === c,
            isPresent: o,
            anchorX: h,
            anchorY: m,
            root: p,
            children: t,
          })),
          (0, n.jsx)(u.t.Provider, { value: A, children: t })
        );
      };
      function b() {
        return new Map();
      }
      var A = r(5087);
      let y = (e) => e.key || "";
      function j(e) {
        let t = [];
        return (
          l.Children.forEach(e, (e) => {
            (0, l.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      let w = (e) => {
        let {
            children: t,
            custom: r,
            initial: o = !0,
            onExitComplete: a,
            presenceAffectsLayout: s = !0,
            mode: i = "sync",
            propagate: u = !1,
            anchorX: m = "left",
            anchorY: p = "top",
            root: f,
          } = e,
          [x, g] = (0, A.xQ)(u),
          b = (0, l.useMemo)(() => j(t), [t]),
          w = u && !x ? [] : b.map(y),
          N = (0, l.useRef)(!0),
          E = (0, l.useRef)(b),
          k = (0, d.M)(() => new Map()),
          C = (0, l.useRef)(new Set()),
          [M, P] = (0, l.useState)(b),
          [B, F] = (0, l.useState)(b);
        (0, h.E)(() => {
          ((N.current = !1), (E.current = b));
          for (let e = 0; e < B.length; e++) {
            let t = y(B[e]);
            w.includes(t) ? (k.delete(t), C.current.delete(t)) : !0 !== k.get(t) && k.set(t, !1);
          }
        }, [B, w.length, w.join("-")]);
        let R = [];
        if (b !== M) {
          let e = [...b];
          for (let t = 0; t < B.length; t++) {
            let r = B[t],
              n = y(r);
            w.includes(n) || (e.splice(t, 0, r), R.push(r));
          }
          return ("wait" === i && R.length && (e = R), F(j(e)), P(b), null);
        }
        let { forceRender: S } = (0, l.useContext)(c.L);
        return (0, n.jsx)(n.Fragment, {
          children: B.map((e) => {
            let t = y(e),
              l = (!u || !!x) && (b === B || w.includes(t));
            return (0, n.jsx)(
              v,
              {
                isPresent: l,
                initial: (!N.current || !!o) && void 0,
                custom: r,
                presenceAffectsLayout: s,
                mode: i,
                root: f,
                onExitComplete: l
                  ? void 0
                  : () => {
                      if (C.current.has(t) || !k.has(t)) return;
                      (C.current.add(t), k.set(t, !0));
                      let e = !0;
                      (k.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (null == S || S(), F(E.current), u && (null == g || g()), a && a()));
                    },
                anchorX: m,
                anchorY: p,
                children: e,
              },
              t,
            );
          }),
        });
      };
      var N = r(5110),
        E = r(3535);
      let k = [
        { code: "pt", label: "PT" },
        { code: "en", label: "EN" },
        { code: "es", label: "ES" },
      ];
      function C() {
        let { language: e, setLanguage: t, t: r } = (0, i.B)(),
          [o, c] = (0, l.useState)(!1),
          [d, h] = (0, l.useState)(!1),
          [u, m] = (0, l.useState)(!1),
          p = (0, s.usePathname)(),
          f = "/" === p;
        ((0, l.useEffect)(() => {
          let e = window.scrollY,
            t = () => {
              let t = window.scrollY;
              (c(t > 60), t > e && t > 100 && !u ? h(!0) : (t < e || t <= 100) && h(!1), (e = t));
            };
          return (
            window.addEventListener("scroll", t, { passive: !0 }),
            () => window.removeEventListener("scroll", t)
          );
        }, [u]),
          (0, l.useEffect)(() => m(!1), [p]));
        let x = [
            { href: "/", label: r.nav.home },
            { href: "/history", label: r.nav.history },
            { href: "/team", label: r.nav.team },
            { href: "/sas", label: r.nav.sas },
            { href: "/contact", label: r.nav.contact },
          ],
          g = o || !f || u ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent",
          v = o || !f ? "text-foreground" : "text-primary-foreground";
        return (0, n.jsxs)("header", {
          className: "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out "
            .concat(g, " ")
            .concat(d ? "-translate-y-full" : "translate-y-0"),
          children: [
            (0, n.jsx)("div", {
              className: "mx-auto max-w-7xl px-6 lg:px-12",
              children: (0, n.jsxs)("div", {
                className: "flex h-20 items-center justify-between",
                children: [
                  (0, n.jsx)(a(), {
                    href: "/",
                    className: "flex items-center transition-colors",
                    children: (0, n.jsx)("img", {
                      src: E.A.src,
                      alt: "Viva Fruta",
                      className: "h-14 w-auto transition-all duration-500 ".concat(
                        o || !f ? "" : "brightness-0 invert",
                      ),
                    }),
                  }),
                  (0, n.jsx)("nav", {
                    className: "hidden lg:flex items-center gap-10",
                    children: x.map((e) =>
                      (0, n.jsx)(
                        a(),
                        {
                          href: e.href,
                          className:
                            "text-sm font-medium tracking-wide transition-colors hover:opacity-70 "
                              .concat(v, " ")
                              .concat(p === e.href ? "!opacity-100 border-b border-current" : ""),
                          children: e.label,
                        },
                        e.href,
                      ),
                    ),
                  }),
                  (0, n.jsx)("div", {
                    className: "hidden lg:flex items-center gap-1",
                    children: k.map((r) =>
                      (0, n.jsx)(
                        "button",
                        {
                          onClick: () => t(r.code),
                          className:
                            "px-2 py-1 text-xs font-medium tracking-wider transition-colors ".concat(
                              e === r.code
                                ? "".concat(v, " opacity-100")
                                : "".concat(v, " opacity-50 hover:opacity-75"),
                            ),
                          children: r.label,
                        },
                        r.code,
                      ),
                    ),
                  }),
                  (0, n.jsx)("button", {
                    onClick: () => m(!u),
                    className: "lg:hidden p-2 ".concat(
                      o || !f ? "text-foreground" : "text-primary-foreground",
                    ),
                    "aria-label": "Menu",
                    children: (0, n.jsx)("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "1.5",
                      children: u
                        ? (0, n.jsx)("path", { d: "M6 6l12 12M6 18L18 6" })
                        : (0, n.jsx)("path", { d: "M4 8h16M4 16h16" }),
                    }),
                  }),
                ],
              }),
            }),
            (0, n.jsx)(w, {
              children:
                u &&
                (0, n.jsx)(N.P.div, {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: { opacity: 0, height: 0 },
                  className: "lg:hidden bg-background border-t border-border overflow-hidden",
                  children: (0, n.jsxs)("div", {
                    className: "px-6 py-8 flex flex-col gap-6",
                    children: [
                      x.map((e) =>
                        (0, n.jsx)(
                          a(),
                          {
                            href: e.href,
                            className: "text-foreground text-lg font-serif tracking-wide ".concat(
                              p === e.href ? "text-primary" : "",
                            ),
                            children: e.label,
                          },
                          e.href,
                        ),
                      ),
                      (0, n.jsx)("div", {
                        className: "flex gap-3 pt-4 border-t border-border",
                        children: k.map((r) =>
                          (0, n.jsx)(
                            "button",
                            {
                              onClick: () => t(r.code),
                              className:
                                "px-3 py-1.5 text-sm font-medium tracking-wider transition-colors ".concat(
                                  e === r.code
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:text-foreground",
                                ),
                              children: r.label,
                            },
                            r.code,
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
    347: () => {},
    3535: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = {
        src: "/_next/static/media/logo-viva-fruta.e65eaff8.png",
        height: 497,
        width: 502,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUdLQ4NEwcFBQQEBAQEBAQDAwMEBAQsUQx3viiC1isOf0y2AAAACnRSTlMBPBonUkMxD0uwdjQcvwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADJJREFUeJw1yMkJgEAABMG5V/NPWFDsV9EAevDF68f9rh6TprHOaQKksiTAYcUBirzxARSQAKYXyvzhAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [690, 110, 173, 656, 441, 517, 358], () => t(5868)), (_N_E = e.O()));
  },
]);
