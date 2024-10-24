import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1729769310014 implements MigrationInterface {
    name = 'CreateUserTable1729769310014'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`refresh_token\` varchar(255) NOT NULL, \`last_name\` varchar(255) NULL, \`password\` varchar(255) NULL, \`first_name\` varchar(255) NULL, \`status\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`task\` ADD \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD \`last_name\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD \`password\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`task\` CHANGE \`status\` \`status\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`task\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`task\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`task\` CHANGE \`status\` \`status\` varchar(255) NOT NULL DEFAULT 'pending'`);
        await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`last_name\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`task\` ADD \`description\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD \`title\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
