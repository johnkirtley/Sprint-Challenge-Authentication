const db = require('../database/dbConfig');

module.exports = {
	add,
	find,
	findById
};

function find() {
	return db('users').select('id', 'username');
}

function findById(id) {
	return db('users')
		.where({ id })
		.select('id', 'username')
		.first();
}

async function add(user) {
	const [id] = await db('users').insert(user, 'id');

	return findById(id);
}
