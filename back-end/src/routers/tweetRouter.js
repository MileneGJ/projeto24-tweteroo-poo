import { Router } from "express";
import * as tweetController from "../controllers/tweetControllers.js";
import validateSchema from "../middleware/validateSchema.js";

const tweetRouter = Router();

tweetRouter.post("/tweets", validateSchema("tweet"), tweetController.postTweet);
tweetRouter.get("/tweets/:username", tweetController.getTweetsFromUser);
tweetRouter.get("/tweets", tweetController.getAllTweets);

export default tweetRouter;
