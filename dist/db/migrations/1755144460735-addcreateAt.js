"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddcreateAt1755144460735 = void 0;
class AddcreateAt1755144460735 {
    name = 'AddcreateAt1755144460735';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "CustomerFeedback" ADD "createAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "LandingPage" ADD "createAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "LandingPage" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "CustomerFeedback" DROP COLUMN "createAt"`);
    }
}
exports.AddcreateAt1755144460735 = AddcreateAt1755144460735;
//# sourceMappingURL=1755144460735-addcreateAt.js.map