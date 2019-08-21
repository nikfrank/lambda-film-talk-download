const loader = require('./');

loader.handler({
  queryStringParameters: { key: '987189857646608.mp4' }
}, {
  done: (err, data)=> console.log(err, Object.keys(data))
})
