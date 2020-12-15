const { verifyUserToken } = require('../services/auth');

async function middlewareVerifyAuth(req, res, next) {
    const token = req.query.token;
    const decodedToken = await verifyUserToken(token);
    if(!decodedToken) {
        return res.status(401).end()
    }
    req.decodedToken = decodedToken;
    next();
}

// TODO : verifyAuth with Google

exports.middlewareVerifyAuth = middlewareVerifyAuth;
