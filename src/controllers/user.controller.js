import * as userService from "../services/user.service.js";

export const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);

    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (err) {
    next(err);
  }
};
