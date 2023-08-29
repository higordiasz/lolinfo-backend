import Express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();

const App = Express();

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({
  extended: true
}));

/*
// USE HTTPS
App.use((req, res, next) => {
  if ((req.headers["x-forwarded-proto"] || "").endsWith("http"))
    res.redirect(`https://${req.headers.host}${req.url}`);
  else
    next();
});
*/

// ROUTERS
import Champion from './routers/ChampionRouter.js'
App.use(`/api/${process.env.APIVERSION}/champions/`, Champion)

import Skin from './routers/SkinRouter.js'
App.use(`/api/${process.env.APIVERSION}/skins`, Skin)

import Information from './routers/InformationRouter.js'
App.use(`/api/${process.env.APIVERSION}/info/`, Information)

import Items from './routers/ItemsRouter.js'
App.use(`/api/${process.env.APIVERSION}/items/`, Items)

export {
  App
};
