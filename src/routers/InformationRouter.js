import Express from 'express';
import { languagesInfo, serverInfo, serversInfo, versionsInfo } from '../controllers/InformationController.js';
import { checkToken } from '../controllers/Middlewares.js';
const Router = Express.Router();

Router.get('/servers', checkToken, serversInfo);
Router.get('/versions', checkToken, versionsInfo);
Router.get('/languages', checkToken, languagesInfo);
Router.get('/servers/:server', checkToken, serverInfo);

export default Router
