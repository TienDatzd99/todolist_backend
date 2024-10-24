import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTableTask1729769471900 implements MigrationInterface {
    name = 'UpdateTableTask1729769471900'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`last_name\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`refresh_token\``);
        await queryRunner.query(`ALTER TABLE \`task\` ADD \`title\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD \`description\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`task\` ADD \`refresh_token\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD \`password\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD \`last_name\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD \`email\` varchar(255) NOT NULL`);
    }

}
