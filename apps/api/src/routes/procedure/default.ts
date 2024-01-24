import { Request, Response } from "express";
import procedure from "../../models/procedure";
import {
  REQUIRED_VALUE_EMPTY,
  UNKNOWN_ERROR_OCCURRED,
} from "../../common/utils/constants";

export const getAllProcedure = async (req: Request, res: Response) => {
  try {
    const procedureCount = await procedure.find().countDocuments();
    const getAllProcedure = await procedure
      .find({ deletedAt: null })
      .populate(["clinic"])
      .sort({ createdAt: -1 });
    if (getAllProcedure) {
      res.json({
        items: getAllProcedure,
        count: procedureCount,
      });
    } else {
      throw new Error("No procedure found");
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.json(500).json(message);
  }
};

export const getProcedure = async (req: Request, res: Response) => {
  try {
    const getProcedure = await procedure
      .findOne({ _id: req.params.id, deletedAt: null })
      .populate(["clinic"]);
    if (getProcedure) {
      res.json({
        item: getProcedure,
      });
    } else {
      throw new Error("Procedure not found!");
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.status(500).json(message);
  }
};

export const addProcedure = async (req: Request, res: Response) => {
  const { clinicId, procedureName, description } = req.body;

  if ((clinicId && procedureName) || description) {
    const existingProcedure = await procedure.findOne({ procedureName });

    if (existingProcedure) {
      return res.status(400).json("Procedure name already exists");
    }

    const newProcedure = new procedure({
      clinic: clinicId,
      procedureName,
      description,
      updatedAt: null,
      deletedAt: null,
    });

    try {
      const createTransactionRequest = await newProcedure.save();
      res.json({
        data: createTransactionRequest,
      });
    } catch (err: any) {
      const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
      res.json(message);
    }
  } else {
    throw new Error(REQUIRED_VALUE_EMPTY);
  }
};

export const updateProcedure = async (req: Request, res: Response) => {
  const getProcedure = await procedure.find({
    _id: req.params.id,
    deletedAt: { $exists: false },
  });

  if (getProcedure.length === 0) {
    try {
      const updateProcedure = await procedure.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
          updatedAt: Date.now(),
        },
        { new: true },
      );
      res.json(updateProcedure);
    } catch (err: any) {
      const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
      res.json(message);
    }
  } else {
    res.status(400).json("record procedure does not exist");
  }
};

export const deleteProcedure = async (req: Request, res: Response) => {
  try {
    const getProcedure = await procedure.find({
      _id: req.params.id,
      deletedAt: null,
    });
    if (getProcedure.length > 0) {
      const deleteProcedure = await procedure.findByIdAndUpdate(req.params.id, {
        $set: {
          deletedAt: Date.now(),
        },
      });
      res.json(deleteProcedure);
    } else {
      throw new Error("procedure is already deleted!");
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.status(500).json(message);
  }
};
