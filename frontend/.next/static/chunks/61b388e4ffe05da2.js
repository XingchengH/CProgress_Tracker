(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  50796,
  (t) => {
    'use strict';
    var e = t.i(48277),
      o = t.i(30668);
    function u() {
      let [t, u] = (0, o.useState)(0);
      return (0, e.jsxs)('button', { onClick: () => u(t + 1), children: ['Count: ', t] });
    }
    t.s(['default', () => u]);
  },
]);
