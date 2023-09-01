async function noAuthentication(res) {
  return res.status(404).send({
    status: 404,
    mesage: [],
    error: "Authentication Failure"
  })
}

async function noChampionFound(res) {
  return res.status(404).send({
    status: 404,
    message: [],
    error: "Champion not found"
  });
}

async function noParams(res) {
  return res.status(404).send({
    status: 404,
    message: [],
    error: 'No params loaded'
  });
}

async function noRegion(res) {
  return res.status(404).send({
    status: 404,
    message: [],
    error: 'No region information'
  });
}

async function noVersion(res) {
  return res.status(404).send({
    status: 404,
    message: [],
    error: 'No region information'
  });
}

async function noQuery(res) {
  return res.status(404).send({
    status: 404,
    message: [],
    error: 'No query loaded'
  });
}

async function internalError(res) {
  return res.status(404).send({
    status: 404,
    message: [],
    error: 'Internal Error'
  })
}

async function levelError(res) {
  return res.status(404).send({
    status: 404,
    message: [],
    error: 'Level need to be between 1 and 18'
  })
}

async function noValidRegion(res) {
  return res.status(404).send({
    status: 404,
    message: [],
    error: 'This region is not a valid region'
  })
}

async function noValidVersion(res) {
  return res.status(404).send({
    status: 404,
    message: [],
    error: 'This version is not a valid version'
  })
}

async function noServerInformation(res) {
  return res.status(404).send({
    status: 404,
    message: [],
    error: 'No have information of server'
  })
}

async function noServerResponse(res) {
  return res.status(404).send({
    status: 404,
    message: [],
    error: 'No server response'
  })
}

async function noBody(res) {
  return res.status(404).send({
    status: 404,
    message: [],
    error: 'No body found'
  })
}

async function invalidRequest(res) {
  return res.status(404).send({
    status: 404,
    message: [],
    error: 'Invalid request, review informations'
  })
}

async function noItemFound(res) {
  return res.status(404).send({
    status: 404,
    message: [],
    error: 'No found item'
  })
}

export {
  noAuthentication,
  noChampionFound,
  noParams,
  noQuery,
  internalError,
  levelError,
  noRegion,
  noVersion,
  noValidRegion,
  noValidVersion,
  noServerInformation,
  noServerResponse,
  noBody,
  invalidRequest,
  noItemFound
}
