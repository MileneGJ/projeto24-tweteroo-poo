import * as tweetService from "../services/tweetServices.js";

export function postTweet(req, res) {
  tweetService.addNewTweet(req.body);
  res.status(201).send("OK, seu tweet foi criado");
}

export function getTweetsFromUser(req, res) {
  const { username } = req.params;
  const tweetsDoUsuario = tweetService.getTweetsFromUser(username);
  res.status(200).send(tweetsDoUsuario);
}

export function getAllTweets(req, res) {
  const { page } = req.query;
  const tweets = tweetService.getTweets(page);
  res.status(200).send(tweets);
}
