import { Router } from "express";
import { getHomeAggregate } from "../controllers/homeController.js";

const router = Router();

router.get("/aggregate", getHomeAggregate);

export default router;
