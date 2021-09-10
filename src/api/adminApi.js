import domain from "../configs/domain";
import axios from 'axios';
axios.defaults.withCredentials = true
const adminApi = {
    login(data) {
        return axios({
            url: `${domain.baseUrl}/signin`,
            method: 'POST',
            data,
            withCredentials: true,
        })
    },

    logout() {
        return axios({
            url: `${domain.baseUrl}/signout`,
            method: 'POST',
            withCredentials: true,
        })
    },

    createPost(data) {
        return axios({
            url: `${domain.adminUrl}/create-post`,
            method: 'POST',
            data,
            // headers: {
            //     Authorization: 'Bearer ' + localStorage.getItem("accessToken"),
            // },
            withCredentials: true,
        })
    }
}

export default adminApi;