const { getLyrics, analyseLyrics } = require('../models/watson')


const getLyricAnalysis = (request, response) => {
    const { artist, track } = request.params
    console.log(artist, track)

    getLyrics(artist, track)
    .then(lyrics => {
        //console.log(lyrics)
        return analyseLyrics(lyrics)
    }).then(analysis => {
        //console.log(analysis)
        response.status(200).send(analysis)
    })
}

module.exports = getLyricAnalysis
