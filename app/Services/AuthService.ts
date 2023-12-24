import { RegisterDto } from 'App/Dto/AuthDto';
import User from 'App/Models/User';

export default class AuthService {
	public async register(payload: RegisterDto) {
		const registeredUser = await User.create(payload);

		return registeredUser;
	}
}