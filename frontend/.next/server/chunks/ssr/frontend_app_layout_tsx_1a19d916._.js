module.exports = [
  44210,
  (a) => {
    'use strict';
    var b = a.i(18332);
    function c({ children: a }) {
      return (0, b.jsx)('html', {
        lang: 'en',
        children: (0, b.jsxs)('body', {
          style: { fontFamily: 'sans-serif', padding: 16 },
          children: [
            (0, b.jsxs)('nav', {
              style: { marginBottom: 12 },
              children: [
                (0, b.jsx)('a', { href: '/', children: 'Home' }),
                ' | ',
                (0, b.jsx)('a', { href: '/ssr', children: 'SSR' }),
                ' | ',
                (0, b.jsx)('a', { href: '/csr', children: 'CSR' }),
              ],
            }),
            a,
          ],
        }),
      });
    }
    a.s(['default', () => c, 'metadata', 0, { title: 'Hybrid Minimal' }]);
  },
];

//# sourceMappingURL=frontend_app_layout_tsx_1a19d916._.js.map
