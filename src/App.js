import Express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url))
dotenv.config();

const App = Express();
const APIVERSION = process.env.APIVERSION || 'v1';
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({
  extended: true
}));

// Force HTTPS
App.use((req, res, next) => {
  if ((req.headers["x-forwarded-proto"] || "").endsWith("http"))
    res.redirect(`https://${req.headers.host}${req.url}`);
  else
    next();
});

// ROUTERS
import Champion from './routers/ChampionRouter.js'
App.use(`/api/${APIVERSION}/champions/`, Champion)

import Skin from './routers/SkinRouter.js'
App.use(`/api/${APIVERSION}/skins`, Skin)

import Information from './routers/InformationRouter.js'
App.use(`/api/${APIVERSION}/info/`, Information)

import Items from './routers/ItemsRouter.js'
App.use(`/api/${APIVERSION}/items/`, Items)

import Build from './routers/BuildRouter.js'
App.use(`/api/${APIVERSION}/build/`, Build);

App.use((req, res, next) => {
  res.sendFile('index.html', { root: __dirname + '\\page' })
});

export {
  App
};
