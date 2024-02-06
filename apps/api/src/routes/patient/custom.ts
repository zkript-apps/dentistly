import { Request, Response } from "express";
import patient from "@/models/patient";
import { UNKNOWN_ERROR_OCCURRED } from "@/common/utils/constants";

export const approvePatient = async (req: Request, res: Response) => {
  try{
     const getPatient = await patient.find({
      _id: req.params.id,
      deletedAt: null,
     });
     console.log(getPatient.length)
    if (getPatient.length > 0) {
      try {
        const approvePatient = await patient.findByIdAndUpdate(
          req.params.id,
          {
            status: "Approved",
            updatedAt: Date.now(),
          },
          { new: true },
        );
        res.json(approvePatient);
      } catch (err: any) {
        const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
        res.json(message);
      }
    } else {
      res.status(400).json("record does not exist");
    }}
    catch(err){
      res.status(400).json("record does not exist");
    }
  };