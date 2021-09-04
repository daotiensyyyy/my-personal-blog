import domain from "../configs/domain";
import axios from 'axios';

const adminApi = {
    login(data) {
        return axios({
            url: `${domain.baseUrl}/signin`,
            method: 'POST',
            data,
        })
    },
}

export default adminApi;