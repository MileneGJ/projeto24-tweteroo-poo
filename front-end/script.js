class Tweet {
  constructor({ tweet, avatar, username }) {
    this.tweet = tweet;
    this.avatar = avatar;
    this.username = username;
  }
  escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
  render() {
    return `
    <div class="tweet">
      <div class="avatar">
        <img src="${this.avatar}" />
      </div>
      <div class="content">
        <div class="user">
          @${this.username}
        </div>
        <div class="body">
          ${this.escapeHtml(this.tweet)}
        </div>
      </div>
    </div>
  `;
  }
}

const User = {
  username: "",
  signUp: function () {
    this.username = document.querySelector("#username").value;
    const avatar = document.querySelector("#picture").value;

    axios
      .post("http://localhost:5001/sign-up", {
        username: this.username,
        avatar,
      })
      .then(() => {
        document.querySelector(".btn-enviar-tweet").username = this.username;
        Tweets.load();
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao fazer cadastro! Consulte os logs.");
      });
  },
  postTweet: function () {
    const tweet = document.querySelector("#tweet").value;
    axios
      .post("http://localhost:5001/tweets", {
        username: this.username,
        tweet,
      })
      .then(() => {
        document.querySelector("#tweet").value = "";
        Tweets.load();
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao fazer tweet! Consulte os logs.");
      });
  },
};

const Tweets = {
  collection: [],
  render: function () {
    let tweetsHtml = "";
    if (this.collection.length > 0) {
      for (const tweet of this.collection) {
        tweetsHtml += tweet.render();
      }
    }
    console.log(tweetsHtml);
    document.querySelector(".tweets").innerHTML = tweetsHtml;
    document.querySelector(".pagina-inicial").classList.add("hidden");
    document.querySelector(".tweets-page").classList.remove("hidden");
  },
  load: async function () {
    const response = await axios.get("http://localhost:5001/tweets");
    this.collection = [];
    if (response.data.length > 0) {
      for (const item of response.data) {
        this.collection.push(new Tweet(item));
      }
    }
    this.render();
  },
};

document.querySelector(".btn-enviar").addEventListener("click", User.signUp);
document
  .querySelector(".btn-enviar-tweet")
  .addEventListener("click", User.postTweet);
