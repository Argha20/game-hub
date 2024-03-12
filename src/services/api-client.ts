import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'132156d1a8ca4a49b7d11181b44fd00c'
    }
})