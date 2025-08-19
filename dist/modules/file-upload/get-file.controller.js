"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFIleController = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const fs_1 = require("fs");
const secret_header_guard_1 = require("../../Guards/secret-header.guard");
let GetFIleController = class GetFIleController {
    getImage(filename) {
        const filePath = (0, path_1.join)(process.cwd(), 'uploads', filename);
        const file = (0, fs_1.createReadStream)(filePath);
        return new common_1.StreamableFile(file);
    }
};
exports.GetFIleController = GetFIleController;
__decorate([
    (0, common_1.Version)('1'),
    (0, common_1.Get)(':filename'),
    (0, common_1.Header)('Content-Type', 'image/png'),
    __param(0, (0, common_1.Param)('filename')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", common_1.StreamableFile)
], GetFIleController.prototype, "getImage", null);
exports.GetFIleController = GetFIleController = __decorate([
    (0, common_1.UseGuards)(secret_header_guard_1.HeaderGuard),
    (0, common_1.Controller)('preview-image')
], GetFIleController);
//# sourceMappingURL=get-file.controller.js.map