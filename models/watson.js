const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const { iam_apikey, watsonUrl } = require('../config')
const axios = require('axios');

const getLyrics = (artist, track) => {
    return axios.get(`https://api.lyrics.ovh/v1/${artist}/${track}`)
        .then((response) => {
            return response.data.lyrics
        })
        .catch((error) => {
            console.log(error)
        })

}


function analyseLyrics(lyrics) {
    toneAnalyzer = new ToneAnalyzerV3({
        version: '2017-09-21',
        iam_apikey,
        url: watsonUrl
    });

    const toneParams = {
        tone_input: { text: lyrics },
        content_type: 'application/json',
    };

    return toneAnalyzer.tone(toneParams)
        .then(toneAnalysis => {
            return JSON.stringify(toneAnalysis, null, 2);
        })
        .catch(err => {
            console.log('error:', err);
        });
}




module.exports = { getLyrics, analyseLyrics }