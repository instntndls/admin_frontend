import axios from 'axios'
import { AppConfig } from '@/config'

interface IJWTToken {
  username: string,
  password: string
}

async function getJWT(loginData: IJWTToken) {
  await axios.post(
    `${AppConfig.baseAPI}/jwt/tokens`,
    new URLSearchParams({
      'username': loginData.username,
      'password': loginData.password,
    }),
    {
      headers: {
        'accept': 'application/json'
      }
    }
  ).then((response) => {
    localStorage.setItem('token', response.data.access_token)
    localStorage.setItem('refresh_token', response.data.refresh_token)
  })
}

async function getUserData() {
  const response = await axios.get(
    `${AppConfig.baseAPI}/user/`,
    {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
  )
  return response.data
}

async function getAllInterests(hierarchy = false) {
  try {
    const response = await axios.get(`${AppConfig.baseAPI}/interests/all`, {
      params: {
        'with_hierarchy': hierarchy
      },
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    return response.data.interests; // Возвращает объект, который будет доступен в PromiseResult
  } catch (error) {
    console.error('Произошла ошибка при получении интересов:', error);
    throw error; // выбросить ошибку для дальнейшей обработки
  }
}

async function getLocales(id: number) {
  try {
    const response = await axios.get(`${AppConfig.baseAPI}/interests/locales`, {
      params: {
        'interest_id': id
      },
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    return response.data; // Возвращает объект, который будет доступен в PromiseResult
  } catch (error) {
    console.error('Произошла ошибка при получении локалей:', error);
    throw error; // выбросить ошибку для дальнейшей обработки
  }
}

async function getLanguages() {
  try {
    const response = await axios.get(`${AppConfig.baseAPI}/lang/all`, {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    return response.data; // Возвращает объект, который будет доступен в PromiseResult
  } catch (error) {
    console.error('Произошла ошибка при получении локалей:', error);
    throw error; // выбросить ошибку для дальнейшей обработки
  }
}

async function updateLocales(id: number, locales: any) {
  try {
    const response = await axios.patch(
        `${AppConfig.baseAPI}/interests/locales`, locales,
        {
          params: {
            'interest_id': id
          },
          headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
    return response.data;
  } catch (error) {
    console.error('Произошла ошибка при обновлении локалей:', error);
    throw error;
  }
}

async function updateParentId(id: number, parentId: number) {
  try {
    const response = await axios.patch(
        `${AppConfig.baseAPI}/interests/parent_id`, "",

        {
          params: {
            'interest_id': id,
            'parent_interest_id': parentId
          },
          headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
    return response.data;
  } catch (error) {
    console.error('Произошла ошибка при обновлении id родителя:', error);
    throw error;
  }
}

export { getJWT, getUserData, getAllInterests, getLocales, getLanguages, updateLocales, updateParentId}