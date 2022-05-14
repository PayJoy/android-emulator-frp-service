"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeDataValues = exports.getDataValues = void 0;
const fs_1 = __importDefault(require("fs"));
const filePath = __dirname + "/data.txt";
const getDataValues = () => {
    return new Promise((resolve) => {
        fs_1.default.readFile(filePath, "utf8", (err, data) => {
            resolve(err ? null : data);
        });
    });
};
exports.getDataValues = getDataValues;
const writeDataValues = (data) => {
    fs_1.default.open(filePath, "w+", (err, fd) => {
        if (err) {
            console.error(`${filePath} ${err.code === "ENOENT" ? "does not exist" : "is read-only"}`);
        }
        else {
            console.log(`${filePath} exists, and it is writable`);
            fs_1.default.writeFile(filePath, data, function (err) {
                if (err) {
                    console.log("Error occurred", err);
                }
                console.log("File write successfull");
            });
            fs_1.default.close(fd);
        }
    });
};
exports.writeDataValues = writeDataValues;
//# sourceMappingURL=index.js.map