import { Router } from 'express';
import SessionControllers from '../controller/SessionControllers';
import { sessionSchema } from '../schema/SessionSchema';

const sessionRouter = Router();
const sessionControllers = new SessionControllers();

sessionRouter.post('/', sessionSchema , sessionControllers.create);

export default sessionRouter
