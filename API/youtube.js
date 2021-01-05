import axios from 'axios';
const KEY = 'AIzaSyALvO2hUFDad_8JhWh5Vrgs-rnqIx49VkI'; // mention your youtube API key here

let api = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

export let apiSearch = async (keywords) => {
    return await api.get('/search', {
        params: {
            q: keywords,
            type: 'video'
        }
    })
}

export let apiUrlParse = (url) => {
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
      return match[2];
    } 
    else {
      return false;
    }
}