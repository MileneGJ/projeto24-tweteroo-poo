import tweetServices from "../services/tweetServices.js";

const tweetController = {
  postTweet: function (req, res) {
    tweetServices.addNewTweet(req.body);
    res.status(201).send("OK, seu tweet foi criado");
  },
  getTweetsFromUser: function (req, res) {
    const { username } = req.params;
    const tweetsDoUsuario = tweetServices.getTweetsFromUser(username);
    res.status(200).send(tweetsDoUsuario);
  },
  getAllTweets: function (req, res) {
    const { page } = req.query;
    const tweets = tweetServices.getTweets(page);
    res.status(200).send(tweets);
  },
};

export default tweetController;
