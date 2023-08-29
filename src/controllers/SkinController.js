import { firstToUperCase } from "../helpers/String.js";
import { internalError, noChampionFound, noParams, noRegion, noValidRegion, noValidVersion, noVersion } from "../models/ErrorModel.js";
import { getChampionSkins } from '../api/Skin.js'
import { isValidLanguage, isValidVersion } from "../helpers/Check.js";


async function getChampionSkinList(req, res, next) {
  try {
    if (!req.query.region) return noRegion(res);
    if (!isValidLanguage(req.query.region)) return noValidRegion(res);
    if (!req.query.version) return noVersion(res);
    if (!await isValidVersion(req.query.version)) return noValidVersion(res);
    if (!req.params.skin) return noParams(req);
    const skins = await getChampionSkins(firstToUperCase(req.params.skin), req.query.version, req.query.region)
    if (!skins) return noChampionFound(res);
    return res.status(200).send({
      status: 200,
      message: [
        skins
      ],
      eror: ''
    });
  } catch (err) {
    return internalError(res);
  }
}


export {
  getChampionSkinList
}
