import ServerBox from '../components/server/ServerBox';
import ClientCounter from '../components/client/ClientCounter'; // ✅ 直接导入

export default async function SSRPage() {
  const time = new Date().toLocaleTimeString();
  return (
    <main>
      <h1>SSR Page (with a CSR island)</h1>
      <p>Rendered on server at: {time}</p>
      <ServerBox msg="I'm a Server Component" />
      <ClientCounter /> {/* ✅ 这是一个 "use client" 组件 */}
    </main>
  );
}
