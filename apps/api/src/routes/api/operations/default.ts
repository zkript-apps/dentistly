import { Request, Response } from "express";
import operations from "../../../models/operations";
import {
  REQUIRED_VALUE_EMPTY,
  UNKNOWN_ERROR_OCCURRED,
} from "../../../common/constants";

export const getOperationByClinicId = async (req: Request, res: Response) => {
  try {
    const operationsByClinicId = await operations
      .find({
        clinic: req.params.clinicId,
        deletedAt: null,
      })
      .populate(["clinic"]);

    if (operationsByClinicId && operationsByClinicId.length > 0) {
      res.json({
        items: operationsByClinicId,
      });
    } else {
      throw new Error("No operations found for the given clinic id!");
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.status(500).json({ message });
  }
};

export const getAllOperations = async (req: Request, res: Response) => {
  try {
    const operationCount = await operations.find().countDocuments();
    const getAllOperations = await operations
      .find({ deletedAt: null })
      .populate(["clinic"])
      .sort({ createdAt: -1 });
    if (getAllOperations) {
      res.json({
        items: getAllOperations,
        count: operationCount,
      });
    } else {
      throw new Error("No operations found!");
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.json(500).json(message);
  }
};

export const getOperation = async (req: Request, res: Response) => {
  try {
    const getOperation = await operations
      .findOne({ _id: req.params.id, deletedAt: null })
      .populate(["clinic"]);
    if (getOperation) {
      res.json({
        item: getOperation,
      });
    } else {
      throw new Error("Operation not found!");
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.status(500).json(message);
  }
};

export const addOperation = async (req: Request, res: Response) => {
  const { clinicId, actions, operationName } = req.body;

  try {
    if (!clinicId || !operationName || !actions) {
      throw new Error(REQUIRED_VALUE_EMPTY);
    }

    const existingOps = await operations.findOne({
      clinic: clinicId,
      operationName,
      actions,
    });

    if (existingOps) {
      throw new Error("Operation already exists");
    }

    const newOps = new operations({
      clinic: clinicId,
      operationName,
      actions,
      updatedAt: null,
      deletedAt: null,
    });
    const createTransactionRequest = await newOps.save();
    res.json({
      data: createTransactionRequest,
    });
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.json(message);
  }
};

export const updateOperation = async (req: Request, res: Response) => {
  const getOperation = await operations.find({
    _id: req.params.id,
    deletedAt: { $exists: false },
  });
  if (getOperation.length === 0) {
    try {
      const updateOperation = await operations.findByIdAndUpdate(
        req.params.id,
        { $set: req.body, updatedAt: Date.now() },
        { new: true },
      );
      res.json(updateOperation);
    } catch (err: any) {
      const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
      res.json(message);
    }
  } else {
    res.status(400).json("Record operation not found!");
  }
};

export const deleteOperation = async (req: Request, res: Response) => {
  try {
    const getOperation = await operations.find({
      _id: req.params.id,
      deletedAt: null,
    });
    if (getOperation.length > 0) {
      const deleteOperation = await operations.findByIdAndUpdate(
        req.params.id,
        { $set: { deletedAt: Date.now() } },
      );
      res.json(deleteOperation);
    } else {
      throw new Error("Operation is already exists");
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.status(500).json(message);
  }
};
