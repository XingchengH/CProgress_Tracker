import jwt from 'jsonwebtoken'

export const generateToken = (userId: string): string => {
  const secret = process.env.JWT_SECRET!;
  return jwt.sign({ id: userId }, secret, { expiresIn: process.env.JWT_EXPIRES_IN || '1d' });
};
