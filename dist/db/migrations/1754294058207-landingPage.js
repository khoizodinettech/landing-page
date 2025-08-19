"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandingPage1754294058207 = void 0;
class LandingPage1754294058207 {
    name = 'LandingPage1754294058207';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "LandingPage" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "LandingPage" ADD "cusmonth" character varying`);
        await queryRunner.query(`ALTER TABLE "LandingPage" DROP CONSTRAINT "PK_44ea2d71821f9bb157f14ce3b9f"`);
        await queryRunner.query(`ALTER TABLE "LandingPage" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "LandingPage" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "LandingPage" ADD CONSTRAINT "PK_44ea2d71821f9bb157f14ce3b9f" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "Slider" DROP CONSTRAINT "PK_aef06b22f43b4b3f4d7a08885eb"`);
        await queryRunner.query(`ALTER TABLE "Slider" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "Slider" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "Slider" ADD CONSTRAINT "PK_aef06b22f43b4b3f4d7a08885eb" PRIMARY KEY ("id")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "Slider" DROP CONSTRAINT "PK_aef06b22f43b4b3f4d7a08885eb"`);
        await queryRunner.query(`ALTER TABLE "Slider" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "Slider" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Slider" ADD CONSTRAINT "PK_aef06b22f43b4b3f4d7a08885eb" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "LandingPage" DROP CONSTRAINT "PK_44ea2d71821f9bb157f14ce3b9f"`);
        await queryRunner.query(`ALTER TABLE "LandingPage" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "LandingPage" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "LandingPage" ADD CONSTRAINT "PK_44ea2d71821f9bb157f14ce3b9f" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "LandingPage" DROP COLUMN "cusmonth"`);
        await queryRunner.query(`ALTER TABLE "LandingPage" ADD "date" character varying NOT NULL`);
    }
}
exports.LandingPage1754294058207 = LandingPage1754294058207;
//# sourceMappingURL=1754294058207-landingPage.js.map