class Responses {
  static send(statusCode, body) {
    return {
      statusCode: statusCode,
      body: JSON.stringify(body),
    };
  }
}

module.exports = Responses;
