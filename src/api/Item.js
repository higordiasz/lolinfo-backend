import { championPopulation } from '../helpers/ChampionPopulation.js';
import { itemKeyPopulation, itemPopulation, singleItemPopulation } from '../helpers/ItemPopulation.js';
import { noItemFound, noServerResponse } from '../models/Index.js';
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
  let keys = itemKeyPopulation(items.data);
  if (!keys.includes(item)) return noItemFound(res);
  return res.status(200).send({
    status: 200,
    message: singleItemPopulation(items.data, item),
    error: ''
  });
}

async function getListStats(res, version, region) {
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
    message: items.basic.stats,
    error: ''
  });
}

async function getListStatsLocal(version, region) {
  const items = await fetch(baseUrl(version, region))
    .then(function (res) {
      return res.json();
    })
    .catch(function (err) {
      return
    });
  if (!items) return null;
  return items.basic.stats;
}

async function checkValidItems(items, version, region) {
  if (!Array.isArray(items)) return false;
  const itemsListAPI = await fetch(baseUrl(version, region))
    .then(function (res) {
      return res.json();
    })
    .catch(function () {
      return
    });
  if (!itemsListAPI) return false;
  let keys = itemKeyPopulation(itemsListAPI.data);
  let valid = true;
  items.forEach(item => {
    if (!keys.includes(`${item}`)) {
      valid = false;
    }
  })
  return valid;
}

async function getSingleItemInfo(version, region, item) {
  const items = await fetch(baseUrl(version, region))
    .then(function (res) {
      return res.json();
    })
    .catch(function () {
      return
    });
  if (!items) return [];
  let keys = itemKeyPopulation(items.data);
  if (!keys.includes(`${item}`)) return [];
  return singleItemPopulation(items.data, `${item}`);
}

export {
  getItemsList,
  getSingleItem,
  getListStats,
  checkValidItems,
  getSingleItemInfo,
  getListStatsLocal
}
