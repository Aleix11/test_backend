let express = require('express');
let router = express.Router();

let policesScripts = require('../controllers/polices');
let middleware = require('../controllers/middleware');

/* GET polices listing. */
router.get('/byName/:name', middleware.onlyAdmin, policesScripts.getByName);
router.get('/userByPolicieNumber/:number', middleware.onlyAdmin, policesScripts.getByPoliceNumber);


module.exports = router;
