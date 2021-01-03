import axios from 'axios';
const KEY = 'AIzaSyALvO2hUFDad_8JhWh5Vrgs-rnqIx49VkI'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})