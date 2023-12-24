import { DateTime } from 'luxon';
import Answer from './Answer';
import Question from './Question';
import Hash from '@ioc:Adonis/Core/Hash';
import {
	BaseModel,
	HasMany,
	beforeSave,
	column,
	hasMany,
} from '@ioc:Adonis/Lucid/Orm';

export default class User extends BaseModel {
	@column({ isPrimary: true })
	public id: number;

	@column()
	public name: string;

	@column()
	public username: string;

	@column()
	public email: string;

	@column({ serializeAs: null })
	public password: string;

	@column()
	public rememberMeToken: string | null;

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime;

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime;

	@beforeSave()
	public static async hashPassword(user: User) {
		if (user.$dirty.password) {
			user.password = await Hash.make(user.password);
		}
	}

	@hasMany(() => Question)
	public questions: HasMany<typeof Question>;

	@hasMany(() => Answer)
	public answers: HasMany<typeof Answer>;
}
