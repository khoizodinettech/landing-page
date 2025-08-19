"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandingPagechangetypecontent1754351912893 = void 0;
class LandingPagechangetypecontent1754351912893 {
    name = 'LandingPagechangetypecontent1754351912893';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "LandingPage" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "LandingPage" ADD "content" text`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "LandingPage" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "LandingPage" ADD "content" text array NOT NULL`);
    }
}
exports.LandingPagechangetypecontent1754351912893 = LandingPagechangetypecontent1754351912893;
//# sourceMappingURL=1754351912893-landingPagechangetypecontent.js.map