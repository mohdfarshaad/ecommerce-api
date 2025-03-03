import { Router } from "express";
import { isAdmin, verifyJWT } from "../middlewares/auth.middleware";

export const productRouter = Router();

//Admin only routes
productRouter.route("/").post(verifyJWT, isAdmin);
productRouter.route("/:id").put(verifyJWT, isAdmin);
productRouter.route("/:id").delete(verifyJWT, isAdmin);

// User only routes
productRouter.route("/").get(verifyJWT);
productRouter.route("/:id").get(verifyJWT);
