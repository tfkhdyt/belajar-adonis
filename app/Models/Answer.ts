import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Answer extends BaseModel {
	@column({ isPrimary: true })
	public id: string;

	@column()
	public questionId: string;

	@column()
	public content: string;

	@column()
	public isBestAnswer: boolean;

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime;

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime;
}
