var express = require('express');
var apiRoutes = express.Router();
var jwt  = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

// route middleware to verify a token
apiRoutes.use(function(req, res, next) {
    var token;
    if (req.headers && req.headers.authorization) {
        var parts = req.headers.authorization.split(' ');
        if (parts.length == 2) {
            var scheme = parts[0],
                credentials = parts[1];

            if (/^Bearer$/i.test(scheme)) {
                token = credentials;
            }
        } else {
            return res.status(401).json({error: 'Format is Authorization: Bearer [token]'});
        }
    } else if (req.query.token) {
        token = req.query.token;
        // We delete the token from param to not mess with blueprints
        delete req.query.token;
    } else {
        return res.status(401).json({error: 'No Authorization header was found'});
    }

    jwt.verify(token, jwtSecret, function(err, decoded) {
        if (err) {
            return res.status(401).json({ error: 'Failed to authenticate token.' });
        } else {
            // if everything is good, save to request for use in other routes
            if(decoded && decoded.uid){
                req.uid = decoded.uid;
            }
            req.decoded = decoded;
            next();
        }
    });

});
module.exports = apiRoutes;