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
const express_1 = require("express");
const frp_1 = require("../controllers/frp");
const router = (0, express_1.Router)();
router.get("/frp", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = _req.query;
        let resData;
        if (Object.keys(query).length && query.imei && query.pcb) {
            resData = (0, frp_1.setValues)(query.imei.toString(), Number(query.pcb));
        }
        else if (query.pcb || query.imei) {
            if (query.pcb) {
                resData = yield (0, frp_1.setPcb)(Number(query.pcb));
            }
            if (query.imei) {
                resData = yield (0, frp_1.setImei)(query.imei.toString());
            }
        }
        else {
            resData = yield (0, frp_1.getValues)();
        }
        res.send(resData !== null && resData !== void 0 ? resData : {});
    }
    catch (error) {
        console.log(error);
        res.status(400);
    }
}));
exports.default = router;
//# sourceMappingURL=index.js.map