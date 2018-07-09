/**
 * Main javascript file for EZ Battery landing page
 */
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll';
import ShowChartData from './modules/ShowChartData';

var sticky_header = new StickyHeader();
new RevealOnScroll($('.utilities__reveal-up'), 'utilities__reveal--slide-up');
new RevealOnScroll($('.utilities__reveal-left'), 'utilities__reveal--slide-left');
new RevealOnScroll($('.utilities__reveal-right'), 'utilities__reveal--slide-right');
var show_chart_data = new ShowChartData();