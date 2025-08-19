"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateImagetable1754394337114 = void 0;
class CreateImagetable1754394337114 {
    name = 'CreateImagetable1754394337114';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "ImageFile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image" character varying NOT NULL, CONSTRAINT "PK_4f749f84ac7503ad905fdcdf6b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "LandingPage" DROP COLUMN "popular"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "LandingPage" ADD "popular" boolean NOT NULL`);
        await queryRunner.query(`DROP TABLE "ImageFile"`);
    }
}
exports.CreateImagetable1754394337114 = CreateImagetable1754394337114;
//# sourceMappingURL=1754394337114-createImagetable.js.map