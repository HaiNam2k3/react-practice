import axios from './customize-axios';

const fetchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`, {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    });
}

const postCreateUser = (name, job) => {
    return axios.post(("/api/users"), { name, job },
        {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        });
}

export { fetchAllUser, postCreateUser };