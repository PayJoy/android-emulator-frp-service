import { Data } from "../types/data";
import { getDataValues, writeDataValues } from "../db";

export const getValues = async (): Promise<Data | void> => {
  const fileData = await getDataValues();
  if (typeof fileData === "string") {
    const data = fileData.split("\n");
    return {
      pcb: Number(data[0]),
      imei: data[1],
    };
  }
};

export const setPcb = async (pcb: number): Promise<Data> => {
  const fileData = await getDataValues();
  if (fileData) {
    const data: string[] = fileData.split("\n");
    data[0] = pcb.toString();
    await writeDataValues(data.join("\n"));
    return {
      pcb: Number(data[0]),
      imei: data[1],
    };
  } else {
    const data = [pcb, ""];
    await writeDataValues(data.join("\n"));
    return {
      pcb,
      imei: "",
    };
  }
};

export const setImei = async (imei: string): Promise<Data> => {
  const fileData = await getDataValues();
  if (fileData) {
    const data: string[] = fileData.split("\n");
    data[1] = imei;
    await writeDataValues(data.join("\n"));
    return {
      pcb: Number(data[0]),
      imei: data[1],
    };
  } else {
    const data: string[] = ["", imei];
    await writeDataValues(data.join("\n"));
    return {
      pcb: 0,
      imei,
    };
  }
};

export const setValues = (imei: string, pcb: number): Data => {
  const data = `${pcb}\n${imei}`;
  try {
    writeDataValues(data);
    return {
      imei,
      pcb,
    };
  } catch (error) {
    console.log(error);
  }
};
