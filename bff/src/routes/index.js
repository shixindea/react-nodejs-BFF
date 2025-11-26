import { Router } from "express";
import homeRouter from "./home.js";
import mockRouter from "./mock.js";

const router = Router();

router.use("/home", homeRouter);
router.use("/mock", mockRouter);

export default router;
