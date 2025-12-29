import prisma from "../config/prisma.js";
import createError from "../utils/create-error.util.js";

export const getAll = () => {
  return prisma.vessel.findMany({
    where: { active: true },
    orderBy: { name: "asc" },
  });
};

export const getById = async (id) => {
  const vessel = await prisma.vessel.findUnique({ where: { id } });
  if (!vessel) throw createError(404, "Vessel not found");
  return vessel;
};

export const create = async (data) => {
  return prisma.vessel.create({ data });
};

export const update = async (id, data) => {
  return prisma.vessel.update({ where: { id }, data });
};

export const remove = async (id) => {
  return prisma.vessel.update({
    where: { id },
    data: { active: false },
  });
};
