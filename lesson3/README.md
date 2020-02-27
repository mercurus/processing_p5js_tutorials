# Lesson 3

1. [HTML and CSS form the foundation for a webpage](#foundation)
2. [Use Notepad++ to make writing JavaScript easier](#npp)
3. [A simple webpage doesn't take much HTML](#page0)
4. [HTML elements](#attributes)
5. [CSS has different places it can live](#css)
6. [Use JavaScript to power HTML inputs](#inputs)
7. [Most functions have simple syntax](#syntax)
8. [Functions have many uses](#uses)
9. [Sketches in p5 can be blended with HTML inputs](#project)

<br/>

### 1. HTML and CSS form the foundation of a webpage <a name="foundation"></a>

So far we've been writing straight JavaScript using the [p5 online editor](https://editor.p5js.org/) which certainly makes it easy to get up and running with Processing.
Now though we're going to learn a bit about how to write code in files that can be opened right from your computer, without even needing to use the internet. This is 
the foundation for making a webpage from scratch.

Browsers open files written in HyperText Markup Language (HTML). This is the language that lays out the structure and order 
of the elements that make up a webpage. HTML offers tables, divisions for separating content, blocks for text and headers, textboxes, buttons, image blocks, and more. 
But putting a button on a page doesn't mean it will do anything. For that you need JavaScript.

In order to style those HTML elements, to set the color, spacing, font, and more, HTML uses a sidekick language called Cascading Style Sheets (CSS).
There is some debate as to whether HTML and CSS should even be considered programming languages since they do not really perform work the same way JavaScript and other
languages do. They can't be used to make calculations or modify data. They're largely cosmetic, but the simple fact remains that they require proper syntax and an interpreter 
(like an internet browser).

HTML, CSS, and JavaScript can all exist in the same file blended together, or they can be in separate files. A webpage can pull in as many outside files as it needs. 
To work with files and write code on your computer you need an editor.

<br/>

### 2. Use Notepad++ to make writing JavaScript easier <a name="npp"></a>

In the world of programming there are many professionals and volunteers that make programs and tools just to make it easier for 
other people to write code well. There are many different ways that's happening and one of the most common are fancy text editors that do things like 
[syntax highlighting](https://en.wikipedia.org/wiki/Syntax_highlighting) and [autocompletion](https://en.wikipedia.org/wiki/Autocomplete), using a 
[monospace font](https://en.wikipedia.org/wiki/Monospaced_font) for readability. The fanciest of these are called 
[Integrated Development Environments (IDE)](https://en.wikipedia.org/wiki/Integrated_development_environment) which can [compile code](https://en.wikipedia.org/wiki/Compiler) 
and make it drastically easier to track and work on projects, especially larger ones. 

For our purposes I suggest downloading [Notepad++ (currently version 7.8.4)](https://notepad-plus-plus.org/downloads/). It's not a true IDE but it's similar and powerful enough
to make webpages. You'll probably need the 64 bit version ([read this for the difference between 64 bit and 32 bit](https://support.microsoft.com/en-us/help/15056/windows-32-64-bit-faq)).

There are other editors too. Processing did create their own IDE called the [Processing development environment (PDE)](https://processing.org/download/). In order
to use it for p5 you'll need to add and switch the [language mode from Java to p5.js](https://github.com/processing/processing/wiki/Mode-Overview). Or you can follow the 
[help on this page](https://p5js.org/get-started/). The main drawback is that the PDE assumes you only want to code using Processing, but with Notepad++ you can make
any kind of webpage. And for this lesson we're going to use some simple HTML and learn a bit more from the Standard Library.

<br/>

### 3. A simple webpage doesn't take much HTML <a name="page0"></a>

The syntax for HTML is pretty iconic. HTML is written as tags surrounded by angle brackets like this: `<html>`. Tags are also called [elements](https://www.w3schools.com/tags/ref_byfunc.asp), 
and when you make a tag it typically has other tags nested inside and needs a closing tag. To close a tag it needs to use the same text except with a slash just after the 
beginning angle bracket like this: `</html>`. All webpages should begin and end with with an html tag.

Inside an html tag there are two main divisions: the head and the body. Inside the head is typically where other files get pulled in, and it's where data *about* the page
is put (meta-data). It's also where you place the page's title (the name of the tab or window) and its icon. Inside the body tag is where all the other webpage's elements 
are laid out. So a very simple wepage might look like this:

```html
<html>
	<head>
		<!-- This is a comment using HTML syntax -->
		<!-- and here in the head tag is where meta-data goes -->
		<title>My first webpage</title>
	</head>
	<body>
		Hello World
	</body>
</html>
```

<br/>

### 4. HTML elements can contain extra information <a name="attributes"></a>

HTML elements can contain extra information on their tags known as [attributes](https://www.w3schools.com/tags/ref_attributes.asp). These must be written inside the 
angle brackets and in a `name="value"` fashion. Two of the most used attributes for any HTML element are `id` and `class`. These help identify tags when writing CSS and JavaScript
to style or manipulate them. An `id` must be unique for all elements on the page, but `class` can be shared by many elements. There are different uses for both but in this
lesson we're only going to focus on `id`.

Another common attribute is `src` (short for source) which is used on image and script tags to reference an external file. For example, the following tag will pull in a 
JavaScript file named `sketch.js` that exists in the same folder as the HTML file:

```html
<script src="sketch.js"></script>
```

This is what we'll use to start building our sketch. Alternatively the `<script>` tag can simply hold JavaScript code inside, but it's good to learn how to work with multiple files.
A script tag can either use a `src` attribute, or contain JavaScript code inside, but *not both*. If you need both then simply use another `<script>` tag.

```html
<script>
	let greeting = "I am content for the <script> tag";
	alert(greeting);
</script>
```

Different HTML elements use content and attributes differently. To learn more [check out HTML on w3schools](https://www.w3schools.com/html/html_intro.asp).

<br/>

### 5. CSS has different places it can live <a name="css"></a>

CSS is basically a set of rules that let you determine how elements should display. When writing out these rules there are two main ways to do it. The first is the have broad rules 
that apply to certain kinds of elements. The second is for the CSS to be written "inline" directly on a tag so the rules only apply to that particular element. When CSS is written
inline it should be inside the attribute `style` 

```html
<body style="margin: 0;">
```

To write broad rules you can either use a style tag

```html
<style>
	body {
		margin: 0;
	}
</style>
```

or pull in an external file using a link tag

```html
<link rel="stylesheet" type="text/css" href="styles.css">
```

I know that was a lightning quick introduction. To learn more [check out CSS on w3schools](https://www.w3schools.com/css/css_intro.asp).

<br/>

### 6. Use JavaScript to power HTML inputs <a name="inputs"></a>

HTML provides tools like buttons, textboxes, and dropdowns for basic user interaction. They each have their own tags and ways of defining their content.
The one with the widest range of uses is the `<input>` tag. It can be a textbox, checkbox, radio button, and more depending on what you enter in its 
[`type`](https://www.w3schools.com/html/html_form_input_types.asp) attribute. For this lesson we'll focus on using it as a checkbox and a special textbox
that only takes numbers. `<input>` is special though because it doesn't use a closing tag.

```html
<input type="checkbox" id="idMyCheckbox">
<input type="number" id="idMyNumberbox">
```

Don't forget to give the elements an `id` of your choosing. One thing to note is that if you want a label for your input (which most times you do) that will need
to be entered outside the tag. Think about if you want the text to be to the left or to the right of the input and place it in your HTML accordingly. 

In JavaScript to get a hold of the elements use a function from the Standard Library [`document.getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

```javascript
let myCheckbox = document.getElementById("idMyCheckbox");
let myTextbox = document.getElementById("idMyNumberbox");
```

When you call `document.getElementById()` it needs the relevant `id` as a string. Then it will return an *object* for the HTML element with that `id`. 
If it can't find anything with that `id` it will return `null`. For our purposes we want to know the text inside the textbox, or if the checkbox was checked
(`value` or `checked` respectively). It's important to understand that the object we get back has many other things besides those variables. Use dot notation to 
get at the variables:

```javascript
let myCheckbox = document.getElementById("idMyCheckbox");
if (myCheckbox.checked === true) {
	console.log("My checkbox is checked");
}
else {
	console.log("My checkbox is not checked");
}

let myNumberbox = document.getElementById("idMyNumberbox");
console.log("My numberbox contains this number: " + myNumberbox.value);
```

You probably noticed we didn't use parentheses `()` when getting `checked` or `value`. That is because they're not functions. They're variables that live inside the object. 
Whenever the user interacts with the elements on the page their data is automatically updated. To see all the variables and functions available from input objects
[check this link out](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement).

To make a dropdown there are two types of tags to use. The outer tag is `<select>` which defines that it's a dropdown. That gets filled with `<option>` tags for each possible selection. 

```html
<select id="idPizzaSizes">
	<option value="10">Small</option>
	<option value="12">Medium</option>
	<option value="16">Large</option>
</select>
```

The tricky part to understand is the difference between the option's `value` attribute and its content. The content inside the `<option>` tag is what is displayed, whereas the `value`
attribute is what gets passed around behind the scenes. It's useful to have both. To determine which option is selected we need to learn some new syntax, square brackets `[]`.
More on the meaning of this syntax in a later lesson.

```javascript
let pizzaDropdown = document.getElementById("idPizzaSizes");
let index = pizzaDropdown.selectedIndex;
let pizzaDiameter = pizzaDropdown.options[index].value; 
let pizzaSize = pizzaDropdown.options[index].innerHTML; 
console.log("I ordered the " + pizzaSize + " pizza which has a diameter of " + pizzaDiameter); 
```

Now let's consider a button. You can't type in it and you can't choose or check things about it. The main purpose of a buttons is to get clicked. They're simple to create:

```html
<button>Click me!</button>
```

But how do we do something when it's clicked? For that we use the attribute `onclick`. The value to use inside is the function that you want to be called each time the button is clicked.

```html
<button onclick="myFunction()">Click me!</button>
```

<br/>

### 7. Most functions have simple syntax <a name="syntax"></a>

We've already gotten a little familiar with making our own functions because of Processing. Every sketch needs its own `setup()` and `draw()` functions so we already know the syntax 
to create a function. And in previous lessons we've already seen how to call a function by name.

```javascript
function draw() {
	myFunction(); //call myFunction() to execute the code inside
}

function myFunction() {
	//other code goes here
}
```

There are a few more things to note about them. Functions have the same naming restrictions as variables:

1. Names can only use letters, numbers, underscores `_` and dollar signs `$`
2. Names cannot *begin* with a number 
3. Names are cAsE sEnSiTiVe 
4. Names cannot be a [reserved keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)
5. Names must be unique

All functions are declared on the same level - the global scope. You cannot declare a function inside another function.

The order in which functions are declared does not matter. When JavaScript is interpreted it makes an initial pass through the code to make sure the syntax is correct 
and to register the functions and variables. After that it knows what everything is and you can call a function from another that is higher in the file than the function itself.

When you want your function to take in data to work with you need to declare it with [parameters](https://www.w3schools.com/js/js_function_parameters.asp) which are simply variables
that are initialized as the function is called. All parameters must go inside the function's parentheses, and if there are more than one they must be separated with commas. 
When you do this it's declaring variables for use in the function with those names, and they get initialized with the values that the function is called with. After the function is done 
executing the parameters and any other variables declared inside will disappear. 

```javascript
function addNumbers(num1, num2) { //declare the function and its parameters/variables num1 and num2
	let sum = num1 + num2;
	console.log(sum);
}

//call the function and initialize num1 and num2 with some different values
addNumbers(1, 1); 
addNumbers(4, 3); 
addNumbers(7, 9); 
```

But what if you wanted a result from the function? Then you use the `return` keyword followed by the value (or expression) you want.

```javascript
function addNumbers(num1, num2) { 
	return num1 + num2;
}

console.log(addNumbers(1, 1)); //prints 2
console.log(addNumbers(4, 3)); //prints 7
console.log(addNumbers(7, 9)); //prints 16 
```

Above you can see that we're calling the function `addNumbers()` while inside `console.log()`. This is perfectly valid syntax and is where the Order of Operations, or 
[operator precendence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence), kicks in. Functions that return a value 
can be part of an expression, and they can be blended with other functions and operators until you're dizzy.

```javascript
console.log(addNumbers(addNumbers(4, 2 + 2), addNumbers(2 * 2, 8 / 2)) + 16); //prints 32
```

But don't make yourself dizzy. Make sure your code is human readable besides being computer readable. Sometimes it's best to do smaller parts of a large calculation,
assign it to a variable, and slowly build up the bigger thing. 

<br/>

### 8. Functions have many uses <a name="uses"></a>

A function is mostly just a code block. They can be big or small, used once or used often, and everything in between. Sometimes they're useful for code organization,
sometimes they make it easy to do a complicated calculation over and over, it's really up to the programmer. 

One important thing to keep in mind is that you should try to have a clear idea of just how much of a certain task it should help with. It's possible to write a function
that calculates something but before it can be called you have to do some portion of the calculation outside. Try to keep in mind the idea of 
[encapsulation](https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)) which means that work should be bundled together rather than split up.

For instance if your program needs to calculate the [perimeter of a rectangle](https://www.mathsisfun.com/geometry/rectangle.html) over and over you should put the whole
calculation inside the function. You wouldn't want to do only part of it, or make it into multiple functions that do different parts.

```javascript
//good
function rectPerimeter(sideLength1, sideLength2) { 
	return 2 * (sideLength1 + sideLength2);
}

let perimeter = rectPerimeter(4, 3);


//bad
function partialRectPerimeter(sideLength1, sideLength2) { 
	return sideLength1 + sideLength2;
}

let badPerimeter = 2 * partialRectPerimeter(4, 3);
```

In the example above the bad version requires that you *always* multiply the result of `partialRectPerimeter()` by 2 to get the right answer. Make it easy on yourself
and do the whole thing together like in `rectPerimeter()`.


<br/>

### 9. Sketches in p5 can be blended with HTML inputs <a name="project"></a>

Now for this lesson's project. We're going to use Notepad++ to write code that can be saved to your computer. We'll have one file for the HTML and one file
for the p5 sketch. As far as *where* on your computer to save the files, that's up to you. I like having a folder on my C drive called code where I put my projects.
Then inside that I make a folder per project, so you might want to save your files in a location like `c:\code\p5_lesson3\`

One quick thing about Notepad++ is that it has [syntax highlighting](https://en.wikipedia.org/wiki/Syntax_highlighting). Just open the menu called Language and choose
the relevant one (H > HTML, or J > JavaScript). You can also change the color scheme by opening the menu Settings > Style Configurator and picking a new theme.

The project will be a very simple paint program. When you click the mouse it will draw a circle. Keep clicking for more circles. To change the settings about the circle, 
like its color or size, we'll be using HTML input elements. We'll begin with our HTML file. In a new blank text file in Notepad++ start with this code:

```html
<html>
<head>
	<title>Circle Painter</title>
</head>
<body>

</body>
</html>
```

Save this file as `index.html`. This is basically the minimum required to get your file to open in the browser. Next we need to import Processing so that our sketch
actually runs. There are two options. One is to import it "remotely" from the internet using a tag like this:

```html
<script src="https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.js"></script> 
```

This requires internet access because the page needs to reach out to `cdn.jsdelivr.net/` for the library when the page is loaded. The second option is to 
[download it from the p5 site](https://p5js.org/download/) and place that file inside the same folder as your `index.html`. In that case you import the file "locally"
using this kind of a script tag:

```html
<script src="p5.js"></script> 
```

Make sure the filename in the `src` attribute matches what's in the folder. If it's in a zip file make sure to unzip it. Whichever method you go with put the `<script>` tag
inside your `<head>` tag. Only use one of these options, not both.

After that we want to make a different file for our sketch. Create a brand new text file, change the Language syntax in Notepad++ to JavaScript, and enter the code
below and save it as `sketch.js` in the same folder. 

```javascript
function setup() {
	createCanvas(800, 600);
}

function draw() {

}
```

To import that it's exactly like importing `p5.js` locally. Add another `<script>` tag for your sketch, then your `index.html` should look something like this:

```html
<html>
<head>
	<title>Circle Painter</title>
	<script src="p5.js"></script>
	<script src="sketch.js"></script>
</head>
<body>

</body>
</html>
```

Now let's add a few inputs with text labels on their left

```html
<html>
<head>
	<title>Circle Painter</title>
	<script src="p5.js"></script>
	<script src="sketch.js"></script>
</head>
<body>
	Use Stroke:<input type="checkbox" id="idUseStroke" checked="checked">
	Thickness:<input type="number" id="idThickness" value="3" min="1">
	<br>
</body>
</html>
```

The `<br>` at the end just makes sure that the sketch's canvas goes below the inputs. The other HTML adds a checkbox and a textbox (that only takes numbers). They're
for letting the user decide if the circle should have a stroke (border) and how thick it should be. Let's write some code so the sketch works with these inputs:


```javascript
let useStroke, strokeThickness;

function setup() {
	createCanvas(800, 600);
	background("#CCCCCC"); //paint the canvas once
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

	if (mouseIsPressed) {
		ellipse(mouseX, mouseY, 50, 50);
	}
}

function getDrawStyle() {
	//get values from html inputs so we know what settings to use

	let checkboxStroke = document.getElementById("idUseStroke");
	useStroke = checkboxStroke.checked; //boolean

	let textboxThickness = document.getElementById("idThickness");
	strokeThickness = parseInt(textboxThickness.value); //convert from string to integer
}

```

Make sure to save both files and open it in your browser. With just this we can already click to make circles, and choose the border. Let's add a few more inputs.
We should have something for the size of the circle, the color to use (or none at all), and a button to clear the canvas:

### Complete index.html

```html
<html>
<head>
	<title>Circle Painter</title>
	<script src="p5.js"></script>
	<script src="sketch.js"></script> 
</head>
<body>
	Use Stroke:<input type="checkbox" id="idUseStroke" checked="checked">
	Thickness:<input type="number" id="idThickness" value="3" min="1">
	Use Fill:<input type="checkbox" id="idUseFill" checked="checked">
	Diameter:<input type="number" id="idDiameter" value="100" min="5">
	Circle Color:
	<select id="idColor">
		<option value="#FF0000">Red</option>
		<option value="#00FF00">Green</option>
		<option value="#0000FF">Blue</option>
	</select>
	<button onclick="clearCanvas();">Clear!</button>
	<br>
</body>
</html>
```

### Complete sketch.js

```javascript
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
```

There's a new function `clearCanvas()` for when the button is pressed. And besides what else was mentioned I threw in another condition `&& mouseY > 0` next to `mouseIsPressed` 
when drawing the circle. This is because the sketch can read if the mouse is down even if it's not inside the canvas. Without that addition it would draw circles 
when clicking the inputs.

So there's our example! It's cool that p5 has the ability to take advantage of other things that HTML and JavaScript can do. These inputs are much easier to work with when you
think about the "button" that was made in the previous lesson. 

Play around with more or different HTML inputs. Add more colors to choose from, and fiddle with the attributes. There are so many different ways to utilize these built-in 
tools along with Processing. 

<br/>

:alien: