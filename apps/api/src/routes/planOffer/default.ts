import { ResponseService } from "@/common/services/response";
import {
  API_ROOT,
  REQUIRED_VALUE_EMPTY,
  UNKNOWN_ERROR_OCCURRED,
} from "@/common/utils/constants";
import planOffers, { actionsEnum } from "@/models/planOffers";
import { strict } from "assert";
import { Request, Response } from "express";
import mongoose from "mongoose";

const response = new ResponseService();

export const getAllOffers = async (req: Request, res: Response) => {
  try {
    const getAllPlanOffers = await planOffers
      .find({ deletedAt: null })
      .sort({ createdAt: -1 });
    const planOffersCount = await planOffers
      .find({ deletedAt: null })
      .countDocuments();
    if (planOffersCount !== 0) {
      res.json(
        response.success({
          items: getAllPlanOffers,
          allItemCount: planOffersCount,
          message: "",
        }),
      );
    } else {
      res.json(
        response.success({
          items: getAllPlanOffers,
          allItemCount: planOffersCount,
          message: "No Plan offers found yet.",
        }),
      );
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.json(response.error({ message: message }));
  }
};

export const getOffersByTable = async (req: Request, res: Response) => {
  const tableName = req.params.tableName;
  try {
    const getOfferByTableName = await planOffers
      .find({
        table: tableName,
        deletedAt: null,
      })
      .sort({ createdAt: -1 });
    const offersCount = await planOffers
      .find({
        table: tableName,
        deletedAt: null,
      })
      .countDocuments();
    if (offersCount !== 0) {
      res.json(
        response.success({
          items: getOfferByTableName,
          allItemCount: offersCount,
          message: "",
        }),
      );
    } else {
      res.json(
        response.success({
          items: getOfferByTableName,
          allItemCount: offersCount,
          message: "No plan offers found",
        }),
      );
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.json(response.error({ message: message }));
  }
};

export const getOffer = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const getOfferById = await planOffers.findOne({
      _id: id,
      deletedAt: null,
    });
    if (!getOfferById) {
      return res.json(response.error({ message: "Plan offers not found" }));
    }
    res.json(
      response.success({
        item: getOfferById,
        allItemCount: 1,
        message: "",
      }),
    );
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.json(response.error({ message: message }));
  }
};

export const addPlanOffers = async (req: Request, res: Response) => {
  try {
    const getTables = Object.keys(mongoose.models);

    const createdOffers: object[] = [];

    for (const item of getTables) {
      const models = mongoose.models["PlanOffers"];

      if (!models) {
        return res.json(response.error({ message: "Model not found" }));
      }

      for (const enumValue of actionsEnum) {
        const newOffer = new planOffers({
          table: item,
          action: enumValue,
        });

        const savedOffer = await newOffer.save();
        createdOffers.push(savedOffer);
      }
    }
    res.json(
      response.success({
        message: "All offers successfully created",
        items: createdOffers,
        allItemCount: createdOffers.length,
      }),
    );
  } catch (err: any) {
    const message = err.message ? err.message : "UNKNOWN_ERROR_OCCURRED";
    console.error("Error:", err); // Log the error for debugging purposes
    res.json(response.error({ message: message }));
  }
};

export const updatePlanOffer = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { tableName, action } = req.body;
  try {
    const getOffer = await planOffers.findOne({ _id: id, deletedAt: null });
    if (!getOffer) {
      return res.json(response.error({ message: "Plan Offers not found" }));
    }
    if (tableName || action) {
      const updateOffer = await planOffers.findByIdAndUpdate(id, {
        $set: req.body,
        table: tableName,
        updatedAt: Date.now(),
      });
      res.json(
        response.success({
          item: updateOffer as object,
          allItemCount: 1,
          message: "Place offers successfully updated",
        }),
      );
    } else {
      res.json(
        response.error({
          message: REQUIRED_VALUE_EMPTY,
        }),
      );
    }
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.json(response.error({ message: message }));
  }
};

export const deletePlanOffer = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const getOffer = await planOffers.findOne({ _id: id, deletedAt: null });
    if (!getOffer) {
      return res.json(
        response.error({ message: "Plan Offers not found or already deleted" }),
      );
    }
    const deleteOffer = await planOffers.findByIdAndUpdate(
      id,
      {
        deletedAt: Date.now(),
      },
      {
        new: true,
      },
    );
    res.json(
      response.success({
        item: deleteOffer as object,
        allItemCount: 1,
        message: "Plan offer successfully deleted",
      }),
    );
  } catch (err: any) {
    const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
    res.json(response.error({ message: message }));
  }
};
