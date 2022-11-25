import client from "../database/database.js";

const userRepository = {
  client,
  createUser: function (user) {
    this.client.users.create(user);
  },
  findByName: function (name) {
    return this.client.users.findByName(name);
  },
};

export default userRepository;
