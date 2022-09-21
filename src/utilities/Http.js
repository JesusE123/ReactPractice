import * as axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 1000,
});
instance.interceptors.request.use(function (config) {
    const getStored = localStorage.getItem('login')
    if(getStored){
    config.headers.common['Autorization'] = getStored;
    }
    return config
});
const Http = {
    get: (url) => {
        return instance.get(url);
    },
    post: (url, body) => {
        return instance.post(url, body);
    }

}

export { Http }