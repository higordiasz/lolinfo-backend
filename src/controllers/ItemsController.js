import { getItemsList, getListStats, getSingleItem } from "../api/Item.js";
import { isValidLanguage, isValidVersion } from "../helpers/Check.js";
import { internalError, noParams, noValidRegion, noValidVersion } from "../models/Index.js"

async function itemList(req, res, next) {
  try {
    if (!req.query.region) return noRegion(res);
    if (!isValidLanguage(req.query.region)) return noValidRegion(res);
    if (!req.query.version) return noVersion(res);
    if (!await isValidVersion(req.query.version)) return noValidVersion(res);
    return getItemsList(res, req.query.version, req.query.region);
  } catch {
    return internalError(res);
  }
}

async function itemStats(req, res, next) {
  try {
    if (!req.query.region) return noRegion(res);
    if (!isValidLanguage(req.query.region)) return noValidRegion(res);
    if (!req.query.version) return noVersion(res);
    if (!await isValidVersion(req.query.version)) return noValidVersion(res);
    return getListStats(res, req.query.version, req.query.region);
  } catch {
    return internalError(res);
  }
}


async function itemInfo(req, res, next) {
  try {
    if (!req.params.item) return noParams(res);
    if (!req.query.region) return noRegion(res);
    if (!isValidLanguage(req.query.region)) return noValidRegion(res);
    if (!req.query.version) return noVersion(res);
    if (!await isValidVersion(req.query.version)) return noValidVersion(res);
    return getSingleItem(res, req.query.version, req.query.region, req.params.item);
  } catch {
    return internalError(res);
  }
}

export {
  itemList,
  itemInfo,
  itemStats
}
