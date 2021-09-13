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
            withCredentials: true,
        })
    },

    deletePost(value) {
        return axios({
            url: `${domain.adminUrl}/post/${value}/delete`,
            method: 'DELETE',
            withCredentials: true,
        })
    }
}

export default adminApi;