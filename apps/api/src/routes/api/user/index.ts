import express from "express";
import {
  addUser,
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "./services/default";
import isUserLoggedIn from "@/common/middlewares/auth/isUserLoggedIn";
import isOriginValid from "@/common/middlewares/auth/isOriginValid";
import isCsrfTokenValid from "@/common/middlewares/auth/isCsrfTokenValid";
import {
  logout,
  manual,
  info,
  google,
  googleRedirect,
  register,
  forgotVerify,
} from "./services/auth";

const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", getUser);
router.post("/", addUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

router.get("/auth/info", isOriginValid, isUserLoggedIn, info);
router.post("/auth/manual", isOriginValid, manual);
router.post(
  "/auth/logout2",
  isOriginValid,
  isUserLoggedIn,
  isCsrfTokenValid,
  logout,
);
router.post("/auth/google", isOriginValid, google);
router.get("/auth/google/redirect", isOriginValid, googleRedirect);
router.post("/auth/register", isOriginValid, register);
router.post("/auth/forgot-password/verify", isOriginValid, forgotVerify);

export default router;
