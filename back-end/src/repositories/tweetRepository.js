const tweets = [];

export function createTweet(tweet) {
  tweets.push(tweet);
}

export function findByUser(username) {
  return tweets.filter((t) => t.username === username);
}

export function findAllTweets() {
  console.log(tweets);
  return tweets;
}
