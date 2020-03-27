const request = require('supertest');
const server = require('../api/server');

describe('server.js', () => {
	describe('GET Jokes', () => {
		it('Should return status 401 with invalid credentials', async () => {
			const response = await request(server).get('/api/jokes/');
			expect(response.status).toBe(401);
		});
		it('Should return shall not pass with invalid credentials', async () => {
			const response = await request(server).get('/api/jokes/');
			expect(response.body.you).toBe('shall not pass!');
		});
	});
});
