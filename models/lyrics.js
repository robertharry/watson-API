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


module.exports = getLyrics