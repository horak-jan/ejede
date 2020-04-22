const express = require('express');
const { check } = require('express-validator');
const multer = require('multer');

const House = require('../controllers/house');
const validate = require('../middlewares/validate');

const router = express.Router();

const upload = multer().single('image');

//SEED
router.get('/seed', House.seed);

//INDEX
router.get('/', House.index);

//STORE
router.post(
	'/',
	upload,
	[
		check('name').not().isEmpty().withMessage('House name is required'),
		check('address').not().isEmpty().withMessage('House location is required'),
		check('description')
			.not()
			.isEmpty()
			.withMessage('House description is required'),
	],
	validate,
	House.store
);

//SHOW
router.get('/:id', House.show);

//UPDATE
router.put('/:id', upload, House.update);

//DELETE
router.delete('/:id', House.destroy);

module.exports = router;
