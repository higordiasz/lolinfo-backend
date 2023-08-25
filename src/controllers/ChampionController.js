import { getChampionByName, getChampionInfoByName } from "../api/champion.js"
import { firstToUperCase } from "../helpers/String.js";
import { internalError, levelError, noChampionFound, noParams } from "../models/Index.js"

async function getChampion(req, res, next) {
  try {
    if (!req.params.champion) return noParams(res);
    return getChampionByName(res, firstToUperCase(req.params.champion));
  } catch {
    return internalError(res);
  }
}

async function getChampionLevelStats(req, res, next) {
  try {
    if (!req.params.champion) return noParams(res);
    if (!req.params.level) return noParams(res);
    if (isNaN(req.params.level)) return levelError(res);
    if (req.params.level < 1 || req.params.level > 18) return levelError(res);
    const champ = await getChampionInfoByName(firstToUperCase(req.params.champion));
    if (!champ) return noChampionFound(res);
    return res.status(200).send({
      status: 200,
      message: [
        {
          stats: {
            hp: champ.stats.hp + (champ.stats.hpperlevel * (req.params.level - 1)),
            mp: champ.stats.mp + (champ.stats.mpperlevel * (req.params.level - 1)),
            movespeed: champ.stats.movespeed,
            armor: champ.stats.armor + (champ.stats.armorperlevel * (req.params.level - 1)),
            spellblock: champ.stats.spellblock + (champ.stats.spellblockperlevel * (req.params.level - 1)),
            attackrange: champ.stats.attackrange,
            hpregen: champ.stats.hpregen + (champ.stats.hpregenperlevel * (req.params.level - 1)),
            mpregen: champ.stats.mpregen + (champ.stats.mpregenperlevel * (req.params.level - 1)),
            crit: champ.stats.crit + (champ.stats.critperlevel * (req.params.level - 1)),
            attackdamage: champ.stats.attackdamage + (champ.stats.attackdamageperlevel * (req.params.level - 1)),
            attackspeed: champ.stats.attackspeed + (champ.stats.attackspeedperlevel * (req.params.level - 1))
          }
        }
      ],
      error: ''
    });
  } catch (err) {
    console.log(err)
    return internalError(res);
  }
}


export {
  getChampion,
  getChampionLevelStats
}
