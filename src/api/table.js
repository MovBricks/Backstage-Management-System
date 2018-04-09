import { getAxiosPromiseObject } from './axios'

const api = {
  get: {
    getList: '/table/list'
  }
}

export default getAxiosPromiseObject(api)
