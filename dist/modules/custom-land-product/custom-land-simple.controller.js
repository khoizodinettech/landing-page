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
exports.CustomLandSimpleController = void 0;
const common_1 = require("@nestjs/common");
const custom_land_simple_service_1 = require("./custom-land-simple.service");
const create_landing_page_1 = require("./dto/create-landing-page");
const secret_header_guard_1 = require("../../Guards/secret-header.guard");
let CustomLandSimpleController = class CustomLandSimpleController {
    customLandSimpleService;
    constructor(customLandSimpleService) {
        this.customLandSimpleService = customLandSimpleService;
    }
    async createProduct(createDtoProduct) {
        await this.customLandSimpleService.create(createDtoProduct);
        return { message: 'create product successfully' };
    }
    async getAllProduct() {
        const data = await this.customLandSimpleService.findAll();
        return data;
    }
    async findOne(id) {
        const search = await this.customLandSimpleService.findOnebyId(id);
        return search;
    }
    async update(id, createDtoProduct) {
        return this.customLandSimpleService.update(id, createDtoProduct);
    }
    async delete(id) {
        await this.customLandSimpleService.delete(id);
    }
};
exports.CustomLandSimpleController = CustomLandSimpleController;
__decorate([
    (0, common_1.Version)('1'),
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_landing_page_1.CreateDtoLandingPage]),
    __metadata("design:returntype", Promise)
], CustomLandSimpleController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Version)('1'),
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomLandSimpleController.prototype, "getAllProduct", null);
__decorate([
    (0, common_1.Version)('1'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomLandSimpleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Version)('1'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_landing_page_1.CreateDtoLandingPage]),
    __metadata("design:returntype", Promise)
], CustomLandSimpleController.prototype, "update", null);
__decorate([
    (0, common_1.Version)('1'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomLandSimpleController.prototype, "delete", null);
exports.CustomLandSimpleController = CustomLandSimpleController = __decorate([
    (0, common_1.UseGuards)(secret_header_guard_1.HeaderGuard),
    (0, common_1.Controller)('simple'),
    __metadata("design:paramtypes", [custom_land_simple_service_1.CustomLandSimpleService])
], CustomLandSimpleController);
//# sourceMappingURL=custom-land-simple.controller.js.map