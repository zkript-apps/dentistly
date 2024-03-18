import User from "@/models/user";
import { Request, Response } from "express";
import { capitalize } from "lodash";
import { REQUIRED_VALUE_EMPTY } from "@/common/utils/constants";

const RegistrationType = {
  Google: "Google",
  Facebook: "Facebook",
};

export const verifySignIn = async (req: Request, res: Response) => {
  const { type, email } = req.query;
  if (type && email) {
    try {
      const user = await User.findOne({ email: email as string }).populate(
        "clinic",
      );
      const capitalizeType = capitalize(type as string);
      const isSocial =
        capitalizeType === RegistrationType.Google ||
        capitalizeType === RegistrationType.Facebook;
      if (
        (user &&
          user.registrationType !== RegistrationType.Facebook &&
          isSocial) ||
        (user &&
          user.registrationType === RegistrationType.Facebook &&
          !isSocial)
      ) {
        res.json({
          error: false,
          item: { email },
        });
      } else if (
        user &&
        user.registrationType !== RegistrationType.Facebook &&
        !isSocial
      ) {
        res.json({
          error: true,
          item: null,
          message: `Invalid login method, please login using your ${type as string} account`,
        });
      } else if (
        user &&
        user.registrationType === RegistrationType.Facebook &&
        isSocial
      ) {
        res.json({
          error: true,
          item: null,
          message: `Invalid login method, please login using your password`,
        });
      } else if ((!user && type === "google") || type === "facebook") {
        res.json({
          error: false,
          action: {
            type: "SOCIAL_REGISTER",
            description: type,
          },
          message: "Email is not registered",
        });
      } else {
        res.json({
          error: false,
          item: null,
          message: "Email is not registered",
        });
      }
    } catch (err: any) {
      res.json({
        error: true,
        message: err.message,
      });
    }
  } else {
    res.json({
      error: true,
      message: REQUIRED_VALUE_EMPTY,
    });
  }
};
