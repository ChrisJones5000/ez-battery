import $ from 'jquery';

class ShowChartData {
	constructor() {
		this.chart_items = $('.ratings__section-chart-item-bar');
		this.show_ratings_button = $('.ratings__chart-button')
		this.clickEvents();
	}

	clickEvents() {
		var that = this;
		this.show_ratings_button.click(function(e) {
			that.showData();
			e.preventDefault();
		});
	}

	showData() {
		this.chart_items.each(function () {
			var rating_percent = this.dataset.rating;
			this.style.width = rating_percent;
			this.style.color = '#EFEFEF'
			this.innerHTML = rating_percent;
		});
	}
}

export default ShowChartData;