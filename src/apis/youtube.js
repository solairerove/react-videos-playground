import axios from 'axios';

const KEY = 'AIzaSyBmhxVe8k7pX6JhwNslgu50iMwenUSfNKE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
