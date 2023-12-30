import { CreateUserDto } from 'App/Dto/UserDto';
import Question from 'App/Models/Question';

export default class QuestionsService {
	public async findAllQuestions() {
		return Question.all();
	}

	public async createQuestion(payload: CreateUserDto) {
		const question = await Question.create({
			content: payload.content,
			userId: payload.userId,
		});

		return question;
	}

	public async findQuestionById(questionId: number) {
		return Question.findOrFail(questionId);
	}

	public async deleteQuestion(question: Question) {
		await question.delete();
	}
}
