import { Router } from 'express';
import { z } from 'zod';

const router = Router();

const CreateUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

router.get('/', (_req, res) => {
  res.json([{ id: 1, name: 'Naomi', email: 'naomi@example.com' }]);
});

router.post('/', (req, res) => {
  const parse = CreateUserSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: parse.error.flatten() });
  }
  const user = { id: Date.now(), ...parse.data };
  res.status(201).json(user);
});

export default router;
