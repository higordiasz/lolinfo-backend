const languages = [
  'pt_BR',
  'en_US',
  'cs_CZ',
  'el_GR',
  'pl_PL',
  'ro_RO',
  'hu_HU',
  'en_GB',
  'de_GB',
  'es_ES',
  'it_IT',
  'fr_FR',
  'ja_JP',
  'ko_KR',
  'es_MX',
  'es_AR',
  'es_AU',
  'ru_RU',
  'tr_TR',
  'ms_MY',
  'en_PH',
  'en_SG',
  'th_TH',
  'vi_VN',
  'id_ID',
  'zh_MY',
  'zh_CN',
  'zh_TW'
];

function isValidLanguage(language) {
  if (languages.includes(language)) return true;
  return false;
}

async function isValidVersion(version) {
  const baseUrl = 'https://ddragon.leagueoflegends.com/api/versions.json';
  const champ = await fetch(baseUrl)
    .then(function (res) {
      return res.json();
    })
    .catch(function () {
      return
    });
  if (!champ) return false;
  if (!champ.includes(version)) return false;
  return true;
}

export {
  languages,
  isValidLanguage,
  isValidVersion
}
