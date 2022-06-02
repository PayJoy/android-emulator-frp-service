import { Router } from "express";
import { registerDevice, getDevice, updatePcb } from "../controllers/frp";

const router = Router();

router.get("/frp", getDevice);

router.patch("/frp", updatePcb);

router.post("/frp", registerDevice);

export default router;
