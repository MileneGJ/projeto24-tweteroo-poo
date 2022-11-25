import { Router } from "express";
import authController from "../controllers/authControllers.js";
import validateSchema from "../middleware/validateSchema.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchema("auth"), authController.signUp);

export default authRouter;
