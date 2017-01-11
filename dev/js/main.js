var dices_number = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861'],
dices        = [];

var html_dices   = document.querySelectorAll('.dice');

function random_dices(){

	for(var i = 0; i < 5; i++){

		var dice = {},
		random_result = Math.floor(Math.random()*6);

		dice.result = dices_number[random_result];
		dice.selected = false;

		dices.push(dice);

	}

	display_html();

}

function display_html(){

	for(var i = 0; i < 5; i++){

		html_dices[i].innerHTML = dices[i].result;

	}

}

random_dices();

for(var i = 0; i < 5; i++)

	html_dices[i].addEventListener('click', function(index){

		this.style.color = '#ff9900';
		dices[index].selected = true;

	});