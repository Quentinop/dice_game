var dices           = [],
selected_dices  = [],
available_dices = 5,
dices_number    = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861'];

var roll_btn   = document.querySelector('.roll'),
html_dices = document.querySelectorAll('.dice');


roll_btn.addEventListener('click', function(){
	console.log('test');
	random_dices();

});

function random_dices(){
	
	dices = [];

	for(var i = 0; i < available_dices; i++){

		var dice = {},
		random_result = Math.floor(Math.random()*6);

		html_dices[i].className = "dice";

		dice.result   = dices_number[random_result];
		dice.selected = false;

		html_dices[i].dataset.index = i;

		html_dices[i].classList.add("x"+Math.floor(Math.random()*5));
		html_dices[i].classList.add("y"+Math.floor(Math.random()*5));

		if(i > 0){
			for(var j = 0; j < 5; j++){

				if(html_dices[i].classList[1] == html_dices[j].classList[1] && html_dices[i].classList[2] == html_dices[j].classList[2]){

					html_dices[i].className = "dice";
					html_dices[i].classList.add("x"+Math.floor(Math.random()*5));
					html_dices[i].classList.add("y"+Math.floor(Math.random()*5));
					console.log('done');
				}

			}
		}
		
		dices.push(dice);

	}

	display_html();

}

function display_html(){

	for(var i = 0; i < 5; i++){

		if(dices[i] != selected_dices[i]){

			html_dices[i].innerHTML = dices[i].result;

		}/*else if(dices[i].selected){

			html_dices[i].innerHTML = selected_dices[i].result;

		}*/

	}

}

for(var i = 0; i < available_dices; i++){		

	html_dices[i].addEventListener('click', function(e){

		var index = this.dataset.index;

		if(dices[index].selected){

			this.style.color = '#000000';

			dices[index].selected = false;

		} else if(!dices[index].selected){

			this.style.color = '#ff9900';

			dices[index].selected = true;

			selected_dices.push(dices[index]);

			available_dices -= 1;

		}

	});

}