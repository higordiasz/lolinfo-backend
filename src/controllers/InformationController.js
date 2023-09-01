import { getServerInformation } from "../api/LolServer.js";
import { getAllVersions } from "../api/Version.js";
import { languages } from "../helpers/Check.js";
import { isValidServer, servers } from "../helpers/ServerRegion.js";
import { internalError, noParams, noServerInformation } from "../models/Index.js"

async function serversInfo(req, res, next) {
  try {
    return res.status(200).send({
      status: 200,
      message: servers,
      error: ''
    });
  } catch {
    return internalError(res);
  }
}

async function serverInfo(req, res, next) {
  try {
    if (!req.params.server) return noParams(res);
    if (!isValidServer(req.params.server)) return noServerInformation(res);
    return getServerInformation(res, req.params.server);
  } catch {
    return internalError(res);
  }
}

async function versionsInfo(req, res, next) {
  try {
    return getAllVersions(res);
  } catch {
    return internalError(res);
  }
}

async function languagesInfo(req, res, next) {
  try {
    return res.status(200).send({
      status: 200,
      message: languages,
      error: ''
    });
  } catch {
    return internalError(res);
  }
}

export {
  serverInfo,
  serversInfo,
  languagesInfo,
  versionsInfo
}
