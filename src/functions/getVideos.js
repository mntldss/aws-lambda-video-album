const AWS = require("aws-sdk");
const Response = require("../responses");

const getAllVideos = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  try {
    const data = await dynamoDb
      .scan({ TableName: process.env.DB_TABLE_NAME })
      .promise();
    return Response.send(200, data.Items);
  } catch (error) {
    console.log(error);
    return Response.send(500, error);
  }
};

module.exports = { getAllVideos };
