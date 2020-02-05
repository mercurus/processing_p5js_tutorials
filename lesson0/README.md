### Lesson 0
# Intro to programming and Processing

In this beginner-friendly class we are learning the programming language [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript).To get a better grasp of it, 
and to have some fun along the way, we'll also be learning to make generative art using the library [p5.js](https://p5js.org/) (aka Processing).
To really understand though we need to know the context of the language and how to think like a programmer.

To program a computer is to give it a set of instructions. Computers have zero inutition and no way to assume anything. 
Computers don't know at all what you want to do or how you want it done. They simply do exactly what they're told to do. 
You need to direct the computer at every step. Programmers do this with a set of tools: *variables, functions, arrays, 
objects, loops,* and *control flow.* We'll be going over each of these individually later.
First let's get an understanding of how JavaScript runs and what kinds of things it can do. 

Feel free to skip around the lessons, and don't worry too much if you don't understand something immediately. 

<br/>
### JavaScript is an interpreted language, not a compiled language

Code can't be executed by a computer directly. We write code as text, often with lots of plain English words like *if, else, for,* and *function.* 
Code needs to be translated into [CPU instructions](https://en.wikipedia.org/wiki/Central_processing_unit) so the computer knows how to carry it out bit by bit. 
Different languages handle that step differently. 

If a language is compiled that means it gets translated down to [machine language](https://en.wikipedia.org/wiki/Machine_code) and can be executed directly.
If a programming language is interpreted that means there's another program that reads the code and handles execution while it's running.
[Languages that are compiled run faster](http://www.differencebetween.net/technology/difference-between-compiled-and-interpreted-language/) 
than those that are interpreted because compiling means all the translation happens *before* the program is executed. That's not to say that JavaScript is slow though.

<br/>
### JavaScript is interpreted by internet browsers

You're <!-- probably --> using a browser now to read this. 

* [Firefox](https://www.mozilla.org/en-US/firefox/new/) by Mozilla
* [Chrome](https://www.google.com/chrome/index.html) by Google
* [Edge](https://www.microsoft.com/en-us/edge) by Microsoft (previously Internet Explorer)
* [Safari](https://www.apple.com/safari/) by Apple
* [Opera](https://www.opera.com/)
* [Market share of browsers](https://www.netmarketshare.com/browser-market-share.aspx)

JavaScript makes [webpages](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Pages_sites_servers_and_search_engines) interactive. It can change the 
colors, textboxes, buttons, and pretty much everything else that makes up a webpage. It can read user input and perform data validation. It can make requests from 
other websites to retrieve data in different forms. It can also display popups and ads and hijack your scoll position, which is a bummer but isn't the computer's fault. 

Not every page needs JavaScript (especially if it just displays text like this one), but most modern websites have at least a little on each page. Actually most
modern websites have a ton on each page. As browsers have become better and faster they've been given more to do. 

As you probably know, webpages are also made up of HTML and CSS. These intimately related languages have their own ways of affecting how a webpage looks and behaves. 
There will be a separate lesson on HTML and CSS but we'll mostly focus on JavaScript throughout. 

<br/>
### JavaScript runs client side as opposed to server side

| Client Side | Server Side |
| ----------- | ----------- |
| Front end | Back end |
| Your computer | Cloud computer |
| Display | Storage |
| Collects user input | Processes user input |
| Can view and edit scripts | Cannot view or edit source code |
| Page behavior and visuals | Computation and transactions |
| Less secure | More secure |

A server is simply a computer that is dedicated to handling requests. They store the files of a website, they host and operate it. 
Many modern websites utilize multiple servers to keep track of all the data and user traffic. The internet is basically a large network of many different servers 
connected to each other. They're typically stored in [data centers](https://en.wikipedia.org/wiki/Data_center) and high end servers can cost many thousands of dollars. 

Browsers are the client which communicate with web servers to show and navigate websites. When your browser opens files that are on your computer everything is happening client side.

<br/>
### There are many JavaScript libraries

In any programming language a [library](https://en.wikipedia.org/wiki/Library_(computing)) is a group of related functions, variables, and tools that have been written using
that language. They're designed to be reusable by others. JavaScript libraries can help with things like animation, form validation and submission, interactive tables, 
datepickers, and much more. There are many libraries available for JavaScript and most websites use at least one to boost functionality. They can be big or small, and 
keep track of their [version](https://en.wikipedia.org/wiki/Software_versioning). 

All languages come with their own [standard library](https://en.wikipedia.org/wiki/Standard_library) which provide basic ways to handle data. Standard libraries 
typically help with things like advanced math, dates and times, transforming text and lists, and more. They are core to a language and can be used right away. Any and all other 
libraries need to be downloaded and/or imported directly in your code.

> :information_source: See the [JavaScript standard library here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

<br/>
### Processing is a library for drawing with code

The library [Processing](https://processing.org/) began with Ben Fry and Casey Reas in 2001 at MIT. They wanted to make it easier to get into writing code and 
to promote the visual arts. Processing was originally written using the language Java. There are a few similarities between Java and JavaScript but the more you dig into 
them the more differences you'll find. However the library Processing is designed to be used the same regardless of which language you're writing it in. 

Processing gives you a canvas on the screen and provides the ability to draw shapes and visualize data. It allows you to play with color, 
lines and curves, positioning, user input, all sorts of things. What Processing is used for is up to you. With the ability to draw using code you can make art, visual effects, 
games, graphs, special calculators, interactive data, you name it. 

p5 offers [an online editor](https://editor.p5js.org/) so you can jump into coding with it and see the results right away (make sure to hit play!). It makes it simple to test and learn things.
Open that editor and you'll see all the code needed for a very basic program using p5:

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
```

<br/>
### Code has lots of rules

One of the first things you need to learn about any language is its [syntax](https://en.wikipedia.org/wiki/Syntax_(programming_languages)). The syntax of a language defines
the rules for which combinations of text characters must be followed so that it can be correctly read by the computer. When code doesn't follow the rules it is said to have
[syntax errors](https://en.wikipedia.org/wiki/Syntax_error) and can't begin running until corrected. But it's not important that you understand every single tiny rule before
you can start coding because simpler code has simpler rules.

Above you may notice several things about JavaScript's syntax. When a curly brace `{` is opened it must be closed later `}`. This defines a 
code block which is where you write [statements](https://www.w3schools.com/js/js_statements.asp) (code). 

The keyword **`function`** declares that the code block following it is for a [function](https://www.tutorialspoint.com/computer_programming/computer_programming_functions.htm), 
which is a reusable set of commands. After **`function`** is the name of the function, in this case `setup`, ending with parentheses. All function
declarations end with `()` although sometimes there's other stuff inside them. 

The only command in `setup()` is a call to another function called `createCanvas` which is a part of the library p5. It sets the width and height of the canvas, above they're both
`400` separated by a comma `,`. Then it ends with a parenthesis `)` to close the function call and a semicolon `;` to end the statement (all statements end with a semicolon). 
When setting the canvas size the first number is for the width, second for the height, and you can make them as big as you want (try not to get bigger than your monitor!)

```javascript
function setup() {
  createCanvas(1920, 1080);
}
```

The program starts with `setup()` because the writers of Processing knew that programs need to start by laying out a few ground rules. When a program boots up with
Processing it starts by running the code inside your function `setup()` exactly once, and the first thing you'll want to do is set the size of the canvas. The function can also hold a bunch
more but we're keeping it simple for now.

Next is where it gets interesting, the function `draw()`

```javascript
function draw() {
  background(220);
}
```

Drawing is what Processing does and this function is where you put what you want drawn. The function `draw()` gets called repeatedly, over and over as your program is running.
Here it's only doing one thing: call the p5 function `background` to paint the whole canvas with one color (in this case grey). 

<br/>
### Processing uses Red, Green, Blue coloring*

The most common way to choose colors on a computer is using different amounts of Red, Green, and Blue (RGB). If you want a bright red your color would use 100% Red, 0% Green, 
and 0% Blue. If your color uses 100% of each R, G, and B you would get white. For 0% of each R, G, and B you'd get black. 
This system is know as [additive color](https://en.wikipedia.org/wiki/Additive_color) (the opposite being [subtractive color](https://en.wikipedia.org/wiki/Subtractive_color)). 
Computers work this way is because monitors display color using light which behaves different from mixing paints/etc in the real world. 




> \*Processing can also work with colors using Hue, Saturation, Brightness (HSB) [colorMode](https://p5js.org/reference/#/p5/colorMode)

[`setup`](https://p5js.org/reference/#/p5/setup) 
[`draw`](https://p5js.org/reference/#/p5/draw)
[`createCanvas`](https://p5js.org/reference/#/p5/createCanvas) 
[`background`](https://p5js.org/reference/#/p5/background) 



<br/>
To see everything it has to offer check the [reference](https://p5js.org/reference/).