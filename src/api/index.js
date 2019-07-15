import Vue from 'vue'
import axios from 'axios'

const vue = new Vue()

// axios配置
axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://localhost:3000'


export function fetchGet(url, id) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: {
        'id':id
      }
    })
    .then(response => {
      resolve(response)
    }, err => {
      reject(err)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export default {
    Banner(){
      return fetchGet('/banner')
    },
    getHotGoods(){
      return fetchGet('/hotgoods')
    },
    getClothBag(){
      return fetchGet('/clothbag')
    },
    getBreath(){
      return fetchGet('/breath')
    },
    getFittings(){
      return fetchGet('/fittings')
    },
    getNutsparts(){
      return fetchGet('/nutsparts')
    },
    getDetail(id){
      return fetchGet('/detail',id)
    }
}