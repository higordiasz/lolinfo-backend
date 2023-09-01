import Express from 'express';
import { getBuildStats } from '../controllers/BuilderController.js';
import { checkToken } from '../controllers/Middlewares.js';
const Router = Express.Router();

Router.post('/:champion/:level', checkToken, getBuildStats);

export default Router
