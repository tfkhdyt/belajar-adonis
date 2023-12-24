import { DateTime } from 'luxon';
import {
	BaseModel,
	BelongsTo,
	HasMany,
	belongsTo,
	column,
	hasMany,
} from '@ioc:Adonis/Lucid/Orm';
import Answer from './Answer';
import User from './User';

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

	@belongsTo(() => User)
	public author: BelongsTo<typeof User>;

	@hasMany(() => Answer)
	public answers: HasMany<typeof Answer>;
}
