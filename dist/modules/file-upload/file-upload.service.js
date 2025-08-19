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
exports.FileUploadService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const customerFeedbackSlider_entity_1 = require("../custom-land-product/entities/customerFeedbackSlider.entity");
let FileUploadService = class FileUploadService {
    customerFeedback;
    constructor(customerFeedback) {
        this.customerFeedback = customerFeedback;
    }
    async handleFileUpload(file, id) {
        if (!file) {
            throw new common_1.BadRequestException('no file uploaded');
        }
        const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];
        if (!allowedMimeTypes.includes(file.mimetype)) {
            throw new common_1.BadRequestException('invalid file type');
        }
        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            throw new common_1.BadRequestException('file is too large!');
        }
        const slider = await this.customerFeedback.findOne({ where: { id } });
        if (!slider) {
            throw new common_1.NotFoundException('get id not found');
        }
        slider.image = file.filename;
        await this.customerFeedback.save(slider);
        return {
            message: 'File uploaded successfully',
            filePath: file.path,
            filename: file.filename,
        };
    }
};
exports.FileUploadService = FileUploadService;
exports.FileUploadService = FileUploadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(customerFeedbackSlider_entity_1.CustomerFeedback)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FileUploadService);
//# sourceMappingURL=file-upload.service.js.map