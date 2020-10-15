import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1602723325373 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'images',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'path',
          type: 'varchar',
        },
        {
          name: 'orphanage_id',
          type: 'integer',
        }
      ],
      foreignKeys: [
        {
          name: 'ImageOrphanage', // any name is acceptable
          columnNames: ['orphanage_id'], // column that will store the relationship
          referencedTableName: 'orphanages', // which table it's relating to
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }
}
