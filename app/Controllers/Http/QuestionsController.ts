import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { inject } from '@adonisjs/fold';

import QuestionsService from 'App/Services/QuestionsService';

@inject()
export default class QuestionsController {
	constructor(private questionsService: QuestionsService) {}

	public async index({}: HttpContextContract) {
		return this.questionsService.index();
	}

	public async store({ request }: HttpContextContract) {
		const data = request.only(['content']);
		return this.questionsService.store(data.content);
	}

	public async show({ params }: HttpContextContract) {
		return `get single question with an id of ${params.id}`;
	}

	public async update({ params }: HttpContextContract) {
		return `updating a question with an id of ${params.id}`;
	}

	public async destroy({ params }: HttpContextContract) {
		return `deleting a question with an id of ${params.id}`;
	}
}
