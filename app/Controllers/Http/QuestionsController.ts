import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class QuestionsController {
	public async index({}: HttpContextContract) {
		return 'listing questions';
	}

	public async store({}: HttpContextContract) {
		return 'creating a question';
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
