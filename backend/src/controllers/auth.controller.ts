import { Request, Response } from 'express';
import { generateToken } from '../lib/generateToken';
import { IUser, User } from '../models/user.model';

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, password } = req.body;
    const lowercaseEmail = email.toLowerCase();

    // check if user already exists
    const existingUser = await User.findOne({ email: lowercaseEmail });
    if (existingUser) {
      res.status(400).json({ error: 'User already exists' });
      return;
    }

    const newUser: IUser = new User({ username, email: lowercaseEmail, password });
    await newUser.save();

    res.status(201).json({
      message: 'User registered successfully',
      user: { id: newUser._id, username: newUser.username, email: newUser.email },
    });
  } catch (error) {
    console.error('Unexpected error:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const lowercaseEmail = email.toLowerCase();

    const user = await User.findOne({ email: lowercaseEmail });
    if (!user) {
      res.status(400).json({ error: 'Invalid credentials' });
      return;
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      res.status(400).json({ error: 'Invalid credentials' });
      return;
    }

    const token = generateToken(String(user._id));

    res.status(200).json({
      message: 'Login successful',
      user: { id: user._id, username: user.username, email: user.email },
      token,
    });
  } catch (error) {
    console.error('Unexpected error:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};
