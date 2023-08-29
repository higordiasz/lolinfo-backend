import { championPopulation } from '../helpers/ChampionPopulation.js';
import { noChampionFound } from '../models/Index.js';
function baseUrl(version, region) {
  return `http://ddragon.leagueoflegends.com/cdn/${version}/data/${region}/champion/`
}

async function getChampionInfoByName(name, version, region) {
  const champ = await fetch(baseUrl(version, region) + name + '.json')
    .then(function (res) {
      return res.json();
    })
    .catch(function () {
      return
    });
  if (!champ) return;
  return championPopulation(champ.data[name]);
}

async function getChampionByName(res, name, version, region) {
  const champ = await fetch(baseUrl(version, region) + name + '.json')
    .then(function (res) {
      return res.json();
    })
    .catch(function () {
      return
    });
  if (!champ) return noChampionFound(res);
  return res.status(200).send({
    status: 200,
    message: [
      championPopulation(champ.data[name])
    ],
    error: ''
  });
}


export {
  getChampionByName,
  getChampionInfoByName
}
