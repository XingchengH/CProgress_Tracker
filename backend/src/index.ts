import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { env } from './lib/env';
import { connectDB } from './lib/db';

import users from './routes/users';
import authRoutes from './routes/auth.route';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (_req, res) => {
  res.json({ ok: true, env: env.NODE_ENV, ts: Date.now() });
});

// API
app.use('/api/v1/users', users);
app.use('/api/v1/auth', authRoutes);

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
