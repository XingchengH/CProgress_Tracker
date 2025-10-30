import express from 'express';
import users from './routes/users';
import { env } from './lib/env';

const app = express();
app.use(express.json());

// Health check
app.get('/health', (_req, res) => {
  res.json({ ok: true, env: env.NODE_ENV, ts: Date.now() });
});

// API
app.use('/api/v1/users', users);

// 404 兜底
app.use((_req, res) => res.status(404).json({ error: 'Not found 404' }));

app.listen(env.PORT, () => {});
