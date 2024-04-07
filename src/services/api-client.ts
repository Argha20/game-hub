import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[]; 
}

const axiosInstance = axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'132156d1a8ca4a49b7d11181b44fd00c'
    },
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
           .get<FetchResponse<T>>(this.endpoint, config)
           .then(res => res.data);
    }
}

export default APIClient;