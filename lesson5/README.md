# Lesson 5

1. [Arrays are multiple variables in a single package](#single)
2. [The elements in an array are ordered](#ordered)
3. [Arrays and loops go hand in hand](#loops)
4. [Any type of variable can be placed inside an array](#any)
5. [Processing makes it simple to generate random numbers](#random)
6. [Use randomness with arrays to make interesting things](#project)

<br/>

### 1. An array is multiple variables in a single package <a name="single"></a>

[Arrays](https://www.w3schools.com/jsref/jsref_obj_array.asp) are a type of variable. They are sometimes called lists. It might be helpful to think of an array 
as a bunch of variables tied together in a line. There are many benefits to using arrays, the main which is being able to work with many variables using a single name.

Another benefit is that you can write your program to work with an unknown amount of variables. Arrays can grow and shrink in size but keep the same name, the same 
single reference point. This enables programmers to design things with a dynamic changing size. One example would be increasing the number of enemies in a game during play. 
This would be impossible using individual variables like `enemy1`, `enemy2`, `enemy3`...

To make an array it starts with **`let`** like any other variable declaration but the syntax is a pair of square brackets.

```javascript
let myArray = [];
```

This is how to create an empty array. It doesn't contain anything (yet). If you know the values to start with, an array can be
initialized by entering them inside the brackets, separated by commas.

```javascript
let arrayWithValues = [3, 6, 2, 11];
```

<br/>

### 2. The elements in an array are ordered <a name="ordered"></a>

The thing to understand about arrays is that each variable inside has an index (a number) which is its sequential position in the array. The first variable in the array
will always be the first one in line, the second will always be second, and so on. The first index however is not 1, it's 0. So if your array contains 3 elements 
their indicies will be 0, 1, and 2.

To get a value back out of an array use the array's name followed by square brackets `[]` with the index inside.

```javascript
let evenNumbers = [2, 4, 6, 8, 10];

console.log(evenNumbers[0]); //prints 2
console.log(evenNumbers[1]); //prints 4
```

Arrays are a special kind of object (next lesson is on objects). Not only do they hold a list of variables, they also have their own properties (which is another word for variable)
and functions. One of these properties is called `length`. This is the count of elements that the array contains, and it won't change unless things are added or removed from the array. 
Use dot notation to get the property.

```javascript
let evenNumbers = [2, 4, 6, 8, 10];

console.log(evenNumbers.length); //prints 5
console.log(evenNumbers[4]); //prints 10
```

Keep in mind that the `length` will always be 1 greater than the highest index. In the example above there are 5 numbers in the array, and their indicies are 0 through 4.

One of the most used functions on an array is `push()` which adds a new variable to the end of the array. Another commonly used function is `toString()` which 
translates it into a string for printing.

```javascript
let someArray = [];

someArray.push(50);
someArray.push(100);
someArray.push(150);

console.log(someArray[1]); //prints 100
console.log(someArray.toString()); //prints 50,100,150
```

You can also skip using `toString()` and the console will give you a different representation with more information. 

```javascript
console.log(someArray); //see for yourself, and click the arrow when you see it
```

<br/>

### 3. Arrays and loops go hand in hand <a name="loops"></a>

In the previous lesson we learned about loops. Arrays are typically most useful when paired with a loop. The counter in a **`for`** loop is particularly helpful when working with indicies. 

```javascript
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

for (let i = 0; i < 26; i = i + 1) {
	console.log(alphabet[i]); //prints out each letter of the alphabet
}
```

And you can use the array's `length` for the comparison which makes it even easier to work with.

```javascript
let digits = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]; 

for (let i = 0; i < digits.length; i = i + 1) {
	console.log(digits[i]); //prints the numbers from the array in order
}
```

For the comparison just remember to use *less than* `<` and not *less than or equal to* `<=` because the latter would cause it to loop one too many times. 

<br/>

### 4. Any type of variable can be placed inside an array <a name="any"></a>

An array can contain any type of variable. Strings, numbers, booleans, even other arrays. But the purpose of an array isn't to hold a bunch of random things. 
In order to be useful the variables inside should be related and of the same type. If for some reason you wrote a program that stores related things of 
different types in one array you'd have to always refer to the variable you want with a hardcoded index. In that case it's more confusing than individually named variables.

```javascript
let person = ["Bob Ross", 52, true];

console.log("My name is " + person[0]);
console.log("I am " + person[1] + " years old");
console.log("It's " + person[2] + " that I'm a painter");

//Don't use an array like this ^ 

//You'd be better off with individual variables like this:
let name = "Bob Ross", age = 52, isPainter = true;
```

If you're still wondering of a way to capture variables like this in a single package you'll see how plain old objects serve that role in the next lesson.

It's also possible to store arrays inside an array. And you can even put more arrays inside of those, as deep as needed. 
In order to get the value of a array inside an array you use another set of brackets with the needed index inside.

```javascript
let multiArray = [];
let inner1 = [1, 3, 5];
let inner2 = [7, 9, 11, 13];

//add the inner arrays to multiArray
multiArray.push(inner1);
multiArray.push(inner2);

console.log(multiArray[0].toString()); //prints 1,3,5 (which is inner1)
console.log(multiArray[0][2]); //prints 5

console.log(multiArray[1].toString()); //prints 7,9,11,13 (which is inner2)
console.log(multiArray[1][3]); //prints 13

console.log(multiArray.length); //prints 2
console.log(multiArray[0].length); //prints 3
console.log(multiArray[1].length); //prints 4

//alternatively you can initialize the array like this
let multiArray = [[1, 3, 5], [7, 9, 11, 13]];
```

This is another concept that's tough to grasp at first. And again don't use a tool if it seems too complicated to be useful to you. Personally I rarely use arrays like this.
There are occasions when they're handy but it's often better to try other designs first. Just know that it's a possibility.

To learn more about arrays check out [the MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

<br/>

### 5. Processing makes it simple to generate random numbers <a name="random"></a>

Often when making generative art you'll need values for your variables but you don't always care what they are. Or you just need numbers within some range but it's not important 
exactly where they land. This is where the function [`random()`](https://p5js.org/reference/#/p5/random) comes in handy. This can be used in a couple different ways. 

The function `random()` can take 0, 1, or 2 arguments and works differently depending on what you give it. When called without any arguments it will return a random number
between 0 and 1 (meaning it's a float, or decimal). It might be 0 but it's designed to never be exactly 1. 

```javascript
let someNumber = random();
console.log(someNumber); //prints something like 0.6581981
```

If you supply one argument then `random()` will give you a number from 0 up to but not including that number. With 2 arguments it will return something from the first number
up to but not including the second. What's returned will be a float, not an integer.

```javascript
console.log(random(5)); //prints something like 1.3216841
console.log(random(5, 10)); //prints something like 8.8766819
```

If you'd like the number to be rounded you can either use [`round()`](https://p5js.org/reference/#/p5/round), or you can convert it to an integer using [`int()`](https://p5js.org/reference/#/p5/int).

```javascript
console.log(round(random(5))); //prints something like 3
console.log(int(random(5, 10))); //prints something like 9
```

If you use `round()` there's a chance that the number goes up to the max that `random()` doesn't reach. So if you use `random(5)` it might return 4.7 which if rounded would go up to 5.
However if you convert it to an integer the decimal just gets chopped off, so `int(4.7)` would just be 4. 

<br/>

### 6. Use randomness with arrays to make interesting things <a name="project"></a>

In today's project we're going to make a starfield. We'll use arrays filled with random coordinates for star placement, and another array with random sizes to make them 
seem like they have different distances and sizes.

So like any p5 sketch you can either use the [online editor](https://editor.p5js.org/) or you can save a .html file on your computer. We'll start with a black background
and a couple empty arrays.

```html
<html>
<head>
	<title>Starfield</title>
	<!-- Fetch p5 from the Content Delivery Network (cdn) -->
	<script src="https://cdn.jsdelivr.net/npm/p5"></script> 
</head>
<body>
<script>
	//arrays that will be filled with randomness
	let starXs, starYs, starSizes;

	function setup() {
		createCanvas(800, 600);

		//initialize arrays
		starXs = [];
		starYs = [];
		starSizes = [];
	}

	function draw() {
		//paint the canvas black
		background(0);
	}
</script>
</body>
</html>
```

There's 3 separate arrays: one for the x positions, another for y positions, another for their sizes. The way it will work is each array will be the same length. When we want to add 
one star we will add a single new element to each array. Each index will be a single star, it just has its information stored in separate arrays. 
So although there are 3 arrays they're being used together to compose a single star. Now we need some code to populate the arrays so we have something to work with. 

```javascript
function addStars() {
	starXs.push(random(width));
	starYs.push(random(height));
	starSizes.push(random(15));
}
```

This function simply adds a new variable to each array. Even though they are random numbers they're within relevant ranges. The x position will be between 0 and `width` and the y position
is between 0 and `height`. The size is a little more arbitrary, you can change 15 to something else if you feel like it. But our goal is to have a bunch of stars on the screen so it's
best to keep them smallish.

Now we need a loop to draw all the stars. And while we're at it let's add some colors to the stars. Then we can't forget to actually call `addStars()`, and to give us a litle control 
let's tie it to `mouseIsPressed`.

```javascript
let starXs, starYs, starSizes;

function setup() {
	createCanvas(800, 600);

	//initialize arrays
	starXs = [];
	starYs = [];
	starSizes = [];

	//add the first star
	addStars();
}

function draw() {
	if (mouseIsPressed) {
		addStars();
	}

	//paint the canvas black
	background(0);

	//set star colors
	fill("#6ff");
	stroke("#039");
	strokeWeight(3);

	//draw all the stars
	for (let i = 0; i < starSizes.length; i++) {
		circle(starXs[i], starYs[i], starSizes[i]);
	}
}

function addStars() {
	starXs.push(random(width));
	starYs.push(random(height));
	starSizes.push(random(15));
}
```

With this code, as long as the mouse is held down we will get a new star for each tick through `draw()`. Then the **`for`** loop goes through and draws every single star every time. 
If you want to see the power of storing data in an array try something like adding the mouse position to the star's position. Or you can make the size random each time 
(rather than use the stored random size).

```javascript
//draw all the stars
for (let i = 0; i < starSizes.length; i++) {
	circle(starXs[i] + mouseX, starYs[i] + mouseY, random(5, 15));
}
```

<br/>

:alien: