const express = require('express');

const router = express.Router();
const mapController = require('../../controllers/map-controller');

router.get('/', mapController.searchPlace).get('/test', mapController.test);

module.exports = router;
