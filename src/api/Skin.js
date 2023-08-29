import { skinPopulation } from '../helpers/SkinPopulation.js';
function baseUrl(version, region) {
  return `http://ddragon.leagueoflegends.com/cdn/${version}/data/${region}/champion/`
}
async function getChampionSkins(name, version, region) {
  const champ = await fetch(baseUrl(version, region) + name + '.json')
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
