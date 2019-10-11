let express = require('express');
let router = express.Router();

let usersScripts = require('../controllers/users');
let middleware = require('../controllers/middleware');

/* GET users listing. */
router.get('/byId/:id', middleware.userAdmin, usersScripts.getById);
router.get('/byName/:name',  middleware.userAdmin, usersScripts.getByName);

module.exports = router;
