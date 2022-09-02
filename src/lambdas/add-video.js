const AWS = require("aws-sdk");
const middy = require("@middy/core");
const jsonBodyParser = require("@middy/http-json-body-parser");
const httpErrorHandler = require("@middy/http-error-handler");

const Video = require("../classes/Video");
const Response = require("../responses");


const addVideo = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const { thumbnail, title, description, url } = event.body;

  const newVideo = new Video(title, description, url, thumbnail);

  try {
    await dynamoDb
      .put({
        TableName: process.env.DB_TABLE_NAME,
        Item: newVideo,
      })
      .promise();

    return Response.send(200, newVideo);
  } catch (error) {
    console.log(error);
    return Response.send(500, error);
  }
};

module.exports = {
  addVideo: middy(addVideo)
    .use(jsonBodyParser())
    .use(httpErrorHandler()),
};
