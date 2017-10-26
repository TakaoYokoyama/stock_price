'use strict'

const request = require('request')
const url = 'https://www.google.com/finance/getprices?p=1Y&i=86400&x=TYO&q=7203'

const getPrice = () => {
  request.get(url, (err, res, body) => {
    if (!err && res.statusCode == 200) {
      console.log(body)
    } else {
      console.log(err)
    }
  })
}

getPrice()
