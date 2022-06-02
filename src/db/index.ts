import * as path from "path";
import { INSERT_DEVICE, CREATE_DEVICES_TABLE, SELECT_DEVICE, UPDATE_DEVICE_PCB } from "./queries";
import { IDevice } from "../types/data";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(path.resolve(__dirname, "index.db"), sqlite3.OPEN_READWRITE, (err: Error) => {
  if (err) {
    return console.log(err.message);
  }
});

db.run(CREATE_DEVICES_TABLE, (err: Error) => {
  if (err) {
    return console.log(err.message);
  } else {
    console.log("Table devices created!");
  }
});

export const insertDevice = async (imei1: string, imei2: string, pcb: number): Promise<string | Error> => {
  return new Promise((resolve, reject) => {
    db.run(INSERT_DEVICE, [imei1, imei2, pcb], (err: Error) => {
      if (err) {
        reject(err);
        throw err;
      } else {
        resolve("Device created");
      }
    });
  });
};

export const selectDevice = async (imei1: string): Promise<Error | IDevice> => {
  return new Promise((resolve, reject) => {
    db.get(SELECT_DEVICE, [imei1], (err: Error, data: IDevice) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

export const updateDevicePcb = async (imei1: string, pcb: number): Promise<IDevice | Error> => {
  return new Promise((resolve, reject) => {
    db.run(UPDATE_DEVICE_PCB, [pcb, imei1], async (err: Error) => {
      if (err) {
        reject(`Error ${err.message}`);
        throw err;
      } else {
        const updatedDevice = await selectDevice(imei1);
        resolve(updatedDevice);
      }
    });
  });
};
