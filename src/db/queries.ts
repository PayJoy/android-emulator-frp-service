export const CREATE_DEVICES_TABLE = `CREATE TABLE devices(imei1 STRING PRIMARY KEY, imei2 STRING, pcb INTERGER)`;

export const INSERT_DEVICE = `INSERT INTO devices(imei1, imei2, pcb) VALUES (?,?,?)`;

export const UPDATE_DEVICE_PCB = `UPDATE devices SET pcb = ? WHERE imei1 = ?`;

export const SELECT_DEVICE = `SELECT * FROM devices WHERE imei1 = ?`;
