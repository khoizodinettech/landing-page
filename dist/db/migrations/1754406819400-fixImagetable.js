"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixImagetable1754406819400 = void 0;
class FixImagetable1754406819400 {
    name = 'FixImagetable1754406819400';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "ImageFile" RENAME COLUMN "image" TO "filepath"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "ImageFile" RENAME COLUMN "filepath" TO "image"`);
    }
}
exports.FixImagetable1754406819400 = FixImagetable1754406819400;
//# sourceMappingURL=1754406819400-fixImagetable.js.map