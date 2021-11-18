"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Post_controller_1 = require("../../controller/Post.controller");
var router = (0, express_1.Router)();
router.post('/sendPost', Post_controller_1.sendPost);
router.put('/likeIt', Post_controller_1.likeIt);
router.get('/getLikeIt', Post_controller_1.getLikeIt);
exports.default = router;
//# sourceMappingURL=index.js.map