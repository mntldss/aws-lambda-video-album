const AWS = require("aws-sdk");
const Response = require("../responses");

const getVideo = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const { id } = event.pathParameters;

  try {
    const data = await dynamoDb
      .get({
        TableName: process.env.DB_TABLE_NAME,
        Key: { id },
      })
      .promise();

    return Response.send(200, data.Item);
  } catch (error) {
    console.log(error);
    return Response.send(500, error);
  }
};

module.exports = { getVideo };
