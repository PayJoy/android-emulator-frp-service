"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const frp_1 = require("../controllers/frp");
const router = (0, express_1.Router)();
router.get("/frp", frp_1.getDevice);
router.patch("/frp", frp_1.updatePcb);
router.post("/frp", frp_1.registerDevice);
exports.default = router;
//# sourceMappingURL=index.js.map