import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(elements, classToAdd) {
		this.itemsToReveal = elements;
		this.classToAdd = classToAdd;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass('utilities__reveal--hidden');

		switch(this.classToAdd) {
			case 'utilities__reveal--slide-up':
				this.itemsToReveal.addClass('utilities__reveal--initial-position-down');
				this.initialClass = 'utilities__reveal--initial-position-down';
				break;

			case 'utilities__reveal--slide-left':
				this.itemsToReveal.addClass('utilities__reveal--initial-position-right');
				this.initialClass = 'utilities__reveal--initial-position-right';
				break;

			case 'utilities__reveal--slide-right':
				this.itemsToReveal.addClass('utilities__reveal--initial-position-left');
				this.initialClass = 'utilities__reveal--initial-position-left';
				break;
		}
	}

	createWaypoints() {
		var that = this;
		this.itemsToReveal.each(function() {
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).removeClass('utilities__reveal--hidden');
					$(currentItem).removeClass(that.initialClass);
					$(currentItem).addClass(that.classToAdd);
				},
				offset: '85%'
			});
		});
	}
}

export default RevealOnScroll;