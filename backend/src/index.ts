import express from 'express';
import users from './routes/users';
import { env } from './lib/env';
import dotenv from 'dotenv';
import { connectDB } from './lib/db';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

app.use(express.json());

// Health check
app.get('/health', (_req, res) => {
  res.json({ ok: true, env: env.NODE_ENV, ts: Date.now() });
});

// API
app.use('/api/v1/users', users);

// 404 兜底
app.use((_req, res) => res.status(404).json({ error: 'Not found 404' }));

const PORT = env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${env.NODE_ENV} mode`);
  connectDB();
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});
