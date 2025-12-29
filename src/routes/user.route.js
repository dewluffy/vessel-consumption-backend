import express from "express";
import * as userController from "../controllers/user.controller.js";
import { authenticate, authorize } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import { createUserSchema } from "../validators/user.schema.js";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorize("ADMIN", "MANAGER"),
  validate(createUserSchema),
  userController.createUser
);

export default router;
