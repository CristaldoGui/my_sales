import { Router } from 'express';
import { Request, Response } from 'express';

const router = Router();

router.get('/health', (_req: Request, res: Response) => {
  res.json({ message: 'Hello dev. I am alive!' });
});

export default router;
