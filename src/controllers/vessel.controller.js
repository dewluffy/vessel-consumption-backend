import * as vesselService from "../services/vessel.service.js";

export const getAll = async (req, res, next) => {
  try {
    const vessels = await vesselService.getAll();
    res.json(vessels);
  } catch (err) {
    next(err);
  }
};

export const getById = async (req, res, next) => {
  try {
    const vessel = await vesselService.getById(+req.params.id);
    res.json(vessel);
  } catch (err) {
    next(err);
  }
};

export const create = async (req, res, next) => {
  try {
    const vessel = await vesselService.create(req.body);
    res.status(201).json(vessel);
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    const vessel = await vesselService.update(+req.params.id, req.body);
    res.json(vessel);
  } catch (err) {
    next(err);
  }
};

export const remove = async (req, res, next) => {
  try {
    await vesselService.remove(+req.params.id);
    res.json({ message: "Vessel deleted" });
  } catch (err) {
    next(err);
  }
};
