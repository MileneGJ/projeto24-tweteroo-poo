import tweetRepository from "../repositories/tweetRepository.js";
import userService from "./userServices.js";

const tweetServices = {
  tweetRepository,
  userService,
  addNewTweet: function (body) {
    const { tweet, username } = body;
    const { avatar } = this.userService.getUserByName(username);
    this.tweetRepository.createTweet({ username, tweet, avatar });
  },
  getTweetsFromUser: function (username) {
    return this.tweetRepository.findByUser(username);
  },
  reverseTweets: function (tweets) {
    return [...tweets].reverse();
  },
  getTweets: function (page) {
    if (page && page < 1) {
      throw { status: "BadRequest", message: "Informe uma página válida!" };
    }
    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;

    const tweets = this.tweetRepository.findAllTweets();
    if (tweets.length <= 10) {
      return this.reverseTweets(tweets);
    }
    return [...tweets].reverse().slice(start, end);
  },
};

export default tweetServices;
