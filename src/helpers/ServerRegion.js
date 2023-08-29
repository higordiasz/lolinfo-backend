const servers = [
  { name: 'Brazil', abbreviation: 'br' },
  { name: 'Europe Nordic & East', abbreviation: 'eune' },
  { name: 'Europe West', abbreviation: 'euw' },
  { name: 'Latin America North', abbreviation: 'lan' },
  { name: 'Latin America South', abbreviation: 'las' },
  { name: 'North America', abbreviation: 'na' },
  { name: 'Oceania', abbreviation: 'oce' },
  { name: 'Russia', abbreviation: 'ru' },
  { name: '	Turkey', abbreviation: 'tr' },
  { name: 'Japan', abbreviation: 'jp' },
  { name: 'Republic of Korea', abbreviation: 'kr' },
  { name: 'The Philippines', abbreviation: 'ph' },
  { name: 'Singapore, Malaysia, & Indonesia', abbreviation: 'sg' },
  { name: 'Taiwan, Hong Kong, and Macao', abbreviation: 'tw' },
  { name: 'Thailand', abbreviation: 'th' },
  { name: 'Vietnam', abbreviation: 'vn' },
  { name: '	Public Beta Environment', abbreviation: 'pbe' }
]

function isValidServer(server) {
  for (let i = 0; i < servers.length; i++) {
    if (server == servers[i].abbreviation) return true;
  }
  return false;
}

export {
  servers,
  isValidServer
}
