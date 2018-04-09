import { getAxiosPromiseObject } from './axios'

/*
api对象中所有子对象不能重名，
getAxiosPromiseObject会返回，以接口对象名命名的函数
该函数返回axios生成的promise对象
在组件中引入后，直接通过对象名调用
*/
const api = {
  post: {
    login: '/user/login',
    logout: '/user/logout'
  },
  get: {
    getInfo: '/user/info'
  }
}

export default getAxiosPromiseObject(api)
