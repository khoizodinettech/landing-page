"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fixnametableslider1754550763452 = void 0;
class Fixnametableslider1754550763452 {
    name = 'Fixnametableslider1754550763452';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "Testimonial" RENAME TO "TestimonialSlider"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "TestimonialSlider "`);
    }
}
exports.Fixnametableslider1754550763452 = Fixnametableslider1754550763452;
//# sourceMappingURL=1754550763452-fixnametableslider.js.map