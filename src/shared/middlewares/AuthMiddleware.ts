import AppError from '@shared/errors/AppError';
import { Secret, verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

import 'dotenv/config';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default class AuthMiddleware {
  static execute(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization;

    if (!authHeader) throw new AppError('JWT token is missing', 401);

    const [, token] = authHeader.split(' ');

    try {
      const decodedToken = verify(token, process.env.APP_SECRET as Secret);

      const { sub } = decodedToken as ITokenPayload;

      req.user = {
        id: sub,
      };

      next();
    } catch (error) {
      throw new AppError('Invalid JWT token', 401);
    }
  }
}
