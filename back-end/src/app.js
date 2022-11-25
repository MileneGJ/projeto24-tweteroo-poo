import cors from "cors";
import express, { json } from "express";
import errorHandler from "./middleware/errorHandler.js";
import router from "./routers/index.js";

const app = express();

app.use(cors());
app.use(json());

app.use(router);
app.use(errorHandler);

export default app;
