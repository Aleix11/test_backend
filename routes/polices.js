let express = require('express');
let router = express.Router();

let policesScripts = require('../controllers/polices');
let middleware = require('../controllers/middleware');

/* GET polices listing. */
router.get('/byId', policesScripts.getByPoliceNumber);
router.get('/byName', policesScripts.getByName);


module.exports = router;
