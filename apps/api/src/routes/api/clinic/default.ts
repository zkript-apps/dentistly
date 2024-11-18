import { Request, Response } from "express";
import clinic from "../../../models/clinic";
import {
  REQUIRED_VALUE_EMPTY,
  UNKNOWN_ERROR_OCCURRED,
} from "../../../common/constants";

export const getAllClinic = async (req: Request, res: Response) => {
  try {
    const clinicCount = await clinic.find().countDocuments();
    const getAllClinic = await clinic
      .find({ deletedAt: null })
      .sort({ createdAt: -1 });
    if (getAllClinic) {
      res.json({
        items: getAllClinic,
        count: clinicCount,
      });
    } else {
      throw new Error("No records found in for clinics!");
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.status(500).json(message);
  }
};

export const getClinic = async (req: Request, res: Response) => {
  try {
    const getClinic = await clinic.findOne({
      _id: req.params.id,
      deletedAt: null,
    });
    if (getClinic) {
      res.json({
        item: getClinic,
      });
    } else {
      throw new Error("Clinic not found!");
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.status(500).json(message);
  }
};

export const addClinic = async (req: Request, res: Response) => {
  const { clinicName, address, dayOff } = req.body;
  if (clinicName && address && dayOff) {
    const newClinic = new clinic({
      clinicName,
      address,
      dayOff,
      updatedAt: null,
      deletedAt: null,
    });
    try {
      const createTransactionRequest = await newClinic.save();
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

export const updateClinic = async (req: Request, res: Response) => {
  const getClinic = await clinic.find({
    _id: req.params.id,
    deletedAt: { $exists: false },
  });
  if (getClinic.length === 0) {
    try {
      const updateClinic = await clinic.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
          updatedAt: Date.now(),
        },
        { new: true },
      );
      res.json(updateClinic);
    } catch (err: any) {
      const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
      res.json(message);
    }
  } else {
    res.status(400).json("record does not exists!");
  }
};

export const deleteClinic = async (req: Request, res: Response) => {
  try {
    const getClinic = await clinic.findOne({
      _id: req.params.id,
      deletedAt: null,
    });
    if (getClinic) {
      const deleteClinic = await clinic.findByIdAndUpdate(req.params.id, {
        $set: {
          deletedAt: Date.now(),
        },
      });
      res.json(deleteClinic);
    } else {
      throw new Error("Clinic is already deleted!");
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.status(500).json(message);
  }
};
