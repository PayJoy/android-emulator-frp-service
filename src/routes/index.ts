import { Request, Response, Router } from "express";
import { getValues, setPcb, setImei, setValues } from "../controllers/frp";
import { Data } from "../types/data";

const router = Router();

router.get("/frp", async (_req: Request, res: Response) => {
  try {
    const query = _req.query;
    let resData: Data | void;
    if (Object.keys(query).length && query.imei && query.pcb) {
      resData = setValues(query.imei.toString(), Number(query.pcb));
    } else if (query.pcb || query.imei) {
      if (query.pcb) {
        resData = await setPcb(Number(query.pcb));
      }
      if (query.imei) {
        resData = await setImei(query.imei.toString());
      }
    } else {
      resData = await getValues();
    }
    res.send(resData ?? {});
  } catch (error) {
    console.log(error);
    res.status(400);
  }
});

export default router;
