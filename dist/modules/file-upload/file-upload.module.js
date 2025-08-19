"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadModule = void 0;
const common_1 = require("@nestjs/common");
const file_upload_service_1 = require("./file-upload.service");
const file_upload_controller_1 = require("./file-upload.controller");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const typeorm_1 = require("@nestjs/typeorm");
const customerFeedbackSlider_entity_1 = require("../custom-land-product/entities/customerFeedbackSlider.entity");
const get_file_controller_1 = require("./get-file.controller");
const secret_header_guard_1 = require("../../Guards/secret-header.guard");
let FileUploadModule = class FileUploadModule {
};
exports.FileUploadModule = FileUploadModule;
exports.FileUploadModule = FileUploadModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([customerFeedbackSlider_entity_1.CustomerFeedback]),
            platform_express_1.MulterModule.register({
                storage: (0, multer_1.diskStorage)({
                    destination: './uploads',
                    filename: (req, file, cb) => {
                        const filename = `${Date.now()}-${file.originalname}`;
                        cb(null, filename);
                    },
                }),
            }),
        ],
        controllers: [file_upload_controller_1.FileUploadController, get_file_controller_1.GetFIleController],
        providers: [file_upload_service_1.FileUploadService, secret_header_guard_1.HeaderGuard],
    })
], FileUploadModule);
//# sourceMappingURL=file-upload.module.js.map