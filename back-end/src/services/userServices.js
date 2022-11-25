import userRepository from "../repositories/userRepository.js";

const userServices = {
  userRepository,
  addNewUser: function (body) {
    console.log(this);
    this.userRepository.createUser(body);
  },
  getUserByName: function (name) {
    return this.userRepository.findByName(name);
  },
};

export default userServices;
