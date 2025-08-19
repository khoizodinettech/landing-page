import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CustomerFeedback1754906857827 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
