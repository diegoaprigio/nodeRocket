import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSettings1619746542549 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "settings",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "username",
                        type: "varchar"
                    },
                    {
                        name: "chat",
                        type: "boolean",
                        default: true,
                    },
                    {
                        name: "created_at",
                        type: "timespan",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timespan",
                        default: "now()"
                    }
                    
                ]

            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings");
    }


}
