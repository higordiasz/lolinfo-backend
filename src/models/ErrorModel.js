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

export {
  noAuthentication,
  noChampionFound,
  noParams,
  noQuery,
  internalError,
  levelError
}
