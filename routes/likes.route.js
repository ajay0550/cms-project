import express from "express";
import { toggleLike, getLikeCount } from "../controllers/likes.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/:id", authMiddleware,toggleLike);
router.get("/:id", getLikeCount);

export default router;