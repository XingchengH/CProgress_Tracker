module.exports = [
  '[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)',
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      'next/dist/compiled/next-server/app-page-turbo.runtime.dev.js',
      () => require('next/dist/compiled/next-server/app-page-turbo.runtime.dev.js'),
    );

    module.exports = mod;
  },
  '[project]/frontend/app/components/client/ClientCounter.tsx [app-ssr] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => ClientCounter]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
      );
    ('use client');
    function ClientCounter() {
      const [n, setN] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useState'
      ])(0);
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'button',
        {
          onClick: () => setN(n + 1),
          children: ['Count: ', n],
        },
        void 0,
        true,
        {
          fileName: '[project]/frontend/app/components/client/ClientCounter.tsx',
          lineNumber: 6,
          columnNumber: 10,
        },
        this,
      );
    }
  },
  '[project]/frontend/app/csr/page.tsx [app-ssr] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => CSRPage]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$client$2f$ClientCounter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/frontend/app/components/client/ClientCounter.tsx [app-ssr] (ecmascript)',
      );
    ('use client');
    function CSRPage() {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'main',
        {
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'h1',
              {
                children: 'CSR Page',
              },
              void 0,
              false,
              {
                fileName: '[project]/frontend/app/csr/page.tsx',
                lineNumber: 7,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$client$2f$ClientCounter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'default'
              ],
              {},
              void 0,
              false,
              {
                fileName: '[project]/frontend/app/csr/page.tsx',
                lineNumber: 8,
                columnNumber: 7,
              },
              this,
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: '[project]/frontend/app/csr/page.tsx',
          lineNumber: 6,
          columnNumber: 5,
        },
        this,
      );
    }
  },
  '[project]/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    if (('TURBOPACK compile-time falsy', 0));
    else {
      //TURBOPACK unreachable
      if (('TURBOPACK compile-time falsy', 0));
      else {
        //TURBOPACK unreachable
        if (('TURBOPACK compile-time truthy', 1)) {
          if (('TURBOPACK compile-time truthy', 1)) {
            module.exports = __turbopack_context__.r(
              '[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)',
            );
          } //TURBOPACK unreachable
          else;
        } //TURBOPACK unreachable
        else;
      }
    } //# sourceMappingURL=module.compiled.js.map
  },
  '[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    module.exports = __turbopack_context__.r(
      '[project]/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)',
    ).vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
  },
  '[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    module.exports = __turbopack_context__.r(
      '[project]/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)',
    ).vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__99ef17fb._.js.map
