import { noServerInformation } from "../models/ErrorModel.js";

function baseUrl(server) {
  return `https://ddragon.leagueoflegends.com/realms/${server}.json`
}

async function getServerInformation(res, server) {
  const serverInfo = await fetch(baseUrl(server))
    .then(function (res) {
      return res.json();
    })
    .catch(function () {
      return
    });
  if (!serverInfo) return noServerInformation(res);
  return res.status(200).send({
    status: 200,
    message: [
      serverInfo
    ],
    error: ''
  });
}

export {
  getServerInformation
}
