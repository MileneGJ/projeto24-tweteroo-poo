export default function errorHandler(error, req, res, next) {
  switch (error.status) {
    case "BadRequest":
      res.status(400).send(error.message);
      break;
    case "NotFound":
      res.status(404).send(error.message);
      break;
    default:
      console.log(error);
      res.status(500).send("Server encountered an error");
      break;
  }
}
