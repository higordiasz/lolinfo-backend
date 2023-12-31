import { getListStatsLocal } from "../api/Item.js";

/*
{
  id: 'Braum',
  key: '201',
  name: 'Braum',
  title: 'o Coração de Freljord',
  skins: [
    { id: '201000', num: 0, name: 'default', chromas: false },
    {
      id: '201001',
      num: 1,
      name: 'Braum Caçador de Dragões',
      chromas: true
    },
    { id: '201002', num: 2, name: 'Braum El Tigre', chromas: false },
    {
      id: '201003',
      num: 3,
      name: 'Braum Coração de Leão',
      chromas: false
    },
    { id: '201010', num: 10, name: 'Braum Noel', chromas: false },
    {
      id: '201011',
      num: 11,
      name: 'Braum Cidade do Crime',
      chromas: true
    },
    {
      id: '201024',
      num: 24,
      name: 'Braum Frenesi Açucarado',
      chromas: true
    },
    {
      id: '201033',
      num: 33,
      name: 'Braum Curtindo o Verão',
      chromas: true
    }
  ],
  lore: 'Abençoado com bíceps gigantescos e um coração maior ainda, Braum é um amado herói de Freljord. Cada salão de hidromel ao norte de Frostheld brinda sua força lendária que teria derrubado uma floresta de carvalhos em uma única noite e demolido uma montanha inteira com um soco. Carregando uma porta de cofre encantada como seu escudo, Braum vaga pelo norte congelado com seu sorriso abigodado tão grande quanto seus músculos, um verdadeiro amigo para os necessitados.',
  tags: [ 'Support', 'Tank' ],
  info: { attack: 3, defense: 9, magic: 4, difficulty: 3 },
  stats: {
    hp: 610,
    hpperlevel: 112,
    mp: 311,
    mpperlevel: 45,
    movespeed: 335,
    armor: 47,
    armorperlevel: 5.2,
    spellblock: 32,
    spellblockperlevel: 2.05,
    attackrange: 125,
    hpregen: 8.5,
    hpregenperlevel: 1,
    mpregen: 6,
    mpregenperlevel: 0.8,
    crit: 0,
    critperlevel: 0,
    attackdamage: 55,
    attackdamageperlevel: 3.2,
    attackspeedperlevel: 3.5,
    attackspeed: 0.644
  },
  logo: 'http://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/Braum.png',
  loading: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Braum_0.jpg'
}
[
  {
    key: '1001',
    name: 'Botas',
    into: [
      '3158', '3117',
      '3020', '3006',
      '3009', '3047',
      '3111'
    ],
    from: [],
    gold: { base: 300, purchasable: true, total: 300, sell: 210 },
    tags: [ 'Boots' ],
    image: 'http://ddragon.leagueoflegends.com/cdn/13.16.1/img/item/1001.png',
    effect: {},
    description: '<mainText><stats><attention>25</attention> de Velocidade de Movimento</stats></mainText><br>',
    stats: { FlatMovementSpeedMod: 25 },
    plaintext: 'Aumenta levemente a Velocidade de Movimento',
    depth: undefined
  },
  {
    key: '1052',
    name: 'Tomo Amplificador',
    into: [
      '3124', '4629', '3191',
      '3116', '3108', '3113',
      '3145', '3152', '3165',
      '3802', '4632', '3916',
      '4630', '4635', '4636',
      '4637', '4642', '4644',
      '6656', '6657'
    ],
    from: [],
    gold: { base: 435, purchasable: true, total: 435, sell: 305 },
    tags: [ 'SpellDamage' ],
    image: 'http://ddragon.leagueoflegends.com/cdn/13.16.1/img/item/1052.png',
    effect: {},
    description: '<mainText><stats><attention>20</attention> de Poder de Habilidade</stats></mainText><br>',
    stats: { FlatMagicDamageMod: 20 },
    plaintext: 'Aumenta levemente o Poder de Habilidade',
    depth: undefined
  }
]
{
  id: 'Braum',
  key: '201',
  name: 'Braum',
  title: 'o Coração de Freljord',
  skins: [
    { id: '201000', num: 0, name: 'default', chromas: false },
    {
      id: '201001',
      num: 1,
      name: 'Braum Caçador de Dragões',
      chromas: true
    },
    { id: '201002', num: 2, name: 'Braum El Tigre', chromas: false },
    {
      id: '201003',
      num: 3,
      name: 'Braum Coração de Leão',
      chromas: false
    },
    { id: '201010', num: 10, name: 'Braum Noel', chromas: false },
    {
      id: '201011',
      num: 11,
      name: 'Braum Cidade do Crime',
      chromas: true
    },
    {
      id: '201024',
      num: 24,
      name: 'Braum Frenesi Açucarado',
      chromas: true
    },
    {
      id: '201033',
      num: 33,
      name: 'Braum Curtindo o Verão',
      chromas: true
    }
  ],
  lore: 'Abençoado com bíceps gigantescos e um coração maior ainda, Braum é um amado herói de Freljord. Cada salão de hidromel ao norte de Frostheld brinda sua força lendária que teria derrubado uma floresta de carvalhos em uma única noite e demolido uma montanha inteira com um soco. Carregando uma porta de cofre encantada como seu escudo, Braum vaga pelo norte congelado com seu sorriso abigodado tão grande quanto seus músculos, um verdadeiro amigo para os necessitados.',
  tags: [ 'Support', 'Tank' ],
  info: { attack: 3, defense: 9, magic: 4, difficulty: 3 },
  stats: {
    hp: 610,
    hpperlevel: 112,
    mp: 311,
    mpperlevel: 45,
    movespeed: 335,
    armor: 47,
    armorperlevel: 5.2,
    spellblock: 32,
    spellblockperlevel: 2.05,
    attackrange: 125,
    hpregen: 8.5,
    hpregenperlevel: 1,
    mpregen: 6,
    mpregenperlevel: 0.8,
    crit: 0,
    critperlevel: 0,
    attackdamage: 55,
    attackdamageperlevel: 3.2,
    attackspeedperlevel: 3.5,
    attackspeed: 0.644
  },
  logo: 'http://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/Braum.png',
  loading: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Braum_0.jpg'
}
[
  {
    key: '1001',
    name: 'Botas',
    into: [
      '3158', '3117',
      '3020', '3006',
      '3009', '3047',
      '3111'
    ],
    from: [],
    gold: { base: 300, purchasable: true, total: 300, sell: 210 },
    tags: [ 'Boots' ],
    image: 'http://ddragon.leagueoflegends.com/cdn/13.16.1/img/item/1001.png',
    effect: {},
    description: '<mainText><stats><attention>25</attention> de Velocidade de Movimento</stats></mainText><br>',
    stats: { FlatMovementSpeedMod: 25 },
    plaintext: 'Aumenta levemente a Velocidade de Movimento',
    depth: undefined
  },
  {
    key: '1052',
    name: 'Tomo Amplificador',
    into: [
      '3124', '4629', '3191',
      '3116', '3108', '3113',
      '3145', '3152', '3165',
      '3802', '4632', '3916',
      '4630', '4635', '4636',
      '4637', '4642', '4644',
      '6656', '6657'
    ],
    from: [],
    gold: { base: 435, purchasable: true, total: 435, sell: 305 },
    tags: [ 'SpellDamage' ],
    image: 'http://ddragon.leagueoflegends.com/cdn/13.16.1/img/item/1052.png',
    effect: {},
    description: '<mainText><stats><attention>20</attention> de Poder de Habilidade</stats></mainText><br>',
    stats: { FlatMagicDamageMod: 20 },
    plaintext: 'Aumenta levemente o Poder de Habilidade',
    depth: undefined
  }
]
*/
class StatsCalculation {
  constructor() {
  }

  async iniciar(champion, itens, level, region, version) {
    if (!champion) return null;
    if (!itens) return null;
    if (!level) return null;
    if (itens.length <= 0) return null;
    if (!champion.stats) return null;
    let champStats = {
      hp: champion.stats.hp + (champion.stats.hpperlevel * (level - 1)),
      mp: champion.stats.mp + (champion.stats.mpperlevel * (level - 1)),
      movespeed: champion.stats.movespeed,
      armor: champion.stats.armor + (champion.stats.armorperlevel * (level - 1)),
      spellblock: champion.stats.spellblock + (champion.stats.spellblockperlevel * (level - 1)),
      attackrange: champion.stats.attackrange,
      hpregen: champion.stats.hpregen + (champion.stats.hpregenperlevel * (level - 1)),
      mpregen: champion.stats.mpregen + (champion.stats.mpregenperlevel * (level - 1)),
      crit: champion.stats.crit + (champion.stats.critperlevel * (level - 1)),
      attackdamage: champion.stats.attackdamage + (champion.stats.attackdamageperlevel * (level - 1)),
      attackspeed: champion.stats.attackspeed + (champion.stats.attackspeed * ((champion.stats.attackspeedperlevel * (level - 1)) / 100)),
      spelldamage: 0,
      armorpenetration: 0,
      dodge: 0,
      critchance: 0,
      magicpenetration: 0,
      block: 0
    };
    let itemsStats = await getListStatsLocal(version, region);
    let keys = Object.keys(itemsStats);
    for (let i = 0; i < itens.length; i++) {
      if (itens[i].stats != null) {
        let itensKeys = Object.keys(itens[i].stats);
        for (let j = 0; j < itensKeys.length; j++) {
          itemsStats[itensKeys[j]] += itens[i].stats[itensKeys[j]];
        }
      }
    };
    champStats.hp += itemsStats.FlatHPPoolMod;
    champStats.hp += itemsStats.rFlatHPModPerLevel * (level - 1);
    champStats.hp += (champStats.hp * (itemsStats.PercentHPPoolMod));
    champStats.mp += itemsStats.FlatMPPoolMod
    champStats.mp += itemsStats.rFlatMPModPerLevel * (level - 1);
    champStats.mp += (champStats.mp * (itemsStats.PercentMPPoolMod));
    champStats.hpregen += itemsStats.FlatHPRegenMod;
    champStats.hpregen += itemsStats.rFlatHPRegenModPerLevel * (level - 1);
    champStats.hpregen += (champStats.hpregen * (itemsStats.PercentHPRegenMod));
    champStats.mpregen += itemsStats.FlatMPRegenMod;
    champStats.mpregen += itemsStats.rFlatMPRegenModPerLevel * (level - 1);
    champStats.mpregen += (champStats.mpregen * (itemsStats.PercentMPRegenMod))
    champStats.armor += itemsStats.FlatArmorMod;
    champStats.armor += itemsStats.rFlatArmorModPerLevel * (level - 1);
    champStats.armor += (champStats.armor * (itemsStats.PercentArmorMod));
    champStats.armorpenetration += itemsStats.rFlatArmorPenetrationMod;
    champStats.armorpenetration += itemsStats.rFlatArmorPenetrationModPerLevel * (level - 1);
    champStats.armorpenetration += (champStats.armorpenetration * ((itemsStats.rPercentArmorPenetrationModPerLevel) + (itemsStats.rPercentArmorPenetrationMod)));
    champStats.attackdamage += itemsStats.FlatPhysicalDamageMod;
    champStats.attackdamage += itemsStats.rFlatPhysicalDamageModPerLevel * (level - 1);
    champStats.attackdamage += (champStats.attackdamage * (itemsStats.PercentPhysicalDamageMod));
    champStats.spelldamage += itemsStats.FlatMagicDamageMod;
    champStats.spelldamage += itemsStats.rFlatMagicDamageModPerLevel * (level - 1);
    champStats.spelldamage += (champStats.spelldamage * (itemsStats.PercentMagicDamageMod));
    champStats.movespeed += itemsStats.FlatMovementSpeedMod;
    champStats.movespeed += itemsStats.rFlatMovementSpeedModPerLevel * (level - 1);
    champStats.movespeed += (champStats.movespeed * ((itemsStats.PercentMovementSpeedMod) + (itemsStats.rPercentMovementSpeedModPerLevel)));
    champStats.attackspeed += itemsStats.FlatAttackSpeedMod;
    champStats.attackspeed += ((champStats.attackspeed * itemsStats.PercentAttackSpeedMod) + (champStats.attackspeed * itemsStats.rPercentAttackSpeedModPerLevel));
    champStats.dodge += itemsStats.rFlatDodgeMod;
    champStats.dodge += itemsStats.rFlatDodgeModPerLevel * (level - 1);
    champStats.dodge += (champStats.dodge * itemsStats.PercentDodgeMod);
    champStats.critchance += itemsStats.FlatCritChanceMod;
    champStats.critchance += itemsStats.rFlatCritChanceModPerLevel * (level - 1);
    champStats.critchance += (champStats.critchance * itemsStats.PercentCritChanceMod);
    champStats.crit += itemsStats.FlatCritDamageMod;
    champStats.crit += itemsStats.rFlatCritDamageModPerLevel * (level - 1);
    champStats.crit += (champStats.crit * itemsStats.PercentCritDamageMod);
    champStats.block += itemsStats.FlatBlockMod;
    champStats.block += (champStats.block * itemsStats.PercentBlockMod);
    champStats.spellblock += itemsStats.FlatSpellBlockMod;
    champStats.spellblock += itemsStats.rFlatSpellBlockModPerLevel * (level - 1);
    champStats.spellblock += (champStats.block * itemsStats.PercentSpellBlockMod);
    champStats.magicpenetration += itemsStats.rFlatMagicPenetrationMod;
    champStats.magicpenetration += itemsStats.rFlatMagicPenetrationModPerLevel * (level - 1);
    champStats.magicpenetration += (champStats.magicpenetration * (itemsStats.rPercentMagicPenetrationMod + itemsStats.rPercentMagicPenetrationModPerLevel));
    return champStats;
  }
}

export {
  StatsCalculation
}
