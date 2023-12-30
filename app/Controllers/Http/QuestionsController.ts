import { inject } from '@adonisjs/fold';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import QuestionsService from 'App/Services/QuestionsService';
import CreateUserValidator from 'App/Validators/CreateUserValidator';

@inject()
export default class QuestionsController {
	constructor(private questionsService: QuestionsService) {}

	public async index({}: HttpContextContract) {
		return this.questionsService.findAllQuestions();
	}

	public async indexByUserId({ auth }: HttpContextContract) {
		const user = await auth.use('api').authenticate();

		return this.questionsService.findAllQuestionsByUserId(user.id);
	}

	public async store({ auth, request }: HttpContextContract) {
		const user = await auth.use('api').authenticate();
		const payload = await request.validate(CreateUserValidator);

		return this.questionsService.createQuestion({
			content: payload.content,
			userId: user.id,
		});
	}

	// public async show({ params }: HttpContextContract) {
	// 	return this.questionsService.show(params.id);
	// }

	public async update({ params }: HttpContextContract) {
		return `updating a question with an id of ${params.id}`;
	}

	public async destroy({ auth, params, bouncer }: HttpContextContract) {
		await auth.use('api').authenticate();
		const { id } = params;

		const question = await this.questionsService.findQuestionById(id);
		await bouncer.with('QuestionPolicy').authorize('delete', question);

		await this.questionsService.deleteQuestion(question);

		return {
			message: `Question with id ${id} has been deleted`,
		};
	}
}
