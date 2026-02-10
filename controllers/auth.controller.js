import {
  initiateSignup,
  verifySignupOtp,
  loginUser
} from "../services/auth.service.js";

/* SIGNUP INITIATE */
export const signupInitiate = async (req, res) => {
  const result = await initiateSignup(req.body);
  res.json({ success: true, ...result });
};

/* VERIFY OTP */
export const signupVerifyOtp = async (req, res) => {
  const user = await verifySignupOtp(req.body);
  res.json({ success: true, user });
};

/* LOGIN */
export const login = async (req, res) => {
  const { user, token } = await loginUser(req.body);

  res.cookie("token", token, {
    httpOnly: true,
    secure: false
  });

  res.json({ success: true, user });
};
