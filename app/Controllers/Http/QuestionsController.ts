import { inject } from '@adonisjs/fold';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import QuestionsService from 'App/Services/QuestionsService';
import CreateUserValidator from 'App/Validators/CreateUserValidator';

@inject()
export default class QuestionsController {
	constructor(private questionsService: QuestionsService) {}

	public async index({ request }: HttpContextContract) {
		const { page, perPage } = request.qs();

		return this.questionsService.index(page, perPage);
	}

	public async store({ auth, request }: HttpContextContract) {
		const user = await auth.use('api').authenticate();
		const payload = await request.validate(CreateUserValidator);

		return this.questionsService.store({
			content: payload.content,
			userId: user.id,
		});
	}

	public async show({ params }: HttpContextContract) {
		return this.questionsService.show(params.id);
	}

	public async update({ params }: HttpContextContract) {
		return `updating a question with an id of ${params.id}`;
	}

	public async destroy({ params }: HttpContextContract) {
		return `deleting a question with an id of ${params.id}`;
	}
}
