import Question from 'App/Models/Question';

export default class QuestionsService {
	public async index(page = 1, perPage = 5) {
		return Question.query()
			.orderBy('created_at', 'asc')
			.paginate(page, perPage);
	}

	public async store(content: string) {
		const question = await Question.create({
			content,
			slug: content,
		});

		return question;
	}

	public async show(questionId: number) {
		return Question.findOrFail(questionId);
	}
}
