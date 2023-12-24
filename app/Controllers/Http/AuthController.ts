import { inject } from '@adonisjs/fold';
import AuthService from 'App/Services/AuthService';
import LoginValidator from 'App/Validators/LoginValidator';
import RegisterValidator from 'App/Validators/RegisterValidator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

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

		return {
			message: 'Login success',
			token,
		};
	}

	public async inspect({ auth }: HttpContextContract) {
		const user = await auth.use('api').authenticate();

		return { data: user };
	}

	public async logout({ auth }: HttpContextContract) {
		await auth.use('api').authenticate();
		await auth.use('api').revoke();

		return {
			message: 'Token has been revoked',
		};
	}
}
