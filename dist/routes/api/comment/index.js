"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Comment_controller_1 = require("../../controller/Comment.controller");
var router = (0, express_1.Router)();
router.post('/sendMemberComment', Comment_controller_1.sendMemberComment);
router.post('/sendNonMemberComment', Comment_controller_1.sendNonMemberComment);
router.get('/getComments', Comment_controller_1.getComments);
exports.default = router;
//# sourceMappingURL=index.js.map