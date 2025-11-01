'use client';
import { useState } from 'react';

export default function ClientCounter() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>Count: {n}</button>;
}
