const usuarios = [];

export function createUser(user) {
  console.log(usuarios);
  usuarios.push(user);
}

export function findByName(name) {
  console.log(usuarios);
  return usuarios.find((user) => user.username === name);
}
