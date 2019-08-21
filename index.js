const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.handler = (event, context) => {
  const params = {
    "Bucket": "lambda-film-talk-output",
    "Key": event.queryStringParameters.key  
  };
  
  s3.getObject(params, (err, data)=>{
    if(err) {
      context.done(err, null);
    } else {
      const response = {
        "statusCode": 200,
        "headers": {
          "Content-Type": "image/png"
        },
        "body": data.Body.toString('base64'),
        "isBase64Encoded": true
      };
      
      context.done(null, response);
    }
  });
  
};
