const express = require('express');
const router  = express.Router();
const GameLevel = require("../models/GameLevel")

router.post('/gameLevel', (req, res, next) => {
  GameLevel.create(req.body)
  .then(data => res.json({created: true, data: data}))
});

router.get('/gameLevels', (req, res, next) => {
  GameLevel.find().then(levels => res.json(levels))
});

router.get('/gameLevel/:level', (req, res, next) => {
  GameLevel.findById(req.params.level).then(levels => res.json(levels))
});

module.exports = router;
