import jwt, { Secret } from 'jsonwebtoken';

export const generateToken = (userId: string): string => {
  const secret: Secret = process.env.JWT_SECRET as Secret;
  return jwt.sign({ id: userId }, secret, {
    expiresIn: (process.env.JWT_EXPIRES_IN as jwt.SignOptions['expiresIn']) || '1d',
  });
};
