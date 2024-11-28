import axios from 'axios'
import { api } from '@/utilities/api'

export const apiLogIn = (email: string, password: string) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${import.meta.env.VITE_API_ROOT_URL}/login`, { email, password })
      .then(res => {
        if (res.status !== 204) reject(new Error(`Unexpected login status: ${res.status}`))
        console.debug('Successfully logged in to the API: ', res)
        resolve(res)
      })
      .catch(e => reject(e))
  })

export const fetchCookie = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${import.meta.env.VITE_API_ROOT_URL}/sanctum/csrf-cookie`)
      .then(res => {
        if (res.status !== 204) reject(new Error(`Unexpected cookie status: ${res.status}`))
        console.debug('Cookie Fetched: ', res)
        resolve(res)
      })
      .catch(e => reject(e))
  })

export const fetchUserData = () =>
  new Promise((resolve, reject) => {
    console.debug('Fetching User Data')
    api('/user')
      .then(res => {
        console.debug('Successfully fetched User Data: ', res)
        resolve(res)
      })
      .catch(e => reject(e))
  })

export const logIn = async (email: string, password: string) =>
  new Promise((resolve, reject) => {
    console.debug('Fetching Cookie')
    fetchCookie()
      .then(() => {
        console.debug('Logging in')
        apiLogIn(email, password)
          .then(() => {
            fetchUserData()
              .then(res => {
                resolve(res)
              })
              .catch(e => reject(e))
          })
          .catch(e => reject(e))
      })
      .catch(e => reject(e))
  })
