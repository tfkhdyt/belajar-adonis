import { DateTime } from 'luxon';
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm';
import Answer from './Answer';

export default class Question extends BaseModel {
	@column({ isPrimary: true })
	public id: number;

	@column()
	public content: string;

	@column()
	public slug: string;

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime;

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime;

	@hasMany(() => Answer)
	public answers: HasMany<typeof Answer>;
}
