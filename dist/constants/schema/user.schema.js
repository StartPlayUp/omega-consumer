"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var userSchema = {
    register: (_a = {},
        _a[celebrate_1.Segments.BODY] = {
            email: celebrate_1.Joi.string().email().required(),
            password: celebrate_1.Joi.string().min(6).max(32).required(),
            name: celebrate_1.Joi.string().required(),
        },
        _a),
    login: (_b = {},
        _b[celebrate_1.Segments.BODY] = {
            email: celebrate_1.Joi.string().email().required(),
            password: celebrate_1.Joi.string().required(),
        },
        _b),
    update: {
        body: {},
    },
};
exports.default = userSchema;
//# sourceMappingURL=user.schema.js.map