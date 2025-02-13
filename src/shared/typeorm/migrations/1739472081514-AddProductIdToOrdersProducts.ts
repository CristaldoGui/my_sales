import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddProductIdToOrdersProducts1739472081514 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'orders_products',
            new TableColumn({
              name: 'product_id',
              type: 'integer',
              isNullable: true,
            }),
          );

          await queryRunner.createForeignKey(
            'orders_products',
            new TableForeignKey({
              name: 'orders_products_product',
              columnNames: ['product_id'],
              referencedTableName: 'products',
              referencedColumnNames: ['id'],
              onDelete: 'SET NULL',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('orders_prodcuts', 'product_id');
      await queryRunner.dropForeignKey(
        'orders_products',
        'orders_products_product',
      );
    }

}
