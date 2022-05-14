"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.setValues = exports.setImei = exports.setPcb = exports.getValues = void 0;
const db_1 = require("../db");
const getValues = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const fileData = yield (0, db_1.getDataValues)();
    if (typeof fileData === "string") {
      const data = fileData.split("\n");
      return {
        pcb: Number(data[0]),
        imei: data[1],
      };
    }
  });
exports.getValues = getValues;
const setPcb = (pcb) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const fileData = yield (0, db_1.getDataValues)();
    if (fileData) {
      const data = fileData.split("\n");
      data[0] = pcb.toString();
      yield (0, db_1.writeDataValues)(data.join("\n"));
      return {
        pcb: Number(data[0]),
        imei: data[1],
      };
    } else {
      const data = [pcb, ""];
      yield (0, db_1.writeDataValues)(data.join("\n"));
      return {
        pcb,
        imei: "",
      };
    }
  });
exports.setPcb = setPcb;
const setImei = (imei) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const fileData = yield (0, db_1.getDataValues)();
    if (fileData) {
      const data = fileData.split("\n");
      data[1] = imei;
      yield (0, db_1.writeDataValues)(data.join("\n"));
      return {
        pcb: Number(data[0]),
        imei: data[1],
      };
    } else {
      const data = ["", imei];
      yield (0, db_1.writeDataValues)(data.join("\n"));
      return {
        pcb: 0,
        imei,
      };
    }
  });
exports.setImei = setImei;
const setValues = (imei, pcb) => {
  const data = `${pcb}\n${imei}`;
  try {
    (0, db_1.writeDataValues)(data);
    return {
      imei,
      pcb,
    };
  } catch (error) {
    console.log(error);
  }
};
exports.setValues = setValues;
//# sourceMappingURL=frp.js.map
