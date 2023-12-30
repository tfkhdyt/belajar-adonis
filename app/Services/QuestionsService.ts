import { CreateUserDto } from 'App/Dto/UserDto';
import Question from 'App/Models/Question';

export default class QuestionsService {
	public async index(page = 1, perPage = 5) {
		return Question.query()
			.orderBy('created_at', 'asc')
			.paginate(page, perPage);
	}

	public async store(payload: CreateUserDto) {
		const question = await Question.create({
			content: payload.content,
			userId: payload.userId,
		});

		return question;
	}

	public async show(questionId: number) {
		return Question.findOrFail(questionId);
	}
}
