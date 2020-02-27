let useStroke, strokeThickness;
let useFill, circleDiameter;
let fillColor, bgdColor;

function setup() {
	createCanvas(800, 600);
	bgdColor = "#CCCCCC";
	background(bgdColor); //paint the canvas once
	//the variables will get initialized/set in getDrawStyle()
}

function draw() {
	getDrawStyle();

	if (useStroke) {
		stroke("#000000");
		strokeWeight(strokeThickness);
	}
	else {
		noStroke();
	}

	if (useFill) {
		fill(fillColor);
	}
	else {
		noFill();
	}

	if (mouseIsPressed && mouseY > 0) {
		ellipse(mouseX, mouseY, circleDiameter, circleDiameter);
	}
}

function getDrawStyle() {
	//get values from html inputs so we know what settings to use

	let checkboxStroke = document.getElementById("idUseStroke");
	useStroke = checkboxStroke.checked; //boolean

	let textboxThickness = document.getElementById("idThickness");
	strokeThickness = parseInt(textboxThickness.value); //convert from string to integer

	let checkboxFill = document.getElementById("idUseFill");
	useFill = checkboxFill.checked; //boolean

	let textboxDiameter = document.getElementById("idDiameter");
	circleDiameter = parseInt(textboxDiameter.value); //convert from string to integer

	let dropdownColor = document.getElementById("idColor");
	let index = dropdownColor.selectedIndex;
	fillColor = dropdownColor.options[index].value;
}

function clearCanvas() {
	//called when the button is pressed
	background(bgdColor);
}


