var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bg");
var button = document.getElementById("button1");
// console.log (button);
//console log

// body.style.background = "red";
function buttonPress(){
	var rcolor1 = "#";
	for (k = 0; k < 3; k++) {
	    rcolor1 += ("0" + (Math.random()*256|0).toString(16)).substr(-2);
	}
	var rcolor2 = "#";
	for (k = 0; k < 3; k++) {
	    rcolor2 += ("0" + (Math.random()*256|0).toString(16)).substr(-2);
	} //generates a random hex code - stackover

	body.style.background = 
	"linear-gradient(to right, " + rcolor1 + ", " + rcolor2 + ")";

	css.textContent = body.style.background + ";";
	color1.value = rcolor1;
	color2.value = rcolor2;

};

	



function colorpicker() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";

};

color1.addEventListener("input", colorpicker);
color2.addEventListener("input", colorpicker);
button.addEventListener("click", buttonPress);
