import axios from './customize-axios';

const fetchAllUser = (page) => {
    // return axios.get("https://jsonplaceholder.typicode.com/posts");
    return axios.get(`/api/users?page=${page}`, {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    });
}

export { fetchAllUser };