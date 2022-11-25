import * as tweetRepository from "../repositories/tweetRepository.js";
import * as userService from "./userServices.js";

export function addNewTweet(body) {
  const { tweet, username } = body;
  const { avatar } = userService.getUserByName(username);
  tweetRepository.createTweet({ username, tweet, avatar });
}

export function getTweetsFromUser(username) {
  return tweetRepository.findByUser(username);
}

export function getTweets(page) {
  if (page && page < 1) {
    throw { status: "BadRequest", message: "Informe uma página válida!" };
  }
  const limite = 10;
  const start = (page - 1) * limite;
  const end = page * limite;

  const tweets = tweetRepository.findAllTweets();
  if (tweets.length <= 10) {
    return reverseTweets(tweets);
  }
  return [...tweets].reverse().slice(start, end);
}

function reverseTweets(tweets) {
  return [...tweets].reverse();
}
