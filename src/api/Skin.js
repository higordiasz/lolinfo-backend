import { skinPopulation } from '../helpers/SkinPopulation.js';
import { noChampionFound } from '../models/Index.js';
const baseUrl = "http://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/champion/";

async function getChampionSkins(name) {
  const champ = await fetch(baseUrl + name + '.json')
    .then(function (res) {
      return res.json();
    })
    .catch(function () {
      return
    });
  if (!champ) return;
  return skinPopulation(champ.data[name]);
}

export {
  getChampionSkins
}
