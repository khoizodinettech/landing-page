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
exports.CustomLandSimpleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const testimonial_entity_1 = require("./entities/testimonial.entity");
let CustomLandSimpleService = class CustomLandSimpleService {
    simpleRepository;
    constructor(simpleRepository) {
        this.simpleRepository = simpleRepository;
    }
    async create(createDtoLandingPage) {
        const landingpage = this.simpleRepository.create(createDtoLandingPage);
        return this.simpleRepository.save(landingpage);
    }
    async findAll() {
        return this.simpleRepository.find();
    }
    async findOnebyId(id) {
        return this.simpleRepository.findOne({ where: { id } });
    }
    async update(id, createDtoLandingPage) {
        await this.simpleRepository.update(id, createDtoLandingPage);
        const user = await this.findOnebyId(id);
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }
    async delete(id) {
        const result = await this.simpleRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
    }
};
exports.CustomLandSimpleService = CustomLandSimpleService;
exports.CustomLandSimpleService = CustomLandSimpleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(testimonial_entity_1.LandingPage)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomLandSimpleService);
//# sourceMappingURL=custom-land-simple.service.js.map