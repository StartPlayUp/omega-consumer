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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLikeItPost = exports.likeItPost = exports.getPosts = exports.getPost = exports.deletePost = exports.updatePost = exports.createPost = void 0;
var typeorm_1 = require("typeorm");
var Thumb_1 = require("../typeorm/entity/Thumb");
var User_1 = require("../typeorm/entity/User");
var class_validator_1 = require("class-validator");
var Post_1 = require("../typeorm/entity/Post");
var likeItPost = function (likeItData) { return __awaiter(void 0, void 0, void 0, function () {
    var postUuid, userUuid, likeIt, post, user, thumbFindOne, message, thumb, errors, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 8, , 9]);
                postUuid = likeItData.postUuid, userUuid = likeItData.userUuid, likeIt = likeItData.likeIt;
                return [4 /*yield*/, Post_1.Post.findOneOrFail({ uuid: postUuid })];
            case 1:
                post = _a.sent();
                return [4 /*yield*/, User_1.User.findOneOrFail({ uuid: userUuid })];
            case 2:
                user = _a.sent();
                return [4 /*yield*/, Thumb_1.Thumb.findOne({ post: post, user: user })];
            case 3:
                thumbFindOne = _a.sent();
                message = "";
                if (!thumbFindOne) return [3 /*break*/, 4];
                thumbFindOne.remove();
                return [3 /*break*/, 7];
            case 4:
                thumb = Thumb_1.Thumb.create({
                    post: post,
                    user: user,
                    likeIt: true
                });
                return [4 /*yield*/, (0, class_validator_1.validate)(thumb)];
            case 5:
                errors = _a.sent();
                if (errors.length > 0)
                    throw errors;
                return [4 /*yield*/, thumb.save()];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7: return [2 /*return*/, {
                    success: true,
                    message: message
                }];
            case 8:
                err_1 = _a.sent();
                return [2 /*return*/, {
                        success: false,
                        error: "Something went wrong"
                    }];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.likeItPost = likeItPost;
var getLikeItPost = function (likeItData) { return __awaiter(void 0, void 0, void 0, function () {
    var postUuid, post, thumb, likeItCount, countAll, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                postUuid = likeItData.postUuid;
                return [4 /*yield*/, Post_1.Post.findOneOrFail({ uuid: postUuid })];
            case 1:
                post = _a.sent();
                return [4 /*yield*/, (0, typeorm_1.getRepository)(Thumb_1.Thumb)
                        .createQueryBuilder("thumb")
                        .select("SUM(thumb.likeIt)", "likeItCount")
                        .addSelect("count(*)", "countAll")
                        .where("thumb.postIndex = :postIndex", { postIndex: post.index })
                        .getRawOne()];
            case 2:
                thumb = _a.sent();
                console.log(thumb);
                likeItCount = 0;
                countAll = 0;
                if (thumb.sum !== null) {
                    likeItCount = parseInt(thumb.likeItCount);
                    countAll = parseInt(thumb.countAll);
                }
                return [2 /*return*/, {
                        success: true,
                        likeItCount: likeItCount,
                        countAll: countAll
                    }];
            case 3:
                err_2 = _a.sent();
                return [2 /*return*/, {
                        success: false,
                        error: "Something went wrong"
                    }];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getLikeItPost = getLikeItPost;
var createPost = function (postData) { return __awaiter(void 0, void 0, void 0, function () {
    var title, content, ipAddress, userUuid, user, post, errors, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                title = postData.title, content = postData.content, ipAddress = postData.ipAddress, userUuid = postData.userUuid;
                console.log(postData);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, User_1.User.findOneOrFail({ uuid: userUuid })];
            case 2:
                user = _a.sent();
                console.log(user);
                post = Post_1.Post.create({ title: title, content: content, ipAddress: ipAddress, user: user });
                return [4 /*yield*/, (0, class_validator_1.validate)(post)];
            case 3:
                errors = _a.sent();
                if (errors.length > 0)
                    throw errors;
                return [4 /*yield*/, post.save()];
            case 4:
                _a.sent();
                return [2 /*return*/, {
                        success: true,
                    }];
            case 5:
                err_3 = _a.sent();
                return [2 /*return*/, {
                        success: false,
                        error: "Something went wrong"
                    }];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.createPost = createPost;
var deletePost = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); };
exports.deletePost = deletePost;
var updatePost = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); };
exports.updatePost = updatePost;
var getPost = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); };
exports.getPost = getPost;
var getPosts = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            return [2 /*return*/, {
                    success: true,
                }];
        }
        catch (err) {
            return [2 /*return*/, {
                    success: false,
                    error: "Something went wrong"
                }];
        }
        return [2 /*return*/];
    });
}); };
exports.getPosts = getPosts;
//# sourceMappingURL=post.service.js.map