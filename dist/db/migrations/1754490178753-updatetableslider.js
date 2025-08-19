"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Updatetableslider1754490178753 = void 0;
class Updatetableslider1754490178753 {
    name = 'Updatetableslider1754490178753';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "Slider" ADD "image" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "Slider" DROP COLUMN "image"`);
    }
}
exports.Updatetableslider1754490178753 = Updatetableslider1754490178753;
//# sourceMappingURL=1754490178753-updatetableslider.js.map