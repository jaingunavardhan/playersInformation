const express = require('express');
const playerController = require('../controllers/playerController.js');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json({extended:false}));

router.get('/', playerController.getPlayers);
router.post('/', playerController.postPlayer);

module.exports = router;