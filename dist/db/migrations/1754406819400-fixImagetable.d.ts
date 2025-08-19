import { MigrationInterface, QueryRunner } from "typeorm";
export declare class FixImagetable1754406819400 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
