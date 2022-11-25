import * as userRepository from "../repositories/userRepository.js";

export function addNewUser(body) {
  userRepository.createUser(body);
}

export function getUserByName(name) {
  return userRepository.findByName(name);
}
