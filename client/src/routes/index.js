const path = require('path');
const INDEX = path.resolve('public/build/index.html');

const auth = require('./auth');
const user = require('./user');
const house = require('./house');
const authenticate = require('../middlewares/authenticate');

module.exports = app => {
	app.get('/', (req, res) => {
		res.sendFile(INDEX);
	});

	app.use('/api/auth', auth);
	app.use('/api/user', authenticate, user);
	app.use('/api/house', authenticate, house);
};
