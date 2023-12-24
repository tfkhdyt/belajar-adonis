import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
	protected tableName = 'questions';

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.text('id').primary();
			table.text('content').notNullable();
			table.string('slug', 100).notNullable().unique();

			/**
			 * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
			 */
			table.timestamp('created_at', { useTz: true });
			table.timestamp('updated_at', { useTz: true });
		});
	}

	public async down() {
		this.schema.dropTable(this.tableName);
	}
}
