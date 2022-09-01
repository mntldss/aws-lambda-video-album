const { v4 } = require("uuid");

class Video {
  constructor(title, description, url, thumbnail) {
    this.id = v4();
    this.title = title;
    this.description = description;
    this.url = url;
    this.thumbnail = thumbnail;
    this.createdAt = new Date().toISOString();
  }
}

module.exports = Video;
