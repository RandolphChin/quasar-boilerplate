import axios from 'axios';

const API_URL = 'http://localhost:8001/api/auth/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'signin', {
                username: user.username,
                password: user.password
            })
            .then(response => {
              // eslint-disable-next-line no-console
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    localStorage.setItem('token', JSON.stringify(response.data.token));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    register(user) {
        return axios.post(API_URL + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();
