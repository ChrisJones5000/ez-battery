import $ from 'jquery';
import slick from 'slick-carousel';

class SlickCarousel {
	constructor(element) {
		this.slider = element;
		this.buildCarousel();
	}

	buildCarousel() {
		$('.reviews__carousel').slick({
		  // infinite: true,
		  // slidesToShow: 2,
		  // slidesToScroll: 2,
		  dots: true
		});
	}
}

export default SlickCarousel;