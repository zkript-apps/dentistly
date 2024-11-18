import { Response, Request } from "express";
import {
  REQUIRED_VALUE_EMPTY,
  UNKNOWN_ERROR_OCCURRED,
} from "@/common/constants";
import { EncryptionService } from "@repo/services";
import { ResponseService } from "@/common/services/response";
import { CSRF, SESSION } from "@repo/constants";
import { getGoogleUserData } from "../helpers/googleApiRequest";
import generateSession from "../helpers/generateSession";
import {
  E_RegistrationType,
  E_UserRole,
  T_User,
  Z_UserRegister,
} from "@repo/contract";
import {
  googleAuthPrompt,
  googleAuthScope,
  googleOAuth2Client,
} from "../helpers/googleAuth";
import redisClient from "@/common/utils/redisClient";
import User from "@/models/user";
import Clinic from "@/models/clinic";

const response = new ResponseService();
const passwordEncryption = new EncryptionService("password");

export const info = async (req: Request, res: Response) => {
  res.json(response.success({ item: res.locals.user }));
};

export const manual = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({
        email,
        deletedAt: { $exists: false },
      });
      if (!user) {
        throw new Error("Email or password is invalid");
      }
      const decryptedPassword = passwordEncryption.decrypt(
        user?.password as string,
      );
      const originalPassword = decryptedPassword.toString();
      const decryptInputPassword = passwordEncryption.decrypt(password);
      if (user && originalPassword === decryptInputPassword) {
        await generateSession(req, res, user as any);
        res.json(
          response.success({
            action: {
              type: "MANUAL_LOGIN_SUCCESS",
              link: "/", // Home
            },
            message: "User logged in!",
          }),
        );
      } else {
        res.json(response.error({ message: "Email or password is invalid" }));
      }
    } catch (err: any) {
      res.json(
        response.error({
          message: err.message ? err.message : UNKNOWN_ERROR_OCCURRED,
        }),
      );
    }
  } else {
    res.json(
      response.error({
        message: REQUIRED_VALUE_EMPTY,
      }),
    );
  }
};

export const logout = async (req: Request, res: Response) => {
  const sessionCookie = req.cookies[SESSION];
  const csrfCookie = req.cookies[CSRF];
  if (sessionCookie && csrfCookie) {
    try {
      const session = await redisClient.hGetAll(
        `${sessionCookie}:${csrfCookie}`,
      );
      if (session) {
        await redisClient.del(`${sessionCookie}:${csrfCookie}`);
      }
      res.clearCookie(SESSION);
      res.clearCookie(CSRF);
      res.json(
        response.success({
          action: {
            type: "LOGOUT_SUCCESS",
            link: "/", // Home
          },
          message: "User registered and logged out!",
        }),
      );
    } catch (err: any) {
      res.json(
        response.error({
          message: err.message ? err.message : UNKNOWN_ERROR_OCCURRED,
        }),
      );
    }
  } else {
    res.json(response.success({ message: "Success logout!" }));
  }
};

export const googleRedirect = async (req: Request, res: Response) => {
  const code = req.query.code;
  const state = req.query.state;
  const redirectTo =
    state && typeof state === "string" ? state.replace("redirect_to=", "") : "";
  if (code) {
    try {
      const googleCredentials = await googleOAuth2Client.getToken(
        code as string,
      );
      googleOAuth2Client.setCredentials(googleCredentials.tokens);
      const credentials = googleOAuth2Client.credentials;
      const googleUserData = await getGoogleUserData(
        credentials.access_token as string,
      );
      const user = await User.findOne({
        email: googleUserData.item?.email,
      });
      if (user) {
        await generateSession(req, res, user as any);
        res.json(
          response.success({
            action: {
              type: "SOCIAL_LOGIN_SUCCESS",
              link: redirectTo ? redirectTo : "/",
            },
            message: "User logged in!",
          }),
        );
      } else {
        res.json(
          response.success({
            action: {
              type: "SOCIAL_REGISTER",
              link: "/create-account/google",
            },
            item: googleUserData.item,
          }),
        );
      }
    } catch (err: any) {
      res.json(
        response.error({
          message: err.message ? err.message : UNKNOWN_ERROR_OCCURRED,
        }),
      );
    }
  } else {
    res.json(
      response.error({
        message: REQUIRED_VALUE_EMPTY,
      }),
    );
  }
};

