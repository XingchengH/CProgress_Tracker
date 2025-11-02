import Link from 'next/link';

export default function MainHeader() {
  return (
    <nav style={{ marginBottom: 12 }}>
      {/* uusing single page application navigation */}
      <Link href="/">Home</Link> | <Link href="/ssr">SSR</Link> | <Link href="/csr">CSR</Link> |{' '}
      <Link href="/login">Login</Link>
    </nav>
  );
}
