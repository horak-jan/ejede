import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = (props) => {
	console.log(props.images.length);
	return (
		<CarouselProvider
			naturalSlideWidth={100}
			naturalSlideHeight={100}
			infinite={true}
			totalSlides={props.images.length}
		>
			<Slider>
				{props.images.map((image) => (
					<Slide idex={image} key={image}>
						<img src={image} alt={`${image}`} />
					</Slide>
				))}
			</Slider>
		</CarouselProvider>
	);
};
export default Carousel;
