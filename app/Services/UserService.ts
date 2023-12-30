import User from 'App/Models/User';

export default class UserService {
	async findUsersByUsernameOrName(query: string) {
		return User.query()
			.whereILike('name', `%${query}%`)
			.orWhereILike('username', `%${query}%`);
	}

	async findUserByUsername(username: string) {
		return User.findByOrFail('username', username);
	}
}
