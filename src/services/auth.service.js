import axios from './request';

class AuthService {
    login(user) {
        return axios({
          url: 'api/auth/signin',
          method: 'post',
          data: {
            username: user.username,
            password: user.password
          }
        }).then(response => {
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
