import axios from './axios';

export const signup = async (form) => {
    try {
        return await axios.post('/signup', form);
    } catch(error) {
        return error
    }
};

export const login = async (form) => {
    try {
        return await axios.post('/users', form);
    } catch(error) {
        return error
    }
}

export const getMe = async (token) => {
    try {
        return await axios.get('/me', {
            headers: { Authorization: token }
        });
    } catch(error) {
        return error.response
    }
}

export const logout = async () => {
    try {
        return await axios.delete('/logout');
    } catch(error) {
        return error.response
    }
}