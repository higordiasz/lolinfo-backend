import { firstToUperCase } from "../helpers/String.js";
import { internalError, noChampionFound, noParams } from "../models/ErrorModel.js";
import { getChampionSkins } from '../api/Skin.js'


async function getChampionSkinList(req, res, next) {
  try {
    if (!req.params.skin) return noParams(req);
    const skins = await getChampionSkins(firstToUperCase(req.params.skin))
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
