import { DateTime } from 'luxon';
import Question from './Question';
import User from './User';
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';

export default class Answer extends BaseModel {
	@column({ isPrimary: true })
	public id: number;

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

	@belongsTo(() => User)
	public author: BelongsTo<typeof User>;

	@belongsTo(() => Question)
	public question: BelongsTo<typeof Question>;
}
