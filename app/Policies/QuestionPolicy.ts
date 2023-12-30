import { BasePolicy } from '@ioc:Adonis/Addons/Bouncer';
import User from 'App/Models/User';
import Question from 'App/Models/Question';

export default class QuestionPolicy extends BasePolicy {
	public async update(user: User, question: Question) {
		return user.id === question.userId;
	}

	public async delete(user: User, question: Question) {
		return user.id === question.userId;
	}
}
