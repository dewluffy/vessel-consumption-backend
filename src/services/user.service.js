import prisma from "../config/prisma.js";
import bcrypt from "bcryptjs";
import createError from "../utils/create-error.util.js";

export const createUser = async (data) => {
  const { email, name, role, password } = data;

  const exist = await prisma.user.findUnique({ where: { email } });
  if (exist) {
    throw createError(409, "Email already exists");
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      role,
      password: hash,
    },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      createdAt: true,
    },
  });

  return user;
};
