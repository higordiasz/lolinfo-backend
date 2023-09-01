async function toManyItems(res) {
  return res.status(404).send({
    status: 404,
    message: [],
    error: 'Only 6 or less items is allowed'
  });
}

async function invalidItem(res) {
  return res.status(404).send({
    status: 404,
    message: [],
    error: 'One item of list is invalid'
  });
}

export {
  toManyItems,
  invalidItem
}