export const google = async (req: Request, res: Response) => {
  const redirectTo = req.body.redirectTo;
  try {
    const authorizeUrl = googleOAuth2Client.generateAuthUrl({
      scope: googleAuthScope,
      prompt: googleAuthPrompt,
      state: redirectTo ? `redirect_to=${redirectTo}` : "",
    });
    res.json(
      response.success({
        action: {
          type: "SOCIAL_LOGIN",
          link: authorizeUrl,
        },
      }),
    );
  } catch (err: any) {
    res.json(
      response.error({
        message: err.message ? err.message : UNKNOWN_ERROR_OCCURRED,
      }),
    );
  }
};

export const register = async (req: Request, res: Response) => {
  const inputIsValid = Z_UserRegister.safeParse(req.body);
  if (inputIsValid.success) {
    const { clinicName, email, password, firstName, lastName } = req.body;
    try {
      const user = await User.findOne({
        email: email as string,
      });
      if (!user) {
        const clinic = await Clinic.findOne({
          clinicName: clinicName,
        });
        if (!clinic) {
          const clinicData = new Clinic({
            clinicName,
          });
          const newClinic = await clinicData.save();
          const userData = new User({
            clinic: newClinic._id,
            email,
            role: E_UserRole.Owner,
            password,
            firstName,
            lastName,
            registrationType: E_RegistrationType.Manual,
          });
          const newUser = await userData.save();
          await generateSession(req, res, newUser as any);
          res.json(
            response.success({
              action: {
                type: "REGISTER_LOGIN_SUCCESS",
                link: "/dashboard", // Dashboard
              },
              message: "User registered and logged in!",
            }),
          );
        } else {
          res.json(response.error({ message: "Clinic name already exist" }));
        }
      } else {
        res.json(response.error({ message: "Email already exist" }));
      }
    } catch (err: any) {
      res.json(response.error({ message: err.message }));
    }
  } else {
    res.json(response.error({ message: REQUIRED_VALUE_EMPTY }));
  }
};

export const forgotVerify = async (req: Request, res: Response) => {
  const { email, code, newPassword } = req.body;
  if (email && code && newPassword) {
    try {
      const user = await User.findOne({
        email: email,
      });
      if (!user) {
        throw new Error("Some of the values are invalid");
      }
      // const forgotPassword = await prisma.forgotPassword.findFirst({
      //   where: {
      //     email: email,
      //     code: String(code),
      //     used: false,
      //     expiredAt: {
      //       gte: new Date(),
      //     },
      //   },
      // })
      if (true) {
        // await prisma.forgotPassword.update({
        //   where: {
        //     id: forgotPassword.id,
        //   },
        //   data: {
        //     used: true,
        //   },
        // })
        const decryptNewPassword = passwordEncryption.decrypt(newPassword);
        const encryptPassword = passwordEncryption.encrypt(decryptNewPassword);
        const updateUser = await User.findByIdAndUpdate(
          user._id,
          {
            $set: {
              password: String(encryptPassword),
            },
            updatedAt: Date.now(),
          },
          { new: true },
        );
        await generateSession(req, res, user as any);
        res.json(
          response.success({
            action: {
              type: "CHANGE_PASSWORD_LOGIN_SUCCESS",
              link: "/", // Home
            },
            message: "User password changed and logged in!",
          }),
        );
      } else {
        res.json(
          response.error({
            message:
              "Some values are invalid or forgot password token is expired",
          }),
        );
      }
    } catch (err: any) {
      res.json(
        response.error({
          message: err.message ? err.message : UNKNOWN_ERROR_OCCURRED,
        }),
      );
    }
  } else {
    res.json(response.error({ message: REQUIRED_VALUE_EMPTY }));
  }
};
