import {MigrationInterface, QueryRunner} from "typeorm";

export class boardMigration1638692434832 implements MigrationInterface {
    name = 'boardMigration1638692434832'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "board" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "message" varchar(255) NOT NULL, "date" datetime NOT NULL, "mydataId" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_board" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "message" varchar(255) NOT NULL, "date" datetime NOT NULL, "mydataId" integer, CONSTRAINT "FK_2c385d382ae585d22ab57aaeeb0" FOREIGN KEY ("mydataId") REFERENCES "mydata" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_board"("id", "message", "date", "mydataId") SELECT "id", "message", "date", "mydataId" FROM "board"`);
        await queryRunner.query(`DROP TABLE "board"`);
        await queryRunner.query(`ALTER TABLE "temporary_board" RENAME TO "board"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "board" RENAME TO "temporary_board"`);
        await queryRunner.query(`CREATE TABLE "board" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "message" varchar(255) NOT NULL, "date" datetime NOT NULL, "mydataId" integer)`);
        await queryRunner.query(`INSERT INTO "board"("id", "message", "date", "mydataId") SELECT "id", "message", "date", "mydataId" FROM "temporary_board"`);
        await queryRunner.query(`DROP TABLE "temporary_board"`);
        await queryRunner.query(`DROP TABLE "board"`);
    }

}
