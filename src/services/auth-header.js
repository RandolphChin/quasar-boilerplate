export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));
  let token = JSON.parse(localStorage.getItem('token'));

  if (user && token) {
    return { Authorization: token}; // for Spring Boot back-end
    // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}
