import { Router } from "express";
import { registerDevice, getDevice, updatePcb, deleteDevice } from "../controllers/frp";

const router = Router();

router.get("/frp", getDevice);
router.post("/frp", registerDevice);
router.patch("/frp", updatePcb);
router.delete("/frp", deleteDevice);

export default router;
