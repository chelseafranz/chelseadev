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

var Items= Backbone.Collection.extend({
	model: Portfolio,
	url:'http://tiy-atl-fe-server.herokuapp.com/collections/chelsea7'
});

var all_items= new Items();

$('#form').on('submit', function(a){
a.preventDefault();

var task_name=$('#itemName').val();

var t= new Portfolio({
	name: task_name
});

all_items.add(t);
t.save();

$(this)[0].reset();

});

// portfolio section/////////////////////////////
var portfolio = {
  projects : [
    { name: 'Surf and Paddle', date: 'September 23, 2014', link: 'https://github.com/chelseafranz/surf-and-paddle' },
    { name: 'Accordion', date: '', link: 'https://chelseafranz.github.com/accord'},
    { name: 'GitHub Profile', date: '', link: 'http://chelseafranz.github.com/gitprofile'},
    { name: 'Etsy Page', date: '', link: 'https://chelseafranz.github.com/etsy'},
    { name: 'Reasturant Website', date: '', link: 'https://chelseafranz.github.com/spiked'},
    { name: 'To-Do List', date: '', link: 'http://chelseafranz.github.com/todolist'},
    { name: 'Turn-Based Game', date: '', link: 'http://chelseafranz.github.com/game'}
  ]
};

var rendered = Handlebars.templates['portfolio'];
$('#portfolio').append(rendered(portfolio));






























