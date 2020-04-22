// for seeding
const faker = require('faker');

const User = require('../models/user');
const House = require('../models/house');
const { uploader } = require('../utils/index');

const limit_ = 5;

// GET api/house
//  Returns all houses with pagination

exports.index = async function (req, res) {
	let aggregate_options = [];

	//pagination
	let page = parseInt(req.query.page) || 1;
	let limit = parseInt(req.query.limit) || limit_;

	//set the options for pagination
	const options = {
		page,
		limit,
		collation: { locale: 'cz' },
		customLabels: {
			totalDocs: 'totalResults',
			docs: 'houses',
		},
	};

	//sorting
	let sortOrder =
		req.query.sort_order && req.query.sort_order === 'desc' ? -1 : 1;
	aggregate_options.push({ $sort: { 'data.start_date': sortOrder } });

	//  aggregation
	const myAggregate = House.aggregate(aggregate_options);
	const result = await House.aggregatePaginate(myAggregate, options);
	res.status(200).json(result);
};

//  POST api/house
//  creating new house

exports.store = async (req, res) => {
	try {
		const userId = req.user._id;
		const newHouse = new House({ ...req.body, userId });

		const house = await newHouse.save();

		//if there is no image, return success message
		if (!req.file)
			return res.status(200).json({ house, message: 'House added' });

		//upload to mongo
		const result = await uploader(req);
		const house_ = await House.findByIdAndUpdate(
			house._id,
			{ $set: { image: result.url } },
			{ new: true }
		);

		res.status(200).json({ house: house_, message: 'House added' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

//  GET api/house/:id
//  get a single house

exports.show = async function (req, res) {
	try {
		const id = req.params.id;

		const house = await House.findById(id);

		if (!house)
			return res
				.status(401)
				.json({ message: 'House with this id does not exist' });

		res.status(200).json({ house });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

//  PUT api/house/{id}
//  Update house info

exports.update = async function (req, res) {
	try {
		const update = req.body;
		const id = req.params.id;
		const userId = req.user._id;

		const house = await House.findOneAndUpdate(
			{ _id: id, userId },
			{ $set: update },
			{ new: true }
		);

		if (!house)
			return res
				.status(401)
				.json({ message: 'House with this id does not exist' });

		if (!req.file)
			return res.status(200).json({ house, message: 'House has been updated' });

		// upload to cloud
		const result = await uploader(req);
		const house_ = await House.findOneAndUpdate(
			{ _id: id, userId },
			{ $set: { image: result.url } },
			{ new: true }
		);

		res.status(200).json({ house: house_, message: 'House has been updated' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

//  DESTROY api/house/{id}
//  Delete house

exports.destroy = async function (req, res) {
	try {
		const id = req.params.id;
		const userId = req.user._id;

		await House.findOneAndDelete({ _id: id, userId });

		res.status(200).json({ message: 'House has been deleted' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

/**
 * Seed the db
 */
exports.seed = async function (req, res) {
	try {
		let ids = [];
		let houses = [];

		for (let i = 0; i < 5; i++) {
			const password = '_' + Math.random().toString(36).substr(2, 9); //generate a random password
			let newUser = new User({
				email: faker.internet.email(),
				password,
				firstName: faker.name.firstName(),
				username: faker.name.firstName(),
				lastName: `${faker.name.lastName()}`,
				isVerified: true,
				bio: faker.lorem.paragraph(),
				profileImage: faker.image.avatar(),
			});

			const user = await newUser.save();
			ids.push(user._id);
		}

		for (let i = 0; i < ids.length; i++) {
			//Create 5 houses for each user
			for (let j = 0; j < 5; j++) {
				const newHouse = new House({
					title: faker.address.city(),
					// location: faker.address.streetName(),
					address: `${faker.address.streetAddress()} ${faker.address.secondaryAddress()}`,
					description: faker.lorem.paragraph(),
					guests: faker.random.number(5),
					bedrooms: faker.random.number(3),
					beds: faker.random.number(4),
					price: faker.random.number(500),
					baths: faker.random.number(2),
					wifi: faker.random.boolean(),
					ac: faker.random.boolean(),
					pets: faker.random.boolean(),
					washingMachine: faker.random.boolean(),
					smoking: faker.random.boolean(),
					tv: faker.random.boolean(),
					userId: ids[i],
				});

				let house = await newHouse.save();
				houses.push(house);
			}
		}

		res.status(200).json({ ids, houses, message: 'Database seeded!' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
