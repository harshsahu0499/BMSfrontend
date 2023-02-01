import axios from './axios';


export const getUsers = async (token) => {
    try {
        return await axios.get('/users', {
            headers: { Authorization: token }
        });
    } catch (error) {
        return error.response
    }
}

export const postUsers = async (token, user) => {
    try {
        return await axios.post('/users', user, {
            headers: { Authorization: token }
        });
    } catch (error) {
        return error.response
    }

}