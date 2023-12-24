import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
	protected tableName = 'answers';

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.text('id').primary();
			table.text('question_id').references('questions.id').notNullable();
			table.string('content', 1000).notNullable();
			table.boolean('is_best_answer').notNullable().defaultTo(false);

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
