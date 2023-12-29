import { inject } from '@adonisjs/fold';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import UserService from 'App/Services/UserService';

@inject()
export default class UsersController {
	constructor(private userService: UserService) {}

	public async index({ request }: HttpContextContract) {
		const qs = request.qs();

		if (qs.query) {
			return this.userService.findUsersByUsernameOrName(qs.query);
		}

		return [];
	}

	public async create({}: HttpContextContract) {}

	public async store({}: HttpContextContract) {}

	public async show({ params }: HttpContextContract) {
		const { id: username } = params;

		return this.userService.findUserByUsername(username);
	}

	public async edit({}: HttpContextContract) {}

	public async update({}: HttpContextContract) {}

	public async destroy({}: HttpContextContract) {}
}
