import User from "../models/users.js";
import Otp from "../models/otp.js";
import jwt from "jsonwebtoken";
import { generateOtp } from "../utils/generateOtp.js";
import { sendOtp } from "../utils/sendOtp.js";

/* SIGNUP INITIATE */
export const initiateSignup = async ({ name, email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const otp = generateOtp();

  await Otp.create({
    email,
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000
  });

  await sendOtp(email, otp);

  return { message: "OTP sent successfully" };
};

/* VERIFY OTP */
export const verifySignupOtp = async ({ name, email, password, otp }) => {
  const record = await Otp.findOne({ email, otp });
  if (!record || record.expiresAt < Date.now()) {
    throw new Error("Invalid or expired OTP");
  }

  const user = await User.create({ name, email, password });
  await Otp.deleteMany({ email });

  return user;
};

/* LOGIN */
export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.comparePassword(password))) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return { user, token };
};
