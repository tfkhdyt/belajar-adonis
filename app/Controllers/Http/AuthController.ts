import { inject } from '@adonisjs/fold';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import AuthService from 'App/Services/AuthService';
import LoginValidator from 'App/Validators/LoginValidator';
import RegisterValidator from 'App/Validators/RegisterValidator';

@inject()
export default class AuthController {
	constructor(private authService: AuthService) {}

	public async register({ request }: HttpContextContract) {
		const payload = await request.validate(RegisterValidator);

		const registeredUser = await this.authService.register(payload);

		return {
			message: 'Registration success',
			data: registeredUser,
		};
	}

	public async login({ request, auth }: HttpContextContract) {
		const payload = await request.validate(LoginValidator);

		const token = await auth
			.use('api')
			.attempt(payload.email, payload.password, {
				expiresIn: payload.rememberMe ? '30 days' : '1 day',
			});

		return token;
	}
}
