import { Router } from "express";
import { registerUser } from "../controllers/register.controller.js";
import {upload} from "../middlewares/multer.middleware.js"

const router = Router();

router.route("/register").post(
    upload.fields({}),
    registerUser
);




export default router