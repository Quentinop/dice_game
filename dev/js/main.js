// mechanics var
var dices           = [],
	selected_dices  = [],
	available_dices = 5,
	dices_number    = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861'];

// view var
var roll_btn   = document.querySelector('.roll'),
	html_dices = document.querySelectorAll('.dice');

// roll event listener
roll_btn.addEventListener('click', function(){

	random_dices();

});

// random dice
function random_dices(){
	
	// get an empty dices storage
	dices = [];

	// generate dices
	for(var i = 0; i < available_dices; i++){

		var dice          = {},	// storage for new dice
			random_result = Math.floor(Math.random()*6); // random dice result

		// clear css classes
		html_dices[i].className = "dice";

		dice.result   = dices_number[random_result]; // set result
		dice.selected = false; // set false

		// set index to html dices
		html_dices[i].dataset.index = i;

		// give random positionning
		html_dices[i].classList.add("x"+Math.floor(Math.random()*5));
		html_dices[i].classList.add("y"+Math.floor(Math.random()*5));

		// check if dices have the same position
		for(var j = 0; j < 5; j++){

			if(i != j){

				while(html_dices[i].classList[1] == html_dices[j].classList[1] && html_dices[i].classList[2] == html_dices[j].classList[2]){

					// new positionning
					html_dices[i].className = "dice";
					html_dices[i].classList.add("x"+Math.floor(Math.random()*5));
					html_dices[i].classList.add("y"+Math.floor(Math.random()*5));

				}

			}

		}
		// push the created dice in dices array
		dices.push(dice);
	}
	// start html displaying function
	display_html();

}

function display_html(){

	for(var i = 0; i < 5; i++){

		// set the random value
		html_dices[i].innerHTML = dices[i].result;

	}

}

// listen each dice click event
for(var i = 0; i < available_dices; i++){		

	html_dices[i].addEventListener('click', function(e){

		var index = this.dataset.index;

		if(dices[index].selected){

			this.style.color = '#000000';

			dices[index].selected = false;

		}else if(!dices[index].selected){

			this.style.color = '#ff9900';

			dices[index].selected = true;

			dices.splice(index, 1);	
			console.log(dices);

		}

	});

}