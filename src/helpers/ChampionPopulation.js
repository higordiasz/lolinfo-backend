function championPopulation(champ) {
  let ret = {};
  ret.id = champ.id || '';
  ret.key = champ.key || '';
  ret.name = champ.name || '';
  ret.title = champ.title || '';
  ret.skins = champ.skins || '';
  ret.lore = champ.lore || '';
  ret.tags = champ.tags || '';
  ret.info = champ.info || '';
  ret.stats = champ.stats || '';
  ret.logo = `http://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/${champ.name}.png`;
  ret.loading = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.name}_0.jpg`
  return ret;
}

export {
  championPopulation
}
