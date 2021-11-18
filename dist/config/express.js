"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
var routes_1 = __importDefault(require("../routes"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var morgan_1 = __importDefault(require("morgan"));
require('dotenv').config();
var server = (0, express_1.default)();
server.use((0, cookie_parser_1.default)());
server.use(express_1.default.json());
server.use((0, morgan_1.default)('dev'));
server.use('/api', routes_1.default);
exports.default = server;
//# sourceMappingURL=express.js.map