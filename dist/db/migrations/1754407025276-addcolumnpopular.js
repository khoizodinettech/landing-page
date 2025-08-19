"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addcolumnpopular1754407025276 = void 0;
class Addcolumnpopular1754407025276 {
    name = 'Addcolumnpopular1754407025276';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "LandingPage" ADD "popular" boolean`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "LandingPage" DROP COLUMN "popular"`);
    }
}
exports.Addcolumnpopular1754407025276 = Addcolumnpopular1754407025276;
//# sourceMappingURL=1754407025276-addcolumnpopular.js.map