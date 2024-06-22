import {
  a as $
} from "./chunk-NWX5UUXS.mjs";
import {
  $ as be,
  A as P,
  C as pe,
  F as ce,
  H as z,
  I as de,
  J as he,
  K as ge,
  L as we,
  N as G,
  O as xe,
  P as ue,
  Q as x,
  U as w,
  Y as K,
  Z as ye,
  aa as ve,
  b as r,
  ba as i,
  ca as t,
  d as V,
  ea as p,
  f as se,
  fa as Z,
  ga as ke,
  h as R,
  i as me,
  j as le,
  k as L,
  m as q,
  n as e,
  o as a,
  p as T,
  q as n,
  r as X,
  s as E,
  u as fe,
  y as S,
} from "./chunk-SIMMK6WU.mjs";
import "./chunk-ELYU6EKT.mjs";
var _ = de(i),
  ze = ["oi2zZ5lwZ", "Hl0QjdhpJ", "xL9N13qYx", "W_jky5F8m"],
  Fe = "framer-OdOZk",
  De = {
    Hl0QjdhpJ: "framer-v-1w6f9z4",
    oi2zZ5lwZ: "framer-v-1rivsvj",
    W_jky5F8m: "framer-v-q62eb8",
    xL9N13qYx: "framer-v-2g3c1a",
  };

