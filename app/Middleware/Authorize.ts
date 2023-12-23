import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class Authorize {
	public async handle({}: HttpContextContract, next: () => Promise<void>) {
		// code for middleware goes here. ABOVE THE NEXT CALL
		console.log('Ini adalah middleware Authorize');
		await next();
	}
}
