
'use strict';


let billInput = document.getElementById('billTotal');
let tipInput = document.getElementById('tip');
let totalInput = document.getElementById('total');



let updateTotal = function () {
	let input1 = billInput.value;
	let input2 = tipInput.value;

		totalInput.value = `$${(+input1 + +input2).toFixed(2)}`;

     percentageOf(+input1, +input2);
};


let percentageOf = function(val1,val2) {
	  let QuestionMark = document.querySelector('.calc__rating');
	  let value = ((val2 / val1) * 100).toFixed(0);

	  if(value < 15) {
	  	QuestionMark.innerHTML = `you must of not liked your waitress or your cheap 😔: ${value}% tip.`
	  }
	  else if (value > 15 && value < 20) {
		  QuestionMark.innerHTML = `you left the right amount or a little more. pat yourself on the back 👍: ${value}% tip.`
	  }
	  else if (value > 20) {
		  QuestionMark.innerHTML = `wow you left a real high tip. Your too kind but i'll take it 😃: ${value}% tip.`
	  }

};



billInput.addEventListener('keyup', function (e)  {
	updateTotal();
});

tipInput.addEventListener('keyup', function(e) {
	  updateTotal();
});




