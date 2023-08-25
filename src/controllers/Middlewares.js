import { noAuthentication } from '../models/Index.js'

async function checkToken(req, res, next) {
  if (req.headers["token"] != process.env.APITOKEN) return noAuthentication(res);
  return next();
}


export {
  checkToken,
}
