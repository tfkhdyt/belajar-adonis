/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';

Route.get('/', async () => {
	return 'Hello world';
});

Route.group(() => {
	Route.post('/register', 'AuthController.register');
	Route.post('/login', 'AuthController.login');
	Route.group(() => {
		Route.get('/inspect', 'AuthController.inspect');
		Route.delete('/logout', 'AuthController.logout');
	}).middleware('auth');
}).prefix('/auth');

Route.resource('users', 'UsersController').apiOnly();

Route.group(() => {
	Route.get('/me', 'QuestionsController.indexByUserId');
}).prefix('/questions');
Route.resource('questions', 'QuestionsController').apiOnly();

Route.shallowResource('questions.answers', 'AnswersController').apiOnly();
