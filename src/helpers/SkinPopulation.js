function skinPopulation(champ) {
  let ret = {};
  for (let i = 0; i < champ.skins.length; i++) {
    ret[i] = {
      id: champ.skins[i].id,
      name: champ.skins[i].name,
      chromas: champ.skins[i].chromas,
      art: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.name}_${champ.skins[i].num}.jpg`
    }
  }
  return ret;
}

export {
  skinPopulation
}
