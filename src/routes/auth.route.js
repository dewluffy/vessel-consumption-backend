import express from "express";
import * as authController from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { loginSchema } from "../validators/auth.schema.js";

const router = express.Router();

router.post("/login", validate(loginSchema), authController.login);

export default router;
