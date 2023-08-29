import { noServerResponse } from "../models/ErrorModel.js";

const baseUrl = 'https://ddragon.leagueoflegends.com/api/versions.json';

async function getAllVersions(res) {
  const versions = await fetch(baseUrl)
    .then(function (res) {
      return res.json();
    })
    .catch(function () {
      return
    });
  if (!versions) return noServerResponse(res);
  return res.status(200).send({
    status: 200,
    message: versions,
    error: ''
  })
}

export {
  getAllVersions
}
