"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLandProductModule = void 0;
const custom_land_simple_controller_1 = require("./custom-land-simple.controller");
const typeorm_1 = require("@nestjs/typeorm");
const customerFeedbackSlider_entity_1 = require("./entities/customerFeedbackSlider.entity");
const testimonial_entity_1 = require("./entities/testimonial.entity");
const custom_land_testimoinal_controller_1 = require("./custom-land-testimoinal.controller");
const custom_land_testimoinal_service_1 = require("./custom-land-testimoinal.service");
const custom_land_simple_service_1 = require("./custom-land-simple.service");
const common_1 = require("@nestjs/common");
const secret_header_guard_1 = require("../../Guards/secret-header.guard");
let CustomLandProductModule = class CustomLandProductModule {
};
exports.CustomLandProductModule = CustomLandProductModule;
exports.CustomLandProductModule = CustomLandProductModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([customerFeedbackSlider_entity_1.CustomerFeedback, testimonial_entity_1.LandingPage])],
        controllers: [custom_land_simple_controller_1.CustomLandSimpleController, custom_land_testimoinal_controller_1.CustomTestimoinalController],
        providers: [custom_land_simple_service_1.CustomLandSimpleService, custom_land_testimoinal_service_1.CustomtestimonialService, secret_header_guard_1.HeaderGuard],
    })
], CustomLandProductModule);
//# sourceMappingURL=custom-land-simple.module.js.map