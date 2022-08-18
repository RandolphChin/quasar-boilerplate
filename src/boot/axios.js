import {boot} from 'quasar/wrappers'
import axios from 'axios'
// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
console.log('*********************')
console.log('*********************')
console.log('process.env.VUE_APP_BASE_API=', process.env.VUE_APP_BASE_API)
console.log('*********************')
const api = axios.create({baseURL: process.env.VUE_APP_BASE_API})



export default boot(({app}) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API

  // request拦截器
  api.interceptors.request.use(config => {
    // eslint-disable-next-line dot-notation
    // config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    config.headers['Content-Type'] = 'application/json'
    return config
  }, error => {
    Promise.reject(error)
  })

// Add a response interceptor
  api.interceptors.response.use(function (response) {
    return response
  }, function(error) {
    if (error.response.status === 401) {
      console.log('enter .... 401');
      // store.dispatch('logout')
      // router.push("/login")
      return Promise.reject(error)
    }
    if (error.response.status === 403) {
      console.log('enter .... 403');
      // store.dispatch('logout')
      // router.push('/login')
    }
    return Promise.reject(error)
  })

})

export {api}
