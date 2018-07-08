import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
	constructor() {
		this.top_header = $('.top-header');
		this.header_trigger = $('.introduction');
		this.createHeaderWaypoint();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.header_trigger[0],
			handler: function(direction) {
				if (direction === 'down') {
					that.top_header.addClass('top-header--is-visible');
				} else {
					that.top_header.removeClass('top-header--is-visible');
				}
			}
		});
	}
}

export default StickyHeader;