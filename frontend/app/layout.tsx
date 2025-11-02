// export const metadata = { title: 'Hybrid Minimal' };

import MainHeader from './components/main-header/main-header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', padding: 16 }}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
