import Axios from "axios";
export function request(config) {
    const instance = Axios.create({
        baseURL: 'http://123.207.32.32:8000/api/hy',
        timeout: 60000,
    });

    instance.interceptors.request.use(config => {
        return config;
    }, error => {
        console.log(error);
    });

    instance.interceptors.response.use(res => {
        return res.data;
    }, error => {
        console.log(error);
    });

    return instance(config);
}
