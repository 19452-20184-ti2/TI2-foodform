const userService = require('../services/user-service');
const jwt = require('../helpers/jwt');

exports.register = (req, res) => {
    return userService
        .register(req.body)
            .then( result => res.json(result))
            .then( () => res.sendStatus(200))
            .catch( err => res.status(500).send(err.message) );
};

exports.login = (req, res) => {
    return userService.authenticate(req.body.username, req.body.password)
        .then((payload) => jwt.createToken(payload))
        .then((data) => res.json(data))
        .catch(err => res.status(500).send(err.message))
};
