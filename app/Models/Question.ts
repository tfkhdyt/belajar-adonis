import { DateTime } from 'luxon';
import Answer from './Answer';
import User from './User';
import { slugify } from '@ioc:Adonis/Addons/LucidSlugify';
import {
	BaseModel,
	BelongsTo,
	HasMany,
	belongsTo,
	column,
	hasMany,
} from '@ioc:Adonis/Lucid/Orm';

export default class Question extends BaseModel {
	@column({ isPrimary: true })
	public id: number;

	@column()
	public userId: number;

	@column()
	public content: string;

	@column()
	@slugify({
		strategy: 'shortId',
		fields: ['content'],
		allowUpdates: true,
		maxLength: 50,
	})
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
