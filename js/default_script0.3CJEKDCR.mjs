import {
  B as v,
  D as F,
  G as E,
  R as I,
  _ as D,
  c as o,
  e as h,
  t as b,
  v as p,
  w as u,
  x as g,
  z as k,
} from "./chunk-SIMMK6WU.mjs";
import { c as r } from "./chunk-ELYU6EKT.mjs";
var C = "default" in p ? b : p,
  s = {},
  P = C;
s.createRoot = P.createRoot;
s.hydrateRoot = P.hydrateRoot;
var w = s.createRoot,
  S = s.hydrateRoot;
r.__framer_importFromPackage = (e, i) => () =>
  o(v, {
    error: 'Package component not supported: "' + i + '" in "' + e + '"',
  });
r.process = {
  ...r.process,
  env: { ...(r.process ? r.process.env : void 0), NODE_ENV: "production" },
};
F();
r.__framer_events = r.__framer_events || [];
function x() {
  r.__framer_events.push(arguments);
}
function A(e) {
  document.readyState === "interactive" || document.readyState === "complete"
    ? e()
    : document.addEventListener("readystatechange", () => {
        document.readyState === "interactive" && e();
      });
}
A(async function () {
  try {
    let e = {
        augiA20Il: {
          elements: { J366dr9Op: "roadmap", wSo7DuokC: "boysclub" },
          page: u(() =>
            import("./S1De5T3So9s-FV8ghY3vlW3XKZmWPfKLaPsgP6HiaUs.TCICAXMM.mjs")
          ),
          path: "/",
        },
      },
      i = {},
      f = [{ code: "en-US", id: "default", name: "English", slug: "" }],
      H = u(() => import("./__framer-not-found-page.53E5XJ4I.mjs")),
      n = document.getElementById("main"),
      a,
      c,
      d,
      m,
      l = !1;
    if ("framerHydrateV2" in n.dataset) {
      let t = JSON.parse(n.dataset.framerHydrateV2);
      (a = t.routeId),
        (c = t.localeId),
        (d = t.pathVariables),
        (m = t.breakpoints),
        (l = !0);
    } else {
      let t = k(e, decodeURIComponent(location.pathname), !0, f);
      (a = t.routeId), (c = t.localeId), (d = t.pathVariables);
    }
    let R = await e[a].page.preload();
    e[a].page = R;
    let _ = !0,
      N = o(I, {
        RootComponent: R,
        isWebsite: !0,
        routeId: a,
        pathVariables: d,
        routes: e,
        collectionUtils: i,
        framerSiteId:
          "1458b3a34688877024f5136edc47be995ea19655b5deb8be497b9ad44638f673",
        notFoundPage: H,
        isReducedMotion: void 0,
        localeId: c,
        locales: f,
        preserveQueryParams: void 0,
        enableImproveInpDuringHydration: _,
        addHydrationMarkers: l,
      }),
      O = o(E, { children: N, value: { imgSizesWorkaroundEnabled: !1 } }),
      y = o(g, { children: O, value: { routes: {} } });
    l
      ? (performance.mark("framer-rewrite-breakpoints-start"),
        D(m),
        r.__framer_onRewriteBreakpoints?.(m),
        performance.mark("framer-rewrite-breakpoints-end"),
        performance.measure(
          "framer-rewrite-breakpoints",
          "framer-rewrite-breakpoints-start",
          "framer-rewrite-breakpoints-end"
        ),
        h(() => {
          performance.mark("framer-hydration-start"),
            _ && r.__FRAMER_TURN_OFF_REACT_EVENT_HANDLING__?.(),
            S(n, y);
        }))
      : w(n).render(y);
  } catch (e) {
    throw (
      (x("published_site_load_error", {
        message: String(e),
        stack:
          e instanceof Error && typeof e.stack == "string" ? e.stack : null,
      }),
      e)
    );
  }
});
//# sourceMappingURL=default_script0.3CJEKDCR.mjs.map
