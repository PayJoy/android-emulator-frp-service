"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELECT_DEVICE = exports.UPDATE_DEVICE_PCB = exports.INSERT_DEVICE = exports.CREATE_DEVICES_TABLE = void 0;
exports.CREATE_DEVICES_TABLE = `CREATE TABLE devices(imei1 STRING PRIMARY KEY, imei2 STRING, pcb INTERGER)`;
exports.INSERT_DEVICE = `INSERT INTO devices(imei1, imei2, pcb) VALUES (?,?,?)`;
exports.UPDATE_DEVICE_PCB = `UPDATE devices SET pcb = ? WHERE imei1 = ?`;
exports.SELECT_DEVICE = `SELECT * FROM devices WHERE imei1 = ?`;
//# sourceMappingURL=queries.js.map