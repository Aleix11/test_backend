let express = require('express');
let router = express.Router();

let policesScripts = require('../controllers/polices');
let middleware = require('../controllers/middleware');

/* GET polices listing. */
router.get('/userByPoliceNumber', middleware.onlyAdmin, policesScripts.getByPoliceNumber);
router.get('/byName', middleware.onlyAdmin, policesScripts.getByName);


module.exports = router;
