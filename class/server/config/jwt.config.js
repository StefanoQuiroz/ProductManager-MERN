const jwt = require('jsonwebtoken');

const secretKey = "clave Secreta";

const authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, secretKey, (err, payload) => {
        if(err){
            res.status(401).json({verified:false})
        } else {
            next();
        }
    })
}

module.exports = {secretKey, authenticate};