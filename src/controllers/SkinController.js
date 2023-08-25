import { firstToUperCase } from "../helpers/String.js";
import { internalError, noChampionFound } from "../models/ErrorModel.js";


async function getChampionSkinList(req, res, next) {
  try {
    if (!req.params) return noParams(res);
    const skins = await getChampionSkinList(firstToUperCase(req.params.skin))
    if (!skins) return noChampionFound(res);
    console.log('oi')
    return res.status(200).send({
      status: 200,
      message: [
        skins
      ],
      eror: ''
    });
  } catch (err) {
    console.log(err)
    return internalError(res);
  }
}


export {
  getChampionSkinList
}
