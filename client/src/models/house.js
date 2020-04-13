const mongoose = require('mongoose');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const HouseSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},

		title: {
			type: String,
			required: 'House name is required',
		},

		city: {
			type: String,
			required: true,
			default: 'Ostrava',
		},

		address: {
			type: String,
			required: true,
		},
		guests: {
			type: Number,
			required: true,
		},
		bedrooms: {
			type: Number,
			required: true,
		},
		beds: {
			type: Number,
			required: true,
		},
		baths: {
			type: Number,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		wifi: {
			type: Boolean,
		},
		ac: {
			type: Boolean,
		},
		washingMashine: {
			type: Boolean,
		},
		pets: {
			type: Boolean,
		},
		tv: {
			type: Boolean,
		},
		smoking: {
			type: Boolean,
		},
		kitchen: {
			type: Boolean,
		},
		description: {
			type: String,
			required: true,
			max: 255,
		},

		image: [String],
	},
	{ timestamps: true }
);

HouseSchema.plugin(aggregatePaginate);

module.exports = mongoose.model('House', HouseSchema);
