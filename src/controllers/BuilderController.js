import { getChampionInfoByName } from "../api/Champion.js";
import { checkValidItems, getSingleItem, getSingleItemInfo } from "../api/Item.js";
import { isValidLanguage, isValidVersion } from "../helpers/Check.js";
import { firstToUperCase } from "../helpers/String.js";
import { StatsCalculation } from "../models/Calculation.js";
import { invalidItem, invalidRequest, noBody, noChampionFound, noParams, noRegion, noValidRegion, noValidVersion, noVersion, toManyItems } from "../models/Index.js";

async function getBuildStats(req, res, next) {
  if (!req.query.region) return noRegion(res);
  if (!isValidLanguage(req.query.region)) return noValidRegion(res);
  if (!req.query.version) return noVersion(res);
  if (!await isValidVersion(req.query.version)) return noValidVersion(res);
  if (!req.body) return noBody(res);
  if (!req.params.champion) return noParams(res);
  if (!req.params.level) return noParams(res);
  const champion = await getChampionInfoByName(firstToUperCase(req.params.champion), req.query.version, req.query.region);
  if (!champion) return noChampionFound(res);
  const build = req.body;
  if (!build.items) return invalidRequest(res);
  if (!build.runes) return invalidRequest(res);
  if (build.items.length > 6 || build.items.length < 0) return toManyItems(res);
  if (build.items.length > 0)
    if (!await checkValidItems(build.items, req.query.version, req.query.region)) return invalidItem(res);
  let itemsInfo = [];
  for (let i = 0; i < build.items.length; i++) {
    let info = await getSingleItemInfo(req.query.version, req.query.region, build.items[i]);
    if (info.length > 0)
      itemsInfo.push(info[0])
  }
  let calculation = new StatsCalculation();
  let d = await calculation.iniciar(champion, itemsInfo, req.params.level, req.query.region, req.query.version);
  return res.status(200).send({
    status: 200,
    message: d,
    error: ''
  });
}

export {
  getBuildStats
}
