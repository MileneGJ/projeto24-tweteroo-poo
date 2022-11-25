import { Router } from "express";
import * as authController from "../controllers/authControllers.js";
import validateSchema from "../middleware/validateSchema.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchema("auth"), authController.signup);

export default authRouter;
