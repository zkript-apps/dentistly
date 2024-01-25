import { ResponseService } from "@/common/services/response";
import { UNKNOWN_ERROR_OCCURRED } from "@/common/utils/constants";
import planOffers from "@/models/planOffers";
import { Request, Response } from "express";

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