function y(m, ...s) {
  let h = {};
  return s ?.forEach((c) => c && Object.assign(h, m[c])), h;
}
var Ve = {
    damping: 60,
    delay: 0,
    mass: 1,
    stiffness: 500,
    type: "spring"
  },
  M = (m, s) => `translate(-50%, -50%) ${s}`,
  Re = {
    damping: 30,
    delay: 0,
    mass: 1,
    stiffness: 250,
    type: "spring"
  },
  j = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Re,
    x: 0,
    y: 0,
  },
  ee = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: -150,
    y: 0,
  },
  re = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 150,
    y: 0,
  },
  Te = ({
    value: m,
    children: s
  }) => {
    let h = se(T),
      c = m ?? h.transition,
      g = le(() => ({
        ...h,
        transition: c
      }), [JSON.stringify(c)]);
    return e(T.Provider, {
      value: g,
      children: s
    });
  },
  Se = n(r),
  Ge = {
    "Variant 1": "oi2zZ5lwZ",
    "Variant 3": "xL9N13qYx",
    "Varient 2": "Hl0QjdhpJ",
    "Varient 4": "W_jky5F8m",
  },
  Ke = ({
    height: m,
    id: s,
    width: h,
    ...c
  }) => {
    var g, b;
    return {
      ...c,
      variant: (b = (g = Ge[c.variant]) !== null && g !== void 0 ? g : c.variant) !==
        null && b !== void 0 ?
        b :
        "oi2zZ5lwZ",
    };
  },
  Ze = (m, s) =>
  m.layoutDependency ? s.join("-") + m.layoutDependency : s.join("-"),
  _e = V(function (m, s) {
    let {
      activeLocale: h,
      setLocale: c
    } = S(), {
        style: g,
        className: b,
        layoutId: v,
        variant: W,
        ...U
      } = Ke(m), {
        baseVariant: d,
        classNames: ae,
        gestureHandlers: ne,
        gestureVariant: u,
        setGestureState: Me,
        setVariant: k,
        variants: D,
      } = ve({
        cycleOrder: ze,
        defaultVariant: "oi2zZ5lwZ",
        variant: W,
        variantClassNames: De,
      }),
      o = Ze(m, D), {
        activeVariantCallback: C,
        delay: O
      } = K(d),
      Y = C(async (...J) => {
        await O(() => k("oi2zZ5lwZ"), 300);
      }),
      N = C(async (...J) => {
        await O(() => k("Hl0QjdhpJ"), 300);
      }),
      A = C(async (...J) => {
        await O(() => k("xL9N13qYx"), 300);
      }),
      l = C(async (...J) => {
        await O(() => k("W_jky5F8m"), 300);
      }),
      H = L(null),
      f = () => d === "Hl0QjdhpJ",
      Q = () => d === "xL9N13qYx",
      oe = () => !["Hl0QjdhpJ", "xL9N13qYx", "W_jky5F8m"].includes(d),
      je = () => !!["xL9N13qYx", "W_jky5F8m"].includes(d),
      ie = () => d === "W_jky5F8m",
      Ne = R(),
      Ae = [],
      $e = he();
    return e(E, {
      id: v ?? Ne,
      children: e(Se, {
        animate: D,
        initial: !1,
        children: e(Te, {
          value: Ve,
          children: a(n.div, {
            ...U,
            ...ne,
            className: z(Fe, ...Ae, "framer-1rivsvj", b, ae),
            "data-framer-name": "Variant 1",
            layoutDependency: o,
            layoutId: "oi2zZ5lwZ",
            ref: s ?? H,
            style: {
              ...g
            },
            ...y({
                Hl0QjdhpJ: {
                  "data-framer-name": "Varient 2"
                },
                W_jky5F8m: {
                  "data-framer-name": "Varient 4"
                },
                xL9N13qYx: {
                  "data-framer-name": "Variant 3"
                },
              },
              d,
              u
            ),
            children: [
              f() &&
              e(n.div, {
                className: "framer-1hdmnmr",
                "data-highlight": !0,
                layoutDependency: o,
                layoutId: "SE4OUWDt_",
                onTap: Y,
                style: {
                  backgroundColor: "rgba(255, 0, 0, 0.71)"
                },
                children: e(t, {
                  __fromCanvasComponent: !0,
                  children: e(r, {
                    children: e(n.p, {
                      style: {
                        "--font-selector": "R0Y7QWNtZS1yZWd1bGFy",
                        "--framer-font-family": '"Acme", "Acme Placeholder", sans-serif',
                        "--framer-font-size": "21px",
                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                      },
                      children: "<< BACK",
                    }),
                  }),
                  className: "framer-1xgd15w",
                  fonts: ["GF;Acme-regular"],
                  layoutDependency: o,
                  layoutId: "UvuYBMhJN",
                  style: {
                    "--extracted-r6o4lv": "rgb(255, 255, 255)",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  transformTemplate: M,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              }),
              Q() &&
              a(i, {
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 1535,
                  intrinsicWidth: 1209,
                  pixelHeight: 3070,
                  pixelWidth: 2418,
                  src: "/images/ihWAwIhlUdrsQHv5mn8TmgZRxs.png?scale-down-to=2048",
                },
                className: "framer-1tnht09",
                "data-framer-name": "Munchy_Eps_4",
                layoutDependency: o,
                layoutId: "rVuhCT1JS",
                ...y({
                    xL9N13qYx: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 1535,
                        intrinsicWidth: 1209,
                        pixelHeight: 3070,
                        pixelWidth: 2418,
                        sizes: "662px",
                        src: "/images/ihWAwIhlUdrsQHv5mn8TmgZRxs.png?scale-down-to=2048",
                      },
                    },
                  },
                  d,
                  u
                ),
                children: [
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "29px",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-1uth3fy",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "hRgByVFE1",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "22px",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-i4k4ku",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "iNjtGHKTx",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "22px",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-84l7v6",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "OyoCFbIn7",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                ],
              }),
              oe() &&
              e(_, {
                __perspectiveFX: !1,
                __smartComponentFX: !0,
                __targetOpacity: 1,
                animate: w("animate", "1ltmlfg", j, "1rivsvj"),
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 418.5,
                  intrinsicWidth: 328.5,
                  pixelHeight: 837,
                  pixelWidth: 657,
                  sizes: "658px",
                  src: "/images/Xf03sBrMf5sIT3zesEvqpONTT0.png?scale-down-to=512",
                },
                className: "framer-1ltmlfg",
                "data-framer-appear-id": "1ltmlfg",
                "data-framer-name": "Munchy_Eps_0",
                initial: w("initial", "1ltmlfg", ee, "1rivsvj"),
                layoutDependency: o,
                layoutId: "zaIwNhSu2",
              }),
              f() &&
              e(_, {
                __perspectiveFX: !1,
                __smartComponentFX: !0,
                __targetOpacity: 1,
                animate: w("animate", "s0bmg4", j, "1rivsvj"),
                background: {
                  alt: "",
                  fit: "fill",
                  src: "/images/3focQFXTR389pzgxcT4bILOAZM.jpg",
                },
                className: "framer-s0bmg4",
                "data-framer-appear-id": "s0bmg4",
                "data-framer-name": "Munchy - Eps 3",
                initial: w("initial", "s0bmg4", re, "1rivsvj"),
                layoutDependency: o,
                layoutId: "PaW_S2Zsd",
                ...y({
                    Hl0QjdhpJ: {
                      "data-framer-appear-id": "izcaqr",
                      animate: w("animate", "izcaqr", j, "1w6f9z4"),
                      background: {
                        alt: "",
                        fit: "fill",
                        sizes: "662px",
                        src: "/images/3focQFXTR389pzgxcT4bILOAZM.jpg",
                      },
                      initial: w("initial", "izcaqr", re, "1w6f9z4"),
                    },
                  },
                  d,
                  u
                ),
                children: a(i, {
                  background: {
                    alt: "",
                    fit: "fill",
                    sizes: "661px",
                    src: "/images/kIXIZWP2m1u6gC41L7qaOjqGAlI.jpg",
                  },
                  className: "framer-10v2oda",
                  "data-framer-name": "Munchy - Eps 3",
                  layoutDependency: o,
                  layoutId: "cO62VtVgy",
                  children: [
                    f() &&
                    e(t, {
                      __fromCanvasComponent: !0,
                      children: e(r, {
                        children: e(n.p, {
                          style: {
                            "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                            "--framer-font-family": '"ADLaM Display", sans-serif',
                            "--framer-font-size": "22px",
                          },
                          children: "$BUNCHY on Eth",
                        }),
                      }),
                      className: "framer-1n7s6ka",
                      fonts: ["GF;ADLaM Display-regular"],
                      layoutDependency: o,
                      layoutId: "zniAvGVVS",
                      style: {
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    e(t, {
                      __fromCanvasComponent: !0,
                      children: e(r, {
                        children: e(n.p, {
                          style: {
                            "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                            "--framer-font-family": '"ADLaM Display", sans-serif',
                            "--framer-font-size": "13px",
                          },
                          children: "$BUNCHY on Eth",
                        }),
                      }),
                      className: "framer-19io5cq",
                      fonts: ["GF;ADLaM Display-regular"],
                      layoutDependency: o,
                      layoutId: "BP6bjErTx",
                      style: {
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    e(t, {
                      __fromCanvasComponent: !0,
                      children: e(r, {
                        children: e(n.p, {
                          style: {
                            "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                            "--framer-font-family": '"ADLaM Display", sans-serif',
                            "--framer-font-size": "10px",
                          },
                          children: "$BUNCHY on Eth",
                        }),
                      }),
                      className: "framer-nnm4an",
                      fonts: ["GF;ADLaM Display-regular"],
                      layoutDependency: o,
                      layoutId: "XBxgoytZu",
                      style: {
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    e(t, {
                      __fromCanvasComponent: !0,
                      children: e(r, {
                        children: e(n.p, {
                          style: {
                            "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                            "--framer-font-family": '"ADLaM Display", sans-serif',
                            "--framer-font-size": "15px",
                            "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children: "$BUNCHY on Eth",
                        }),
                      }),
                      className: "framer-17nbxje",
                      fonts: ["GF;ADLaM Display-regular"],
                      layoutDependency: o,
                      layoutId: "wazq1TaKR",
                      style: {
                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
              f() &&
              a(_, {
                __perspectiveFX: !1,
                __smartComponentFX: !0,
                __targetOpacity: 1,
                animate: w("animate", "1sspbor", j, "1rivsvj"),
                background: {
                  alt: "",
                  fit: "fill",
                  src: "/images/TDGZlphjumkyFUuO4Cdf5TZ5d7E.jpg",
                },
                className: "framer-1sspbor",
                "data-framer-appear-id": "1sspbor",
                "data-framer-name": "Munchy - Eps 2",
                initial: w("initial", "1sspbor", ee, "1rivsvj"),
                layoutDependency: o,
                layoutId: "cOOnk1Lag",
                ...y({
                    Hl0QjdhpJ: {
                      "data-framer-appear-id": "1qr1jwx",
                      animate: w("animate", "1qr1jwx", j, "1w6f9z4"),
                      background: {
                        alt: "",
                        fit: "fill",
                        sizes: "660px",
                        src: "/images/TDGZlphjumkyFUuO4Cdf5TZ5d7E.jpg",
                      },
                      initial: w("initial", "1qr1jwx", ee, "1w6f9z4"),
                    },
                  },
                  d,
                  u
                ),
                children: [
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "18px",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-1sro8nv",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "x8JyOdnqe",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "18px",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-13o6tup",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "c7_G1lRxm",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "18px",
                          "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-1ra9uea",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "w3bVH000g",
                    style: {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                ],
              }),
              oe() &&
              a(_, {
                __perspectiveFX: !1,
                __smartComponentFX: !0,
                __targetOpacity: 1,
                animate: w("animate", "1fj584f", j, "1rivsvj"),
                background: {
                  alt: "",
                  fit: "fill",
                  sizes: "661px",
                  src: "/images/Vt8S1EJYZxL2nfLrHvRmCgybnb4.jpg",
                },
                className: "framer-1fj584f",
                "data-framer-appear-id": "1fj584f",
                "data-framer-name": "Munchy - Eps 1",
                initial: w("initial", "1fj584f", re, "1rivsvj"),
                layoutDependency: o,
                layoutId: "qDoWQPs1b",
                children: [
                  e(n.div, {
                    className: "framer-17ojjjn",
                    "data-highlight": !0,
                    layoutDependency: o,
                    layoutId: "eybQbLOKU",
                    onTap: N,
                    style: {
                      backgroundColor: "rgba(48, 51, 51, 0.56)"
                    },
                    children: e(t, {
                      __fromCanvasComponent: !0,
                      children: e(r, {
                        children: a(n.p, {
                          style: {
                            "--font-selector": "R0Y7QWNtZS1yZWd1bGFy",
                            "--framer-font-family": '"Acme", "Acme Placeholder", sans-serif',
                            "--framer-font-size": "21px",
                            "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children: [
                            "NEXT",
                            e(n.span, {
                              style: {
                                "--font-selector": "SW50ZXI=",
                                "--framer-font-family": '"Inter", sans-serif',
                              },
                              children: " ->",
                            }),
                          ],
                        }),
                      }),
                      className: "framer-ulyi6z",
                      fonts: ["GF;Acme-regular", "Inter"],
                      layoutDependency: o,
                      layoutId: "mtt6I51JS",
                      style: {
                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      transformTemplate: M,
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  }),
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "26px",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-17fu3vx",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "hTE2uR1Lz",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "22px",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-w9p229",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "xafMY7cDD",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "22px",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-1v8y1ml",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "BDj1k3zQd",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "22px",
                          "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-1l9bwrx",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "hMxpbwkrC",
                    style: {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "20px",
                          "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-1vbl2jv",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "wav0eyUi2",
                    style: {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "20px",
                          "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-16yghfw",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "FI_S8Cz_8",
                    style: {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(n.div, {
                    className: "framer-1xn63tn",
                    "data-highlight": !0,
                    layoutDependency: o,
                    layoutId: "lqRqAJAaS",
                    onTap: N,
                    style: {
                      backgroundColor: "rgba(255, 0, 0, 0.71)"
                    },
                    children: e(t, {
                      __fromCanvasComponent: !0,
                      children: e(r, {
                        children: a(n.p, {
                          style: {
                            "--font-selector": "R0Y7QWNtZS1yZWd1bGFy",
                            "--framer-font-family": '"Acme", "Acme Placeholder", sans-serif',
                            "--framer-font-size": "21px",
                            "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children: [
                            "NEXT",
                            e(n.span, {
                              style: {
                                "--font-selector": "SW50ZXI=",
                                "--framer-font-family": '"Inter", sans-serif',
                              },
                              children: " ->",
                            }),
                          ],
                        }),
                      }),
                      className: "framer-urvuug",
                      fonts: ["GF;Acme-regular", "Inter"],
                      layoutDependency: o,
                      layoutId: "w5WWg9XCc",
                      style: {
                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      transformTemplate: M,
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  }),
                ],
              }),
              f() &&
              e(n.div, {
                className: "framer-11ltywc",
                "data-highlight": !0,
                layoutDependency: o,
                layoutId: "bhCrJJjHM",
                onTap: A,
                style: {
                  backgroundColor: "rgba(255, 0, 0, 0.71)"
                },
                children: e(t, {
                  __fromCanvasComponent: !0,
                  children: e(r, {
                    children: a(n.p, {
                      style: {
                        "--font-selector": "R0Y7QWNtZS1yZWd1bGFy",
                        "--framer-font-family": '"Acme", "Acme Placeholder", sans-serif',
                        "--framer-font-size": "21px",
                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                      },
                      children: [
                        "NEXT",
                        e(n.span, {
                          style: {
                            "--font-selector": "SW50ZXI=",
                            "--framer-font-family": '"Inter", sans-serif',
                          },
                          children: " ->",
                        }),
                      ],
                    }),
                  }),
                  className: "framer-1k4lrpt",
                  fonts: ["GF;Acme-regular", "Inter"],
                  layoutDependency: o,
                  layoutId: "kX5LA5Z5v",
                  style: {
                    "--extracted-r6o4lv": "rgb(255, 255, 255)",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  transformTemplate: M,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              }),
              je() &&
              e(n.div, {
                className: "framer-v1cfih",
                "data-highlight": !0,
                layoutDependency: o,
                layoutId: "h80aXe5E_",
                onTap: N,
                style: {
                  backgroundColor: "rgba(48, 51, 51, 0.56)"
                },
                variants: {
                  W_jky5F8m: {
                    backgroundColor: "rgba(255, 0, 0, 0.71)"
                  },
                  xL9N13qYx: {
                    backgroundColor: "rgba(255, 0, 0, 0.71)"
                  },
                },
                ...y({
                  W_jky5F8m: {
                    onTap: A
                  }
                }, d, u),
                children: e(t, {
                  __fromCanvasComponent: !0,
                  children: e(r, {
                    children: e(n.p, {
                      style: {
                        "--font-selector": "R0Y7QWNtZS1yZWd1bGFy",
                        "--framer-font-family": '"Acme", "Acme Placeholder", sans-serif',
                        "--framer-font-size": "21px",
                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                      },
                      children: "<< BACK",
                    }),
                  }),
                  className: "framer-1lyqtc6",
                  fonts: ["GF;Acme-regular"],
                  layoutDependency: o,
                  layoutId: "fKD13gZJR",
                  style: {
                    "--extracted-r6o4lv": "rgb(255, 255, 255)",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  transformTemplate: M,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              }),
              Q() &&
              a(i, {
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 1535,
                  intrinsicWidth: 1207.5,
                  pixelHeight: 3070,
                  pixelWidth: 2415,
                  src: "/images/xZg14CPY2vU3BQH7E1HareItaCw.png?scale-down-to=2048",
                },
                className: "framer-6as4yl",
                "data-framer-name": "Munchy_Eps_5",
                layoutDependency: o,
                layoutId: "ZrriN8686",
                ...y({
                    xL9N13qYx: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 1535,
                        intrinsicWidth: 1207.5,
                        pixelHeight: 3070,
                        pixelWidth: 2415,
                        sizes: "661px",
                        src: "/images/xZg14CPY2vU3BQH7E1HareItaCw.png?scale-down-to=2048",
                      },
                    },
                  },
                  d,
                  u
                ),
                children: [
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "24px",
                          "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-1j1htk1",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "vxOQsT8Pz",
                    style: {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "24px",
                          "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-evxot",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "Vk2LTHYyu",
                    style: {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "24px",
                          "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-hkyex1",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "Ocv83Tm3l",
                    style: {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                ],
              }),
              ie() &&
              a(i, {
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 1929,
                  intrinsicWidth: 1518,
                  pixelHeight: 3858,
                  pixelWidth: 3036,
                  src: "/images/EelU7q61S0XsBiw3TER0MhQ0Fg.jpg?scale-down-to=2048",
                },
                className: "framer-28msvb",
                "data-framer-name": "Munchy_9",
                layoutDependency: o,
                layoutId: "I78M8Qvc6",
                ...y({
                    W_jky5F8m: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 1929,
                        intrinsicWidth: 1518,
                        pixelHeight: 3858,
                        pixelWidth: 3036,
                        sizes: "662px",
                        src: "/images/EelU7q61S0XsBiw3TER0MhQ0Fg.jpg?scale-down-to=2048",
                      },
                    },
                  },
                  d,
                  u
                ),
                children: [
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "22px",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-chnxwu",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "pxOi2RHsw",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "17px",
                          "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-1joxcw0",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "vUGR4EWZV",
                    style: {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                      rotate: 7,
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "17px",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-scn4jd",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "JizyjpC6J",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                ],
              }),
              Q() &&
              e(n.div, {
                className: "framer-q4qvfs",
                "data-highlight": !0,
                layoutDependency: o,
                layoutId: "fmvIkega1",
                onTap: l,
                style: {
                  backgroundColor: "rgba(255, 0, 0, 0.71)"
                },
                children: e(t, {
                  __fromCanvasComponent: !0,
                  children: e(r, {
                    children: a(n.p, {
                      style: {
                        "--font-selector": "R0Y7QWNtZS1yZWd1bGFy",
                        "--framer-font-family": '"Acme", "Acme Placeholder", sans-serif',
                        "--framer-font-size": "21px",
                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                      },
                      children: [
                        "NEXT",
                        e(n.span, {
                          style: {
                            "--font-selector": "SW50ZXI=",
                            "--framer-font-family": '"Inter", sans-serif',
                          },
                          children: " ->",
                        }),
                      ],
                    }),
                  }),
                  className: "framer-dsj316",
                  fonts: ["GF;Acme-regular", "Inter"],
                  layoutDependency: o,
                  layoutId: "k23SWOwIs",
                  style: {
                    "--extracted-r6o4lv": "rgb(255, 255, 255)",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  transformTemplate: M,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              }),
              ie() &&
              a(i, {
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 1929,
                  intrinsicWidth: 1518,
                  pixelHeight: 3858,
                  pixelWidth: 3036,
                  src: "/images/QCPzVKz4AxWrJ2x4yg309psJzDU.jpg?scale-down-to=2048",
                },
                className: "framer-1p5tokl",
                "data-framer-name": "Munchy_Eps_11",
                layoutDependency: o,
                layoutId: "jvUKQ1tP8",
                ...y({
                    W_jky5F8m: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 1929,
                        intrinsicWidth: 1518,
                        pixelHeight: 3858,
                        pixelWidth: 3036,
                        sizes: "663px",
                        src: "/images/QCPzVKz4AxWrJ2x4yg309psJzDU.jpg?scale-down-to=2048",
                      },
                    },
                  },
                  d,
                  u
                ),
                children: [
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "17px",
                          "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-sjgyry",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "yp3EfxlOl",
                    style: {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "17px",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-1g2hrpv",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "csMESSgw8",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "17px",
                          "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-1pmrjo8",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "nVFWhDn3Z",
                    style: {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(t, {
                    __fromCanvasComponent: !0,
                    children: e(r, {
                      children: e(n.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--framer-font-family": '"ADLaM Display", sans-serif',
                          "--framer-font-size": "13px",
                          "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        },
                        children: "$BUNCHY on Eth",
                      }),
                    }),
                    className: "framer-nshoox",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: o,
                    layoutId: "NOoMa1bYD",
                    style: {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Ie = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-OdOZk.framer-naqx25, .framer-OdOZk .framer-naqx25 { display: block; }",
    ".framer-OdOZk.framer-1rivsvj { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-OdOZk .framer-1hdmnmr, .framer-OdOZk .framer-v1cfih { bottom: 279px; cursor: pointer; flex: none; height: 29px; left: 11px; overflow: visible; position: absolute; width: 91px; z-index: 1; }",
    ".framer-OdOZk .framer-1xgd15w, .framer-OdOZk .framer-1lyqtc6 { flex: none; height: auto; left: 51%; position: absolute; top: 52%; white-space: pre; width: auto; }",
    ".framer-OdOZk .framer-1tnht09 { aspect-ratio: 0.7876221498371335 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 841px); overflow: visible; position: relative; width: 662px; }",
    ".framer-OdOZk .framer-1uth3fy { flex: none; height: 24px; position: absolute; right: 41px; top: 14px; white-space: pre-wrap; width: 231px; word-break: break-word; word-wrap: break-word; }",
    ".framer-OdOZk .framer-i4k4ku { bottom: 288px; flex: none; height: 24px; position: absolute; right: -42px; white-space: pre-wrap; width: 231px; word-break: break-word; word-wrap: break-word; }",
    ".framer-OdOZk .framer-84l7v6 { bottom: 240px; flex: none; height: 24px; left: 77px; position: absolute; white-space: pre-wrap; width: 231px; word-break: break-word; word-wrap: break-word; }",
    ".framer-OdOZk .framer-1ltmlfg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 840px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 658px; }",
    ".framer-OdOZk .framer-s0bmg4 { aspect-ratio: 0.7876221498371335 / 1; flex: none; height: 840px; position: relative; width: var(--framer-aspect-ratio-supported, 662px); }",
    ".framer-OdOZk .framer-10v2oda { aspect-ratio: 0.786970684039088 / 1; bottom: 0px; flex: none; left: 0px; position: absolute; top: 0px; width: var(--framer-aspect-ratio-supported, 661px); }",
    ".framer-OdOZk .framer-1n7s6ka { flex: none; height: 24px; left: 138px; position: absolute; top: 12px; white-space: pre-wrap; width: 182px; word-break: break-word; word-wrap: break-word; }",
    ".framer-OdOZk .framer-19io5cq { flex: none; height: 24px; left: calc(51.28593040847203% - 231px / 2); position: absolute; top: 308px; white-space: pre-wrap; width: 231px; word-break: break-word; word-wrap: break-word; }",
    ".framer-OdOZk .framer-nnm4an { bottom: 248px; flex: none; height: 24px; left: 13px; position: absolute; white-space: pre-wrap; width: 94px; word-break: break-word; word-wrap: break-word; }",
    ".framer-OdOZk .framer-17nbxje { flex: none; height: 24px; position: absolute; right: 6px; top: 137px; white-space: pre-wrap; width: 121px; word-break: break-word; word-wrap: break-word; }",
    ".framer-OdOZk .framer-1sspbor { aspect-ratio: 0.7866449511400652 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 840px); position: relative; width: 660px; }",
    ".framer-OdOZk .framer-1sro8nv { flex: none; height: 24px; position: absolute; right: 92px; top: 12px; white-space: pre-wrap; width: 231px; word-break: break-word; word-wrap: break-word; }",
    ".framer-OdOZk .framer-13o6tup { bottom: 247px; flex: none; height: 24px; left: 22px; position: absolute; white-space: pre-wrap; width: 231px; word-break: break-word; word-wrap: break-word; }",
    ".framer-OdOZk .framer-1ra9uea { bottom: 281px; flex: none; height: 24px; left: 178px; position: absolute; white-space: pre-wrap; width: 152px; word-break: break-word; word-wrap: break-word; }",
    ".framer-OdOZk .framer-1fj584f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 840px; justify-content: center; padding: 0px; position: relative; width: 661px; }",
    ".framer-OdOZk .framer-17ojjjn, .framer-OdOZk .framer-1xn63tn, .framer-OdOZk .framer-11ltywc, .framer-OdOZk .framer-q4qvfs { bottom: 279px; cursor: pointer; flex: none; height: 29px; overflow: visible; position: absolute; right: 13px; width: 91px; z-index: 1; }",
    ".framer-OdOZk .framer-ulyi6z, .framer-OdOZk .framer-urvuug, .framer-OdOZk .framer-1k4lrpt, .framer-OdOZk .framer-dsj316 { flex: none; height: auto; left: 49%; position: absolute; top: 52%; white-space: pre; width: auto; }",
    ".framer-OdOZk .framer-17fu3vx { flex: none; height: 24px; position: absolute; right: 84px; top: 18px; white-space: pre-wrap; width: 231px; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-OdOZk .framer-w9p229 { flex: none; height: 24px; left: 80px; position: absolute; top: 272px; white-space: pre-wrap; width: 187px; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-OdOZk .framer-1v8y1ml { flex: none; height: 24px; left: -643px; position: absolute; top: 309px; white-space: pre-wrap; width: 187px; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-OdOZk .framer-1l9bwrx { bottom: 284px; flex: none; height: 24px; position: absolute; right: 129px; white-space: pre-wrap; width: 187px; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-OdOZk .framer-1vbl2jv { bottom: 14px; flex: none; height: 24px; left: -328px; position: absolute; white-space: pre-wrap; width: 187px; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-OdOZk .framer-16yghfw { flex: none; height: 24px; left: -328px; position: absolute; top: 260px; white-space: pre-wrap; width: 187px; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-OdOZk .framer-6as4yl { aspect-ratio: 0.7866449511400652 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 982px); overflow: visible; position: relative; width: 661px; }",
    ".framer-OdOZk .framer-1j1htk1 { bottom: 294px; flex: none; height: 24px; left: 131px; position: absolute; white-space: pre-wrap; width: 231px; word-break: break-word; word-wrap: break-word; }",
    ".framer-OdOZk .framer-evxot { bottom: 24px; flex: none; height: 24px; position: absolute; right: -32px; white-space: pre-wrap; width: 231px; word-break: break-word; word-wrap: break-word; }",
    ".framer-OdOZk .framer-hkyex1 { flex: none; height: 24px; left: 100px; position: absolute; top: 46px; white-space: pre-wrap; width: 231px; word-break: break-word; word-wrap: break-word; }",
    ".framer-OdOZk .framer-28msvb { aspect-ratio: 0.7869362363919129 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 841px); overflow: visible; position: relative; width: 662px; }",
    ".framer-OdOZk .framer-chnxwu { bottom: 24px; flex: none; height: 24px; position: absolute; right: 18px; white-space: pre-wrap; width: 176px; word-break: break-word; word-wrap: break-word; }",
    ".framer-OdOZk .framer-1joxcw0 { flex: none; height: 24px; position: absolute; right: 87px; top: 93px; white-space: pre-wrap; width: 138px; word-break: break-word; word-wrap: break-word; }",
    ".framer-OdOZk .framer-scn4jd { bottom: 12px; flex: none; height: 24px; left: 109px; position: absolute; white-space: pre-wrap; width: 138px; word-break: break-word; word-wrap: break-word; }",
    ".framer-OdOZk .framer-1p5tokl { aspect-ratio: 0.7869362363919129 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 843px); overflow: visible; position: relative; width: 663px; }",
    ".framer-OdOZk .framer-sjgyry { bottom: 274px; flex: none; height: 24px; left: 11px; position: absolute; white-space: pre-wrap; width: 138px; word-break: break-word; word-wrap: break-word; }",
    ".framer-OdOZk .framer-1g2hrpv { flex: none; height: 24px; position: absolute; right: 94px; top: 12px; white-space: pre-wrap; width: 138px; word-break: break-word; word-wrap: break-word; }",
    ".framer-OdOZk .framer-1pmrjo8 { bottom: 274px; flex: none; height: 24px; position: absolute; right: 188px; white-space: pre-wrap; width: 138px; word-break: break-word; word-wrap: break-word; }",
    ".framer-OdOZk .framer-nshoox { bottom: 247px; flex: none; height: 24px; position: absolute; right: 188px; white-space: pre-wrap; width: 138px; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-OdOZk.framer-1rivsvj, .framer-OdOZk .framer-1ltmlfg, .framer-OdOZk .framer-1fj584f { gap: 0px; } .framer-OdOZk.framer-1rivsvj > *, .framer-OdOZk .framer-1ltmlfg > *, .framer-OdOZk .framer-1fj584f > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-OdOZk.framer-1rivsvj > :first-child, .framer-OdOZk .framer-1ltmlfg > :first-child, .framer-OdOZk .framer-1fj584f > :first-child { margin-left: 0px; } .framer-OdOZk.framer-1rivsvj > :last-child, .framer-OdOZk .framer-1ltmlfg > :last-child, .framer-OdOZk .framer-1fj584f > :last-child { margin-right: 0px; } }",
    ".framer-OdOZk.framer-v-1w6f9z4 .framer-1hdmnmr, .framer-OdOZk.framer-v-2g3c1a .framer-v1cfih, .framer-OdOZk.framer-v-q62eb8 .framer-v1cfih { order: 0; }",
    ".framer-OdOZk.framer-v-1w6f9z4 .framer-s0bmg4 { order: 4; }",
    ".framer-OdOZk.framer-v-1w6f9z4 .framer-1sspbor { height: var(--framer-aspect-ratio-supported, 839px); order: 3; }",
    ".framer-OdOZk.framer-v-1w6f9z4 .framer-11ltywc { order: 6; }",
    ".framer-OdOZk.framer-v-2g3c1a .framer-1tnht09 { order: 1; }",
    ".framer-OdOZk.framer-v-2g3c1a .framer-6as4yl { height: var(--framer-aspect-ratio-supported, 841px); order: 8; }",
    ".framer-OdOZk.framer-v-2g3c1a .framer-q4qvfs { order: 10; }",
    ".framer-OdOZk.framer-v-q62eb8 .framer-28msvb { height: var(--framer-aspect-ratio-supported, 842px); order: 1; }",
    ".framer-OdOZk.framer-v-q62eb8 .framer-1p5tokl { order: 11; }",
  ],
  F = G(_e, Ie, "framer-OdOZk"),
  te = F;
F.displayName = "Comic";
F.defaultProps = {
  height: 840,
  width: 1329
};
ce(F, {
  variant: {
    options: ["oi2zZ5lwZ", "Hl0QjdhpJ", "xL9N13qYx", "W_jky5F8m"],
    optionTitles: ["Variant 1", "Varient 2", "Variant 3", "Varient 4"],
    title: "Variant",
    type: pe.Enum,
  },
});
Z(
  F,
  [{
    explicitInter: !0,
    fonts: [{
        family: "Acme",
        source: "google",
        style: "normal",
        url: "https://fonts.gstatic.com/s/acme/v25/RrQfboBx-C5_bxjLb23lzLk.woff2",
        weight: "400",
      },
      {
        family: "ADLaM Display",
        source: "google",
        style: "normal",
        url: "https://fonts.gstatic.com/s/adlamdisplay/v1/KFOhCnGXkPOLlhx6jD8_b1ZECsTYkYBPY3o.woff2",
        weight: "400",
      },
      {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
        weight: "400",
      },
      {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
        weight: "400",
      },
      {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
        weight: "400",
      },
      {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
        weight: "400",
      },
      {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
        weight: "400",
      },
      {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
        weight: "400",
      },
      {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
        weight: "400",
      },
    ],
  }, ], {
    supportsExplicitInterCodegen: !0
  }
);
var Be = ke(te);
var We = {};
var Le = "framer-wtOhH",
  Ue = {
    WQLkyLRf1: "framer-v-72rtr7"
  },
  Ye = (m, s) => `translateY(-50%) ${s}`,
  Qe = ({
    children: m,
    blockDocumentScrolling: s,
    enabled: h = !0
  }) => {
    let [c, g] = be({
      blockDocumentScrolling: s
    });
    return m({
      hide: () => g(!1),
      show: () => g(!0),
      toggle: () => g(!c),
      visible: h && c,
    });
  },
  I = (m, s) => `translateX(-50%) ${s}`,
  Je = $(),
  qe = ({
    height: m,
    id: s,
    width: h,
    ...c
  }) => ({
    ...c
  }),
  Xe = V(function (m, s) {
    let {
      activeLocale: h,
      setLocale: c
    } = S(), {
      style: g,
      className: b,
      layoutId: v,
      variant: W,
      ...U
    } = qe(m);
    me(() => {
      let l = $(void 0, h);
      if (((document.title = l.title || ""), l.viewport)) {
        var H;
        (H = document.querySelector('meta[name="viewport"]')) === null ||
          H === void 0 ||
          H.setAttribute("content", l.viewport);
      }
      if (l.robots) {
        let f = document.querySelector('meta[name="robots"]');
        f
          ?
          f.setAttribute("content", l.robots) :
          ((f = document.createElement("meta")),
            f.setAttribute("name", "robots"),
            f.setAttribute("content", l.robots),
            document.head.appendChild(f));
      }
      if (l.bodyClassName)
        return (
          Array.from(document.body.classList)
          .filter((f) => f.startsWith("framer-body-"))
          .map((f) => document.body.classList.remove(f)),
          document.body.classList.add(`${l.bodyClassName}-framer-wtOhH`),
          () => {
            document.body.classList.remove(`${l.bodyClassName}-framer-wtOhH`);
          }
        );
    }, [void 0, h]);
    let [d, ae] = ye(W, We, !1),
      ne = void 0, {
        activeVariantCallback: u,
        delay: Me
      } = K(void 0),
      k = ({
        overlay: l,
        paginationInfo: H
      }) =>
      u(async (...f) => {
        l.toggle();
      }),
      D = L(null),
      o = P("wSo7DuokC"),
      C = L(null),
      O = P("J366dr9Op"),
      Y = L(null),
      N = R(),
      A = [];
    return (
      xe({}),
      e(ue.Provider, {
        value: {
          primaryVariantId: "WQLkyLRf1",
          variantClassNames: Ue
        },
        children: a(E, {
          id: v ?? N,
          children: [
            a(n.div, {
              ...U,
              className: z(Le, ...A, "framer-72rtr7", b),
              ref: s ?? D,
              style: {
                ...g
              },
              children: [
                a("div", {
                  className: "framer-1erlyua",
                  "data-framer-name": "Boys Club Frame",
                  name: "Boys Club Frame",
                  children: [
                    a(i, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 1707.5,
                        intrinsicWidth: 720,
                        loading: "lazy",
                        pixelHeight: 3415,
                        pixelWidth: 1440,
                        sizes: "1440px",
                        src: "/images/S9BJ3gizRpJB5kfZrMlqQCTHlk.png?scale-down-to=2048",
                      },
                      className: "framer-1co51o2",
                      "data-framer-name": "Boys_Club_Section_Frame",
                      id: o,
                      name: "Boys_Club_Section_Frame",
                      ref: C,
                      children: [
                        a("div", {
                          className: "framer-1biaxk0",
                          "data-framer-name": "CopyLinkButton",
                          name: "CopyLinkButton",
                          children: [
                            e(p, {
                              className: "framer-x6rinn",
                              layout: "position",
                              opacity: 1,
                              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33 33"><path d="M 16.5 0 C 25.613 0 33 7.387 33 16.5 C 33 25.613 25.613 33 16.5 33 C 7.387 33 0 25.613 0 16.5 C 0 7.387 7.387 0 16.5 0 Z" fill="rgb(255, 255, 255)"></path></svg>',
                              svgContentId: 9808545197,
                              withExternalLayout: !0,
                            }),
                            e(i, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 50,
                                intrinsicWidth: 50,
                                loading: "lazy",
                                pixelHeight: 100,
                                pixelWidth: 100,
                                src: "/images/Db4IdPLYdCWu5ypvzxHlGVIvA.png",
                              },
                              className: "framer-19gi6a5",
                              "data-framer-name": "Red_Heart",
                              name: "Red_Heart",
                              transformTemplate: Ye,
                            }),
                            e(t, {
                              __fromCanvasComponent: !0,
                              children: e(r, {
                                children: e("p", {
                                  style: {
                                    "--font-selector": "R0Y7QWNtZS1yZWd1bGFy",
                                    "--framer-font-family": '"Acme", "Acme Placeholder", sans-serif',
                                    "--framer-font-size": "10px",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: "0x000000000000000000000000000000",
                                }),
                              }),
                              className: "framer-1its8ml",
                              fonts: ["GF;Acme-regular"],
                              verticalAlignment: "center",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        e(t, {
                          __fromCanvasComponent: !0,
                          children: e(r, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7QWZhY2FkLXJlZ3VsYXI=",
                                "--framer-font-family": '"Afacad", "Afacad Placeholder", sans-serif',
                                "--framer-font-size": "19px",
                                "--framer-text-alignment": "center",
                              },
                              children: "COMMUNITY WALLET",
                            }),
                          }),
                          className: "framer-1ueaca1",
                          fonts: ["GF;Afacad-regular"],
                          verticalAlignment: "center",
                          withExternalLayout: !0,
                        }),
                        e(t, {
                          __fromCanvasComponent: !0,
                          children: e(r, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7QWZhY2FkLXJlZ3VsYXI=",
                                "--framer-font-family": '"Afacad", "Afacad Placeholder", sans-serif',
                                "--framer-font-size": "27px",
                              },
                              children: "READ THE COMIC",
                            }),
                          }),
                          className: "framer-1lv99zg",
                          fonts: ["GF;Afacad-regular"],
                          style: {
                            rotate: -47
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    e(t, {
                      __fromCanvasComponent: !0,
                      children: a(r, {
                        children: [
                          e("p", {
                            style: {
                              "--framer-font-size": "26px",
                              "--framer-text-alignment": "center",
                            },
                            children: e("span", {
                              style: {
                                "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                "--framer-font-family": '"Comic Neue"',
                                "--framer-font-size": "26px",
                                "--framer-font-weight": "700",
                              },
                              children: "We are LIVE",
                            }),
                          }),
                          e("p", {
                            style: {
                              "--framer-font-size": "26px",
                              "--framer-text-alignment": "center",
                            },
                            children: e("span", {
                              style: {
                                "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                "--framer-font-family": '"Comic Neue"',
                                "--framer-font-size": "26px",
                                "--framer-font-weight": "700",
                              },
                              children: "Click Around For Some Easter Eggs ;)",
                            }),
                          }),
                        ],
                      }),
                      className: "framer-b6utyc",
                      "data-framer-name": "We are LIVE Click Around For Some Easter Eggs ;)",
                      fonts: ["GF;Comic Neue-700"],
                      name: "We are LIVE Click Around For Some Easter Eggs ;)",
                      verticalAlignment: "center",
                      withExternalLayout: !0,
                    }),
                    e(x, {
                      href: "https://dexscreener.com/ethereum/0x6ad488c2a82077816f53edef928430a0feedc7c4",
                      openInNewTab: !0,
                      smoothScroll: !0,
                      children: e(p, {
                        as: "a",
                        className: "framer-1p5pean framer-lux5qc",
                        "data-framer-name": "Eagle Trigger",
                        layout: "position",
                        name: "Eagle Trigger",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 224 153"><path d="M 0 4 L 0 153 L 221.013 153 L 223.502 0.5 Z" fill="transparent"></path></svg>',
                        svgContentId: 11698726266,
                        withExternalLayout: !0,
                      }),
                    }),
                    e(x, {
                      href: "https://weedmaps.com/",
                      children: e(p, {
                        as: "a",
                        className: "framer-1l6u4ym framer-lux5qc",
                        "data-framer-name": "Cookies Trigger",
                        layout: "position",
                        name: "Cookies Trigger",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 91 151"><path d="M 45 4.5 L 30.5 0.5 L 16 12.5 L 23.5 20 L 30 26.5 L 34.5 56.5 L 31.5 78.5 L 14 82.5 L 0 102.5 L 12.5 104.5 L 23.5 108 L 23.5 112.5 L 15 117 L 5.5 124.5 L 7.5 134 L 22.5 142 L 55.5 149 L 60 151 L 69 142 L 77 124.5 L 78 106.5 L 78 101 L 88 102.5 L 91 97.5 L 88 86 L 81.5 87.5 L 78 87.5 L 75 86 L 76 81.5 L 66.5 83.5 L 63 87 L 58.5 82.5 L 58.5 76 L 60 45.5 L 52 20 L 45 12.5 Z" fill="transparent"></path></svg>',
                        svgContentId: 9586082854,
                        withExternalLayout: !0,
                      }),
                    }),
                    e(x, {
                      href: "https://www.donaldjtrump.com/crypto",
                      openInNewTab: !0,
                      children: e(p, {
                        as: "a",
                        className: "framer-1l8a0h4 framer-lux5qc",
                        "data-framer-name": "Tump X Trigger",
                        layout: "position",
                        name: "Tump X Trigger",
                        opacity: 0,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 206 206"><path d="M 103 0 C 159.885 0 206 46.115 206 103 C 206 159.885 159.885 206 103 206 C 46.115 206 0 159.885 0 103 C 0 46.115 46.115 0 103 0 Z" fill="#CCC"></path></svg>',
                        svgContentId: 9128096854,
                        withExternalLayout: !0,
                      }),
                    }),
                    e(x, {
                      href: "https://coinmarketcap.com/currencies/boys-club-munchy/",
                      openInNewTab: !0,
                      smoothScroll: !0,
                      children: e(p, {
                        as: "a",
                        className: "framer-yfsypb framer-lux5qc",
                        "data-framer-name": "Coin Market Trigger",
                        layout: "position",
                        name: "Coin Market Trigger",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 224 153"><path d="M 0 4 L 0 153 L 221.013 153 L 223.502 0.5 Z" fill="transparent"></path></svg>',
                        svgContentId: 12018159054,
                        withExternalLayout: !0,
                      }),
                    }),
                    e(x, {
                      href: "https://www.coingecko.com/en/coins/boys-club-munchy",
                      children: e(p, {
                        as: "a",
                        className: "framer-1j6olos framer-lux5qc",
                        "data-framer-name": "Coin Gecko Trigger",
                        layout: "position",
                        name: "Coin Gecko Trigger",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 128 117"><path d="M 23 22 L 14 21.5 L 8 26.5 L 6 32.5 L 4.5 37.5 L 0 42 L 1 47 L 6 49.5 L 11.5 52.5 L 21.5 52.5 L 31 49.5 L 33 51.5 L 38 51.5 L 38.5 53.5 L 43 54.5 L 43 61.5 L 39.5 64 L 39.5 57.5 L 35.5 56 L 35.5 59.5 L 35.5 63 L 31 59.5 L 28 61.5 L 28 63 L 30 65 L 34 66 L 30 67 L 26.5 69.5 L 26.5 72 L 31 72 L 35.5 69.5 L 31 74 L 31 78 L 35.5 78 L 39.5 70.5 L 41.5 74 L 44 78 L 48 74 L 43 69 L 48 65 L 53.5 64 L 54 57 L 57.5 60.5 L 62.5 63 L 61 66 L 59.5 69.5 L 60 71 L 57.5 73.5 L 59.5 76.5 L 58 78 L 53.5 79 L 52 81.5 L 53 84 L 59.5 81.5 L 56.5 85.5 L 55.5 89.5 L 59.5 90.5 L 62.5 87.5 L 63 84 L 64 90.5 L 66 92.5 L 69.5 89.5 L 67.5 84 L 70.5 84 L 72 85.5 L 76 81.5 L 73 80 L 69.5 79 L 72 73.5 L 78 70.5 L 82.5 67 L 83.5 76 L 78 85.5 L 72 96 L 71.5 101 L 74.5 108 L 82.5 114 L 91.5 116.5 L 100.5 115.5 L 112 107 L 118.5 94 L 120 83 L 118 79 L 114.5 79 L 113 85.5 L 109.5 94 L 103 100.5 L 95.5 100.5 L 93.5 94 L 103 80 L 107 72 L 102 60.5 L 101 53.5 L 103.5 56 L 109.5 57.5 L 111 61.5 L 114 64 L 117 60.5 L 115 54.5 L 118.5 58 L 122 60.5 L 125 57.5 L 118.5 51 L 125 52.5 L 128 49.5 L 125.5 45.5 L 120 45.5 L 120 40.5 L 115 39 L 114.5 40.5 L 113 45 L 111 42 L 107 39 L 106.5 42 L 108 45.5 L 100.5 40.5 L 92.5 42 L 89.5 42.5 L 78 36 L 69.5 32.5 L 62.5 32.5 L 62.5 28 L 65 22.5 L 57.5 15 L 62.5 15 L 67.5 15 L 67.5 9.5 L 61 11 L 58.5 9.5 L 64 6 L 61 1.5 L 57.5 1.5 L 56.5 6 L 55.5 8.5 L 53.5 1.5 L 50.5 0 L 48.5 2 L 48.5 5.5 L 51.5 9.5 L 45 7.5 L 41.5 11 L 45 13.5 L 50.5 13.5 L 47 15.5 L 45 17.5 L 46 20.5 L 50.5 20.5 L 53.5 17.5 L 54 22.5 L 53 26.5 L 50 29.5 L 45 29.5 L 36.5 23 L 28 20.5 Z" fill="transparent"></path></svg>',
                        svgContentId: 9689545424,
                        withExternalLayout: !0,
                      }),
                    }),
                    e(x, {
                      href: "https://www.dextools.io/app/en/ether/pair-explorer/0x6ad488c2a82077816f53edef928430a0feedc7c4?t=1718262499493",
                      openInNewTab: !0,
                      smoothScroll: !0,
                      children: e(p, {
                        as: "a",
                        className: "framer-1o8i1lz framer-lux5qc",
                        "data-framer-name": "Dex Tools Trigger",
                        layout: "position",
                        name: "Dex Tools Trigger",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 225 153"><path d="M 0 4 L 0 153 L 222 153 L 224.5 0.5 Z" fill="transparent"></path></svg>',
                        svgContentId: 12849272709,
                        withExternalLayout: !0,
                      }),
                    }),
                    e(x, {
                      href: {
                        hash: ":J366dr9Op",
                        webPageId: "augiA20Il"
                      },
                      openInNewTab: !1,
                      smoothScroll: !0,
                      children: e(p, {
                        as: "a",
                        className: "framer-v7fvf2 framer-lux5qc",
                        "data-framer-name": "Roadmap Trigger",
                        layout: "position",
                        name: "Roadmap Trigger",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 225 153"><path d="M 0 4 L 0 153 L 222 153 L 224.5 0.5 Z" fill="transparent"></path></svg>',
                        svgContentId: 9833364115,
                        withExternalLayout: !0,
                      }),
                    }),
                    e(x, {
                      href: "t.me/BoysClubMunchy",
                      openInNewTab: !0,
                      children: e(p, {
                        as: "a",
                        className: "framer-qkhbzl framer-lux5qc",
                        "data-framer-name": "Telegram Trigger",
                        layout: "position",
                        name: "Telegram Trigger",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 105 89"><path d="M 104.5 0 L 0.5 40 L 26 51 L 37.5 84.5 L 56 69 L 84 88.5 Z" fill="transparent"></path></svg>',
                        svgContentId: 8645572480,
                        withExternalLayout: !0,
                      }),
                    }),
                    e(x, {
                      href: "https://x.com/BoysClubMunchy",
                      openInNewTab: !0,
                      children: e(p, {
                        as: "a",
                        className: "framer-5i8b3e framer-lux5qc",
                        "data-framer-name": "X Munchy Trigger",
                        layout: "position",
                        name: "X Munchy Trigger",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 97 217"><path d="M 36 0.5 L 0.5 128.5 L 45.5 130.5 L 45.5 206 L 60 216.5 L 72.5 206 L 66.5 200 L 97 76 L 44.5 74.5 L 41 1.5 Z" fill="transparent"></path></svg>',
                        svgContentId: 10378694283,
                        withExternalLayout: !0,
                      }),
                    }),
                    e(x, {
                      href: "https://www.krispykreme.com/menu/doughnuts/original-glazed-doughnut",
                      children: e(p, {
                        as: "a",
                        className: "framer-1l2br6u framer-lux5qc",
                        "data-framer-name": "Krispy Kreme Donuts",
                        layout: "position",
                        name: "Krispy Kreme Donuts",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 91"><path d="M 60 0 C 93.137 0 120 20.371 120 45.5 C 120 70.629 93.137 91 60 91 C 26.863 91 0 70.629 0 45.5 C 0 20.371 26.863 0 60 0 Z" fill="#CCC" opacity="0"></path></svg>',
                        svgContentId: 9605372214,
                        withExternalLayout: !0,
                      }),
                    }),
                    e(x, {
                      href: "https://thewarroom.ag/",
                      children: e(p, {
                        as: "a",
                        className: "framer-1es0d6j framer-lux5qc",
                        "data-framer-name": "Cobra Tate War Room Trigger",
                        layout: "position",
                        name: "Cobra Tate War Room Trigger",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 74"><path d="M 2.5 0 L 0 61 L 23 74 L 48 68.5 L 48 1.5 Z" fill="transparent"></path></svg>',
                        svgContentId: 8703945776,
                        withExternalLayout: !0,
                      }),
                    }),
                    e(Qe, {
                      children: (l) =>
                        e(q, {
                          children: a(n.div, {
                            className: "framer-kao0y8",
                            "data-framer-name": "Comic Book",
                            id: "kao0y8",
                            name: "Comic Book",
                            onTap: k({
                              overlay: l
                            }),
                            children: [
                              e(p, {
                                className: "framer-xprrhr",
                                "data-framer-name": "Comic Book Trigger",
                                layout: "position",
                                name: "Comic Book Trigger",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 252 190"><path d="M 110 0 L 0 142 L 155.5 189.5 L 251.5 40.5 Z" fill="transparent"></path></svg>',
                                svgContentId: 8594858412,
                                withExternalLayout: !0,
                              }),
                              e(X, {
                                children: l.visible &&
                                  e(q, {
                                    children: fe(
                                      a(r, {
                                        children: [
                                          e(
                                            n.div, {
                                              animate: {
                                                opacity: 1,
                                                transition: {
                                                  delay: 0,
                                                  duration: 0,
                                                  ease: [0.5, 0, 0.88, 0.77],
                                                  type: "tween",
                                                },
                                              },
                                              className: "framer-j81dnn",
                                              "data-framer-portal-id": "kao0y8",
                                              exit: {
                                                opacity: 0,
                                                transition: {
                                                  delay: 0,
                                                  duration: 0,
                                                  ease: [0.12, 0.23, 0.5, 1],
                                                  type: "tween",
                                                },
                                              },
                                              initial: {
                                                opacity: 0
                                              },
                                              onTap: () => l.hide(),
                                            },
                                            "HyvpitNa4"
                                          ),
                                          e(ge, {
                                            width: "1319px",
                                            children: e(we, {
                                              className: "framer-tcd83p-container",
                                              "data-framer-portal-id": "kao0y8",
                                              children: e(te, {
                                                height: "100%",
                                                id: "WS3LoJPnF",
                                                layoutId: "WS3LoJPnF",
                                                style: {
                                                  height: "100%",
                                                  width: "100%",
                                                },
                                                variant: "oi2zZ5lwZ",
                                                width: "100%",
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      document.querySelector("#overlay")
                                    ),
                                  }),
                              }),
                            ],
                          }),
                        }),
                    }),
                  ],
                }),
                e("div", {
                  className: "framer-l4sxe0",
                  "data-framer-name": "Base Munchy Frame",
                  name: "Base Munchy Frame",
                  children: a("div", {
                    className: "framer-st4yri",
                    "data-framer-name": "Base Munchy Group",
                    name: "Base Munchy Group",
                    children: [
                      e("div", {
                        className: "framer-1ndinlp",
                        "data-framer-name": "Base Munchy Frame",
                        name: "Base Munchy Frame",
                      }),
                      e(i, {
                        background: {
                          alt: "",
                          fit: "fill",
                          sizes: "720px",
                          src: "/images/fq7IKeC6opQ4QiQDX6iGDLwIPs.png",
                        },
                        className: "framer-erhib7",
                        "data-framer-name": "munchie coin 1",
                        name: "munchie coin 1",
                      }),
                    ],
                  }),
                }),
                a("div", {
                  className: "framer-c5xj25",
                  "data-framer-name": "How To Buy Frame",
                  name: "How To Buy Frame",
                  children: [
                    e("div", {
                      className: "framer-8qw94g",
                      "data-framer-name": "How to Buy Background",
                      name: "How to Buy Background",
                    }),
                    e(t, {
                      __fromCanvasComponent: !0,
                      children: e(r, {
                        children: e("p", {
                          style: {
                            "--framer-font-size": "20px"
                          },
                          children: e("span", {
                            style: {
                              "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                              "--framer-font-family": '"Comic Neue"',
                              "--framer-font-size": "20px",
                              "--framer-font-weight": "700",
                            },
                            children: "Disclaimer: The content provided in this meme is for entertainment purposes only and should not be taken as financial or investment advice. Cryptocurrency investments are highly volatile and speculative, and the information presented in this meme may not be accurate or up-to-date. Always do your own research (DYOR) and consult with a professional financial advisor before making any investment decisions. The creator of this meme is not responsible for any financial losses or gains that may result from following the information presented here. We are not affiliated with Matt Furie artwork but we would love to collab with him!",
                          }),
                        }),
                      }),
                      className: "framer-frg78m",
                      "data-framer-name": "Disclaimer: The content provided in this meme is for entertainment purposes only and should not be taken as financial or investment advice. Cryptocurrency investments are highly volatile and speculative, and the information presented in this meme may not be accurate or up-to-date. Always do your own research (DYOR) and consult with a professional financial advisor before making any investment decisions. The creator of this meme is not responsible for any financial losses or gains that may result from following the information presented here. We are not affiliated with Matt Furie artwork but we would love to collab with him!",
                      fonts: ["GF;Comic Neue-700"],
                      name: "Disclaimer: The content provided in this meme is for entertainment purposes only and should not be taken as financial or investment advice. Cryptocurrency investments are highly volatile and speculative, and the information presented in this meme may not be accurate or up-to-date. Always do your own research (DYOR) and consult with a professional financial advisor before making any investment decisions. The creator of this meme is not responsible for any financial losses or gains that may result from following the information presented here. We are not affiliated with Matt Furie artwork but we would love to collab with him!",
                      transformTemplate: I,
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    a("div", {
                      className: "framer-mc5qg6",
                      "data-framer-name": "Swap ETH for $BUNCHY",
                      name: "Swap ETH for $BUNCHY",
                      children: [
                        a("div", {
                          className: "framer-9sqlbt",
                          "data-framer-name": "$ZT Icon",
                          name: "$ZT Icon",
                          children: [
                            e(n.div, {
                              className: "framer-zfglew",
                              "data-border": !0,
                              "data-framer-name": "Rectangle 6",
                              name: "Rectangle 6",
                              style: {
                                rotate: -45
                              },
                            }),
                            e(i, {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: "lazy",
                                sizes: "265px",
                                src: "/images/ApvQAqHLxTHKFEpGAD08pmmur0U.png",
                              },
                              className: "framer-40ms1x",
                              "data-framer-name": "$ZT",
                              name: "$ZT",
                            }),
                          ],
                        }),
                        e(t, {
                          __fromCanvasComponent: !0,
                          children: e(r, {
                            children: e("p", {
                              style: {
                                "--framer-font-size": "36px"
                              },
                              children: e("span", {
                                style: {
                                  "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDBpdGFsaWM=",
                                  "--framer-font-family": '"Comic Neue"',
                                  "--framer-font-size": "36px",
                                  "--framer-font-style": "italic",
                                  "--framer-font-weight": "700",
                                  "--framer-text-color": "rgba(1, 44, 72, 1)",
                                },
                                children: "Swap ETH for $BUNCHY",
                              }),
                            }),
                          }),
                          className: "framer-lq1ue0",
                          "data-framer-name": "Swap ETH for $BUNCHY",
                          fonts: ["GF;Comic Neue-700italic"],
                          name: "Swap ETH for $BUNCHY",
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    a("div", {
                      className: "framer-jn091v",
                      "data-framer-name": "Uniswap Group",
                      name: "Uniswap Group",
                      children: [
                        a("div", {
                          className: "framer-15m2xv4",
                          "data-framer-name": "Uniswap Icon",
                          name: "Uniswap Icon",
                          children: [
                            e(p, {
                              className: "framer-1xnoye8",
                              "data-framer-name": "Rectangle 6",
                              fill: "rgba(0,0,0,1)",
                              intrinsicHeight: 326,
                              intrinsicWidth: 326,
                              name: "Rectangle 6",
                              svg: `<svg width="326" height="326" viewBox="0 0 326 326" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-1.06066" width="228.5" height="228.5" rx="19.25" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 323.458 161.885)" fill="url(#paint0_linear_6_359)" fill-opacity="0.8" stroke="white" stroke-width="1.5"/>
<defs>
<linearGradient id="paint0_linear_6_359" x1="122.778" y1="-36.5113" x2="284.302" y2="200.938" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.2"/>
<stop offset="1" stop-color="#EBACCB" stop-opacity="0.7"/>
</linearGradient>
</defs>
</svg>
`,
                              withExternalLayout: !0,
                            }),
                            e(i, {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: "lazy",
                                sizes: "295px",
                                src: "/images/Q9FioSL8i2Ork4p6g3r6qXffqA.png",
                              },
                              className: "framer-19ahzag",
                              "data-framer-name": "UNISWAP",
                              name: "UNISWAP",
                            }),
                          ],
                        }),
                        a("div", {
                          className: "framer-1yb54rv",
                          "data-framer-name": "Go to Uniswap Text",
                          name: "Go to Uniswap Text",
                          children: [
                            e(t, {
                              __fromCanvasComponent: !0,
                              children: e(r, {
                                children: e("p", {
                                  style: {
                                    "--framer-font-size": "36px",
                                    "--framer-text-alignment": "center",
                                  },
                                  children: e("span", {
                                    style: {
                                      "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDBpdGFsaWM=",
                                      "--framer-font-family": '"Comic Neue"',
                                      "--framer-font-size": "36px",
                                      "--framer-font-style": "italic",
                                      "--framer-font-weight": "700",
                                      "--framer-text-color": "rgba(1, 44, 72, 1)",
                                    },
                                    children: "Go to Uniswap.",
                                  }),
                                }),
                              }),
                              className: "framer-7adt28",
                              "data-framer-name": "Go to Uniswap.",
                              fonts: ["GF;Comic Neue-700italic"],
                              name: "Go to Uniswap.",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            e(t, {
                              __fromCanvasComponent: !0,
                              children: e(r, {
                                children: e("p", {
                                  style: {
                                    "--framer-font-size": "20px"
                                  },
                                  children: e("span", {
                                    style: {
                                      "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                      "--framer-font-family": '"Comic Neue"',
                                      "--framer-font-size": "20px",
                                      "--framer-font-weight": "700",
                                    },
                                    children: "Connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $BUNCHY token address into Uniswap, select $Bunchy, and confirm. When Metamask prompts you for a wallet signature, sign.",
                                  }),
                                }),
                              }),
                              className: "framer-vuqkf5",
                              "data-framer-name": "Connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $BUNCHY token address into Uniswap, select $Bunchy, and confirm. When Metamask prompts you for a wallet signature, sign.",
                              fonts: ["GF;Comic Neue-700"],
                              name: "Connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $BUNCHY token address into Uniswap, select $Bunchy, and confirm. When Metamask prompts you for a wallet signature, sign.",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    a("div", {
                      className: "framer-tz4mev",
                      "data-framer-name": "Frame 20",
                      name: "Frame 20",
                      children: [
                        a("div", {
                          className: "framer-pwz4m7",
                          "data-framer-name": "Group 20",
                          name: "Group 20",
                          children: [
                            e(n.div, {
                              className: "framer-9a2wn5",
                              "data-border": !0,
                              "data-framer-name": "Rectangle 6",
                              name: "Rectangle 6",
                              style: {
                                rotate: -45
                              },
                            }),
                            e(i, {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: "lazy",
                                sizes: "296.25px",
                                src: "/images/rAGMdrsQIXP3tJdbwlrqY5I9c.png",
                              },
                              className: "framer-1bo09to",
                              "data-framer-name": "ETH",
                              name: "ETH",
                            }),
                          ],
                        }),
                        a("div", {
                          className: "framer-66xprg",
                          "data-framer-name": "Frame 11",
                          name: "Frame 11",
                          children: [
                            e(t, {
                              __fromCanvasComponent: !0,
                              children: e(r, {
                                children: e("p", {
                                  style: {
                                    "--framer-font-size": "36px",
                                    "--framer-text-alignment": "right",
                                  },
                                  children: e("span", {
                                    style: {
                                      "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDBpdGFsaWM=",
                                      "--framer-font-family": '"Comic Neue"',
                                      "--framer-font-size": "36px",
                                      "--framer-font-style": "italic",
                                      "--framer-font-weight": "700",
                                      "--framer-text-color": "rgba(1, 44, 72, 1)",
                                    },
                                    children: "Get Some ETH.",
                                  }),
                                }),
                              }),
                              className: "framer-14hijsn",
                              "data-framer-name": "Get Some ETH.",
                              fonts: ["GF;Comic Neue-700italic"],
                              name: "Get Some ETH.",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            e(t, {
                              __fromCanvasComponent: !0,
                              children: e(r, {
                                children: e("p", {
                                  style: {
                                    "--framer-font-size": "20px",
                                    "--framer-line-height": "30px",
                                    "--framer-text-alignment": "right",
                                  },
                                  children: e("span", {
                                    style: {
                                      "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                      "--framer-font-family": '"Comic Neue"',
                                      "--framer-font-size": "20px",
                                      "--framer-font-weight": "700",
                                    },
                                    children: "Have ETH in your wallet to swap to $BUNCHY. If you don\u2019t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.",
                                  }),
                                }),
                              }),
                              className: "framer-15rmjai",
                              "data-framer-name": "Have ETH in your wallet to swap to $BUNCHY. If you don\u2019t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.",
                              fonts: ["GF;Comic Neue-700"],
                              name: "Have ETH in your wallet to swap to $BUNCHY. If you don\u2019t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    a("div", {
                      className: "framer-12ziz8t",
                      "data-framer-name": "Frame 21",
                      name: "Frame 21",
                      children: [
                        a("div", {
                          className: "framer-75e8za",
                          "data-framer-name": "Wallet Icon",
                          name: "Wallet Icon",
                          children: [
                            e(p, {
                              className: "framer-18x9ttl",
                              "data-framer-name": "Rectangle 6",
                              fill: "rgba(0,0,0,1)",
                              intrinsicHeight: 326,
                              intrinsicWidth: 326,
                              name: "Rectangle 6",
                              svg: `<svg width="326" height="326" viewBox="0 0 326 326" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-1.06066" width="228.5" height="228.5" rx="19.25" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 323.458 161.885)" fill="url(#paint0_linear_6_345)" fill-opacity="0.8" stroke="white" stroke-width="1.5"/>
<defs>
<linearGradient id="paint0_linear_6_345" x1="122.778" y1="-36.5113" x2="284.302" y2="200.938" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.2"/>
<stop offset="1" stop-color="#EBACCB" stop-opacity="0.7"/>
</linearGradient>
</defs>
</svg>
`,
                              withExternalLayout: !0,
                            }),
                            e(i, {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: "lazy",
                                sizes: "295px",
                                src: "/images/d5o08sIeX06MDQbTXR3SdFGKCY.png",
                              },
                              className: "framer-ikpcac",
                              "data-framer-name": "WALLET",
                              name: "WALLET",
                            }),
                          ],
                        }),
                        a("div", {
                          className: "framer-m1isn4",
                          "data-framer-name": "Create Wallet Text",
                          name: "Create Wallet Text",
                          children: [
                            e(t, {
                              __fromCanvasComponent: !0,
                              children: e(r, {
                                children: e("p", {
                                  style: {
                                    "--framer-font-size": "20px",
                                    "--framer-line-height": "30px",
                                  },
                                  children: e("span", {
                                    style: {
                                      "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                      "--framer-font-family": '"Comic Neue"',
                                      "--framer-font-size": "20px",
                                      "--framer-font-weight": "700",
                                    },
                                    children: "Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.",
                                  }),
                                }),
                              }),
                              className: "framer-1qbwb9u",
                              "data-framer-name": "Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.",
                              fonts: ["GF;Comic Neue-700"],
                              name: "Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            e(t, {
                              __fromCanvasComponent: !0,
                              children: e(r, {
                                children: e("p", {
                                  style: {
                                    "--framer-font-size": "36px"
                                  },
                                  children: e("span", {
                                    style: {
                                      "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDBpdGFsaWM=",
                                      "--framer-font-family": '"Comic Neue"',
                                      "--framer-font-size": "36px",
                                      "--framer-font-style": "italic",
                                      "--framer-font-weight": "700",
                                      "--framer-text-color": "rgba(1, 44, 72, 1)",
                                    },
                                    children: "Create a Wallet",
                                  }),
                                }),
                              }),
                              className: "framer-1xgls78",
                              "data-framer-name": "Create a Wallet",
                              fonts: ["GF;Comic Neue-700italic"],
                              name: "Create a Wallet",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    e(i, {
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: "lazy",
                        sizes: "394px",
                        src: "/images/sYLAy6yypwdbUFYDMBQT9HEzhQI.png",
                      },
                      className: "framer-1405zb1",
                      "data-framer-name": "HOW TO BUY TEXT",
                      name: "HOW TO BUY TEXT",
                      transformTemplate: I,
                    }),
                  ],
                }),
                e("div", {
                  className: "framer-1qvkhf2",
                  "data-framer-name": "Roadmap Frame",
                  id: O,
                  name: "Roadmap Frame",
                  ref: Y,
                  children: a("div", {
                    className: "framer-1j9o30w",
                    "data-framer-name": "Roadmap Group",
                    name: "Roadmap Group",
                    children: [
                      e(p, {
                        className: "framer-4jegkz",
                        "data-framer-name": "Roadmap Background",
                        fill: "rgba(0,0,0,1)",
                        intrinsicHeight: 987,
                        intrinsicWidth: 1440,
                        name: "Roadmap Background",
                        svg: `<svg width="1440" height="987" viewBox="0 0 1440 987" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="1440" height="987" transform="matrix(1 0 0 -1 0 987)" fill="url(#paint0_linear_4_39)"/>
                              <defs>
                                <linearGradient id="paint0_linear_4_39" x1="720" y1="-109.427" x2="720" y2="987" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="white"/>
                                  <stop offset="0.5" stop-color="#8EB057"/>
                                  <stop offset="0.5" stop-color="#8EB057"/>
                                  <stop offset="1" stop-color="white"/>
                                </linearGradient>
                              </defs>
                              </svg>
                              `,
                        withExternalLayout: !0,
                      }),
                      a("div", {
                        className: "framer-3zyua4",
                        "data-framer-name": "Phases",
                        name: "Phases",
                        children: [
                          a("div", {
                            className: "framer-1crrlds",
                            "data-framer-name": "Phase 1",
                            name: "Phase 1",
                            children: [
                              e(i, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  loading: "lazy",
                                  sizes: "386.4952px",
                                  src: "/images/PsleDw3imr4P2PXrOrlVTHRNg.png",
                                },
                                className: "framer-i8xo37",
                                "data-framer-name": "PHASE 1",
                                name: "PHASE 1",
                              }),
                              e(t, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: e("p", {
                                    style: {
                                      "--framer-font-size": "32px"
                                    },
                                    children: e("span", {
                                      style: {
                                        "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                        "--framer-font-family": '"Comic Neue"',
                                        "--framer-font-size": "32px",
                                        "--framer-font-weight": "700",
                                      },
                                      children: "Phase 1",
                                    }),
                                  }),
                                }),
                                className: "framer-1u01vom",
                                "data-framer-name": "Phase 1",
                                fonts: ["GF;Comic Neue-700"],
                                name: "Phase 1",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              a("div", {
                                className: "framer-1hlbxfs",
                                "data-framer-name": "Frame 1",
                                name: "Frame 1",
                                children: [
                                  e(t, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: e("p", {
                                        style: {
                                          "--framer-font-size": "20px"
                                        },
                                        children: e("span", {
                                          style: {
                                            "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                            "--framer-font-family": '"Comic Neue"',
                                            "--framer-font-size": "20px",
                                            "--framer-font-weight": "700",
                                          },
                                          children: "Uniswap DEX Listing",
                                        }),
                                      }),
                                    }),
                                    className: "framer-1543so8",
                                    "data-framer-name": "Uniswap DEX Listing",
                                    fonts: ["GF;Comic Neue-700"],
                                    name: "Uniswap DEX Listing",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e(i, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      loading: "lazy",
                                      sizes: "26px",
                                      src: "/images/EBkYSBKUD9aJ5nKz45bWOtIwuM8.png",
                                    },
                                    className: "framer-ko77km",
                                    "data-framer-name": "CHECKBOX CHECKED V1",
                                    name: "CHECKBOX CHECKED V1",
                                  }),
                                ],
                              }),
                              a("div", {
                                className: "framer-13wvwgr",
                                "data-framer-name": "Frame 2",
                                name: "Frame 2",
                                children: [
                                  e(t, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: e("p", {
                                        style: {
                                          "--framer-font-size": "20px"
                                        },
                                        children: e("span", {
                                          style: {
                                            "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                            "--framer-font-family": '"Comic Neue"',
                                            "--framer-font-size": "20px",
                                            "--framer-font-weight": "700",
                                          },
                                          children: "Launch Comic Series",
                                        }),
                                      }),
                                    }),
                                    className: "framer-1orgnpt",
                                    "data-framer-name": "Launch Comic Series",
                                    fonts: ["GF;Comic Neue-700"],
                                    name: "Launch Comic Series",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e(i, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      loading: "lazy",
                                      sizes: "26px",
                                      src: "/images/EBkYSBKUD9aJ5nKz45bWOtIwuM8.png",
                                    },
                                    className: "framer-g7pbxl",
                                    "data-framer-name": "CHECKBOX CHECKED V1",
                                    name: "CHECKBOX CHECKED V1",
                                  }),
                                ],
                              }),
                              a("div", {
                                className: "framer-1c4lm49",
                                "data-framer-name": "Frame 3",
                                name: "Frame 3",
                                children: [
                                  e(t, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: e("p", {
                                        style: {
                                          "--framer-font-size": "20px"
                                        },
                                        children: e("span", {
                                          style: {
                                            "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                            "--framer-font-family": '"Comic Neue"',
                                            "--framer-font-size": "20px",
                                            "--framer-font-weight": "700",
                                          },
                                          children: "Dexscreener",
                                        }),
                                      }),
                                    }),
                                    className: "framer-196pwz4",
                                    "data-framer-name": "Dexscreener",
                                    fonts: ["GF;Comic Neue-700"],
                                    name: "Dexscreener",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e(i, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      loading: "lazy",
                                      sizes: "26px",
                                      src: "/images/EBkYSBKUD9aJ5nKz45bWOtIwuM8.png",
                                    },
                                    className: "framer-1pbnqlg",
                                    "data-framer-name": "CHECKBOX CHECKED V1",
                                    name: "CHECKBOX CHECKED V1",
                                  }),
                                ],
                              }),
                              a("div", {
                                className: "framer-9y2igs",
                                "data-framer-name": "Frame 4",
                                name: "Frame 4",
                                children: [
                                  e(t, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: e("p", {
                                        style: {
                                          "--framer-font-size": "20px"
                                        },
                                        children: e("span", {
                                          style: {
                                            "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                            "--framer-font-family": '"Comic Neue"',
                                            "--framer-font-size": "20px",
                                            "--framer-font-weight": "700",
                                          },
                                          children: "Dextools",
                                        }),
                                      }),
                                    }),
                                    className: "framer-1a7qtae",
                                    "data-framer-name": "Dextools",
                                    fonts: ["GF;Comic Neue-700"],
                                    name: "Dextools",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e(i, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      loading: "lazy",
                                      sizes: "26px",
                                      src: "/images/EBkYSBKUD9aJ5nKz45bWOtIwuM8.png",
                                    },
                                    className: "framer-1ol5g7i",
                                    "data-framer-name": "CHECKBOX CHECKED V1",
                                    name: "CHECKBOX CHECKED V1",
                                  }),
                                ],
                              }),
                              a("div", {
                                className: "framer-2r7jya",
                                "data-framer-name": "Frame 5",
                                name: "Frame 5",
                                children: [
                                  e(t, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: e("p", {
                                        style: {
                                          "--framer-font-size": "20px"
                                        },
                                        children: e("span", {
                                          style: {
                                            "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                            "--framer-font-family": '"Comic Neue"',
                                            "--framer-font-size": "20px",
                                            "--framer-font-weight": "700",
                                          },
                                          children: "CoinGecko",
                                        }),
                                      }),
                                    }),
                                    className: "framer-gmgbcy",
                                    "data-framer-name": "CoinGecko",
                                    fonts: ["GF;Comic Neue-700"],
                                    name: "CoinGecko",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e(i, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      loading: "lazy",
                                      sizes: "26px",
                                      src: "/images/EBkYSBKUD9aJ5nKz45bWOtIwuM8.png",
                                    },
                                    className: "framer-36r6vb",
                                    "data-framer-name": "CHECKBOX CHECKED V1",
                                    name: "CHECKBOX CHECKED V1",
                                  }),
                                ],
                              }),
                              a("div", {
                                className: "framer-821aem",
                                "data-framer-name": "Frame 6",
                                name: "Frame 6",
                                children: [
                                  e(t, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: e("p", {
                                        style: {
                                          "--framer-font-size": "20px"
                                        },
                                        children: e("span", {
                                          style: {
                                            "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                            "--framer-font-family": '"Comic Neue"',
                                            "--framer-font-size": "20px",
                                            "--framer-font-weight": "700",
                                          },
                                          children: "CoinMarketCap",
                                        }),
                                      }),
                                    }),
                                    className: "framer-limye3",
                                    "data-framer-name": "CoinMarketCap",
                                    fonts: ["GF;Comic Neue-700"],
                                    name: "CoinMarketCap",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e(i, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      loading: "lazy",
                                      sizes: "26px",
                                      src: "/images/EBkYSBKUD9aJ5nKz45bWOtIwuM8.png",
                                    },
                                    className: "framer-1d9kitg",
                                    "data-framer-name": "CHECKBOX CHECKED V1",
                                    name: "CHECKBOX CHECKED V1",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a("div", {
                            className: "framer-1kppy3y",
                            "data-framer-name": "Phase 2",
                            name: "Phase 2",
                            children: [
                              a(i, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  loading: "lazy",
                                  sizes: "385.6287px",
                                  src: "/images/tjSklVcUi0INyYt8d0mxEsj6Jg.png",
                                },
                                className: "framer-12jb7gr",
                                "data-framer-name": "PHASE 2",
                                name: "PHASE 2",
                                children: [
                                  a("div", {
                                    className: "framer-1be02hr",
                                    "data-framer-name": "Frame 7",
                                    name: "Frame 7",
                                    children: [
                                      e(t, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--framer-font-size": "20px",
                                            },
                                            children: e("span", {
                                              style: {
                                                "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                                "--framer-font-family": '"Comic Neue"',
                                                "--framer-font-size": "20px",
                                                "--framer-font-weight": "700",
                                              },
                                              children: "Bubble Donut Game",
                                            }),
                                          }),
                                        }),
                                        className: "framer-qotbjv",
                                        "data-framer-name": "Bubble Donut Game",
                                        fonts: ["GF;Comic Neue-700"],
                                        name: "Bubble Donut Game",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                      e(i, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          loading: "lazy",
                                          sizes: "24px",
                                          src: "/images/w7fKojj35mOVgnJ6HAdVkjH8lM.png",
                                        },
                                        className: "framer-1qb8vub",
                                        "data-framer-name": "CHECKBOX NOCHECK V1",
                                        name: "CHECKBOX NOCHECK V1",
                                      }),
                                    ],
                                  }),
                                  a("div", {
                                    className: "framer-1hosgnv",
                                    "data-framer-name": "Frame 9",
                                    name: "Frame 9",
                                    children: [
                                      e(t, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--framer-font-size": "20px",
                                            },
                                            children: e("span", {
                                              style: {
                                                "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                                "--framer-font-family": '"Comic Neue"',
                                                "--framer-font-size": "20px",
                                                "--framer-font-weight": "700",
                                              },
                                              children: "1,000+ Holders",
                                            }),
                                          }),
                                        }),
                                        className: "framer-1ogpwww",
                                        "data-framer-name": "1,000+ Holders",
                                        fonts: ["GF;Comic Neue-700"],
                                        name: "1,000+ Holders",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                      e(i, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          loading: "lazy",
                                          sizes: "24px",
                                          src: "/images/w7fKojj35mOVgnJ6HAdVkjH8lM.png",
                                        },
                                        className: "framer-1htb194",
                                        "data-framer-name": "CHECKBOX NOCHECK V1",
                                        name: "CHECKBOX NOCHECK V1",
                                      }),
                                    ],
                                  }),
                                  a("div", {
                                    className: "framer-f0mi9",
                                    "data-framer-name": "Frame 11",
                                    name: "Frame 11",
                                    children: [
                                      e(t, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--framer-font-size": "20px",
                                            },
                                            children: e("span", {
                                              style: {
                                                "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                                "--framer-font-family": '"Comic Neue"',
                                                "--framer-font-size": "20px",
                                                "--framer-font-weight": "700",
                                              },
                                              children: "Call Channel",
                                            }),
                                          }),
                                        }),
                                        className: "framer-4jgujq",
                                        "data-framer-name": "Call Channel",
                                        fonts: ["GF;Comic Neue-700"],
                                        name: "Call Channel",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                      e(i, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          loading: "lazy",
                                          sizes: "24px",
                                          src: "/images/w7fKojj35mOVgnJ6HAdVkjH8lM.png",
                                        },
                                        className: "framer-15q78s1",
                                        "data-framer-name": "CHECKBOX NOCHECK V1",
                                        name: "CHECKBOX NOCHECK V1",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e(t, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: e("p", {
                                    style: {
                                      "--framer-font-size": "32px"
                                    },
                                    children: e("span", {
                                      style: {
                                        "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                        "--framer-font-family": '"Comic Neue"',
                                        "--framer-font-size": "32px",
                                        "--framer-font-weight": "700",
                                      },
                                      children: "Phase 2",
                                    }),
                                  }),
                                }),
                                className: "framer-2aghil",
                                "data-framer-name": "Phase 2",
                                fonts: ["GF;Comic Neue-700"],
                                name: "Phase 2",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              a("div", {
                                className: "framer-1pqy1j0",
                                "data-framer-name": "Frame 5",
                                name: "Frame 5",
                                children: [
                                  e(t, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: e("p", {
                                        style: {
                                          "--framer-font-size": "20px"
                                        },
                                        children: e("span", {
                                          style: {
                                            "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                            "--framer-font-family": '"Comic Neue"',
                                            "--framer-font-size": "20px",
                                            "--framer-font-weight": "700",
                                          },
                                          children: "Marketing Video",
                                        }),
                                      }),
                                    }),
                                    className: "framer-w0j3xp",
                                    "data-framer-name": "Marketing Video",
                                    fonts: ["GF;Comic Neue-700"],
                                    name: "Marketing Video",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e(i, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      loading: "lazy",
                                      sizes: "24px",
                                      src: "/images/w7fKojj35mOVgnJ6HAdVkjH8lM.png",
                                    },
                                    className: "framer-1m4vwx0",
                                    "data-framer-name": "CHECKBOX NOCHECK V1",
                                    name: "CHECKBOX NOCHECK V1",
                                  }),
                                ],
                              }),
                              a("div", {
                                className: "framer-1amnefy",
                                "data-framer-name": "Frame 6",
                                name: "Frame 6",
                                children: [
                                  e(t, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: e("p", {
                                        style: {
                                          "--framer-font-size": "20px"
                                        },
                                        children: e("span", {
                                          style: {
                                            "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                            "--framer-font-family": '"Comic Neue"',
                                            "--framer-font-size": "20px",
                                            "--framer-font-weight": "700",
                                          },
                                          children: "KOL/Partnership Acquisitions",
                                        }),
                                      }),
                                    }),
                                    className: "framer-ll566u",
                                    "data-framer-name": "KOL/Partnership Acquisitions",
                                    fonts: ["GF;Comic Neue-700"],
                                    name: "KOL/Partnership Acquisitions",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e(i, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      loading: "lazy",
                                      sizes: "24px",
                                      src: "/images/w7fKojj35mOVgnJ6HAdVkjH8lM.png",
                                    },
                                    className: "framer-1iu6olc",
                                    "data-framer-name": "CHECKBOX NOCHECK V1",
                                    name: "CHECKBOX NOCHECK V1",
                                  }),
                                ],
                              }),
                              a("div", {
                                className: "framer-86ga7g",
                                "data-framer-name": "Frame 7",
                                name: "Frame 7",
                                children: [
                                  e(t, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: e("p", {
                                        style: {
                                          "--framer-font-size": "20px"
                                        },
                                        children: e("span", {
                                          style: {
                                            "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                            "--framer-font-family": '"Comic Neue"',
                                            "--framer-font-size": "20px",
                                            "--framer-font-weight": "700",
                                          },
                                          children: "15 Total Comics",
                                        }),
                                      }),
                                    }),
                                    className: "framer-imiimu",
                                    "data-framer-name": "15 Total Comics",
                                    fonts: ["GF;Comic Neue-700"],
                                    name: "15 Total Comics",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e(i, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      loading: "lazy",
                                      sizes: "24px",
                                      src: "/images/w7fKojj35mOVgnJ6HAdVkjH8lM.png",
                                    },
                                    className: "framer-141mb7",
                                    "data-framer-name": "CHECKBOX NOCHECK V1",
                                    name: "CHECKBOX NOCHECK V1",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          // a("div", {
                          //   className: "framer-15hey42",
                          //   "data-framer-name": "Phase 3",
                          //   name: "Phase 3",
                          //   children: [
                          //     e(i, {
                          //       background: {
                          //         alt: "",
                          //         fit: "fill",
                          //         loading: "lazy",
                          //         sizes: "386.8338px",
                          //         src: "/images/1H2z3b0sNx9GOhd5HuD4khhWqE.png",
                          //       },
                          //       className: "framer-l141zb",
                          //       "data-framer-name": "PHASE 3",
                          //       name: "PHASE 3",
                          //     }),
                          //     e(t, {
                          //       __fromCanvasComponent: !0,
                          //       children: e(r, {
                          //         children: e("p", {
                          //           style: {
                          //             "--framer-font-size": "32px"
                          //           },
                          //           children: e("span", {
                          //             style: {
                          //               "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                          //               "--framer-font-family": '"Comic Neue"',
                          //               "--framer-font-size": "32px",
                          //               "--framer-font-weight": "700",
                          //             },
                          //             children: "Phase 3",
                          //           }),
                          //         }),
                          //       }),
                          //       className: "framer-p8xzhw",
                          //       "data-framer-name": "Phase 3",
                          //       fonts: ["GF;Comic Neue-700"],
                          //       name: "Phase 3",
                          //       verticalAlignment: "top",
                          //       withExternalLayout: !0,
                          //     }),
                          //     a("div", {
                          //       className: "framer-vplgzl",
                          //       "data-framer-name": "Frame 9",
                          //       name: "Frame 9",
                          //       children: [
                          //         e(t, {
                          //           __fromCanvasComponent: !0,
                          //           children: e(r, {
                          //             children: e("p", {
                          //               style: {
                          //                 "--framer-font-size": "20px"
                          //               },
                          //               children: e("span", {
                          //                 style: {
                          //                   "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                          //                   "--framer-font-family": '"Comic Neue"',
                          //                   "--framer-font-size": "20px",
                          //                   "--framer-font-weight": "700",
                          //                 },
                          //                 children: "20 Total Comics",
                          //               }),
                          //             }),
                          //           }),
                          //           className: "framer-15vj9zh",
                          //           "data-framer-name": "20 Total Comics",
                          //           fonts: ["GF;Comic Neue-700"],
                          //           name: "20 Total Comics",
                          //           verticalAlignment: "top",
                          //           withExternalLayout: !0,
                          //         }),
                          //         e(i, {
                          //           background: {
                          //             alt: "",
                          //             fit: "fill",
                          //             loading: "lazy",
                          //             sizes: "24px",
                          //             src: "/images/w7fKojj35mOVgnJ6HAdVkjH8lM.png",
                          //           },
                          //           className: "framer-4no3m6",
                          //           "data-framer-name": "CHECKBOX NOCHECK V1",
                          //           name: "CHECKBOX NOCHECK V1",
                          //         }),
                          //       ],
                          //     }),
                          //     a("div", {
                          //       className: "framer-9axm7p",
                          //       "data-framer-name": "Frame 10",
                          //       name: "Frame 10",
                          //       children: [
                          //         e(t, {
                          //           __fromCanvasComponent: !0,
                          //           children: e(r, {
                          //             children: e("p", {
                          //               style: {
                          //                 "--framer-font-size": "20px"
                          //               },
                          //               children: e("span", {
                          //                 style: {
                          //                   "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                          //                   "--framer-font-family": '"Comic Neue"',
                          //                   "--framer-font-size": "20px",
                          //                   "--framer-font-weight": "700",
                          //                 },
                          //                 children: "Launch Cannabis Line",
                          //               }),
                          //             }),
                          //           }),
                          //           className: "framer-1uzvo8p",
                          //           "data-framer-name": "Launch Cannabis Line",
                          //           fonts: ["GF;Comic Neue-700"],
                          //           name: "Launch Cannabis Line",
                          //           verticalAlignment: "top",
                          //           withExternalLayout: !0,
                          //         }),
                          //         e(i, {
                          //           background: {
                          //             alt: "",
                          //             fit: "fill",
                          //             loading: "lazy",
                          //             sizes: "24px",
                          //             src: "/images/w7fKojj35mOVgnJ6HAdVkjH8lM.png",
                          //           },
                          //           className: "framer-fuw4hk",
                          //           "data-framer-name": "CHECKBOX NOCHECK V1",
                          //           name: "CHECKBOX NOCHECK V1",
                          //         }),
                          //       ],
                          //     }),
                          //     a("div", {
                          //       className: "framer-1dc9t2x",
                          //       "data-framer-name": "Frame 11",
                          //       name: "Frame 11",
                          //       children: [
                          //         e(t, {
                          //           __fromCanvasComponent: !0,
                          //           children: e(r, {
                          //             children: e("p", {
                          //               style: {
                          //                 "--framer-font-size": "20px"
                          //               },
                          //               children: e("span", {
                          //                 style: {
                          //                   "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                          //                   "--framer-font-family": '"Comic Neue"',
                          //                   "--framer-font-size": "20px",
                          //                   "--framer-font-weight": "700",
                          //                 },
                          //                 children: "CEX Listing",
                          //               }),
                          //             }),
                          //           }),
                          //           className: "framer-1xp4ouh",
                          //           "data-framer-name": "CEX Listing",
                          //           fonts: ["GF;Comic Neue-700"],
                          //           name: "CEX Listing",
                          //           verticalAlignment: "top",
                          //           withExternalLayout: !0,
                          //         }),
                          //         e(i, {
                          //           background: {
                          //             alt: "",
                          //             fit: "fill",
                          //             loading: "lazy",
                          //             sizes: "24px",
                          //             src: "/images/w7fKojj35mOVgnJ6HAdVkjH8lM.png",
                          //           },
                          //           className: "framer-g51mol",
                          //           "data-framer-name": "CHECKBOX NOCHECK V1",
                          //           name: "CHECKBOX NOCHECK V1",
                          //         }),
                          //       ],
                          //     }),
                          //     a("div", {
                          //       className: "framer-mj6flr",
                          //       "data-framer-name": "Frame 12",
                          //       name: "Frame 12",
                          //       children: [
                          //         e(t, {
                          //           __fromCanvasComponent: !0,
                          //           children: e(r, {
                          //             children: e("p", {
                          //               style: {
                          //                 "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                          //                 "--framer-font-family": '"Comic Neue", sans-serif',
                          //                 "--framer-font-size": "20px",
                          //                 "--framer-font-weight": "700",
                          //               },
                          //               children: "Release Game #2",
                          //             }),
                          //           }),
                          //           className: "framer-1kt6ag0",
                          //           "data-framer-name": "Release Game #2",
                          //           fonts: ["GF;Comic Neue-700"],
                          //           name: "Release Game #2",
                          //           verticalAlignment: "top",
                          //           withExternalLayout: !0,
                          //         }),
                          //         e(i, {
                          //           background: {
                          //             alt: "",
                          //             fit: "fill",
                          //             loading: "lazy",
                          //             sizes: "24px",
                          //             src: "/images/w7fKojj35mOVgnJ6HAdVkjH8lM.png",
                          //           },
                          //           className: "framer-5tbb9s",
                          //           "data-framer-name": "CHECKBOX NOCHECK V1",
                          //           name: "CHECKBOX NOCHECK V1",
                          //         }),
                          //       ],
                          //     }),
                          //     a("div", {
                          //       className: "framer-47fj11",
                          //       "data-framer-name": "Frame 13",
                          //       name: "Frame 13",
                          //       children: [
                          //         e(t, {
                          //           __fromCanvasComponent: !0,
                          //           children: e(r, {
                          //             children: e("p", {
                          //               style: {
                          //                 "--framer-font-size": "20px"
                          //               },
                          //               children: e("span", {
                          //                 style: {
                          //                   "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                          //                   "--framer-font-family": '"Comic Neue"',
                          //                   "--framer-font-size": "20px",
                          //                   "--framer-font-weight": "700",
                          //                 },
                          //                 children: "10,000+ Holders",
                          //               }),
                          //             }),
                          //           }),
                          //           className: "framer-ohc7vo",
                          //           "data-framer-name": "10,000+ Holders",
                          //           fonts: ["GF;Comic Neue-700"],
                          //           name: "10,000+ Holders",
                          //           verticalAlignment: "top",
                          //           withExternalLayout: !0,
                          //         }),
                          //         e(i, {
                          //           background: {
                          //             alt: "",
                          //             fit: "fill",
                          //             loading: "lazy",
                          //             sizes: "24px",
                          //             src: "/images/w7fKojj35mOVgnJ6HAdVkjH8lM.png",
                          //           },
                          //           className: "framer-1k5zvof",
                          //           "data-framer-name": "CHECKBOX NOCHECK V1",
                          //           name: "CHECKBOX NOCHECK V1",
                          //         }),
                          //       ],
                          //     }),
                          //   ],
                          // }),
                          // a("div", {
                          //   className: "framer-aom12z",
                          //   "data-framer-name": "Phase 4",
                          //   name: "Phase 4",
                          //   children: [
                          //     e(i, {
                          //       background: {
                          //         alt: "",
                          //         fit: "stretch",
                          //         loading: "lazy",
                          //         positionX: "center",
                          //         positionY: "center",
                          //         sizes: "385.6287px",
                          //         src: "/images/fCg4VSTcdkkxGSVQxcdcIEcZpQ.png",
                          //       },
                          //       className: "framer-1bux5ii",
                          //       "data-framer-name": "PHASE 4",
                          //       name: "PHASE 4",
                          //       children: a("div", {
                          //         className: "framer-op5yt6",
                          //         "data-framer-name": "Frame 8",
                          //         name: "Frame 8",
                          //         children: [
                          //           e(t, {
                          //             __fromCanvasComponent: !0,
                          //             children: e(r, {
                          //               children: e("p", {
                          //                 style: {
                          //                   "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                          //                   "--framer-font-family": '"Comic Neue", sans-serif',
                          //                   "--framer-font-size": "20px",
                          //                   "--framer-font-weight": "700",
                          //                 },
                          //                 children: "Release Game #3",
                          //               }),
                          //             }),
                          //             className: "framer-1odu55t",
                          //             "data-framer-name": "Release Game #2",
                          //             fonts: ["GF;Comic Neue-700"],
                          //             name: "Release Game #2",
                          //             verticalAlignment: "top",
                          //             withExternalLayout: !0,
                          //           }),
                          //           e(i, {
                          //             background: {
                          //               alt: "",
                          //               fit: "fill",
                          //               loading: "lazy",
                          //               sizes: "24px",
                          //               src: "/images/w7fKojj35mOVgnJ6HAdVkjH8lM.png",
                          //             },
                          //             className: "framer-pi28px",
                          //             "data-framer-name": "CHECKBOX NOCHECK V1",
                          //             name: "CHECKBOX NOCHECK V1",
                          //           }),
                          //         ],
                          //       }),
                          //     }),
                          //     e(t, {
                          //       __fromCanvasComponent: !0,
                          //       children: e(r, {
                          //         children: e("p", {
                          //           style: {
                          //             "--framer-font-size": "32px"
                          //           },
                          //           children: e("span", {
                          //             style: {
                          //               "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                          //               "--framer-font-family": '"Comic Neue"',
                          //               "--framer-font-size": "32px",
                          //               "--framer-font-weight": "700",
                          //             },
                          //             children: "Phase 4",
                          //           }),
                          //         }),
                          //       }),
                          //       className: "framer-1x9idyf",
                          //       "data-framer-name": "Phase 4",
                          //       fonts: ["GF;Comic Neue-700"],
                          //       name: "Phase 4",
                          //       verticalAlignment: "top",
                          //       withExternalLayout: !0,
                          //     }),
                          //     a("div", {
                          //       className: "framer-xv2zx1",
                          //       "data-framer-name": "Frame 13",
                          //       name: "Frame 13",
                          //       children: [
                          //         e(t, {
                          //           __fromCanvasComponent: !0,
                          //           children: e(r, {
                          //             children: e("p", {
                          //               style: {
                          //                 "--framer-font-size": "20px"
                          //               },
                          //               children: e("span", {
                          //                 style: {
                          //                   "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                          //                   "--framer-font-family": '"Comic Neue"',
                          //                   "--framer-font-size": "20px",
                          //                   "--framer-font-weight": "700",
                          //                 },
                          //                 children: "Munchy Game Competitions",
                          //               }),
                          //             }),
                          //           }),
                          //           className: "framer-1xgbiew",
                          //           "data-framer-name": "Munchy Game Competitions",
                          //           fonts: ["GF;Comic Neue-700"],
                          //           name: "Munchy Game Competitions",
                          //           verticalAlignment: "top",
                          //           withExternalLayout: !0,
                          //         }),
                          //         e(i, {
                          //           background: {
                          //             alt: "",
                          //             fit: "fill",
                          //             loading: "lazy",
                          //             sizes: "24px",
                          //             src: "/images/w7fKojj35mOVgnJ6HAdVkjH8lM.png",
                          //           },
                          //           className: "framer-vf5aqq",
                          //           "data-framer-name": "CHECKBOX NOCHECK V1",
                          //           name: "CHECKBOX NOCHECK V1",
                          //         }),
                          //       ],
                          //     }),
                          //     a("div", {
                          //       className: "framer-1t8cb7l",
                          //       "data-framer-name": "Frame 14",
                          //       name: "Frame 14",
                          //       children: [
                          //         e(t, {
                          //           __fromCanvasComponent: !0,
                          //           children: e(r, {
                          //             children: e("p", {
                          //               style: {
                          //                 "--framer-font-size": "20px"
                          //               },
                          //               children: e("span", {
                          //                 style: {
                          //                   "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                          //                   "--framer-font-family": '"Comic Neue"',
                          //                   "--framer-font-size": "20px",
                          //                   "--framer-font-weight": "700",
                          //                 },
                          //                 children: "Boy's Club Collabs",
                          //               }),
                          //             }),
                          //           }),
                          //           className: "framer-aph7n5",
                          //           "data-framer-name": "Boy's Club Collabs",
                          //           fonts: ["GF;Comic Neue-700"],
                          //           name: "Boy's Club Collabs",
                          //           verticalAlignment: "top",
                          //           withExternalLayout: !0,
                          //         }),
                          //         e(i, {
                          //           background: {
                          //             alt: "",
                          //             fit: "fill",
                          //             loading: "lazy",
                          //             sizes: "24px",
                          //             src: "/images/w7fKojj35mOVgnJ6HAdVkjH8lM.png",
                          //           },
                          //           className: "framer-13jf1f9",
                          //           "data-framer-name": "CHECKBOX NOCHECK V1",
                          //           name: "CHECKBOX NOCHECK V1",
                          //         }),
                          //       ],
                          //     }),
                          //     a("div", {
                          //       className: "framer-1tgzvhz",
                          //       "data-framer-name": "Frame 15",
                          //       name: "Frame 15",
                          //       children: [
                          //         e(t, {
                          //           __fromCanvasComponent: !0,
                          //           children: e(r, {
                          //             children: e("p", {
                          //               style: {
                          //                 "--framer-font-size": "20px"
                          //               },
                          //               children: e("span", {
                          //                 style: {
                          //                   "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                          //                   "--framer-font-family": '"Comic Neue"',
                          //                   "--framer-font-size": "20px",
                          //                   "--framer-font-weight": "700",
                          //                 },
                          //                 children: "Tier 1 CEX Listing",
                          //               }),
                          //             }),
                          //           }),
                          //           className: "framer-1dw4vll",
                          //           "data-framer-name": "Tier 1 CEX Listing",
                          //           fonts: ["GF;Comic Neue-700"],
                          //           name: "Tier 1 CEX Listing",
                          //           verticalAlignment: "top",
                          //           withExternalLayout: !0,
                          //         }),
                          //         e(i, {
                          //           background: {
                          //             alt: "",
                          //             fit: "fill",
                          //             loading: "lazy",
                          //             sizes: "24px",
                          //             src: "/images/w7fKojj35mOVgnJ6HAdVkjH8lM.png",
                          //           },
                          //           className: "framer-q1ojdk",
                          //           "data-framer-name": "CHECKBOX NOCHECK V1",
                          //           name: "CHECKBOX NOCHECK V1",
                          //         }),
                          //       ],
                          //     }),
                          //     a("div", {
                          //       className: "framer-cizgy0",
                          //       "data-framer-name": "Frame 16",
                          //       name: "Frame 16",
                          //       children: [
                          //         e(t, {
                          //           __fromCanvasComponent: !0,
                          //           children: e(r, {
                          //             children: e("p", {
                          //               style: {
                          //                 "--framer-font-size": "20px"
                          //               },
                          //               children: e("span", {
                          //                 style: {
                          //                   "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                          //                   "--framer-font-family": '"Comic Neue"',
                          //                   "--framer-font-size": "20px",
                          //                   "--framer-font-weight": "700",
                          //                 },
                          //                 children: "40+ Total Comics",
                          //               }),
                          //             }),
                          //           }),
                          //           className: "framer-l6uvos",
                          //           "data-framer-name": "40+ Total Comics",
                          //           fonts: ["GF;Comic Neue-700"],
                          //           name: "40+ Total Comics",
                          //           verticalAlignment: "top",
                          //           withExternalLayout: !0,
                          //         }),
                          //         e(i, {
                          //           background: {
                          //             alt: "",
                          //             fit: "fill",
                          //             loading: "lazy",
                          //             sizes: "24px",
                          //             src: "/images/w7fKojj35mOVgnJ6HAdVkjH8lM.png",
                          //           },
                          //           className: "framer-1ukobbb",
                          //           "data-framer-name": "CHECKBOX NOCHECK V1",
                          //           name: "CHECKBOX NOCHECK V1",
                          //         }),
                          //       ],
                          //     }),
                          //     a("div", {
                          //       className: "framer-14o0zmt",
                          //       "data-framer-name": "Frame 17",
                          //       name: "Frame 17",
                          //       children: [
                          //         e(t, {
                          //           __fromCanvasComponent: !0,
                          //           children: e(r, {
                          //             children: e("p", {
                          //               style: {
                          //                 "--framer-font-size": "20px"
                          //               },
                          //               children: e("span", {
                          //                 style: {
                          //                   "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                          //                   "--framer-font-family": '"Comic Neue"',
                          //                   "--framer-font-size": "20px",
                          //                   "--framer-font-weight": "700",
                          //                 },
                          //                 children: "20,000+ Holders",
                          //               }),
                          //             }),
                          //           }),
                          //           className: "framer-1eobc2p",
                          //           "data-framer-name": "20,000+ Holders",
                          //           fonts: ["GF;Comic Neue-700"],
                          //           name: "20,000+ Holders",
                          //           verticalAlignment: "top",
                          //           withExternalLayout: !0,
                          //         }),
                          //         e(i, {
                          //           background: {
                          //             alt: "",
                          //             fit: "fill",
                          //             loading: "lazy",
                          //             sizes: "24px",
                          //             src: "/images/w7fKojj35mOVgnJ6HAdVkjH8lM.png",
                          //           },
                          //           className: "framer-1yfhugf",
                          //           "data-framer-name": "CHECKBOX NOCHECK V1",
                          //           name: "CHECKBOX NOCHECK V1",
                          //         }),
                          //       ],
                          //     }),
                          //   ],
                          // }),
                        ],
                      }),
                      e(i, {
                        background: {
                          alt: "",
                          fit: "stretch",
                          loading: "lazy",
                          positionX: "center",
                          positionY: "center",
                          sizes: "358px",
                          src: "/images/JdYauheiyNjPptwX9G37hMtMs.png",
                        },
                        className: "framer-q57o1f",
                        "data-framer-name": "ROADMAP TEXT",
                        name: "ROADMAP TEXT",
                        transformTemplate: I,
                      }),
                      e(i, {
                        background: {
                          alt: "",
                          fit: "stretch",
                          loading: "lazy",
                          positionX: "center",
                          positionY: "center",
                          sizes: "644px",
                          src: "/images/c56DZRQA24mpK1EuZ6MqPkMqo.png",
                        },
                        className: "framer-18nth2k",
                        "data-framer-name": "HALF PLANET VANILLA",
                        name: "HALF PLANET VANILLA",
                      }),
                    ],
                  }),
                }),
                e("div", {
                  className: "framer-1waiaa1",
                  "data-framer-name": "Tokenomics Frame",
                  name: "Tokenomics Frame",
                  children: a("div", {
                    className: "framer-17fqwaz",
                    "data-framer-name": "Tokenomics Group",
                    name: "Tokenomics Group",
                    children: [
                      e("div", {
                        className: "framer-1f37bcv",
                        "data-framer-name": "Tokenomics Background",
                        name: "Tokenomics Background",
                      }),
                      a("div", {
                        className: "framer-1wukgjm",
                        "data-framer-name": "Donut Box Group",
                        name: "Donut Box Group",
                        children: [
                          a(i, {
                            background: {
                              alt: "",
                              fit: "stretch",
                              loading: "lazy",
                              positionX: "center",
                              positionY: "center",
                              sizes: "859.0298px",
                              src: "/images/vpGVjSH0A9FC9CwLiOOGnPXYhi0.png",
                            },
                            className: "framer-pps3z9",
                            "data-framer-name": "DONUT BOX new 2",
                            name: "DONUT BOX new 2",
                            children: [
                              e(t, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                      "--framer-font-family": '"Comic Neue", sans-serif',
                                      "--framer-font-size": "40px",
                                      "--framer-font-weight": "700",
                                      "--framer-text-alignment": "center",
                                    },
                                    children: "1 Billion",
                                  }),
                                }),
                                className: "framer-dvi51o",
                                "data-framer-name": "420 M",
                                fonts: ["GF;Comic Neue-700"],
                                name: "420 M",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              e(t, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                      "--framer-font-family": '"Comic Neue", sans-serif',
                                      "--framer-font-size": "27px",
                                      "--framer-font-weight": "700",
                                    },
                                    children: "0x00000000000000000000000000000000000",
                                  }),
                                }),
                                className: "framer-1qdtib1",
                                "data-framer-name": "Coming Soon",
                                fonts: ["GF;Comic Neue-700"],
                                name: "Coming Soon",
                                verticalAlignment: "center",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          a("div", {
                            className: "framer-13ys7oo",
                            "data-framer-name": "$BUNCHY Symbol Text",
                            name: "$BUNCHY Symbol Text",
                            children: [
                              e(t, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: e("p", {
                                    style: {
                                      "--framer-font-size": "40px",
                                      "--framer-text-alignment": "center",
                                    },
                                    children: e("span", {
                                      style: {
                                        "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                        "--framer-font-family": '"Comic Neue"',
                                        "--framer-font-size": "40px",
                                        "--framer-font-weight": "700",
                                      },
                                      children: "$BUNCHY",
                                    }),
                                  }),
                                }),
                                className: "framer-101hxh5",
                                "data-framer-name": "$BUNCHY",
                                fonts: ["GF;Comic Neue-700"],
                                name: "$BUNCHY",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              e(t, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: e("p", {
                                    style: {
                                      "--framer-font-size": "28px",
                                      "--framer-text-alignment": "center",
                                    },
                                    children: e("span", {
                                      style: {
                                        "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                        "--framer-font-family": '"Comic Neue"',
                                        "--framer-font-size": "28px",
                                        "--framer-font-weight": "700",
                                      },
                                      children: "Symbol",
                                    }),
                                  }),
                                }),
                                className: "framer-bp2ceq",
                                "data-framer-name": "Symbol",
                                fonts: ["GF;Comic Neue-700"],
                                name: "Symbol",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          a("div", {
                            className: "framer-1uhqw4z",
                            "data-framer-name": "Munchy Name Text",
                            name: "Munchy Name Text",
                            children: [
                              e(t, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: e("p", {
                                    style: {
                                      "--framer-font-size": "40px",
                                      "--framer-text-alignment": "center",
                                    },
                                    children: e("span", {
                                      style: {
                                        "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                        "--framer-font-family": '"Comic Neue"',
                                        "--framer-font-size": "40px",
                                        "--framer-font-weight": "700",
                                      },
                                      children: "Base Munchy",
                                    }),
                                  }),
                                }),
                                className: "framer-1241fzp",
                                "data-framer-name": "Munchy",
                                fonts: ["GF;Comic Neue-700"],
                                name: "Munchy",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              e(t, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: e("p", {
                                    style: {
                                      "--framer-font-size": "28px",
                                      "--framer-text-alignment": "center",
                                    },
                                    children: e("span", {
                                      style: {
                                        "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                        "--framer-font-family": '"Comic Neue"',
                                        "--framer-font-size": "28px",
                                        "--framer-font-weight": "700",
                                      },
                                      children: "Name",
                                    }),
                                  }),
                                }),
                                className: "framer-17tcltp",
                                "data-framer-name": "Name",
                                fonts: ["GF;Comic Neue-700"],
                                name: "Name",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          a("div", {
                            className: "framer-1r4pcf1",
                            "data-framer-name": "Buy / Jeet Text",
                            name: "Buy / Jeet Text",
                            children: [
                              e(t, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: e("p", {
                                    style: {
                                      "--framer-font-size": "40px",
                                      "--framer-text-alignment": "center",
                                    },
                                    children: e("span", {
                                      style: {
                                        "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                        "--framer-font-family": '"Comic Neue"',
                                        "--framer-font-size": "40px",
                                        "--framer-font-weight": "700",
                                      },
                                      children: "0% / 0%",
                                    }),
                                  }),
                                }),
                                className: "framer-13w1yxv",
                                "data-framer-name": "0% / 1%",
                                fonts: ["GF;Comic Neue-700"],
                                name: "0% / 1%",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              e(t, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: e("p", {
                                    style: {
                                      "--framer-font-size": "28px",
                                      "--framer-text-alignment": "center",
                                    },
                                    children: e("span", {
                                      style: {
                                        "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                        "--framer-font-family": '"Comic Neue"',
                                        "--framer-font-size": "28px",
                                        "--framer-font-weight": "700",
                                      },
                                      children: "Buy / Sell Tax",
                                    }),
                                  }),
                                }),
                                className: "framer-1ngq5tc",
                                "data-framer-name": "Buy / Jeet Tax",
                                fonts: ["GF;Comic Neue-700"],
                                name: "Buy / Jeet Tax",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          e("div", {
                            className: "framer-x53uet",
                            "data-framer-name": "Total Supply Text",
                            name: "Total Supply Text",
                            children: e(t, {
                              __fromCanvasComponent: !0,
                              children: e(r, {
                                children: e("p", {
                                  style: {
                                    "--framer-font-size": "28px",
                                    "--framer-text-alignment": "center",
                                  },
                                  children: e("span", {
                                    style: {
                                      "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                      "--framer-font-family": '"Comic Neue"',
                                      "--framer-font-size": "28px",
                                      "--framer-font-weight": "700",
                                    },
                                    children: "Total Supply",
                                  }),
                                }),
                              }),
                              className: "framer-p26mqn",
                              "data-framer-name": "Total Supply",
                              fonts: ["GF;Comic Neue-700"],
                              name: "Total Supply",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e("div", {
                            className: "framer-8wp2v1",
                            "data-framer-name": "Coming Soon Token Address Text",
                            name: "Coming Soon Token Address Text",
                            children: e(t, {
                              __fromCanvasComponent: !0,
                              children: e(r, {
                                children: e("p", {
                                  style: {
                                    "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                    "--framer-font-family": '"Comic Neue", sans-serif',
                                    "--framer-font-size": "28px",
                                    "--framer-font-weight": "700",
                                    "--framer-text-alignment": "center",
                                  },
                                  children: "Token Address",
                                }),
                              }),
                              className: "framer-1adcwhy",
                              "data-framer-name": "Token Address",
                              fonts: ["GF;Comic Neue-700"],
                              name: "Token Address",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                      a("div", {
                        className: "framer-mboasb",
                        "data-framer-name": "Contract LP Description Group",
                        name: "Contract LP Description Group",
                        children: [
                          e(t, {
                            __fromCanvasComponent: !0,
                            children: a(r, {
                              children: [
                                e("p", {
                                  style: {
                                    "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                    "--framer-font-family": '"Comic Neue", sans-serif',
                                    "--framer-font-size": "18px",
                                    "--framer-font-weight": "700",
                                    "--framer-text-alignment": "center",
                                  },
                                  children: "Fair launch. No presale seed round. No Bullshit.",
                                }),
                                e("p", {
                                  style: {
                                    "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                    "--framer-font-family": '"Comic Neue", sans-serif',
                                    "--framer-font-size": "18px",
                                    "--framer-font-weight": "700",
                                    "--framer-text-alignment": "center",
                                  },
                                  children: "6% team & advisor allocation and 6% for marketing, KOLs, and growth-related expenses. 1% Jeet Tax for the haters with malicious intent on destroying launches. Our focus is on longevity in this space but we know how fast this space moves, therefore we feel adding a Jeet Tax is necessary for development and sustainability. Jeet tax will be used for buybacks and any marketing efforts for $munchy.",
                                }),
                              ],
                            }),
                            className: "framer-1vf0508",
                            "data-framer-name": "Fair launch. No whitelist. No presale seed round. No Bullshit. 6% team & advisor allocation and 6% for marketing, KOLs, and growth-related expenses. 1% Jeet Tax for the haters with malicious intent on destroying launches. Our focus is on longevity in this space but we know how fast this space moves, therefore we feel adding a Jeet Tax is necessary for development and sustainability. Jeet tax will be used for buybacks and any marketing efforts for $munchy.",
                            fonts: ["GF;Comic Neue-700"],
                            name: "Fair launch. No whitelist. No presale seed round. No Bullshit. 6% team & advisor allocation and 6% for marketing, KOLs, and growth-related expenses. 1% Jeet Tax for the haters with malicious intent on destroying launches. Our focus is on longevity in this space but we know how fast this space moves, therefore we feel adding a Jeet Tax is necessary for development and sustainability. Jeet tax will be used for buybacks and any marketing efforts for $munchy.",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          e(t, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("p", {
                                style: {
                                  "--framer-font-size": "25px",
                                  "--framer-text-alignment": "center",
                                },
                                children: e("span", {
                                  style: {
                                    "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                    "--framer-font-family": '"Comic Neue"',
                                    "--framer-font-size": "25px",
                                    "--framer-font-weight": "700",
                                  },
                                  children: "LP 100% Burned",
                                }),
                              }),
                            }),
                            className: "framer-tmn6zv",
                            "data-framer-name": "LP 100% Burned",
                            fonts: ["GF;Comic Neue-700"],
                            name: "LP 100% Burned",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          e(t, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("p", {
                                style: {
                                  "--framer-font-size": "25px",
                                  "--framer-text-alignment": "center",
                                },
                                children: e("span", {
                                  style: {
                                    "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                    "--framer-font-family": '"Comic Neue"',
                                    "--framer-font-size": "25px",
                                    "--framer-font-weight": "700",
                                  },
                                  children: "Contract Renounced",
                                }),
                              }),
                            }),
                            className: "framer-qi5ao7",
                            "data-framer-name": "Contract Renounced",
                            fonts: ["GF;Comic Neue-700"],
                            name: "Contract Renounced",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      e("div", {
                        className: "framer-1u7pxl9",
                        "data-framer-name": "Donut Frame",
                        name: "Donut Frame",
                        children: a("div", {
                          className: "framer-n7rsm5",
                          "data-framer-name": "Group 27",
                          name: "Group 27",
                          children: [
                            a("div", {
                              className: "framer-19d44lw",
                              "data-framer-name": "Group 26",
                              name: "Group 26",
                              children: [
                                a("div", {
                                  className: "framer-95xtgx",
                                  "data-framer-name": "Group 24",
                                  name: "Group 24",
                                  children: [
                                    e("div", {
                                      className: "framer-6t20by",
                                      "data-framer-name": "Rectangle 7",
                                      name: "Rectangle 7",
                                    }),
                                    e(t, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--framer-font-size": "16px",
                                            "--framer-text-alignment": "center",
                                          },
                                          children: e("span", {
                                            style: {
                                              "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                              "--framer-font-family": '"Comic Neue"',
                                              "--framer-font-size": "16px",
                                              "--framer-font-weight": "700",
                                            },
                                            children: "12% Team/Marketing",
                                          }),
                                        }),
                                      }),
                                      className: "framer-1xsto59",
                                      "data-framer-name": "12% Team/Marketing",
                                      fonts: ["GF;Comic Neue-700"],
                                      name: "12% Team/Marketing",
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                a("div", {
                                  className: "framer-xwsjvg",
                                  "data-framer-name": "Group 25",
                                  name: "Group 25",
                                  children: [
                                    e("div", {
                                      className: "framer-vaqtw6",
                                      "data-framer-name": "Rectangle 7",
                                      name: "Rectangle 7",
                                    }),
                                    e(t, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--framer-font-size": "16px",
                                            "--framer-text-alignment": "center",
                                          },
                                          children: e("span", {
                                            style: {
                                              "--font-selector": "R0Y7Q29taWMgTmV1ZS03MDA=",
                                              "--framer-font-family": '"Comic Neue"',
                                              "--framer-font-size": "16px",
                                              "--framer-font-weight": "700",
                                            },
                                            children: "88% Liquidity Pool ",
                                          }),
                                        }),
                                      }),
                                      className: "framer-3wf2i1",
                                      "data-framer-name": "88% Liquidity Pool",
                                      fonts: ["GF;Comic Neue-700"],
                                      name: "88% Liquidity Pool",
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e(i, {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: "lazy",
                                sizes: "400px",
                                src: "/images/Y3DKHaSQScM4Th8yd0BOBXBuBR0.png",
                              },
                              className: "framer-14qu5zx",
                              "data-framer-name": "DONUT 12% Blue - 88% Pink 1",
                              name: "DONUT 12% Blue - 88% Pink 1",
                            }),
                          ],
                        }),
                      }),
                      e(i, {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: "lazy",
                          sizes: "472px",
                          src: "/images/cUvEEnigSNiF1BE2AHVa9pFO4yM.png",
                        },
                        className: "framer-cqdx1t",
                        "data-framer-name": "TOKENOMICS TEXT",
                        name: "TOKENOMICS TEXT",
                        transformTemplate: I,
                      }),
                    ],
                  }),
                }),
              ],
            }),
            e("div", {
              className: z(Le, ...A),
              id: "overlay"
            }),
          ],
        }),
      })
    );
  }),
  Pe = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${Je.bodyClassName}-framer-wtOhH { background: white; }`,
    ".framer-wtOhH.framer-lux5qc, .framer-wtOhH .framer-lux5qc { display: block; }",
    ".framer-wtOhH.framer-72rtr7 { background-color: #ffffff; height: 6594px; overflow: hidden; position: relative; width: 1440px; }",
    ".framer-wtOhH .framer-1erlyua { flex: none; height: 1440px; left: calc(50.00000000000002% - 1440px / 2); overflow: hidden; position: absolute; top: 1124px; width: 1440px; }",
    ".framer-wtOhH .framer-1co51o2 { flex: none; height: 1621px; left: calc(50.00000000000002% - 1440px / 2); overflow: visible; position: absolute; top: calc(56.111111111111136% - 1621px / 2); width: 1440px; }",
    ".framer-wtOhH .framer-1biaxk0 { background-color: #bd143f; border-bottom-left-radius: 120px; border-bottom-right-radius: 120px; border-top-left-radius: 120px; border-top-right-radius: 120px; box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.25); flex: none; height: 47px; left: 988px; overflow: hidden; position: absolute; top: 115px; width: 270px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-wtOhH .framer-x6rinn { flex: none; height: 33px; left: 11px; position: absolute; top: calc(48.93617021276598% - 33px / 2); width: 33px; }",
    ".framer-wtOhH .framer-19gi6a5 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 33px); left: 11px; overflow: visible; position: absolute; top: 51%; transform: translateY(-50%); width: 32px; }",
    ".framer-wtOhH .framer-1its8ml { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 26px; left: 49px; position: absolute; top: calc(51.06382978723406% - 26px / 2); white-space: pre-wrap; width: 215px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-1ueaca1 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 23px; left: 1024px; position: absolute; top: 91px; white-space: pre-wrap; width: 202px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-1lv99zg { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; bottom: 408px; flex: none; height: 39px; left: 17px; position: absolute; white-space: pre-wrap; width: 202px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-b6utyc { --framer-paragraph-spacing: 0px; bottom: -61px; flex: none; height: 51px; left: calc(50.00000000000002% - 510px / 2); position: absolute; white-space: pre-wrap; width: 510px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-1p5pean { flex: none; height: 153px; left: calc(68.88888888888891% - 224px / 2); position: absolute; text-decoration: none; top: calc(21.944444444444468% - 153px / 2); width: 224px; }",
    ".framer-wtOhH .framer-1l6u4ym { flex: none; height: 151px; left: calc(19.722222222222243% - 91px / 2); position: absolute; text-decoration: none; top: calc(45.83333333333336% - 151px / 2); width: 91px; }",
    ".framer-wtOhH .framer-1l8a0h4 { flex: none; height: 206px; left: calc(49.93055555555558% - 206px / 2); opacity: 0; position: absolute; text-decoration: none; top: calc(22.01388888888891% - 206px / 2); width: 206px; }",
    ".framer-wtOhH .framer-yfsypb { flex: none; height: 153px; left: calc(86.5277777777778% - 224px / 2); position: absolute; text-decoration: none; top: calc(21.944444444444468% - 153px / 2); width: 224px; }",
    ".framer-wtOhH .framer-1j6olos { flex: none; height: 117px; left: 482px; position: absolute; text-decoration: none; top: 81px; width: 128px; }",
    ".framer-wtOhH .framer-1o8i1lz { flex: none; height: 153px; left: calc(31.18055555555558% - 225px / 2); position: absolute; text-decoration: none; top: calc(22.083333333333353% - 153px / 2); width: 225px; }",
    ".framer-wtOhH .framer-v7fvf2 { flex: none; height: 153px; left: calc(13.26388888888891% - 225px / 2); position: absolute; text-decoration: none; top: calc(22.361111111111136% - 153px / 2); width: 225px; }",
    ".framer-wtOhH .framer-qkhbzl { flex: none; height: 89px; left: calc(58.263888888888914% - 105px / 2); position: absolute; text-decoration: none; top: calc(10.9027777777778% - 89px / 2); width: 105px; }",
    ".framer-wtOhH .framer-5i8b3e { flex: none; height: 217px; left: calc(87.29166666666669% - 97px / 2); position: absolute; text-decoration: none; top: calc(40.486111111111136% - 217px / 2); width: 97px; }",
    ".framer-wtOhH .framer-1l2br6u { flex: none; height: 91px; left: calc(82.7777777777778% - 120px / 2); position: absolute; text-decoration: none; top: calc(87.36111111111113% - 91px / 2); width: 120px; }",
    ".framer-wtOhH .framer-1es0d6j { flex: none; height: 74px; left: calc(51.66666666666669% - 48px / 2); position: absolute; text-decoration: none; top: calc(49.79166666666669% - 74px / 2); width: 48px; }",
    ".framer-wtOhH .framer-kao0y8 { bottom: 125px; cursor: pointer; flex: none; height: 190px; left: 96px; overflow: hidden; position: absolute; width: 252px; }",
    ".framer-wtOhH .framer-xprrhr { bottom: -3px; flex: none; height: 190px; left: calc(50.00000000000002% - 252px / 2); position: absolute; width: 252px; }",
    ".framer-wtOhH .framer-j81dnn { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; }",
    ".framer-wtOhH .framer-tcd83p-container { flex: none; height: 840px; left: calc(50.069444444444464% - 1319px / 2); position: fixed; top: calc(50.00000000000002% - 840px / 2); width: 1319px; }",
    ".framer-wtOhH .framer-l4sxe0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 0px; transform: translateX(-50%); width: min-content; }",
    ".framer-wtOhH .framer-st4yri { flex: none; height: 1124px; overflow: visible; position: relative; width: 1440px; }",
    ".framer-wtOhH .framer-1ndinlp { background: linear-gradient(180deg, #ffffff 0%, rgba(88, 129, 175, 1) 100%); bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }",
    ".framer-wtOhH .framer-erhib7 { aspect-ratio: 0.8200455580865603 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 878px); left: 360px; position: absolute; top: 73px; width: 720px; }",
    ".framer-wtOhH .framer-c5xj25 { flex: none; height: 1922px; left: calc(50.00000000000002% - 1440px / 2); overflow: visible; position: absolute; top: 4673px; width: 1440px; }",
    ".framer-wtOhH .framer-8qw94g { background: linear-gradient(179.67774893039478deg, #e6eeda 0%, rgba(142, 206, 240, 1) 50%, rgba(237, 244, 248, 1) 100%); flex: none; height: 1922px; left: calc(50.00000000000002% - 1440px / 2); position: absolute; top: 0px; width: 1440px; }",
    ".framer-wtOhH .framer-frg78m { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 51%; position: absolute; top: 1642px; transform: translateX(-50%); white-space: pre-wrap; width: 1149px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-mc5qg6 { flex: none; height: 295px; left: 346px; overflow: visible; position: absolute; top: 1199px; width: 984px; }",
    ".framer-wtOhH .framer-9sqlbt { flex: none; height: 325px; left: 384px; overflow: visible; position: absolute; top: -13px; width: 325px; }",
    ".framer-wtOhH .framer-zfglew, .framer-wtOhH .framer-9a2wn5 { --border-bottom-width: 1.5px; --border-color: #ffffff; --border-left-width: 1.5px; --border-right-width: 1.5px; --border-style: solid; --border-top-width: 1.5px; background: linear-gradient(133.03032758501362deg, rgba(255, 255, 255, 0.16) 0%, rgba(235, 172, 203, 0.56) 100%); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: none; height: 230px; position: absolute; right: 48px; top: 48px; width: 230px; }",
    ".framer-wtOhH .framer-40ms1x { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 265px); left: 47px; position: absolute; top: 31px; width: 265px; }",
    ".framer-wtOhH .framer-lq1ue0 { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: -85px; position: absolute; top: 106px; white-space: pre; width: auto; }",
    ".framer-wtOhH .framer-jn091v { flex: none; height: 295px; left: 356px; overflow: visible; position: absolute; top: 880px; width: 984px; }",
    ".framer-wtOhH .framer-15m2xv4 { flex: none; height: 325px; left: -11px; overflow: visible; position: absolute; top: -13px; width: 325px; }",
    ".framer-wtOhH .framer-1xnoye8 { flex: none; height: 326px; left: 0px; position: absolute; top: 0px; width: 326px; }",
    ".framer-wtOhH .framer-19ahzag { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 295px); left: 15px; position: absolute; top: 13px; width: 295px; }",
    ".framer-wtOhH .framer-1yb54rv { flex: none; height: 195px; left: 422px; overflow: visible; position: absolute; top: 52px; width: 412px; }",
    ".framer-wtOhH .framer-7adt28 { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 0px; position: absolute; top: 0px; white-space: pre; width: auto; }",
    ".framer-wtOhH .framer-vuqkf5 { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 0px; position: absolute; top: 57px; white-space: pre-wrap; width: 412px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-tz4mev { flex: none; height: 295px; left: 346px; overflow: visible; position: absolute; top: 561px; width: 984px; }",
    ".framer-wtOhH .framer-pwz4m7 { flex: none; height: 325px; left: 424px; overflow: visible; position: absolute; top: -13px; width: 325px; }",
    ".framer-wtOhH .framer-1bo09to { aspect-ratio: 1.0042372881355932 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 295px); left: 15px; position: absolute; top: 13px; width: 296px; }",
    ".framer-wtOhH .framer-66xprg { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; left: -96px; overflow: visible; padding: 0px; position: absolute; top: 46px; width: 411px; }",
    ".framer-wtOhH .framer-14hijsn { --framer-paragraph-spacing: 0px; flex: none; height: 41px; position: relative; white-space: pre-wrap; width: 238px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-15rmjai { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 411px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-12ziz8t { flex: none; height: 325px; left: 345px; overflow: visible; position: absolute; top: 226px; width: 845px; }",
    ".framer-wtOhH .framer-75e8za { flex: none; height: 325px; left: 0px; overflow: visible; position: absolute; top: 0px; width: 325px; }",
    ".framer-wtOhH .framer-18x9ttl { bottom: 96px; flex: none; left: 0px; position: absolute; right: 96px; top: 0px; }",
    ".framer-wtOhH .framer-ikpcac { aspect-ratio: 1 / 1; bottom: var(--framer-aspect-ratio-supported, 14px); flex: none; height: 295px; left: 15px; position: absolute; right: 15px; top: 16px; }",
    ".framer-wtOhH .framer-m1isn4 { flex: none; height: 177px; left: 433px; overflow: visible; position: absolute; top: 74px; width: 412px; }",
    ".framer-wtOhH .framer-1qbwb9u { --framer-paragraph-spacing: 0px; flex: none; height: 120px; left: 0px; position: absolute; right: 0px; top: 57px; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-1xgls78 { --framer-paragraph-spacing: 0px; flex: none; height: 41px; left: 0px; position: absolute; top: 0px; white-space: pre; width: 239px; }",
    ".framer-wtOhH .framer-1405zb1 { aspect-ratio: 2.8345323741007196 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 139px); left: 50%; position: absolute; top: 75px; transform: translateX(-50%); width: 394px; }",
    ".framer-wtOhH .framer-1qvkhf2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1171px; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 3576px; transform: translateX(-50%); width: min-content; }",
    ".framer-wtOhH .framer-1j9o30w { flex: none; height: 1170px; overflow: visible; position: relative; width: 1440px; }",
    ".framer-wtOhH .framer-4jegkz { flex: none; height: 1088px; left: 0px; position: absolute; right: 0px; top: calc(47.26495726495729% - 1088px / 2); }",
    ".framer-wtOhH .framer-3zyua4 { flex: none; height: 795px; left: 589px; overflow: visible; position: absolute; top: 188px; width: 805px; }",
    ".framer-wtOhH .framer-1crrlds { flex: none; height: 384px; left: 0px; overflow: visible; position: absolute; top: 0px; width: 386px; }",
    ".framer-wtOhH .framer-i8xo37 { aspect-ratio: 1.0057382947213391 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 385px); left: 0px; position: absolute; top: 0px; width: 386px; }",
    ".framer-wtOhH .framer-1u01vom { --framer-paragraph-spacing: 0px; flex: none; height: 44px; left: 40px; position: absolute; top: 61px; white-space: pre-wrap; width: 127px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-1hlbxfs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: 40px; overflow: visible; padding: 0px; position: absolute; top: 110px; width: 310px; }",
    ".framer-wtOhH .framer-1543so8, .framer-wtOhH .framer-1orgnpt, .framer-wtOhH .framer-196pwz4, .framer-wtOhH .framer-1a7qtae, .framer-wtOhH .framer-gmgbcy, .framer-wtOhH .framer-limye3, .framer-wtOhH .framer-qotbjv, .framer-wtOhH .framer-1ogpwww, .framer-wtOhH .framer-w0j3xp, .framer-wtOhH .framer-imiimu, .framer-wtOhH .framer-15vj9zh, .framer-wtOhH .framer-1xp4ouh, .framer-wtOhH .framer-1kt6ag0, .framer-wtOhH .framer-ohc7vo, .framer-wtOhH .framer-1odu55t, .framer-wtOhH .framer-1xgbiew, .framer-wtOhH .framer-1dw4vll, .framer-wtOhH .framer-l6uvos, .framer-wtOhH .framer-1eobc2p { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-wtOhH .framer-ko77km, .framer-wtOhH .framer-g7pbxl, .framer-wtOhH .framer-1pbnqlg, .framer-wtOhH .framer-1ol5g7i, .framer-wtOhH .framer-36r6vb, .framer-wtOhH .framer-1d9kitg { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 26px); position: relative; width: 26px; }",
    ".framer-wtOhH .framer-13wvwgr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: 40px; overflow: visible; padding: 0px; position: absolute; top: 139px; width: 310px; }",
    ".framer-wtOhH .framer-1c4lm49 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: 40px; overflow: visible; padding: 0px; position: absolute; top: 168px; width: 310px; }",
    ".framer-wtOhH .framer-9y2igs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: 40px; overflow: visible; padding: 0px; position: absolute; top: 197px; width: 310px; }",
    ".framer-wtOhH .framer-2r7jya { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: 40px; overflow: visible; padding: 0px; position: absolute; top: 226px; width: 310px; }",
    ".framer-wtOhH .framer-821aem { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: 40px; overflow: visible; padding: 0px; position: absolute; top: 255px; width: 310px; }",
    ".framer-wtOhH .framer-1kppy3y { flex: none; height: 384px; left: 419px; overflow: visible; position: absolute; top: 0px; width: 386px; }",
    ".framer-wtOhH .framer-12jb7gr { aspect-ratio: 1.0034833662195273 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 385px); left: 0px; position: absolute; top: 0px; width: 386px; }",
    ".framer-wtOhH .framer-1be02hr { align-content: center; align-items: center; bottom: 97px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: calc(50.32425421530482% - 298px / 2); overflow: visible; padding: 0px; position: absolute; width: 298px; }",
    ".framer-wtOhH .framer-1qb8vub, .framer-wtOhH .framer-1htb194, .framer-wtOhH .framer-15q78s1, .framer-wtOhH .framer-1m4vwx0, .framer-wtOhH .framer-1iu6olc, .framer-wtOhH .framer-141mb7, .framer-wtOhH .framer-4no3m6, .framer-wtOhH .framer-fuw4hk, .framer-wtOhH .framer-g51mol, .framer-wtOhH .framer-5tbb9s, .framer-wtOhH .framer-1k5zvof, .framer-wtOhH .framer-pi28px, .framer-wtOhH .framer-vf5aqq, .framer-wtOhH .framer-13jf1f9, .framer-wtOhH .framer-q1ojdk, .framer-wtOhH .framer-1ukobbb, .framer-wtOhH .framer-1yfhugf { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }",
    ".framer-wtOhH .framer-1hosgnv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: calc(50.58365758754866% - 299px / 2); overflow: visible; padding: 0px; position: absolute; top: calc(54.35630689206764% - 25px / 2); width: 299px; }",
    ".framer-wtOhH .framer-f0mi9 { align-content: center; align-items: center; bottom: 130px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: calc(50.32425421530482% - 299px / 2); overflow: visible; padding: 0px; position: absolute; width: 299px; }",
    ".framer-wtOhH .framer-4jgujq, .framer-wtOhH .framer-1uzvo8p { --framer-paragraph-spacing: 0px; -webkit-filter: blur(5px); filter: blur(5px); flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-wtOhH .framer-2aghil { --framer-paragraph-spacing: 0px; flex: none; height: 44px; left: 46px; position: absolute; top: 61px; white-space: pre-wrap; width: 130px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-1pqy1j0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: 46px; overflow: visible; padding: 0px; position: absolute; top: 110px; width: 301px; }",
    ".framer-wtOhH .framer-1amnefy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: 46px; overflow: visible; padding: 0px; position: absolute; top: 139px; width: 301px; }",
    ".framer-wtOhH .framer-ll566u { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 253px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-86ga7g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: 46px; overflow: visible; padding: 0px; position: absolute; top: 168px; width: 301px; }",
    ".framer-wtOhH .framer-15hey42 { flex: none; height: 385px; left: 0px; overflow: visible; position: absolute; top: 384px; width: 387px; }",
    ".framer-wtOhH .framer-l141zb { aspect-ratio: 1.0034834395311885 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 386px); left: 0px; position: absolute; top: 0px; width: 387px; }",
    ".framer-wtOhH .framer-p8xzhw { --framer-paragraph-spacing: 0px; flex: none; height: 47px; left: 40px; position: absolute; top: 64px; white-space: pre-wrap; width: 131px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-vplgzl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: 40px; overflow: visible; padding: 0px; position: absolute; top: 116px; width: 311px; }",
    ".framer-wtOhH .framer-9axm7p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: 40px; overflow: visible; padding: 0px; position: absolute; top: 150px; width: 311px; }",
    ".framer-wtOhH .framer-1dc9t2x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: 40px; overflow: visible; padding: 0px; position: absolute; top: 183px; width: 311px; }",
    ".framer-wtOhH .framer-mj6flr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: 40px; overflow: visible; padding: 0px; position: absolute; top: 217px; width: 311px; }",
    ".framer-wtOhH .framer-47fj11 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: 40px; overflow: visible; padding: 0px; position: absolute; top: 250px; width: 311px; }",
    ".framer-wtOhH .framer-aom12z { flex: none; height: 399px; left: 419px; overflow: visible; position: absolute; top: 396px; width: 386px; }",
    ".framer-wtOhH .framer-1bux5ii { aspect-ratio: 0.9672128562662266 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 399px); left: 0px; position: absolute; top: 0px; width: 386px; }",
    ".framer-wtOhH .framer-op5yt6 { align-content: center; align-items: center; bottom: 102px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: calc(50.843060959792496% - 300px / 2); overflow: visible; padding: 0px; position: absolute; width: 300px; }",
    ".framer-wtOhH .framer-1x9idyf { --framer-paragraph-spacing: 0px; flex: none; height: 44px; left: 46px; position: absolute; top: 61px; white-space: pre-wrap; width: 129px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-xv2zx1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 35px; height: 25px; justify-content: flex-start; left: 46px; overflow: visible; padding: 0px; position: absolute; top: 107px; width: 311px; }",
    ".framer-wtOhH .framer-1t8cb7l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: 46px; overflow: visible; padding: 0px; position: absolute; top: 138px; width: 301px; }",
    ".framer-wtOhH .framer-aph7n5 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 231px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-1tgzvhz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: 46px; overflow: visible; padding: 0px; position: absolute; top: 171px; width: 301px; }",
    ".framer-wtOhH .framer-cizgy0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: 46px; overflow: visible; padding: 0px; position: absolute; top: 204px; width: 301px; }",
    ".framer-wtOhH .framer-14o0zmt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: 46px; overflow: visible; padding: 0px; position: absolute; top: 236px; width: 301px; }",
    ".framer-wtOhH .framer-q57o1f { aspect-ratio: 2.2375 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 160px); left: 60%; position: absolute; top: 0px; transform: translateX(-50%); width: 358px; }",
    ".framer-wtOhH .framer-18nth2k { aspect-ratio: 0.5546942291128337 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1161px); left: 0px; position: absolute; top: 9px; width: 644px; }",
    ".framer-wtOhH .framer-1waiaa1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 2564px; transform: translateX(-50%); width: min-content; }",
    ".framer-wtOhH .framer-17fqwaz { flex: none; height: 1012px; overflow: visible; position: relative; width: 1440px; }",
    ".framer-wtOhH .framer-1f37bcv { background: linear-gradient(180deg, #d0cb89 0%, rgba(255, 255, 255, 1) 100%); flex: none; height: 1012px; left: 0px; position: absolute; top: 0px; width: 1440px; }",
    ".framer-wtOhH .framer-1wukgjm { flex: none; height: 697px; left: 524px; overflow: visible; position: absolute; top: 82px; width: 859px; }",
    ".framer-wtOhH .framer-pps3z9 { aspect-ratio: 1.232467498122534 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 697px); left: 0px; position: absolute; top: 0px; width: 859px; }",
    ".framer-wtOhH .framer-dvi51o { --framer-paragraph-spacing: 0px; bottom: 262px; flex: none; height: 41px; left: 157px; position: absolute; white-space: pre-wrap; width: 200px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-1qdtib1 { --framer-paragraph-spacing: 0px; flex: none; height: 42px; left: calc(51.68800931315485% - 593px / 2); position: absolute; top: 268px; white-space: pre-wrap; width: 593px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-13ys7oo { flex: none; height: 84px; left: 499px; overflow: visible; position: absolute; top: 527px; width: 220px; }",
    ".framer-wtOhH .framer-101hxh5 { --framer-paragraph-spacing: 0px; flex: none; height: 42px; left: 23px; position: absolute; top: 0px; white-space: pre-wrap; width: 192px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-bp2ceq { --framer-paragraph-spacing: 0px; flex: none; height: 29px; left: 0px; opacity: 0.8; position: absolute; top: 55px; white-space: pre-wrap; width: 220px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-1uhqw4z { flex: none; height: 84px; left: 159px; overflow: visible; position: absolute; top: 527px; width: 197px; }",
    ".framer-wtOhH .framer-1241fzp { --framer-paragraph-spacing: 0px; flex: none; height: 45px; left: 0px; position: absolute; top: 0px; white-space: pre-wrap; width: 230px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-17tcltp { --framer-paragraph-spacing: 0px; flex: none; height: 31px; left: 55px; opacity: 0.8; position: absolute; top: 53px; white-space: pre-wrap; width: 87px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-1r4pcf1 { flex: none; height: 78px; left: 499px; overflow: visible; position: absolute; top: 394px; width: 220px; }",
    ".framer-wtOhH .framer-13w1yxv { --framer-paragraph-spacing: 0px; flex: none; height: 41px; left: 31px; position: absolute; top: 0px; white-space: pre-wrap; width: 157px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-1ngq5tc { --framer-paragraph-spacing: 0px; flex: none; height: 29px; left: 0px; opacity: 0.8; position: absolute; top: 49px; white-space: pre-wrap; width: 220px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-x53uet { flex: none; height: 78px; left: 161px; overflow: visible; position: absolute; top: 394px; width: 192px; }",
    ".framer-wtOhH .framer-p26mqn { --framer-paragraph-spacing: 0px; flex: none; height: 29px; left: 0px; opacity: 0.8; position: absolute; top: 49px; white-space: pre-wrap; width: 192px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-8wp2v1 { flex: none; height: 78px; left: 323px; overflow: visible; position: absolute; top: 258px; width: 243px; }",
    ".framer-wtOhH .framer-1adcwhy { --framer-paragraph-spacing: 0px; flex: none; height: 29px; left: 25px; opacity: 0.8; position: absolute; top: 49px; white-space: pre-wrap; width: 193px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-mboasb { flex: none; height: 229px; left: 0px; overflow: visible; position: absolute; top: 745px; width: 577px; }",
    ".framer-wtOhH .framer-1vf0508 { --framer-paragraph-spacing: 0px; bottom: 0px; flex: none; height: 180px; left: calc(49.3934142114385% - 429px / 2); opacity: 0.8; position: absolute; white-space: pre-wrap; width: 429px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-tmn6zv { --framer-paragraph-spacing: 0px; flex: none; height: 42px; left: 224px; position: absolute; top: 0px; white-space: pre-wrap; width: 353px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-qi5ao7 { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 0px; position: absolute; top: 0px; white-space: pre-wrap; width: 353px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-1u7pxl9 { flex: none; height: 424px; left: 88px; overflow: visible; position: absolute; top: 288px; width: 400px; }",
    ".framer-wtOhH .framer-n7rsm5 { flex: none; height: 424px; left: 0px; overflow: visible; position: absolute; top: 0px; width: 400px; }",
    ".framer-wtOhH .framer-19d44lw { flex: none; height: 33px; left: 32px; overflow: visible; position: absolute; top: 391px; width: 354px; }",
    ".framer-wtOhH .framer-95xtgx { flex: none; height: 33px; left: 0px; overflow: visible; position: absolute; top: 0px; width: 164px; }",
    ".framer-wtOhH .framer-6t20by { background-color: #84e6fb; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 33px; left: 0px; position: absolute; top: 0px; width: 16px; }",
    ".framer-wtOhH .framer-1xsto59 { --framer-paragraph-spacing: 0px; flex: none; height: 21px; left: 20px; opacity: 0.8; position: absolute; top: 6px; white-space: pre-wrap; width: 144px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-xwsjvg { flex: none; height: 33px; left: 190px; overflow: visible; position: absolute; top: 0px; width: 164px; }",
    ".framer-wtOhH .framer-vaqtw6 { background-color: #dc77a8; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 33px; left: 0px; position: absolute; top: 0px; width: 16px; }",
    ".framer-wtOhH .framer-3wf2i1 { --framer-paragraph-spacing: 0px; flex: none; height: 21px; opacity: 0.8; position: absolute; right: -4px; top: calc(48.484848484848506% - 21.214284896850586px / 2); white-space: pre-wrap; width: 164px; word-break: break-word; word-wrap: break-word; }",
    ".framer-wtOhH .framer-14qu5zx { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 400px); left: 0px; position: absolute; top: 0px; width: 400px; }",
    ".framer-wtOhH .framer-cqdx1t { aspect-ratio: 2.8095238095238093 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 168px); left: 20%; position: absolute; top: 112px; transform: translateX(-50%); width: 472px; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-wtOhH .framer-l4sxe0, .framer-wtOhH .framer-66xprg, .framer-wtOhH .framer-1qvkhf2, .framer-wtOhH .framer-xv2zx1, .framer-wtOhH .framer-1waiaa1 { gap: 0px; } .framer-wtOhH .framer-l4sxe0 > *, .framer-wtOhH .framer-1qvkhf2 > *, .framer-wtOhH .framer-1waiaa1 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-wtOhH .framer-l4sxe0 > :first-child, .framer-wtOhH .framer-66xprg > :first-child, .framer-wtOhH .framer-1qvkhf2 > :first-child, .framer-wtOhH .framer-1waiaa1 > :first-child { margin-top: 0px; } .framer-wtOhH .framer-l4sxe0 > :last-child, .framer-wtOhH .framer-66xprg > :last-child, .framer-wtOhH .framer-1qvkhf2 > :last-child, .framer-wtOhH .framer-1waiaa1 > :last-child { margin-bottom: 0px; } .framer-wtOhH .framer-66xprg > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-wtOhH .framer-xv2zx1 > * { margin: 0px; margin-left: calc(35px / 2); margin-right: calc(35px / 2); } .framer-wtOhH .framer-xv2zx1 > :first-child { margin-left: 0px; } .framer-wtOhH .framer-xv2zx1 > :last-child { margin-right: 0px; } }",
    '.framer-wtOhH[data-border="true"]::after, .framer-wtOhH [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  B = G(Xe, Pe, "framer-wtOhH"),
  ka = B;
B.displayName = "Home";
B.defaultProps = {
  height: 6594,
  width: 1440
};
Z(
  B,
  [{
      explicitInter: !0,
      fonts: [{
          family: "Acme",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/acme/v25/RrQfboBx-C5_bxjLb23lzLk.woff2",
          weight: "400",
        },
        {
          family: "Afacad",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/afacad/v1/6NUK8FKMIQOGaw6wjYT7ZHG_zsBBfhXtWmU08mCgdfM.woff2",
          weight: "400",
        },
        {
          family: "Comic Neue",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/comicneue/v8/4UaErEJDsxBrF37olUeD_xHMwp5eLwtHJlc.woff2",
          weight: "700",
        },
        {
          family: "Comic Neue",
          source: "google",
          style: "italic",
          url: "https://fonts.gstatic.com/s/comicneue/v8/4UaarEJDsxBrF37olUeD96_RXp5ULilCNlcw_Q.woff2",
          weight: "700",
        },
      ],
    },
    ...Be,
  ], {
    supportsExplicitInterCodegen: !0
  }
);
var Ca = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerContractVersion: "1",
        framerComponentViewportWidth: "true",
        framerIntrinsicHeight: "6594",
        framerIntrinsicWidth: "1440",
        framerResponsiveScreen: "",
        framerImmutableVariables: "true",
        framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}',
      },
    },
    Props: {
      type: "tsType",
      annotations: {
        framerContractVersion: "1"
      }
    },
    __FramerMetadata__: {
      type: "variable"
    },
  },
};
export {
  Ca as __FramerMetadata__, ka as
  default
};
//# sourceMappingURL=S1De5T3So9s-FV8ghY3vlW3XKZmWPfKLaPsgP6HiaUs.TCICAXMM.mjs.map