const apiRouter = require('express').Router()
const getLyricAnalysis = require('../controllers/tone-controller')

apiRouter.get("/:artist/:track", getLyricAnalysis)

module.exports = apiRouter