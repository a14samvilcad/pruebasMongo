const express = require('express');
const router = express.Router();

const administrationCtrl = require('../controllers/administration.controller');

router.get('/players', administrationCtrl.getPlayers);
router.post('/players', administrationCtrl.createPlayer);

router.get('/points', administrationCtrl.getPoints);
router.post('/points', administrationCtrl.createPoint);

module.exports = router;
