import * as authService from "../services/userServices.js";

export function signup(req, res) {
  authService.addNewUser(req.body);
  res.status(200).send("OK deu tudo certo");
}
