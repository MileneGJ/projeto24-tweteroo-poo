import chalk from "chalk";
import app from "./app.js";

app.listen(5001, () => {
  console.log(chalk.bold.blue("Servidor funfando de boas!!!"));
});
