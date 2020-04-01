import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';

import { useStateValue } from '../../state';

const HomeForm = () => {
	const { register, handleSubmit, errors } = useForm();

	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setendDate] = useState(new Date());

	const [{ bookingDate }, dispatch] = useStateValue();

	const onSubmit = async data => {
		try {
			console.log(data.adults);
			dispatch({
				type: 'bookDate',
				setStartDate: startDate,
				setEndDate: endDate,
				setAdults: data.adults,
				setKids: data.kids
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<div className='home-picker'>
				<div className='picker'>
					PŘÍJEZD
					<DatePicker
						calendarIcon={null}
						onChange={setStartDate}
						value={startDate}
						format={'dd-MM-y'}
						locale={'cs'}
						minDate={new Date()}
					/>
				</div>
				<div className='picker second'>
					ODJEZD
					<DatePicker
						calendarIcon={null}
						onChange={setendDate}
						value={endDate}
						format={'dd-MM-y'}
						locale={'cs'}
						minDate={new Date()}
						required={true}
					/>
				</div>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='home-form-selects'>
					<div className='form-select'>
						<label>
							DOSPĚLÍ
							<br />
							<select name='adults' ref={register}>
								<option value={1}>1 DOSPĚLÝ</option>
								<option value={2}>2 DOSPĚLÍ</option>
								<option value={3}>3 DOSPĚLÍ</option>
								<option value={4}>4 DOSPĚLÍ</option>
							</select>
						</label>
					</div>
					<div className='form-select'>
						<label>
							DĚTI
							<br />
							<select name='kids' ref={register}>
								<option value={1}>1 DÍTĚ</option>
								<option value={2}>2 DĚTI</option>
								<option value={3}>3 DĚTI</option>
								<option value={4}>4 DĚTI</option>
							</select>
						</label>
					</div>
				</div>
				<input type='submit' />
			</form>
		</div>
	);
};

export default HomeForm;