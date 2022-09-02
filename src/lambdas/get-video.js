const AWS = require("aws-sdk");
const middy = require("@middy/core");
const cors = require("@middy/http-cors");

const Response = require("../responses");

const getVideoById = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const { id } = event.pathParameters;

  try {
    const data = await dynamoDb
      .get({
        TableName: process.env.DB_TABLE_NAME,
        Key: { id },
      })
      .promise();
    
    if (!data.Item) {
      return Response.send(404,{message:"Video not found"});
    }

    return Response.send(200, data.Item);
  } catch (error) {
    console.log(error);
    return Response.send(500, error);
  }
};

module.exports = { getVideoById: middy(getVideoById).use(cors()) };
