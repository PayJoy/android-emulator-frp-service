import { IDevice } from "../types/data";
import { selectDevice, insertDevice, updateDevicePcb } from "../db";
import { Request, Response } from "express";

export const getDevice = async (_req: Request, res: Response) => {
  try {
    const query = _req.query;
    const result = await selectDevice(query.imei1 as string);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

export const registerDevice = async (_req: Request, res: Response) => {
  try {
    const { imei1, imei2, pcb }: IDevice = _req.body;
    const result = await insertDevice(imei1, imei2, pcb);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const updatePcb = async (_req: Request, res: Response) => {
  try {
    const { imei1 } = _req.query;
    const { pcb } = _req.body;
    const result = await updateDevicePcb(imei1 as string, pcb as number);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
