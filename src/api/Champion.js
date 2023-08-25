import { championPopulation } from '../helpers/ChampionPopulation.js';
import { noChampionFound } from '../models/Index.js';
const baseUrl = "http://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/champion/";

async function getChampionInfoByName(name) {
  const champ = await fetch(baseUrl + name + '.json')
    .then(function (res) {
      return res.json();
    })
    .catch(function () {
      return
    });
  if (!champ) return;
  return championPopulation(champ.data[name]);
}

async function getChampionByName(res, name) {
  const champ = await fetch(baseUrl + name + '.json')
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
