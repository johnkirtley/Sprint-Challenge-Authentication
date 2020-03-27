const request = require('supertest');
const server = require('../api/server');

describe('server.js', () => {
	describe('POST Register', () => {
		// it('Should return status 200', async () => {
		// 	const response = await request(server)
		// 		.post('/api/auth/register')
		// 		.send({ username: 'newuser5', password: 'password' });
		// 	expect(response.status).toBe(200);
		// });
		// it('Should return username', async () => {
		// 	const response = await request(server)
		// 		.post('/api/auth/register')
		// 		.send({ username: 'newuser10', password: 'password' });
		// 	expect(response.body.username).toBe('newuser10');
		// });
	});

	describe('POST Login', () => {
		it('Should return status 200', async () => {
			const response = await request(server)
				.post('/api/auth/login')
				.send({ username: 'John', password: 'newpassword' });
			expect(response.status).toBe(201);
		});
		it('Should return Logged In', async () => {
			const response = await request(server)
				.post('/api/auth/login')
				.send({ username: 'John', password: 'newpassword' });
			expect(response.body.message).toBe('Logged In');
		});
	});
});
