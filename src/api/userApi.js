import domain from "../configs/domain";
import axios from 'axios';

const userApi = {

    getAllPosts() {
        return axios({
            url: `${domain.baseUrl}/all-posts`,
            method: 'GET'
        });
    },

    getPostBySlug(value) {
        return axios({
            url: `${domain.baseUrl}/post/${value}`,
            method: 'GET',
        })
    }

}

export default userApi;