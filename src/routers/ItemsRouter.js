import Express from 'express';
import { checkToken } from '../controllers/Middlewares.js';
import { itemInfo, itemList, itemStats } from '../controllers/ItemsController.js';
const Router = Express.Router();

Router.get('/list', checkToken, itemList);
Router.get('/stats', checkToken, itemStats);
Router.get('/:item', checkToken, itemInfo);

export default Router
