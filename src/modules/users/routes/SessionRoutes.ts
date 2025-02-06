import { Router } from 'express';
import SessionControllers from '../controller/SessionControllers';

const sessionRouter = Router();
const sessionControllers = new SessionControllers();

sessionRouter.post('/', sessionControllers.create);

export default sessionRouter
