"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerFeedback1754906857827 = void 0;
class CustomerFeedback1754906857827 {
    name = 'CustomerFeedback1754906857827';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "CustomerFeedback" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "title" character varying NOT NULL, "content" character varying NOT NULL, "image" character varying, CONSTRAINT "PK_aefb143637956e68fd973385c16" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "CustomerFeedback"`);
    }
}
exports.CustomerFeedback1754906857827 = CustomerFeedback1754906857827;
//# sourceMappingURL=1754906857827-CustomerFeedback.js.map