"use strict";
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
exports.deleteDevice = exports.updatePcb = exports.registerDevice = exports.getDevice = void 0;
const db_1 = require("../db");
const getDevice = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = _req.query;
        const result = yield (0, db_1.selectDevice)(query.imei1);
        res.send(result);
    }
    catch (error) {
        console.log(error);
        res.status(400);
    }
});
exports.getDevice = getDevice;
const registerDevice = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { imei1, imei2, pcb } = _req.body;
        const result = yield (0, db_1.insertDevice)(imei1, imei2, pcb);
        res.send(result);
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});
exports.registerDevice = registerDevice;
const updatePcb = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { imei1 } = _req.query;
        const { pcb } = _req.body;
        const result = yield (0, db_1.updateDevicePcb)(imei1, pcb);
        res.send(result);
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});
exports.updatePcb = updatePcb;
const deleteDevice = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { imei1 } = _req.query;
        const result = yield (0, db_1.deleteDeviceFromTable)(imei1);
        res.send(result);
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});
exports.deleteDevice = deleteDevice;
//# sourceMappingURL=frp.js.map