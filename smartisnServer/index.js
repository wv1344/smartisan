const superagent = require('superagent');

const express = require('express')
const app = express()

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

let NowDate = new Date().getTime();
console.log(NowDate)
const baseUrl = `https://www.smartisan.com/www_json/mobileIndex.json?_v=${NowDate}`

const getUrl = function (){
  return new Promise((resolve,reject) => {
    superagent.get(baseUrl).end((err,res) =>{
      if(err){
        console.log(err)
        reject(err)
      }
      let Url = ''
      Url = JSON.parse(res.text).uri
      console.log(Url)
      resolve(Url)
    })
  })
}

const getBanner = function (url) {
  return new Promise((resolve,reject) => {
    superagent.get(url).end((err,res) => {
      if(err){
        console.log(err)
        reject(err)
      }
      // console.log(res)
      let secondData = JSON.parse(res.text)
      // console.log(secondData.banner.dataList)
      resolve(secondData.banner.dataList)
    })
  })
}

const getHotGoods = function (url){
  return new Promise((resolve,reject) => {
    superagent.get(url).end((err,res) => {
      if(err){
        console.log(err)
        reject(err)
      }
      // https://shopapi.smartisan.com/product/skus?ids=  &with_stock=true&with_spu=true
      let idd = JSON.parse(res.text).floors[0].dataList
      let id = idd.join(',')
      superagent.get(`https://shopapi.smartisan.com/product/skus?ids=${id}&with_stock=true&with_spu=true`).end((err,res) => {
       
        let tt = JSON.parse(res.text)
        // console.log(tt)
        resolve(tt.data.list)
      })
      // console.log(id)
      // resolve(hotId.floors)
    })
  })
}

const getClothBag = function(url){
  return new Promise((resolve,reject) => {
    superagent.get(url).end((err,res) => {
      if(err){
        console.log(err)
        reject(err)
      }
      let idd = JSON.parse(res.text).floors[1].dataList
      let id = idd.join(',')
      superagent.get(`https://shopapi.smartisan.com/product/skus?ids=${id}&with_stock=true&with_spu=true`).end((err,res) => {
        let tt = JSON.parse(res.text)
        // console.log(tt)
        resolve(tt.data.list)
      })
    })
  })
}

const getBreath = function(url){
  return new Promise((resolve,reject) => {
    superagent.get(url).end((err,res) => {
      if(err){
        console.log(err)
        reject(err)
      }
      let idd = JSON.parse(res.text).floors[2].dataList
      let id = idd.join(',')
      superagent.get(`https://shopapi.smartisan.com/product/skus?ids=${id}&with_stock=true&with_spu=true`).end((err,res) => {
        let tt = JSON.parse(res.text)
        // console.log(tt)
        resolve(tt.data.list)
      })
    })
  })
}

const getFittings = function(url){
  return new Promise((resolve,reject) => {
    superagent.get(url).end((err,res) => {
      if(err){
        console.log(err)
        reject(err)
      }
      let idd = JSON.parse(res.text).floors[3].dataList
      let id = idd.join(',')
      superagent.get(`https://shopapi.smartisan.com/product/skus?ids=${id}&with_stock=true&with_spu=true`).end((err,res) => {
        let tt = JSON.parse(res.text)
        // console.log(tt)
        resolve(tt.data.list)
      })
    })
  })
}

const getNutsparts = function(url){
  return new Promise((resolve,reject) => {
    superagent.get(url).end((err,res) => {
      if(err){
        console.log(err)
        reject(err)
      }
      let idd = JSON.parse(res.text).floors[4].dataList
      let id = idd.join(',')
      superagent.get(`https://shopapi.smartisan.com/product/skus?ids=${id}&with_stock=true&with_spu=true`).end((err,res) => {
        let tt = JSON.parse(res.text)
        // console.log(tt)
        resolve(tt.data.list)
      })
    })
  })
}

app.get('/banner', (req, res) => {
  getUrl().then((url)=>{getBanner(url).then((sd) => {res.send(sd)})
  })
})

app.get('/hotgoods',(req,res) => {
  getUrl().then((url) => {getHotGoods(url).then((sd) =>{ res.send(sd)})})
})

app.get('/clothbag',(req,res) => {
  getUrl().then((url) => {getClothBag(url).then((sd) =>{ res.send(sd)})})
})

app.get('/breath',(req,res) => {
  getUrl().then((url) => {getBreath(url).then((sd) =>{ res.send(sd)})})
})

app.get('/fittings',(req,res) => {
  getUrl().then((url) => {getFittings(url).then((sd) =>{ res.send(sd)})})
})

app.get('/nutsparts',(req,res) => {
  getUrl().then((url) => {getNutsparts(url).then((sd) =>{ res.send(sd)})})
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))