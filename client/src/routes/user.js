const express = require('express');
const { check } = require('express-validator');
const multer = require('multer');

const User = require('../controllers/user');
const validate = require('../middlewares/validate');

const router = express.Router();

const upload = multer().single('profileImage');

//index
router.get('/', User.index);

//store
router.post(
	'/',
	[
		check('email')
			.isEmail()
			.withMessage('Enter a valid email address'),
		check('username')
			.not()
			.isEmpty()
			.withMessage('Your username is required'),
		check('firstName')
			.not()
			.isEmpty()
			.withMessage('Your first name is required'),
		check('lastName')
			.not()
			.isEmpty()
			.withMessage('Your last name is required')
	],
	validate,
	User.store
);

//get user
router.get('/:id', User.show);

//update a user
router.put('/:id', upload, User.update);

module.exports = router;
