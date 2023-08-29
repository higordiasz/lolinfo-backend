import { championPopulation } from '../helpers/ChampionPopulation.js';
import { itemPopulation, singleItemPopulation } from '../helpers/ItemPopulation.js';
import { noServerResponse } from '../models/Index.js';
function baseUrl(version, region) {
  return `http://ddragon.leagueoflegends.com/cdn/${version}/data/${region}/item.json`
}

async function getItemsList(res, version, region) {
  const items = await fetch(baseUrl(version, region))
    .then(function (res) {
      return res.json();
    })
    .catch(function () {
      return
    });
  if (!items) return noServerResponse(res);
  return res.status(200).send({
    status: 200,
    message: itemPopulation(items.data),
    error: ''
  });
}

async function getSingleItem(res, version, region, item) {
  const items = await fetch(baseUrl(version, region))
    .then(function (res) {
      return res.json();
    })
    .catch(function () {
      return
    });
  if (!items) return noServerResponse(res);
  return res.status(200).send({
    status: 200,
    message: singleItemPopulation(items.data, item),
    error: ''
  });
}

export {
  getItemsList,
  getSingleItem
}
