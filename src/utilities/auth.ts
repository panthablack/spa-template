import axios from 'axios'

// Config // ***************************************************************************************
axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true
// *************************************************************************************************

export const logIn = async (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${import.meta.env.VITE_API_ROOT_URL}/sanctum/csrf-cookie`)
      .then(cookieRes => {
        console.log('logging in: ', cookieRes)
        axios
          .post(`${import.meta.env.VITE_API_ROOT_URL}/login`, { email, password })
          .then(res => resolve(res))
          .catch(e => reject(e))
      })
      .catch(e => reject(e))
  })
}
