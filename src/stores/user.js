import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getJWT, getUserData } from "@/api"
import router from "@/router/index.js"

export const useUserStore = defineStore('user', () => {
  const user = ref({})

  const checkAuth = async () => {
    const tokenCorrect = await getUser()
    if (localStorage.getItem('token') === null || !tokenCorrect) {
      logout()
      return false
    }
    else return true
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user')
    router.push('/').then()
  }

  const login = async (email, password) => {
    await getJWT({
      username: email,
      password: password
    }).then( async () => {
      await getUser()
      await router.push('/app').then()
    }).catch( () => {
      alert('Wrong email or password')
    })

  }

  const getUser = async () => {
    try {
      if (localStorage.getItem('token')) {
        user.value = await getUserData()
        localStorage.setItem('user', JSON.stringify(user.value))
      }
      return true
    } catch (error) {
      return false;
    }
  }

  return { login, logout, checkAuth, user, getUser }
})