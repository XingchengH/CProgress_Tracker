(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  50796,
  (t) => {
    'use strict';
    var e = t.i(48277),
      i = t.i(30668);
    function n() {
      let [t, n] = (0, i.useState)(0);
      return (0, e.jsxs)('button', { onClick: () => n(t + 1), children: ['Count: ', t] });
    }
    t.s(['default', () => n]);
  },
  90895,
  (t) => {
    'use strict';
    var e = t.i(48277),
      i = t.i(50796);
    function n() {
      return (0, e.jsxs)('main', {
        children: [(0, e.jsx)('h1', { children: 'CSR Page' }), (0, e.jsx)(i.default, {})],
      });
    }
    t.s(['default', () => n]);
  },
]);
