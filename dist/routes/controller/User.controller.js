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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEmail = exports.logout = exports.login = exports.deleteUser = exports.getUser = exports.register = void 0;
var User_service_1 = require("../../service/User.service");
var bcrypt_1 = __importDefault(require("bcrypt"));
var crypto_1 = __importDefault(require("crypto"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var nodemailer_1 = __importDefault(require("nodemailer"));
var config_1 = __importDefault(require("../../config"));
var transporter = nodemailer_1.default.createTransport(config_1.default.mailConfig);
var register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, nickname, email, password, salt, hashPassword, emailToken, result, mailOptions;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, id = _a.id, nickname = _a.nickname, email = _a.email, password = _a.password;
                return [4 /*yield*/, bcrypt_1.default.genSalt(10)];
            case 1:
                salt = _b.sent();
                return [4 /*yield*/, bcrypt_1.default.hash(password, salt)];
            case 2:
                hashPassword = _b.sent();
                emailToken = crypto_1.default.randomBytes(64).toString('hex');
                return [4 /*yield*/, (0, User_service_1.createUser)({
                        id: id,
                        nickname: nickname,
                        email: email,
                        password: hashPassword,
                        emailToken: emailToken,
                        isVerified: false,
                    })];
            case 3:
                result = _b.sent();
                mailOptions = {
                    from: '"Verify your email <startPlayUp@gmail.com>',
                    to: email,
                    subject: 'codewithsid = - verfiy your email',
                    html: "\n            <h2> " + nickname + " \uD68C\uC6D0\uB2D8</h2>\n            <h4> \uAC00\uC785\uD558\uC2DC\uB824\uBA74 \uC774\uBA54\uC77C \uC778\uC99D\uC774 \uD544\uC694\uD569\uB2C8\uB2E4. \uC544\uB798 \uC778\uC99D\uD558\uAE30 \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694</h4>\n            <a href=\"http://" + req.headers.host + "/api/user/verify-email?token=" + emailToken + "\">\uC778\uC99D\uD558\uAE30</a>\n        "
                };
                if (result.success) {
                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        }
                        else {
                            console.log("인증 메일을 보냈습니다.");
                        }
                    });
                    res.redirect('/login');
                    // return res.status(201).json(result);
                }
                else {
                    return [2 /*return*/, res.status(500).json(result)];
                }
                return [2 /*return*/];
        }
    });
}); };
exports.register = register;
var createToken = function (id) {
    var secret = process.env.JWT_SECRET;
    return jsonwebtoken_1.default.sign({ id: id }, secret);
};
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, password, result, token;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, id = _a.id, password = _a.password;
                console.log(id, password);
                return [4 /*yield*/, (0, User_service_1.loginCheckUser)({ id: id, password: password })];
            case 1:
                result = _b.sent();
                if (result.success) {
                    token = createToken(id);
                    res.cookie('access-token', token);
                    res.redirect('/dashboard');
                    // return res.status(201).json(result);
                }
                else {
                    return [2 /*return*/, res.status(500).json(result)];
                }
                return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var verifyEmail = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var emailToken, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                emailToken = req.query.token;
                console.log(emailToken);
                return [4 /*yield*/, (0, User_service_1.verifyEmailUser)({ emailToken: emailToken })];
            case 1:
                result = _a.sent();
                if (result.success) {
                    return [2 /*return*/, res.status(201).json(result)];
                }
                else {
                    return [2 /*return*/, res.status(500).json(result)];
                }
                return [2 /*return*/];
        }
    });
}); };
exports.verifyEmail = verifyEmail;
var logout = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.cookie('access-token', "", { maxAge: 1 });
        res.redirect('/user/login');
        return [2 /*return*/];
    });
}); };
exports.logout = logout;
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nickname, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                nickname = req.query.nickname;
                return [4 /*yield*/, (0, User_service_1.readUser)({ nickname: nickname })];
            case 1:
                result = _a.sent();
                if (result.success) {
                    return [2 /*return*/, res.status(201).json(result)];
                }
                else {
                    return [2 /*return*/, res.status(500).json(result)];
                }
                return [2 /*return*/];
        }
    });
}); };
exports.deleteUser = deleteUser;
var getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nickname, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                nickname = req.query.nickname;
                return [4 /*yield*/, (0, User_service_1.readUser)({ nickname: nickname })];
            case 1:
                result = _a.sent();
                if (result.success) {
                    return [2 /*return*/, res.status(201).json(result)];
                }
                else {
                    return [2 /*return*/, res.status(500).json(result)];
                }
                return [2 /*return*/];
        }
    });
}); };
exports.getUser = getUser;
//# sourceMappingURL=User.controller.js.map