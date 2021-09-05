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

    createPost(data) {
        return axios({
            url: `${domain.adminUrl}/create-post`,
            method: 'POST',
            data,
            headers: {
                "x-access-token": localStorage.getItem("accessToken"),
            },
        })
    }
}

export default adminApi;