import { noAuthentication } from '../models/Index.js'

async function checkToken(req, res, next) {
  const token = process.env.APITOKEN || "lolinfo";
  if (req.headers["token"] != token) return noAuthentication(res);
  return next();
}


export {
  checkToken,
}
