export default function validateSchema(schema) {
  return (req, res, next) => {
    switch (schema) {
      case "auth":
        const { username, avatar } = req.body;
        if (!username || !avatar) {
          return res.status(400).send("Todos os campos são obrigatórios!");
        }
        break;
      case "tweet":
        const { tweet, username: userTweet } = req.body;

        if (!userTweet || !tweet) {
          return res.status(400).send("Todos os campos são obrigatórios!");
        }
        break;
      default:
        break;
    }
    next();
  };
}
