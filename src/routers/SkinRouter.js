import Express from 'express';
import { checkToken } from '../controllers/Middlewares.js';
import { getChampionSkinList } from '../controllers/SkinController.js';
const Router = Express.Router();

Router.get('/:skin', checkToken, getChampionSkinList);

export default Router
