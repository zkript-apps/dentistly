import { Request, Response } from "express";
import {
  REQUIRED_VALUE_EMPTY,
  UNKNOWN_ERROR_OCCURRED,
} from "../../common/utils/constants";
import user from "../../models/user";

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const userCount = await user.find().countDocuments();
    const getAllUser = await user
      .find()
      .populate(["clinic"])
      .sort({ createdAt: -1 });
    res.json({
      items: getAllUser,
      count: userCount,
    });
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.status(500).json(message);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const getUser = await user
      .findOne({ _id: req.params.id })
      .populate(["clinic"]);
    res.json({
      item: getUser,
    });
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.status(500).json(message);
  }
};

export const addUser = async (req: Request, res: Response) => {
  const { clinicId, username, email, password, role } = req.body;
  if (username && email && password) {
    const newUser = new user({
      clinic: clinicId,
      username,
      email,
      role,
      password,
      updatedAt: null,
      deletedAt: null,
    });
    try {
      const createTransactionRequest = await newUser.save();
      res.json({
        data: createTransactionRequest,
      });
    } catch (err: any) {
      const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
      res.json(message);
    }
  } else {
    res.status(400).json(REQUIRED_VALUE_EMPTY);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const getUser = await user.find({
    _id: req.params.id,
    deletedAt: { $exists: false },
  });

  if (getUser.length === 0) {
    try {
      const updateUser = await user.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
          updatedAt: Date.now(),
        },
        { new: true },
      );
      res.json(updateUser);
    } catch (err: any) {
      const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
      res.json(message);
    }
  } else {
    res.status(400).json("record does not exist");
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const getUser = await user.find({
      _id: req.params.id,
      deletedAt: null,
    });
    if (getUser.length > 0) {
      const deleteUser = await user.findByIdAndUpdate(req.params.id, {
        $set: {
          deletedAt: Date.now(),
        },
      });
      res.json(deleteUser);
    } else {
      throw new Error("User is already deleted!");
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.status(500).json(message);
  }
};
