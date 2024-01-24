import { Request, Response } from "express";
import { ResponseService } from "../../common/services/response";
import clinicBranch from "../../models/clinicBranch";
import clinic from "../../models/clinic";
import { REQUIRED_VALUE_EMPTY, UNKNOWN_ERROR_OCCURRED } from "@/common/utils/constants";

const response = new ResponseService();
export const getAllBranches = async (req: Request, res: Response) => {
  try {
    const allBranches = await clinicBranch
      .find({ deletedAt: null })
      .sort({ createdAt: -1 });
    const branchesCount = await clinicBranch
      .find({ deletedAt: null })
      .countDocuments();
    if (branchesCount !== 0) {
      res.json(
        response.success({
          items: allBranches,
          allItemCount: branchesCount,
          message: "",
        }),
      );
    } else {
      res.json(
        response.success({
          items: allBranches,
          allItemCount: branchesCount,
          message: "No clinic branches found",
        }),
      );
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.json(response.error({ message: message }));
  }
};

export const getBranchesByClinic = async (req: Request, res: Response) => {
  const clinicId = req.params.clinicId;
  try {
    const getClinic = await clinic.findOne({ _id: clinicId, deletedAt: null });
    if (!getClinic) {
      return res.json(response.error({ message: "Clinic not found" }));
    }
    const branchByClinic = await clinicBranch
      .find({ clinic: clinicId, deletedAt: null })
      .sort({ createdAt: -1 });
    const countBranches = await clinicBranch
      .find({ clinic: clinicId, deletedAt: null })
      .countDocuments();
    if (countBranches !== 0) {
      res.json(
        response.success({
          items: branchByClinic,
          allItemCount: countBranches,
          message: "",
        }),
      );
    } else {
      res.json(
        response.success({
          items: branchByClinic,
          allItemCount: countBranches,
          message: "No branches found",
        }),
      );
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.json(response.error({ message: message }));
  }
};

export const getBranchClinic = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const getBranch = await clinicBranch.findOne({ _id: id, deletedAt: null });
    if (getBranch) {
      return res.json(
        response.success({
          item: getBranch,
          allItemCount: 1,
          message: "",
        }),
      );
    } else {
      return res.json(response.error({ message: "Branch not found" }));
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.json(response.error({ message: message }));
  }
};

export const addBranch = async (req: Request, res: Response) => {
  const clinicId = req.params.clinicId;
  const { branchName, address } = req.body;
  try {
    const getClinic = await clinic.findOne({ _id: clinicId, deletedAt: null });
    if (!getClinic) {
      return res.json(response.error({ message: "Clinic not found" }));
    }
    if (branchName && address) {
      const newBranch = new clinicBranch({
        branchName: branchName,
        address: address,
        clinic: clinicId,
        deletedAt: null,
      });
      const createBranch = await newBranch.save();
      res.json(
        response.success({
          item: createBranch,
          allItemCount: 1,
          message: "Branch successfully created",
        }),
      );
    } else {
      res.json(response.error({ message: REQUIRED_VALUE_EMPTY }));
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.json(response.error({ message: message }));
  }
};

export const updateBranch = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { branchName, address } = req.body;
  try {
    const getBranch = await clinicBranch.findOne({ _id: id, deletedAt: null });
    if (!getBranch) {
      console.log(getBranch);
      return res.json(response.error({ message: "Branch not found" }));
    }
    if (branchName || address) {
      const updateBranch = await clinicBranch.findByIdAndUpdate(
        id,
        {
          $set: req.body,
          updatedAt: Date.now(),
        },
        { new: true },
      );
      res.json(
        response.success({
          item: updateBranch as object,
          allItemCount: 1,
          message: "Branch successfully updated",
        }),
      );
    } else {
      res.json(response.error({ message: REQUIRED_VALUE_EMPTY }));
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.json(response.error({ message: message }));
  }
};

export const deleteBranch = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const getBranch = await clinicBranch.findOne({ _id: id, deletedAt: null });
    if (!getBranch) {
      return res.json(
        response.error({ message: "Branch already deleted or not found" }),
      );
    }
    const deleteBranch = await clinicBranch.findByIdAndUpdate(id, {
      deletedAt: Date.now(),
    });
    res.json(
      response.success({
        item: deleteBranch as object,
        allItemCount: 1,
        message: "Branch successfully deleted",
      }),
    );
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.json(response.error({ message: message }));
  }
};
