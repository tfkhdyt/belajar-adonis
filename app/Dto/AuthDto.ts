export type RegisterDto = {
	name: string;
	username: string;
	email: string;
	password: string;
};

export type LoginDto = {
	email: string;
	password: string;
};