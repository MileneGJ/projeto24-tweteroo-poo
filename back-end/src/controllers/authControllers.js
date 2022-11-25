import userServices from "../services/userServices.js";

const authController = {
  signUp(req, res) {
    userServices.addNewUser(req.body);
    res.status(200).send("OK deu tudo certo");
  },
};

export default authController;
