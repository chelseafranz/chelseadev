$('.topmenu').on('click', function () {
	$('.topmenu').animate({right: '0px' }, 1000, 'linear');
	$('.topmenu').addClass('see');
});

// $('.hero-unit').hover( function () {
// 	$('.topmenu').animate({marginRight: '-160px' }, 1000, 'linear');
// });

var Portfolio= Backbone.Model.extend({
	defaults:{
		name: '',
		description:'', 
	},

	initialize: function(){
		var a= this.get('name');
		console.log(a + ' has been added to your portfolio.');
	}
});

var PortfolioCollection= Backbone.Collection.extend({
	model: Portfolio,
	url:'http://tiy-atl-fe-server.herokuapp.com/collections/chelsea7'
});

var all_items= new PortfolioCollection();



