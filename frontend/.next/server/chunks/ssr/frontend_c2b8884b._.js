module.exports = [
  77451,
  (a) => {
    a.n(a.i(44210));
  },
  45232,
  (a) => {
    a.n(a.i(28613));
  },
  58260,
  (a) => {
    a.n(a.i(12070));
  },
  37440,
  (a) => {
    a.n(a.i(90307));
  },
  73148,
  (a) => {
    a.n(a.i(39257));
  },
  20763,
  (a) => {
    'use strict';
    let b = (0, a.i(2497).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call the default export of [project]/frontend/app/components/client/ClientCounter.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      '[project]/frontend/app/components/client/ClientCounter.tsx <module evaluation>',
      'default',
    );
    a.s(['default', 0, b]);
  },
  22971,
  (a) => {
    'use strict';
    let b = (0, a.i(2497).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call the default export of [project]/frontend/app/components/client/ClientCounter.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      '[project]/frontend/app/components/client/ClientCounter.tsx',
      'default',
    );
    a.s(['default', 0, b]);
  },
  77827,
  (a) => {
    'use strict';
    a.i(20763);
    var b = a.i(22971);
    a.n(b);
  },
  53842,
  (a) => {
    'use strict';
    var b = a.i(18332);
    function c({ msg: a }) {
      return (0, b.jsx)('div', {
        style: { border: '1px solid #888', padding: 8, borderRadius: 8 },
        children: a,
      });
    }
    var d = a.i(77827);
    async function e() {
      let a = new Date().toLocaleTimeString();
      return (0, b.jsxs)('main', {
        children: [
          (0, b.jsx)('h1', { children: 'SSR Page (with a CSR island)' }),
          (0, b.jsxs)('p', { children: ['Rendered on server at: ', a] }),
          (0, b.jsx)(c, { msg: "I'm a Server Component" }),
          (0, b.jsx)(d.default, {}),
          ' ',
        ],
      });
    }
    a.s(['default', () => e], 53842);
  },
];

//# sourceMappingURL=frontend_c2b8884b._.js.map
