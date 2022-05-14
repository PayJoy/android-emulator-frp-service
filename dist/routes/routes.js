"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/frp", (_req, res) => {
    return res.send("API Running...");
});
exports.default = router;
//# sourceMappingURL=routes.js.map