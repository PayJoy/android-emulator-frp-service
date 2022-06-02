"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDevicePcb = exports.selectDevice = exports.insertDevice = void 0;
const path = __importStar(require("path"));
const queries_1 = require("./queries");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(path.resolve(__dirname, "index.db"), sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.log(err.message);
    }
});
db.run(queries_1.CREATE_DEVICES_TABLE, (err) => {
    if (err) {
        return console.log(err.message);
    }
    else {
        console.log("Table devices created!");
    }
});
const insertDevice = (imei1, imei2, pcb) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        db.run(queries_1.INSERT_DEVICE, [imei1, imei2, pcb], (err) => {
            if (err) {
                reject(err);
                throw err;
            }
            else {
                resolve("Device created");
            }
        });
    });
});
exports.insertDevice = insertDevice;
const selectDevice = (imei1) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        db.get(queries_1.SELECT_DEVICE, [imei1], (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
});
exports.selectDevice = selectDevice;
const updateDevicePcb = (imei1, pcb) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        db.run(queries_1.UPDATE_DEVICE_PCB, [pcb, imei1], (err) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                reject(`Error ${err.message}`);
                throw err;
            }
            else {
                const updatedDevice = yield (0, exports.selectDevice)(imei1);
                resolve(updatedDevice);
            }
        }));
    });
});
exports.updateDevicePcb = updateDevicePcb;
//# sourceMappingURL=index.js.map