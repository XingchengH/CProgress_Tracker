module.exports = [
  18622,
  (a, b, c) => {
    b.exports = a.x('next/dist/compiled/next-server/app-page-turbo.runtime.prod.js', () =>
      require('next/dist/compiled/next-server/app-page-turbo.runtime.prod.js'),
    );
  },
  31699,
  (a, b, c) => {
    'use strict';
    b.exports = a.r(18622);
  },
  57850,
  (a, b, c) => {
    'use strict';
    b.exports = a.r(31699).vendored['react-ssr'].ReactJsxRuntime;
  },
  45056,
  (a, b, c) => {
    'use strict';
    b.exports = a.r(31699).vendored['react-ssr'].React;
  },
  34436,
  (a) => {
    'use strict';
    var b = a.i(57850),
      c = a.i(45056);
    function d() {
      let [a, d] = (0, c.useState)(0);
      return (0, b.jsxs)('button', { onClick: () => d(a + 1), children: ['Count: ', a] });
    }
    a.s(['default', () => d]);
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__34aeeea0._.js.map
