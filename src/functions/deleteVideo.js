const AWS = require("aws-sdk");
const Response = require("../responses");

const deleteVideo = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  try {
    await dynamoDb
      .delete({
        TableName: process.env.DB_TABLE_NAME,
        Key: { id },
      })
      .promise();

    return Response.send(200, "Video deleted Successfuly");
  } catch (error) {
    console.log(error);
    return Response.send(500, error);
  }
};

module.exports = { deleteVideo };
