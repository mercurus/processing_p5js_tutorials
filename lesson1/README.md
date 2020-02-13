# Lesson 1

1. [How computers store data](#how)
2. [Primitive data types](#primitives)
3. [Create your own variables](#creating)
4. [Rules and suggestions for variable names](#naming)
5. [Write comments in your code](#comments)
6. [Do simple math with arithmetic operators](#math)
7. [Check values with comparison operators](#comparison)
8. [Use conditional statements to make decisions](#conditional)
9. [Statements often include Expressions](#expressions)
10. [Shapes drawn in Processing have a fill color and a stroke border](#shapes)
11. [Combine your knowledge to make programs](#combine)
12. [Keep playing!](#play)

### How computers store data <a name="how"></a>

I'd like to cover a bit more context on computers that not everyone knows. Hardware is the physical laptop/desktop/other machine, and software is the code that runs on it. 
The fundamental connection between hardware and software are electrical states that are on or off, 1 or 0, true or false. Hardware stores lots of these little switches, or bits,
and software uses them. 

Different arrangements of bits can mean different things. One of the primary ways bits are used is to store numbers using the
[binary number system](https://www.mathsisfun.com/binary-number-system.html). This is a base 2 system which only uses the digits `1` and `0` (for if the electrical charge is on
or off). We're more familiar using decimal numbers which is base 10 and uses digits `0` through `9`. I'm not going to get much further into binary, but you're welcome to 
dig into it as deep as you want. 

When software needs a variable that is a number it stores it as a binary number (`100` means 4 and so on). But if instead you wanted to store a number as text, or if you wanted text using any 
other letter, special character, etc, then the bits store a number to represent that character. For instance using [ASCII encoding](https://www.ascii-code.com/) the letter 
`A` uses the decimal number 65, which in binary is `01000001`. But that's different from a lower case `a` which uses 97 or `01100001`. The character for `1` uses 49 or 
`00110001`, `2` uses 50 or `00110010` and so on.

When going through this stuff don't feel like you have to remember every single thing! Rules for code are written down because there are so many of them.

<br/>

### Primitive data types <a name="primitives"></a>

In order to store the value for a variable the computer needs to know how many bits, how much space, is required to represent the value. The basic types of variables, the 
fundamental building blocks of data are called [primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive). Numbers are one kind of primitive, and since the
computer needs a fixed count of bits to represent the numeric value this means numbers have a maximum value. But don't worry because the biggest number you can use is 
enormous at [9,007,199,254,740,991](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER). 
Another primitive is called a Boolean which can only store either `true` or `false`, nothing else. Then there's something called a String which is text or a series of characters 
inside quotes `"like this"`. Strings can be any amount of characters long because JavaScript can just keep stringing characters along.  There are seven primitives total in JavaScript 
but we're only going to focus on these three types: [Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type), 
[Booleans](https://developer.mozilla.org/en-US/docs/Glossary/boolean), and [Strings](https://developer.mozilla.org/en-US/docs/Glossary/string). 

If a variable is not a primitive type then it is considered an Object, which we'll learn about later. 

> :information_source: There are ways to use numbers even bigger than 9 quadrillion...

<br/>

### Create your own variables <a name="creating"></a>

In order to create your own variable there are two steps: declaration and initialization. When you declare a variable it's like saying "I want a variable with this name". To initialize it is like saying
"and the variable starts with this value". The way to declare a variable is to use the keyword **`let`** followed by the variable's name and end it with a semicolon `;`

```javascript
let myFirstVariable;
```

Older JavaScript code uses the keyword **`var`** to declare its variables. It's still fine to use **`var`** instead of **`let`** but 
[there are nuances between them](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var) which is a rabbit hole you can skip for now.

Before a variable can be used you need to set its value using the assignment operator which is simply the equals sign `=`. The variable you want to assign a value to is always on 
the left, the new value is always on the right. You do not need to tell JavaScript what type of primitive you want. It figures that out based on the value used.
Let's make this a number.

```javascript
myFirstVariable = 42;
```

You can assign a value to your variable on the same line that you declare it. This handles both declaration and initialization. Let's make a boolean.


```javascript
let mySecondVariable = true;
```

Numbers can also use decimal points for fractions, percentages, or money. When the number is less than 1 it is optional to include a `0` 
before the decimal point. Do not use commas when your number is thousands or larger.

```javascript
let somePrice = 153.72;
let half = 0.5;
let alsoHalf = .5;
let population = 5874345;
```

When you need a String you can use either single `'` or double `"` quotes to surround your text but it must end with the same kind. This is useful if you know your text 
includes a quote mark inside.

```javascript
let personName = "Alex";
let greeting = "Hello, it's good to see you";
let answer = 'Sure I will have a "Scooby snack"';
```

When you need many variables you can declare them using the same **`let`** by separating them with commas.

```javascript
let firstName, lastName, phoneNumber;
firstName = "Bob";
lastName = "Ross";
phoneNumber = "(123)456-7890";
```

You can also initialize values for multiple variables on the same line that they're declared (still need the commas). Not all variables must be initialized on the line.

```javascript
let passengerId = "A1B2C3", age = 50, canFly = true;
let someNumber = 123, anotherNumber;

anotherNumber = 456;
```

The code above is how to make variables but nothing is being done with them. Yet. For more explanation on variables check out the 
[MDN reference](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables).

<br/>

### Rules and suggestions for variable names <a name="naming"></a>

There are a few rules for variable names:

1. Names can only use letters, numbers, underscores `_` and dollar signs `$`
2. Names cannot *begin* with a number 
	- right: `thing1`
	- wrong: `1thing` 
3. Names are cAsE sEnSiTiVe 
	- `thing1` is different from `Thing1`
4. Names cannot be a [reserved keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)
	- keyword examples: **`let`**, **`function`**, **`if`**, **`else`**
	- you can use keywords if it's only part of the name like in `letMeGo`
5. Names must be unique
	- small caveat to this in our next lesson

Variable names can be any length, but if it's longer than 30 or 40 characters you should think about making it shorter. Try to be as descriptive as possible with the name 
and feel free to rename your variable whenever you come up with a better one. It's all about what the value needs to represent, and that's not always easy 
to see right away surprisingly enough.

Then there's the choice about how to use capitalization and separation between the words in your variable's name. There are two typical ways people do it. The first
is called camelCase where the first word is all lowercase but then the first letter of each following word is capitalized. Second is snake_case where nothing
is capitalized and words are separated by underscores. Whatever method you choose it's important to be consistent and readable.

<br/>

### Write comments in your code <a name="comments"></a>

When you write your own programs it's hard to remember everything about every line of code, especially if you haven't worked on it recently. Even experienced programmers 
forget details about things they've written. Although, in theory, you should be able to understand what code is doing just from reading it, that's not always fast or obvious. 
This is where comments come in. 

Comments are lines of text in your code that don't get executed. The syntax to write a comment is two slashes `//` and anything that follows is ignored. They
can be on their own line or after a statement.

```javascript
// Use comments to leave notes and describe things
let juice = "orange"; //what was had at breakfast
```

For comments that span multiple lines start with `/*` and end it with `*/`. 

```javascript
/* 
Multi line comments start with
slash asterisk
and end with
asterisk slash
*/

/* They can also be used on a single line */
```

Comments should describe what is going on, and the code describes how. But commenting isn't only for hints and reminders. You can also comment out lines of code 
so that they're ignored while the program executes. 

```javascript
function draw() {
	background(0, 255, 204);

	//the statement below won't execute because it's now a comment
	//line(0, 10, 200, 50);
}
```

<br/>

### Do simple math with arithmetic operators <a name="math"></a>

When writing programs it's often necessary to do simple math like adding and multiplying. We've already seen the assignment operator (`=`) so now it's
time to learn arithmetic operators:

| Operator | Syntax |
| -------- | ------ |
| Addition | `+` |
| Subtraction | `-` |
| Multiplication | `*` |
| Division | `/` |
| Modulus | `%` |

These probably all look and sound familiar except the last one. Modulus is for finding the remainder when dividing two numbers. Arithmetic operators can be used 
on numbers to calculate the value for a variable. Other variables can also be used when calculating a value.

```javascript
let oneHundred = 50 + 55 - 5;
let secondsInADay = 60 * 60 * 24; //60 seconds * 60 minutes * 24 hours
let centerX = width / 2, centerY = height / 2;
let remainderIsTwo = 5 % 3;
```

You may remember from math classes the Order of Operations, or the rules for which arithmetic operations happen first. There need to be rules so we can always be sure
what the calculation will be. If there were no rules then the following line

```javascript
1 + 2 * 3
```

would result in either 7 or 9 depending on which math was done first (correct answer is 7). In JavaScript the 
[operator precendence can be found here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) and basically it's stuff
inside parentheses `()` first, then multiplication and division (left to right), and finally addition and subtraction. If you wanted to get `9` from the calculation above
you can use parentheses:

```javascript
(1 + 2) * 3
```

<br/>

### Check values with comparison operators <a name="comparison"></a>

Something that needs to happen in almost any program is to compare values. It allows the program to react to the user and/or other conditions. When comparing 
values you're asking questions like "does this variable equal this value" or "is this smaller than that"? After comparing the values the end result is going to be a 
boolean value, either `true` or `false`. 

We're learning a lot of syntax and it'll all be worth it. Again, don't worry about total memorization. The following table describes the comparison operators 
in terms of these sample variables: 

```javascript
let var1 = 3;
let var2 = 4;
```

| Operator | Syntax | Description | Examples that evaluate to true |
| -------- | ------ | ----------- | ------------------------------ |
| Equal | `==` | Returns true if the operands are equal | `"3" == var1` <br/> `3 == '3'` |
| Not equal | `!=` | Returns true if the operands are not equal | `var1 != 4` <br/> `var2 != "3"` |
| Strict equal | `===` | Returns true if the operands are equal *and of the same type* | `3 === var1` |
| Strict not equal | `!==` | Returns true if the operands are of the same type but not equal, or are of different type | `var1 !== "3"` <br/> `3 !== '3'` |
| Greater than | `>` | Returns true if the left operand is greater than the right operand | `var2 > var1` <br/> `"12" > 2` |
| Greater than or equal | `>=` | Returns true if the left operand is greater than or equal to the right operand | `var2 >= var1` <br/> `var1 >= 3` |
| Less than | `<` | Returns true if the left operand is less than the right operand | `var1 < var2` <br/> `"2" < 12` |
| Less than or equal | `<=` | Returns true if the left operand is less than or equal to the right operand | `var1 <= var2` <br/> `var2 <= 5` |

You probably noticed that there's both a double equals `==` and a triple `===`. It's encouraged that you regularly use the strict version (`===`) so you can always
be sure of the behavior.

> :information_source: See [this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators) for more details on all the operators 
listed and more.

<br/>

### Use conditional statements to make decisions <a name="conditional"></a>

You might want to think about software as a bunch of miniature programs put together. Just think about the browser you're using now. There's a scroll bar 
on the right. There needs to be code that tracks the scroll position, other code to draw the buttons for the scroll bar, more to track mouse and keyboard interaction, 
and so on. Each of those steps needs to execute only when certain conditions happen (like if the user hit up or down on the keyboard). And scrolling the page is just 
one small thing the browser does.

To carry out a block of code when a codition is met use an **`if`** statement followed by parentheses and curly braces. Inside the parentheses is the comparison/condition
to check. If the condition is true then the code block that follows is executed.

```javascript
let something = 5;

if (something > 2) {
	//5 is greater than 2 so this code block will execute
	background(0, 0, 100);
}
```

You can use arithmetic operators on either or both sides of the comparison. Arithmetic is calculated before the comparison.

```javascript
let something = 5;

if (something - 5 > 2 * 1) {
	//0 is not greater than 2 so this will not execute
	background(0, 0, 100);
}
```

Often when checking something you want to do different things for different values. For that there is the keyword **`else`**. It can be used 
by itself or in conjunction with **`if`**. Having an **`else`** block at the end is optional, and you can use multiple **`else if`** statements. It all
depends on what that section of code needs to do. 

```javascript
let grade;
let points = 75;

if (points > 90) {
	grade = "A";
}
else if (points > 80) {
	grade = "B";
}
else if (points > 70) {
	grade = "C";
}
else if (points > 60) {
	grade = "D";
}
else {
	grade = "F";
}
```

In the example above `grade` would become C. The **`if`** statements execute top to bottom until a condition evaluates to `true`. First `points` gets checked to see if it's 
greater than 90. Since it's not it goes to the next **`else if`** and check its condition. But 75 is not greater than 80 so it skips that block too. The next comparison 
checks to see if 75 is greater than 70, which it is, and that code block is executed which assigns C to `grade`. Afterwards it skips the rest of the **`else if`** and 
**`else`** statements because it already found a condition that worked. If `points` had been 60 or less then `grade` would have fallen into the catch-all **`else`** block and
become F.

Sometimes conditional statements get tricky. Programmers can lay out many different conditions. The ordering matters very much. If in the example above the very first line 
was `if (points > 60)` then that would be the first comparison done and `grade` would become D. Sometimes it helps to mentally step through your code line by line to work out 
the logic.

<br/>

### Statements often include Expressions <a name="expressions"></a>

We've already seen examples of this even if you didn't know it. In many programming languages an [Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions)
is any valid unit of code that resolves to a value. They can be made of numbers, variables, operators, constants, function calls, and more as long as when they come together 
they result in a value. Here's a simple example:

```javascript
let centerX = width / 2;
```

In that statement `width / 2` is the expression. JavaScript calculates the value and then assigns it to the variable `centerX`.
What's inside the parentheses of an **`if`** statement is also an expression which resolves to a boolean value.

```javascript
if (firstName === "Bob") {
	//do something special for Bob
}
```

They can also be used inside function calls

```javascript
line(width / 2, height / 2, mouseX, mouseY);
```

Expressions are used very often when programming. They make it easier to write code and can get pretty complex. It is possible to overdo it though and just cause confusion. 
The computer can't get confused (as long as the syntax is correct) but you can. So try to be expressive when writing code while also striving for readability.

<br/>

### Shapes drawn in Processing have a fill color and a stroke border <a name="shapes"></a>

One of the core concepts of coloring in Processing is that lines are considered the Stroke and a painted area is considered the Fill. In the previous lesson we learned about
`line()` which came out black. That's simply the default stroke color. We can set the color using the function `stroke()` and a RGB color. 

```javascript
stroke(0, 255, 0); //bright green
line(0, 0, mouseX, mouseY); 
```

When you change the color of your stroke (or fill) it will affect everything drawn afterwards until Processing is told to use another color. 

```javascript
stroke(255, 0, 0); //bright red
line(0, 0, mouseX, mouseY); 
line(width, 0, mouseX, mouseY); 

stroke(0, 0, 255); //bright blue
line(0, height, mouseX, mouseY); 
line(width, height, mouseX, mouseY); 
```

If you're familiar with web colors you may know that RGB can also be represented using [hexidecimal](https://www.mathsisfun.com/hexadecimals.html) 
(base 16 numbering system, digits `0` - `9` then `a` - `f`). Simply write the hex value as a string with a `#` sign at the front. See the 
[color picker](https://www.w3schools.com/colors/colors_picker.asp) again for examples.

```javascript
stroke("#6600cc"); //purple
```

Processing has several shapes you can use out of the box

| Shape | Function and parameters |
| ----- | ----------------------- |
| [Triangle](https://p5js.org/reference/#/p5/triangle) | triangle(x1, y1, x2, y2, x3, y3) |
| [Quad](https://p5js.org/reference/#/p5/quad) | quad(x1, y1, x2, y2, x3, y3, x4, y4) |
| [Rectangle](https://p5js.org/reference/#/p5/rect) | rect(x, y, w, h) |
| [Oval](https://p5js.org/reference/#/p5/ellipse) | ellipse(x, y, w, h) |

A quad is simply a 4 sided shape, and to draw it you need to enter all 4 corners. A rectangle has square corners so you only need to give it the origin and the width
and height. The ellipse or oval works similarly. If you want a square you can draw a rectangle with equal width and height. For a circle draw an ellipse with equal
width and height. Or if you really want you can simply use [`circle()`](https://p5js.org/reference/#/p5/circle) and [`square()`](https://p5js.org/reference/#/p5/square).

When drawing your shapes think about its position and how big it needs to be. To draw a circle at the mouse is easy:

```javascript
fill("#0033cc"); //set the shape fill color to blue
ellipse(mouseX, mouseY, 50, 50); //draw an ellipse at the mouse with equal width and height
```

<br/>

### Combine your knowledge to make programs <a name="combine"></a>

Now it's time to do something with what was learned. Let's make a simple landscape with a hill and the sun. And let's make it change color based on the mouse position.

In this program we're going to have a hill at the bottom, the sun following the mouse, and the background is the sky. I want it to seem like it's changing colors
based on the day. So when the mouse/sun is lowest the colors will be darker, and when the mouse/sun is higher the colors will be brighter. And let's break it into 3 color sections.

When writing code you should add little pieces at a time. Keep adding things bit by bit so it's easier to think about. In the end all the pieces working together 
is what makes a rich program. To start out we'll forget about color and just focus on drawing the sun and the hill. In the [p5 online editor](https://editor.p5js.org/)
enter this code:

```javascript
function setup() {
	createCanvas(800, 600);
}

function draw() {
	//paint the canvas black
	background(0); 

	//draw the sun
	ellipse(mouseX, mouseY, 100, 100);

	//draw the hill last so it can be on top of the sun
	triangle(0, height, width / 2, height - 150, width, height);
}
```

You should see a squished triangle at the bottom, and a circle that follows your mouse. Notice the triangle is using the `width` and `height` variables so we can change the 
canvas size at will. To change the height of the hill you can set `150` to some other number. 

Now to break it into 3 sections we can use some arithmetic. We need a variable for one third (1/3) of the height. Remember that naming variables helps us understand what it is. 
The computer doesn't know what your variable name means so use a name that is meaningful to you. We can create our variable just inside our `draw()` function.

```javascript
let thirdOfHeight = height / 3;
```

This will make it easier for us to check what section of the canvas the mouse is in. To find that out we need to write some conditional statements. First we'll check to see if
the mouse is in the top third of the canvas:

```javascript
if (mouseY < thirdOfHeight) {
	fill(255, 0, 0);
}
```

We haven't picked the final colors yet so to start it's just red. Now for the other conditions (and the rest of `draw()`)

```javascript
function draw() {
	let thirdOfHeight = height / 3;

	//figure out which section the mouse is in
	if (mouseY < thirdOfHeight) {
		//highest section
		fill(255, 0, 0);
	}
	else if (mouseY < thirdOfHeight * 2) {
		//middle section
		fill(0, 255, 0);
	}
	else {
		//bottom section
		fill(0, 0, 255);
	}

	//paint the canvas black
	background(0); 

	//draw the sun
	ellipse(mouseX, mouseY, 100, 100);

	//draw the hill last so it can be on top of the sun
	triangle(0, height, width / 2, height - 150, width, height);
}
```

With this code now your sun and hill should change from red to green to blue depending on your mouse position. Now we just need to pick relevant colors to use. Again I'm a big
fan of this [color picker](https://www.w3schools.com/colors/colors_picker.asp). I've already picked out my colors but I want to mention something else quick.

Above we have a call to `fill()` inside our conditional statements that sets the color. The way it's written now is a problem because both the sun and hill will use that same
color. There is another way it can be coded though by using variables. At the top of `draw()` we can declare some variables for our colors but wait to initialize them until 
we determine which section the mouse is in. Then we set the fill color just before drawing the shape. 

Now for the program in its entirety:

```javascript
//Color changing landscape

function setup() {
	createCanvas(800, 600);
}

function draw() {
	let thirdOfHeight = height / 3;
	let skyColor, sunColor, hillColor;

	//figure out which section of the sky the mouse is in
	if (mouseY < thirdOfHeight) {
		//daytime colors for the highest
		skyColor = "#66ffff";
		sunColor = "#ffdd00";
		hillColor = "#009900";
	}
	else if (mouseY < thirdOfHeight * 2) {
		skyColor = "#0033cc";
		sunColor = "#ff9900";
		hillColor = "#006600";
	}
	else {
		//night time colors for the lowest
		skyColor = "#001133";
		sunColor = "#ff3300";
		hillColor = "#003300";
	}

	//paint the canvas with the relevant sky color
	background(skyColor);

	//draw the sun
	fill(sunColor);
	ellipse(mouseX, mouseY, 100, 100);

	//draw the hill last so it can be on top of the sun
	fill(hillColor);
	triangle(0, height, width / 2, height - 150, width, height);
}
```

<br/>

### Keep playing! <a name="play"></a>

Now that you're starting to learn things try making changes and see if what happened is what you expected. Maybe try changing the hill at
the bottom from a triangle to an ellipse. You could add small square or rectangle houses on the hill. 
If you're in the mood try adding in more sections to change colors for. 

* [`Foundational concepts`](https://p5js.org/reference/#group-Foundation)
* [`stroke()`](https://p5js.org/reference/#/p5/stroke) 
* [`fill()`](https://p5js.org/reference/#/p5/fill)

<br/>

:alien:



