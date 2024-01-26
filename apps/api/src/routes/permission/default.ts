import { Request, Response } from "express";
import permission from "../../models/permission";
import {
  REQUIRED_VALUE_EMPTY,
  UNKNOWN_ERROR_OCCURRED,
} from "../../common/utils/constants";

export const getAllPermission = async (req: Request, res: Response) => {
  try {
    const permissionCount = await permission.find().countDocuments();
    // Update or add to the populate array collections if needed - (['clinic])
    const getAllPermission = await permission
      .find({ deletedAt: null })
      .populate(["clinic", "operation"])
      .sort({ createdAt: -1 });
    if (getAllPermission) {
      res.json({
        items: getAllPermission,
        count: permissionCount,
      });
    } else {
      throw new Error("No permission record found!");
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.status(500).json(message);
  }
};

export const getPermission = async (req: Request, res: Response) => {
  try {
    // Update or add to the populate array collections if needed - (['clinic])
    const getPermission = await permission
      .findOne({ _id: req.params.id, deletedAt: null })
      .populate(["clinic", "operation"]);
    if (getPermission) {
      res.json({
        item: getPermission,
      });
    } else {
      throw new Error("Permission not found!");
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.status(500).json(message);
  }
};

export const addPermission = async (req: Request, res: Response) => {
  const { operationId, clinicId } = req.body;
  if (clinicId && operationId) {
    const newPermission = new permission({
      clinic: clinicId,
      operation: operationId,
    });
    try {
      const createTransactionRequest = await newPermission.save();
      res.json({
        data: createTransactionRequest,
        message: "Success",
      });
    } catch (err: any) {
      const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
      res.json({
        message: message,
      });
    }
  } else {
    throw new Error(REQUIRED_VALUE_EMPTY);
  }
};

export const updatePermission = async (req: Request, res: Response) => {
  const getPermission = await permission.find({
    _id: req.params.id,
    deletedAt: { $exists: false },
  });
  if (getPermission.length === 0) {
    try {
      const updatePermission = await permission.findByIdAndUpdate(
        req.params.id,
        { $set: req.body, updatedAt: Date.now() },
        { new: true },
      );
      res.json(updatePermission);
    } catch (err: any) {
      const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
      res.json({
        message: message,
      });
    }
  } else {
    throw new Error("Record permission does not exists!");
  }
};

export const deletePermission = async (req: Request, res: Response) => {
  try {
    const getPermission = await permission.find({
      _id: req.params.id,
      deletedAt: null,
    });
    if (getPermission.length > 0) {
      const deletePermission = await permission.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            deletedAt: Date.now(),
          },
        },
      );
      res.json(deletePermission);
    } else {
      throw new Error("Permission is already deleted!");
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.json({
      message: message,
    });
  }
};
