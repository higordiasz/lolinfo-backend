function itemPopulation(itemList) {
  let ret = [];
  let keys = Object.keys(itemList);
  keys.forEach(key => {
    if (itemList[key].maps['11']) {
      let aux = {};
      aux.key = key;
      aux.name = itemList[key].name;
      aux.into = itemList[key].into || [];
      aux.from = itemList[key].from || [];
      aux.gold = itemList[key].gold;
      aux.tags = itemList[key].tags;
      aux.image = `http://ddragon.leagueoflegends.com/cdn/13.16.1/img/item/${itemList[key].image.full}`;
      aux.effect = itemList[key].effect || {};
      aux.description = itemList[key].description;
      aux.stats = itemList[key].stats;
      aux.plaintext = itemList[key].plaintext;
      aux.depth = itemList[key].depth;
      ret.push(aux);
    }
  })
  return ret;
}

function singleItemPopulation(itemList, item) {
  let ret = [];
  let keys = Object.keys(itemList);
  keys.forEach(key => {
    if (itemList[key].maps['11'] && key == item) {
      let aux = {};
      aux.key = key;
      aux.name = itemList[key].name;
      aux.into = itemList[key].into || [];
      aux.from = itemList[key].from || [];
      aux.gold = itemList[key].gold;
      aux.tags = itemList[key].tags;
      aux.image = `http://ddragon.leagueoflegends.com/cdn/13.16.1/img/item/${itemList[key].image.full}`;
      aux.effect = itemList[key].effect || {};
      aux.description = itemList[key].description;
      aux.stats = itemList[key].stats;
      aux.plaintext = itemList[key].plaintext;
      aux.depth = itemList[key].depth;
      ret.push(aux);
    }
  })
  return ret;
}

function itemKeyPopulation(itemList) {
  let ret = [];
  let keys = Object.keys(itemList);
  keys.forEach(key => {
    if (itemList[key].maps['11']) {
      ret.push(key)
    }
  })
  return ret;
}

export {
  itemPopulation,
  singleItemPopulation,
  itemKeyPopulation
}
