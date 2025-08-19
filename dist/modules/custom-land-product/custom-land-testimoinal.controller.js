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
exports.CustomTestimoinalController = void 0;
const common_1 = require("@nestjs/common");
const custom_land_testimoinal_service_1 = require("./custom-land-testimoinal.service");
const create_Feedback_dto_1 = require("./dto/create-Feedback.dto");
const secret_header_guard_1 = require("../../Guards/secret-header.guard");
let CustomTestimoinalController = class CustomTestimoinalController {
    customtestimonialService;
    constructor(customtestimonialService) {
        this.customtestimonialService = customtestimonialService;
    }
    async createProductSlider(createDtoFeedback) {
        await this.customtestimonialService.createSlider(createDtoFeedback);
        return { message: 'create product successfully' };
    }
    async getAllSlider() {
        const data = await this.customtestimonialService.findAllSlider();
        return data;
    }
    async findOne(id) {
        const search = await this.customtestimonialService.findOnebyId(id);
        return search;
    }
    async update(id, createDtoFeedback) {
        return this.customtestimonialService.update(id, createDtoFeedback);
    }
    async delete(id) {
        await this.customtestimonialService.delete(id);
    }
};
exports.CustomTestimoinalController = CustomTestimoinalController;
__decorate([
    (0, common_1.Version)('1'),
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_Feedback_dto_1.CreateDtoFeedback]),
    __metadata("design:returntype", Promise)
], CustomTestimoinalController.prototype, "createProductSlider", null);
__decorate([
    (0, common_1.Version)('1'),
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomTestimoinalController.prototype, "getAllSlider", null);
__decorate([
    (0, common_1.Version)('1'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomTestimoinalController.prototype, "findOne", null);
__decorate([
    (0, common_1.Version)('1'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_Feedback_dto_1.CreateDtoFeedback]),
    __metadata("design:returntype", Promise)
], CustomTestimoinalController.prototype, "update", null);
__decorate([
    (0, common_1.Version)('1'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomTestimoinalController.prototype, "delete", null);
exports.CustomTestimoinalController = CustomTestimoinalController = __decorate([
    (0, common_1.UseGuards)(secret_header_guard_1.HeaderGuard),
    (0, common_1.Controller)('client'),
    __metadata("design:paramtypes", [custom_land_testimoinal_service_1.CustomtestimonialService])
], CustomTestimoinalController);
//# sourceMappingURL=custom-land-testimoinal.controller.js.map