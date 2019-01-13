import expressJwt from "express-jwt";
import config from "../config.json";
import userService from "../users/user.service";

const isRevoked = async (req, payload, done) => {
  const user = await userService.getById(payload.sub);

  if (!user) {
    return done(null, true);
  }

  done();
};

const jwt = () => {
  const secret = config.secret;

  return expressJwt({ secret, isRevoked }).unless({
    path: ["/users/authenticate", "/users/register"]
  });
};

module.exports = jwt;