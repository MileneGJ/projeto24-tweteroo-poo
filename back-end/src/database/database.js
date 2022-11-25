class Tweet {
  constructor({ username, tweet, avatar }) {
    this.username = username;
    this.tweet = tweet;
    this.avatar = avatar;
  }
}

class User {
  constructor({ username, avatar }) {
    this.username = username;
    this.avatar = avatar;
  }
}

class Table {
  constructor(object) {
    this.collection = [];
    this.object = object;
  }
  create(item) {
    this.collection.push(new this.object(item));
  }
  find() {
    return this.collection;
  }
}

class Tweets extends Table {
  constructor(collection, object) {
    super(collection, object);
    this.object = Tweet;
  }
  findByUser(username) {
    return this.collection.filter((t) => t.username === username);
  }
}

class Users extends Table {
  constructor(collection, object) {
    super(collection, object);
    this.object = User;
  }
  findByName(name) {
    return this.collection.find((user) => user.username === name);
  }
}

const client = {
  tweets: new Tweets(),
  users: new Users(),
};

export default client;
