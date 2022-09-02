const AWS = require("aws-sdk");
const Response = require("../responses");

const deleteVideo = async (event) => {
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
    
    await dynamoDb
      .delete({
        TableName: process.env.DB_TABLE_NAME,
        Key: { id },
      })
      .promise();

    return Response.send(200, {message: "Video deleted Successfuly"});
  } catch (error) {
    console.log(error);
    return Response.send(500, error);
  }
};

module.exports = { deleteVideo };
