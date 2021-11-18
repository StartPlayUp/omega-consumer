"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var User_controller_1 = require("../../controller/User.controller");
var middleware_1 = require("../../middleware");
var router = (0, express_1.Router)();
router.post('/register', User_controller_1.register);
router.get('/getUser', User_controller_1.getUser);
router.post('/login', middleware_1.emailVerified, User_controller_1.login);
router.get('/logout', middleware_1.loginRequired, middleware_1.loginRequired, User_controller_1.logout);
router.get('/verify-email', User_controller_1.verifyEmail);
exports.default = router;
//# sourceMappingURL=index.js.map