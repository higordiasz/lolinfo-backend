import Express from 'express';
import { getChampion, getChampionLevelStats } from '../controllers/ChampionController.js';
import { checkToken } from '../controllers/Middlewares.js';
const Router = Express.Router();

Router.get('/:champion', checkToken, getChampion);
Router.get('/:champion/:level', checkToken, getChampionLevelStats)

export default Router
