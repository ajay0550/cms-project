import express from "express";
import {
  signupInitiate,
  signupVerifyOtp,
  login
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup/initiate", signupInitiate);
router.post("/signup/verify-otp", signupVerifyOtp);
router.post("/login", login);

export default router;
