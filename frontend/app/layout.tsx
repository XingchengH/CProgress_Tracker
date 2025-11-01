export const metadata = { title: 'Hybrid Minimal' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', padding: 16 }}>
        <nav style={{ marginBottom: 12 }}>
          <a href="/">Home</a> | <a href="/ssr">SSR</a> | <a href="/csr">CSR</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
