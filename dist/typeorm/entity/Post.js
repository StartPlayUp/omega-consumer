"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var Thumb_1 = require("./Thumb");
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var Comment_1 = require("./Comment");
var Model_1 = require("./Models/Model");
var User_1 = require("./User");
var Post = /** @class */ (function (_super) {
    __extends(Post, _super);
    function Post() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Post.prototype.createSlug = function () {
        this.title;
    };
    __decorate([
        (0, typeorm_1.Column)(),
        (0, class_validator_1.Length)(1, 255),
        __metadata("design:type", String)
    ], Post.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        (0, class_validator_1.Length)(1, 255),
        __metadata("design:type", String)
    ], Post.prototype, "content", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            enum: ['user', 'admin', 'superadmin'],
            default: 'user'
        }),
        __metadata("design:type", String)
    ], Post.prototype, "permision", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Post.prototype, "delete", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
            default: true
        }),
        __metadata("design:type", Boolean)
    ], Post.prototype, "useComment", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        (0, class_validator_1.IsIP)(),
        __metadata("design:type", String)
    ], Post.prototype, "ipAddress", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            nullable: true
        }),
        __metadata("design:type", String)
    ], Post.prototype, "slug", void 0);
    __decorate([
        (0, typeorm_1.AfterInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Post.prototype, "createSlug", null);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }, function (post) { return post.posts; }, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }),
        __metadata("design:type", User_1.User)
    ], Post.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Comment_1.Comment; }, function (comment) { return comment.post; }),
        __metadata("design:type", Array)
    ], Post.prototype, "comments", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Thumb_1.Thumb; }, function (thumb) { return thumb.post; }),
        __metadata("design:type", Array)
    ], Post.prototype, "thumbs", void 0);
    Post = __decorate([
        (0, typeorm_1.Entity)()
    ], Post);
    return Post;
}(Model_1.Model));
exports.Post = Post;
//# sourceMappingURL=Post.js.map