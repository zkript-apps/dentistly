import { Request, Response } from "express";
import patient from "@/models/patient";
import { REQUIRED_VALUE_EMPTY, UNKNOWN_ERROR_OCCURRED } from "@/common/utils/constants";

export const getAllPatients = async (req: Request, res: Response) => {
  try {
    const patientCount = await patient.find().countDocuments();
    const getAllPatients = await patient
      .find({ deletedAt: null })
      .populate(["clinic"])
      .sort({ createdAt: -1 });
    if (getAllPatients) {
      res.json({
        items: getAllPatients,
        count: patientCount,
      });
    } else {
      throw new Error("No records found for the patient!");
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.status(500).json(message);
  }
};



export const getPatient = async (req: Request, res: Response) => {
  try {
    const getPatient = await patient
      .findOne({ _id: req.params.id, deletedAt: null })
      .populate(["clinic"]);
    if (getPatient) {
      res.json({
        item: getPatient,
      });
    } else {
      throw new Error("Patient not found!");
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.status(500).json(message);
  }
};

export const addPatient = async (req: Request, res: Response) => {
  const {
    clinicId,
    lastName,
    firstName,
    middleName,
    DoB,
    age,
    gender,
    address,
    status,
    relativesContactInfo,
  } = req.body;
  if (
    clinicId &&
    lastName &&
    firstName &&
    middleName &&
    DoB &&
    age &&
    gender &&
    address &&
    status &&
    relativesContactInfo
  ) {
    const newPatient = new patient({
      clinic: clinicId,
      lastName,
      firstName,
      middleName,
      DoB,
      age,
      gender,
      address,
      status,
      relativesContactInfo,
      updatedAt: null,
      deletedAt: null,
    });
    try {
      const createTransactionRequest = await newPatient.save();
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

export const updatePatient = async (req: Request, res: Response) => {
  const getPatient = await patient.find({
    _id: req.params.id,
    deletedAt: { $exists: false },
  });

  if (getPatient.length === 0) {
    try {
      const updatePatient = await patient.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
          updatedAt: Date.now(),
        },
        { new: true },
      );
      res.json(updatePatient);
    } catch (err: any) {
      const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
      res.json(message);
    }
  } else {
    res.status(400).json("record does not exist");
  }
};

export const deletePatient = async (req: Request, res: Response) => {
  try {
    const getPatient = await patient.findOne({
      _id: req.params.id,
      deletedAt: null,
    });
    if (getPatient) {
      const deletePatient = await patient.findByIdAndUpdate(req.params.id, {
        $set: {
          deletedAt: Date.now(),
        },
      });
      res.json(deletePatient);
    } else {
      throw new Error("Patient is already deleted!");
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.status(500).json(message);
  }
};
