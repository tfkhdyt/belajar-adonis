import Question from 'App/Models/Question';

export default class QuestionsService {
	public async index() {
		return Question.all();
	}

	public async store(content: string) {
		const question = await Question.create({
			content,
			slug: content,
		});

		return question;
	}
}