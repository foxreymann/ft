'use strict'

const makeRequest = require('superagent')

const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
]

const fetchUrl = (url) => {
  return new Promise((resolve, reject) => {
    makeRequest(url)
    .then(res => {
      console.log(res)
      resolve(res)
    })
    .catch(err => {
      console.log(err)
      reject()
    })
  })
}

Promise.all(urls.map(fetchUrl))
.then(console.log)
