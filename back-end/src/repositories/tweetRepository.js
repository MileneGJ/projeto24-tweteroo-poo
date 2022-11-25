import client from "../database/database.js";

const tweetRepository = {
  client,
  createTweet: function (tweet) {
    this.client.tweets.create(tweet);
  },
  findByUser: function (username) {
    return this.client.tweets.findByUser(username);
  },
  findAllTweets: function () {
    return this.client.tweets.find();
  },
};

export default tweetRepository;
