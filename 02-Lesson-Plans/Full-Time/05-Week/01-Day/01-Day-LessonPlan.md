# 05.1 Full-Time Lesson Plan: Introduction to Node.js and ES6 syntax

## Overview

This lesson introduces Node.js and the new syntax that comes with ES6. This includes arrow functions and new variables `let` and `const`. We will also cover template literals and how they can be helpful in the development process.

> **Important**: Ensure that all activities using the `inquirer` package is using version 8.2.4. The latest version of `inquirer` (version 9+) introduces breaking changes to activities. All activities have version 8.2.4 in their respective `package.json` files but should you or your students install `inquirer`, please use `npm i inquirer@8.2.4`.

## Instructor Notes

* In this lesson, students will complete activities `01-Ins_Node-Demo` through `14-Stu_appendFile`.

* Students will be expected to have the latest LTS version of Node.js installed prior to class, but if they don't, be sure to tell them that they can install it using the resources found on the [Node.js installation guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs). Remind students that it is important to download the recommended LTS or Long Term Support version, since this is the most recent stable release.

* Transitioning from client-side to back-end development can be a little confusing at first. Remind students that Node.js is Chrome's V8 engine running on the machine rather than in the browser, giving us access to things like the file system.

* If students ask why they are learning Node.js, explain that Node.js allows us to create APIs and build applications using the client-server model.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code. 

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

By the end of class, students will be able to:

* Explain the client-server model.

* Run very simple JavaScript files from the command line using Node.js.

* Explain arrow functions and how they impact the `this` context.

* Use template strings and use `const` and `let` in place of `var`.

* Use functional loops like `map()` and `filter()`.

* Run Node.js applications from the command line with arguments.

* Import and use the native `fs` module to read and write to the file system.

## Slide Deck

* [Module 09 Slide Deck](https://docs.google.com/presentation/d/1zkzb8E8ORZbn-JeS47sIEid1bgbN011-xB7CWpzaIQE/edit?usp=sharing)

## Time Tracker

| Start   | #   | Activity Name                           | Duration |
| ------  | --- | ----------------------------------------| -------- |
| 10:00AM | 1   | Instructor Do: Stoke Curiosity          | 0:10     |
| 10:10AM | 2   | Instructor Demo: Node.js                | 0:05     |
| 10:15AM | 3   | Student Do: Node.js                     | 0:15     |
| 10:30AM | 4   | Instructor Review: Node.js              | 0:10     |
| 10:40AM | 5   | Instructor Demo: Arrow Functions        | 0:05     |
| 10:55AM | 6   | Student Do: Arrow Functions             | 0:15     |
| 11:05AM | 7   | Instructor Review: Arrow Functions      | 0:10     |
| 11:10AM | 8   | Instructor Demo: Let and Const          | 0:05     |
| 11:15AM | 9   | Student Do: Let and Const               | 0:15     |
| 11:30AM | 11  | Instructor Review: Let and Const        | 0:10     |
| 11:40AM | 12  | Instructor Demo: Functional Loops       | 0:05     |
| 11:45AM | 13  | Student Do: Functional Loops            | 0:15     |
| 12:00PM | 13  | BREAK                                   | 0:30     |
| 12:30PM | 14  | Instructor Review: Functional Loops     | 0:10     |
| 12:40PM | 15  | Instructor Demo: Template Literals      | 0:05     |
| 12:45PM | 16  | Student Do: Template Literals           | 0:15     |
| 1:00PM  | 17  | Instructor Review: Template Literals    | 0:15     |
| 1:15PM  | 18  | Instructor Do: Stoke Curiosity          | 0:10     |
| 1:25PM  | 19  | Instructor Demo: process.argv           | 0:05     |
| 1:30PM  | 20  | Student Do: process.argv                | 0:15     |
| 1:45PM  | 21  | Instructor Review: process.argv         | 0:10     |
| 1:55PM  | 22  | Instructor Demo: Read/Write File        | 0:05     |
| 2:00PM  | 23  | Student Do: Append File                 | 0:15     |
| 2:15PM  | 24  | Instructor Review: Append File          | 0:15     |
| 2:30PM  | 25  | END                                     | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Open the [slide deck](https://docs.google.com/presentation/d/1zkzb8E8ORZbn-JeS47sIEid1bgbN011-xB7CWpzaIQE/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **Introduction to Node.js**: Today's class is a milestone as we make the transition from writing client-side code to server-side code using Node.js. 

  * **What is full-stack web development?**
  
    * Full-stack web development encompasses the suite of tools required to build both the front and back ends of a web application. 

  * **How much of the stack do we know?**
  
    * So far, we have learned about client-side development. The three primary components of client-side code are HTML, CSS, and JavaScript. We can also fetch data from an API for use in the client.

  * **What is a client?**

    * A **client** is a piece of computer hardware or software that makes requests to a server. It can be a desktop computer, laptop, mobile device, and beyond!

  * **What is GitHub Pages doing?**

    * GitHub Pages is serving content to clients.

  * **What is a server?**

    * Depending on the context, a server is both the physical hardware and the software that hears requests from users and returns something, like an HTML or image file, or completes a process. 

  * **What is the client-server model?**

    * In modern web applications, there is constant back-and-forth communication between the visuals displayed on the user’s browser (the front end) and the data and logic stored on the server (the back end). Clients make requests, and servers respond.

  * **What is Node.js?**

    * Node.js allows us to run JavaScript outside the browser as well as on a server. Because Node.js is purely JavaScript, a front-end JavaScript developer can also work on server side code without having to learn a new programming language.

      Node.js is an open source, cross-platform JavaScript runtime environment designed to be run outside of the browser. 

      It is a general utility that can be used for a variety of purposes including asset compilation, scripting, monitoring, and **most notably as the basis for web servers**.

* Navigate to `28-Stu_Mini-Project/Solved/Basic/index.js` and demonstrate the following:

  * 🔑 We are viewing the mini-project that we will be able to build by the end of this module. 

  * 🔑 It is a command-line tool that generates an HTML portfolio page from user input.
  
  * First run `npm i` to install inquirer.
  
  * Make sure to point out that we will be using Node's native `fs` module for this project. 
  
  * Run `node index` to start the app and enter in the prompts when asked. 

  * Notice how the provided inputs are now visible in the resulting `index.html` by opening it in the browser.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ What are we learning?

    * 🙋 We are learning more about Node.js, third-party modules, and Node's native `fs` module.

    * ☝️ How does this project build off or extend previously learned material?

    * 🙋 We are continuing to expand our knowledge of using Javascript to build programs, but this time we are working outside the browser.

    * ☝️ How does this project relate to your career goals?

    * 🙋 Part of being a full-stack web developer is being as comfortable working on back-end technologies as you are with front-end technologies. By working on this project, you are adding another tool to your full-stack arsenal, which will ultimately make you a better developer.

* Answer any questions before proceeding to the next activity.

### 2. Instructor Demo: Node.js (5 min)

* Open `01-Ins_Node-Demo/index.js` in your terminal.

* Run `node index.js` from the command line and demonstrate the following:

  * 🔑  When we run the `index.js` file, we notice that the value of `this` has changed significantly.

  * 🔑  When we examine the output of the console log, we notice some recognizable methods that are available in Node.js.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is it necessary to wrap the `console.log` in an invoked function?

  * 🙋 Simply console logging the `this` keyword will return an empty object, because context only makes sense inside of functions. Without one, we won't have anything to return.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Hello-Node/README.md`.

### 3. Student Do: Node.js (15 min)

* Direct students to the activity instructions found in `02-Stu_Hello-Node/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# 📖 Create a Node.js Application

Work with a partner to implement the following user story:

* As a developer, I want to be able to execute JavaScript programs with Node.js.

* As a developer, I want to make a program that accepts a string as an input and logs it to the terminal. 

## Acceptance Criteria

* It's done when I have created a file, `index.js`, in my working directory.
  
* It's done when I have written JavaScript to log the string "Hellooo, Node!"

## 📝 Notes

Refer to the documentation:

[Node.js documentation](https://nodejs.org/en/docs/)

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What happens when you log `window`? What happens when you try to use `prompt`, `alert`, or `confirm`?
  
Use [Google](https://www.google.com) or another search engine to research this.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 4. Instructor Review: Node.js (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the Node.js thus far? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Open `02-Stu_Hello-Node/Solved/index.js` in your IDE and explain the following: 

  * We use `console.log()` to print out the string "Hellooo, Node!" in our terminal.

    ```js
    console.log("Hellooo, Node!");
    ```

  * 🔑 When we run `node index.js` and examine the output of the console log, we notice that it logs our string properly.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What happens if we were to log `window` to the console?

  * 🙋 We get an error&mdash;`window` is not defined in Node.js.

  * ☝️ What kinds of things do we think are possible in the browser, but not possible in Node.js?

  * 🙋 We can't use prompts, confirms, or alerts because of the `window` object.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Node.js documentation](https://nodejs.org/en/docs/), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: Arrow Functions (5 min) 

* Open `03-Ins_Arrow-Function/01-syntax.js` in your browser and demonstrate the following:

  * In this demonstration, you will give students an overview of arrow functions, including syntax differences, when to use them, and when to avoid them.

  * Explain to the class that ES6 introduces a newer, shorter syntax for writing functions. Consider the following example found in `03-Ins_Arrow-Function/01-syntax.js`.

  * 🔑 As you walk students through each of the following functions, see if they can point out the differences in syntax:

    ```js
    // ES5 function
    var createGreeting = function(message, name) {
      return message + ", " + name + "!";
    };

    // ES6 arrow function
    var createGreeting = (message, name) => {
      return message + ", " + name + "!";
    };

    ```

  * Answer any questions about arrow functions before moving on to some differences between arrow functions and regular functions.

  * In preparation for the activity, ask TAs to start directing students to the following code found in `03-Ins_Arrow-Function/02-context.js`:

    ```js
    // Depending on the environment `setTimeout` is called in, it may refer to one of two objects
    // In the browser, `setTimeout` is a property of the `window` object
    // In node, it belongs to a special "Timeout" object

    var person = {
      name: "Hodor",
      saySomething: function() {
        console.log(this.name + " is thinking...");
        setTimeout(function() {
          console.log(this.name + "!");
        }, 100);
      }
    };

    person.saySomething(); // prints "Hodor is thinking..."
    // prints "undefined!" 100ms later
    ```

  * Students might still not feel completely comfortable with the `this` keyword in JavaScript yet; reassure them that many experienced developers also have trouble with it.

  * Point out how this code works as intended: an arrow function automatically binds to the context or object it's created inside of, even if it is not a direct property of that object. The arrow function is created when `saySomething` is run, inside of `person`, right before the `setTimeout` is run.

  * In preparation for the discussion, ask TAs to start directing students to the following code found in `03-Ins_Arrow-Function/03-property-methods.js`:

    ```js
    // Avoid using arrow functions for object methods
    var dog = {
      name: "Lassie",
      sound: "Woof!",
      makeSound: () => console.log(this.sound),
      // readTag: () => console.log("The dog's tag reads: " + this.name + ".")
    };

    // Prints `undefined`
    dog.makeSound();

    // Prints `The dog's tag reads: undefined.`
    dog.readTag();

    // In the makeSound and readTag methods, `this` doesn't refer to `dog`
    // If this code run in node, `this` refers to `module.exports` (the object containing all the exports in this file)
    // If this code was run in the browser, `this` would refer to the window
    ```

  * Explain that when working with objects, we typically want to avoid using arrow functions for the methods. In these cases, the arrow function will bind to the context it's created inside of (probably the `window` or `module.exports` object).

  * We can replace regular functions most of the time, except when it comes to using the `this` keyword.
  
  * With practice, students will grow more comfortable knowing when to use and not use arrow functions. For now, they can use them most of the time, except as object methods.

* Answer any questions before proceeding to the next activity.

### 6. Student Do: Arrow Function Practice (15 min) 

* Direct students to the activity instructions found in `04-Stu_Arrow-Function-Practice/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Fix Implementation of Arrow Functions

  Work with a partner to resolve the following issue(s):

  * As a user, I want to run a script that will update a movie queue.

  ## Expected Behavior

  When a user runs the script, it will add and remove movies from the queue and display the movies currently in the queue.

  ## Actual Behavior

  The script exits out with an error message.

  ## Steps to Reproduce the Problem

  1. Navigate to the `Unsolved` folder from the command line.

  2. Run `node index.js`.

  3. Note the error that is printed.

  ## 💡 Hints

  What is an example of when we shouldn't use arrow functions?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can you shorten the arrow function syntax even further with implicit return statements?
    
  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: Arrow Function Practice (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with arrow functions? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Arrow functions

  * ✔️ `this` binding

  * ✔️ Implicit return statements

* Open `04-Stu_Arrow-Function-Practice/Solved/index.js` in your IDE and explain the following: 

  * The following `funnyCase()` function is able to use arrow syntax, because there is no `this` context that needs to be preserved:

    ```js
    var funnyCase = string => {
      var newString = "";
      for (var i = 0; i < string.length; i++) {
        if (i % 2 === 0) newString += string[i].toLowerCase();
        else newString += string[i].toUpperCase();
      }
      return newString;
    };
    ```

  * 🔑 When using arrow functions, we can use an implied return to reduce the code even further, as shown in the following example:
  
      ```js
      var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      var doubled = map(numbers, element => element * 2);
      ``` 

  * 🔑 In the following example, we had to convert the arrow functions back to regular functions to preserve the context of `this` in the object:
  
      ```js
      var netflixQueue = {
        queue: [
          "Mr. Nobody",
          "The Matrix",
          "Eternal Sunshine of the Spotless Mind",
          "Fight Club"
        ],
        watchMovie: function() {
          this.queue.pop();
        },
      };
      ``` 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why would you use arrow functions?

  * 🙋 The syntax is easier to write and makes for cleaner-looking code.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: let and const (5 min) 

* Open `05-Ins_Let-Const/let.js` in your IDE and demonstrate the following:

  * 🔑  In JavaScript, `var` is **function scoped**. This means that variables and functions defined inside the scope of the function can't escape the function.
  
  * 🔑  ES6 offers us a new way to define variables using `let`. Unlike `var`, `let` is **block scoped**.
  
  * 🔑  A **block** is created by a pair of curly braces. This includes loops and conditional statements as well as function bodies. Because `let` is block scoped, any variables we define using `let` inside of a block are only available inside of that block.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ In the following code snippet, why does the variable `i` exist outside of the function scope in the first `for` loop, while `j` in the second `for` loop is `undefined`?

    ```js
      // 1. When using var, our counter exists after a for-loop is done

      for (var i = 0; i < 5; i++) {
        console.log(i);
      }

      console.log(i); // Prints 5


      // When using let, our counter is not defined outside of the for-loop block

      let x = 42;

      for (let j = 0; j < 5; j++) {
        console.log(j);
        console.log(x);
      }

      console.log(j); // ReferenceError: j is not defined

      let j = 42;
      console.log(j); // prints 42
      ```

  * 🙋 We used the `var` keyword to assign the variable in the first `for` loop, allowing it to be accessed outside the function scope. The second `for` loop has `j` limited to the function scope because we defined it using the `let` keyword.

* Open `05-Ins_Let-Const/const.js` in your IDE and demonstrate the following:

  * Part of the ES6 syntax is a new keyword called `const`, found in many other programming languages and generally used whenever we know a variable should not be changed.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):  

  * ☝️ After reviewing this code, can anyone explain a situation when using `const` might not be ideal?

  * 🙋 Because a variable declared with `const` cannot be reassigned, it might be a bad idea to use it for any data that needs to be mutated.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_Let-Const/README.md`.

### 9. Student Do: let and const (15 min) 

* Direct students to the activity instructions found in `06-Stu_Let-Const/README.md`.

* Stress that students don't need to completely understand all of the code in the activity. They just need to remember what we have covered about `const`, `let`, and arrow functions.

* Break your students into pairs that will work together on this activity.

```md
# 🐛 Fix Issue With Scoped Variable

Work with a partner to resolve the following issue(s):

* As a developer, I want my variables to be correctly scoped so that my functions work correctly.

## Expected Behavior

When a user runs the `addGreetingMessage` function, it should log the messages in the correct order inside the console.

Hello Tammy
How are you?

When a user runs the `calloutCounter` function, it should log the messages in the correct order inside the console.

5 Inside the loop
4 Inside the loop
3 Inside the loop
2 Inside the loop
1 Inside the loop
Outside of the loop

When a user runs the `countMatrix` function, it should log the entire matrix in the correct order inside the console.

1
2
3
4
5
6
7
8
9

## Actual Behavior

The current `addGreetingMessage` function logs:

Hello Tammy
Hello Tammy

The current `calloutCounter` function gives us an error when it is called.

The current `countMatrix` function logs:

1
2
3

## Steps to Reproduce the Problem

1. Navigate to the `Unsolved` folder from the command line.

2. Run `node index.js`.

3. Note the error that is printed.

## 💡 Hints

What does it mean when a variable is block scope?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What is the difference between function scope and block scope?
  
Use [Google](https://www.google.com) or another search engine to research this.

```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: let and const (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with `let` and `const`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `let`
  
  * ✔️ `const`

* Open `06-Stu_Let-Const/Solved/index.js` in your IDE and explain the following: 

  * Inside of our `addGreetingMessage` function we have two `message` variables.

  * 🔑 `var` is function scoped so we cannot use the same name for a variable inside our function unless we use `let`.
  
  * 🔑 `let` is block scoped which lets us use our `message` variable twice since we have two separate blocks in our function.

  ```js
  const addGreetingMessage = (name) => {
    let message = "How are you?";

    if(name.length > 0){
      let message = "Hello " + name;
      console.log(message);
    }

    console.log(message);
  }
  ```

  * 🔑 The `calloutCounter` function had two variables named `callout` since we used `const` on the first one, it has made the variable a constant with block scope.

  * 🔑 The `callout` variable inside the `while...loop` is hoisted to the top of the functions scope because it was created with `var`.

  * We can easily fix this problem by making each variables block scoped with `let`.

  ```js
  const calloutCounter = () => {
    let callout = 'Outside of the loop';
    let counter = 5;

    while( counter > 0) {
      let callout = 'Inside the loop';
      console.log(counter, callout);
      counter--;
    }

    console.log(callout);
  }
  ```

  * By using `let` we can ensure that our `index` variables will not be accessed from outside of their scope.

  * Using `const` lets us know that we shouldn't try renaming variable within its scope.

  ```js
  const countMatrix = (matrix) => {
    for (let index = 0; index < matrix.length; index++) {
      const line = matrix[index];
      for (let index = 0; index < line.length; index++) {
        const element = line[index];
        console.log(element);
      }
    }
  }
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is a good use for `let`?

  * 🙋 When we need to reassign a value. An example of this would be a counter variable like `i`.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) and the [MDN Web Docs on const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 12. Instructor Demo: Functional Loops (5 min) 

* Open `07-Ins_Functional-Loops/index.js` in your browser and demonstrate the following:

  * `forEach()` performs a callback on each item in the array, mutating it in place.

  * `filter()` returns a new array of items that result in a truthy value after being passed into the callback.

  * `map()` is very similar to `forEach()` with the exception that it returns a new array. We can use it to create an array of modified elements if we so choose.

  * 🔑  Explain that `filter()` and `map()` are used heavily in React when rendering elements from array data. Students have probably seen `forEach()` already, but it's a good stepping stone for understanding `filter()` and `map()`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between `filter()` and `forEach()`?

  * 🙋 `filter()` returns a brand-new array, while `forEach()` mutates the existing array.
  
  * ☝️ How is `map()` different than `filter()`?
  
  * 🙋 `map()` will return a brand-new array like `filter()` does; however, the length of the array that `map()` returns will be the exact same as the input array. This isn't always the case for the `filter()` method.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_Functional-Loops/README.md`.

### 13. Student Do: Functional Loops (15 min)

* Direct students to the activity instructions found in `08-Stu_Functional-Loops/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# 📐 Add Comments to Implementation of Functional Loops

Work with a partner to add comments describing the functionality of the code found in [filter.js](./Unsolved/filter.js) and [map.js](./Unsolved/map.js).

## 📝 Notes

Refer to the documentation: 

* [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

* [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

---

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What is the `reduce()` array method?

Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 14. Instructor Review: Functional Loops (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with functional loops? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `map()`

  * ✔️ `filter()`

* Open `08-Stu_Functional-Loops/Solved` in your IDE and explain the following: 

  * 🔑  Remember that each of these array methods is just another type of `for` loop.

  * 🔑  We manipulate each item in an array in some way and return the original mutated array or a modified version of the original array.

  * With the `map()` method, a callback is run once for every element in the array. The value that is returned gets added to the corresponding index of the new array, as shown in the following example:

    ```js
    const originalArray = [1, 3, 2, 5, 10];

    const doubledArray = originalArray.map(function(data) {
      return data * 2;
    });

    console.log(doubledArray);
    console.log(originalArray);

    const tripledArray = originalArray.map(data => data * 3);
    const oddOrEven = originalArray.map(num => (num % 2 === 0 ? "even" : "odd"));
    ```

  * With the `filter()` method, if the callback function returns something truthy, the array element is copied to the new array. Otherwise it is skipped.
  
  * In the following example, the first array should contain only prime numbers, and the second should contain only numbers larger than `5`:

      ```js
      const originalArray = [1, 3, 2, 5, 10];

      const evenNumbers = originalArray.filter(function(data) {
        if (data % 2 === 0) {
          return true;
        }
      });

      console.log(evenNumbers);
      console.log(originalArray);

      const isPrime = num => {
        for (let i = 2; i < num; i++) {
          if (num % i === 0) return false;
        }
        return num !== 1;
      };


      numbers (`primeArray`)
      const primeArray = originalArray.filter(isPrime);

      larger than 5(`moreThan5Array`)

      const moreThan5Array = originalArray.filter(num => num > 5);
      ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are some real-life use cases for the `filter()` method?

  * 🙋 When filtering out a list of images that contain the word `large` in the file name; when returning an array of all user accounts that use `@gmail.com`; or when grabbing a list of GitHub issues that have a status of `closed`.

  * ☝️ What is an example of when you might want to map over something?

  * 🙋 When returning an HTML line-item element for every item in a list while building a to-do list.

* Answer any questions before proceeding to the next activity.

### 15. Instructor Demo: Template Literals (5 min) 

* Open `09-Ins_Template-Literals/index.js` in your browser and demonstrate the following:

  * 🔑  Using string interpolation, or template literals, we have a new way of concatenating variables to the rest of strings. This is a new feature included in ES6.

  * 🔑 Template literals are much more readable and easier to manage. Consider the following example:

      ```js
      const arya = {
        first: "Arya",
        last: "Stark",
        origin: "Winterfell",
        allegiance: "House Stark"
      };

      const greeting = `My name is ${arya.first}!
      I am loyal to ${arya.allegiance}.`;
      ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are the main differences that you notice in syntax between regular string concatenation and template literals?

  * 🙋 Immediately we notice that template strings use backticks instead of quotes. Additionally, instead of using plus signs, we can now reference variables explicitly using the `${}` syntax.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu_Template-Literals/README.md`.

### 16. Student Do: Template Literals (15 min) 

* Direct students to the activity instructions found in `10-Stu_Template-Literals/README.md`.

* Break your students into pairs that will work together on this activity.

 ```md
# 🏗️ Implement Template Literals

Work with a partner to implement the following user story:

* As a developer, I want to know how to use template literals inside of a string.

## Acceptance Criteria

* It's done when I have created a `music` object in `Unsolved/index.js`.

* It's done when I have added `title`, `artist`, and `album` properties to the `music` object.

* It's done when I have used template literals inside the `songSnippet` variable to output data from the `music` object.

* It's done when I see the results in my command line after I run the `index.js` file.

## 💡 Hints

* Can we use template literals in place of string concatenation?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* It's easy to get confused about which syntax belongs to which technology. The dollar sign (`$`) is used a lot in JavaScript&mdash;what are some other places you have seen the dollar sign used?

Use [Google](https://www.google.com) or another search engine to research this

 ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 17. Instructor Review: Template Literals (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with template literals? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Backticks vs. quotation marks

  * ✔️ `${}` syntax

  * ✔️ Template literals vs. string concatenation

* Open `10-Stu_Template-Literals/Solved/index.js` in your IDE and explain the following: 

  * 🔑  Template literals are much easier to read than traditional string concatenation.

  * 🔑  Dealing with spacing is a lot easier using template literals.

  * 🔑  Don't forget to use backticks instead of quotes. This is a very easy mistake to make.

  * In the following example, we create a template string that will be displayed in the console:

  ```js
  const music = {
      // code here
      title: "Yeke Yeke",
      artist: "Mory Kant",
      album: "Akwaba Beach"
    };
    
  const songSnippet = `${music.title} by ${music.artist} from the album ${music.album} is currently playing`;
    
  console.log(songSnippet)
  ```

  * 🔑  We use the `${}` syntax to reference the music object and the variables within it in the template string.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are the benefits of using template strings?

  * 🙋 They are easier to read and easier to manage. They also allow us to maintain indentation and formatting of the content when inside the backticks.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 18. Instructor Do: Stoke Curiosity (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are some of the new syntax rules you have learned today?

  * 🙋 This week we learned about arrow functions, `let`, `const`, and template strings.
    
  * ☝️ What are some of the differences between `this` in Node.js and `this` in the browser?

  * 🙋 In the browser, `this` refers to the `window` object, while in Node.js, `this` refers to the `global` object. The `this` keyword is all about context, so it changes based on where you run it. 

  * ☝️ What are some examples of things that are now possible with JavaScript running outside the browser?

  * 🙋 Running JavaScript outside the browser now allows us to create web servers, APIs, and command-line applications and manipulate the file system. A lot of applications that we use every day like Slack, Discord, and even VS Code are written in JavaScript and packaged in a binary using a framework called [Electron](https://www.electronjs.org/).

  * While we won't cover Electron in this course, it is important for students to understand the options that developers have now that they can run JavaScript outside of the browser.

### 19. Instructor Demo: process.argv (5 min) 

* Navigate to `11-Ins_process-argv` and run `node index.js` from the command line to demonstrate the following: 

  * 🔑  When we run the following code at the command prompt, we see that the output is an array that contains three items:

    ```sh
    [
    '/usr/local/bin/node',
    '/Users/<username>/coding/fullstack-ground/01-Class-Content/09-NodeJS/01-Activities/11-Ins_process-argv/index.js'
    ]
    ```

  * 🔑  When we add additional arguments to the command `node index.js Hello World!`, we get the following result:

    ```sh
    [
    '/usr/local/bin/node',
    '/Users/<username>/coding/fullstack-ground/01-Class-Content/09-NodeJS/01-Activities/11-Ins_process-argv/index.js',
    'hello',
    'world!'
    ]
    ```

  * 🔑 We store command-line arguments in an object property, `process.argv`. These argument values (or `argv`) are passed to execution (or `process`) at runtime. This will return an array, and therefore we can isolate just the additional arguments by accessing the correct index position, as follows:

    ```js
    console.log(process.argv);
    console.log(process.argv[2])
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is returned by this application?

  * 🙋 Running the application returns an array.

  * ☝️ What are the items in the array?

  * 🙋 The first item in the array is the installation location of Node.js itself. The second item in the array is the **absolute path** to the application. The third and fourth arguments are what we pass into the command line, split on a space.
  
  * ☝️ What do you think would happen if we wrapped "Hello World!" in quotes (e.g., `node index.js "Hello World!"`)?
  
  * 🙋The entire string is passed as one argument, rather than two different arguments split on the space.

  * ☝️ What does it mean for us if we can pass arguments to Node.js applications?
  
  * 🙋 We can work with those values to create dynamic, interactive applications.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `12-Stu_Parameter-Check/README.md`.

### 20. Student Do: process.argv (15 min) 

* Direct students to the activity instructions found in `12-Stu_Parameter-Check/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement `process.argv`

  Work with a partner to implement the following user story:

  * As a developer, I want to use command-line arguments as input when writing Node.js applications.

  ## Acceptance Criteria

  * It's done when I have created a file, `index.js`, in the working directory.

  * It's done when I use `process.argv` to assign two arguments to variables.

  * It's done when I compare those two variables to see whether they are the same or not.

  * It's done if the program returns `true` when the values are the same and `false` if they are not. 

  ## 💡 Hints

  How many different ways can you solve this problem? Remember that there is not just one correct solution.

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the difference between `===` and `==` when comparing two values in JavaScript?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 21. Instructor Review: process.argv (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with `process.argv`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `process.argv`

* Open `12-Stu_Parameter-Check/Solved/index.js` in your IDE and explain the following: 

  * 🔑 Values stored in `process.argv` are accessed by an array index.

  * 🔑 This is one of those concepts where you have to remember that there is no one correct way to solve the problem.

  * When we run the app, we see a list of Boolean values. All of them are checking for the same condition, but each uses a different method, as shown in the following example:

    ```sh
    node index.js 3 4
    node index.js 7 7
    ```

  * 🔑 We store the second and third elements in the array to variables, as follows:

    ```js
    var a = process.argv[2];
    var b = process.argv[3];
    ```

  * 🔑 In the following example, we can see that there is more than one way to check if the statement is true:

    ```js
    // using a conditional statement
    if (a === b) {
        console.log(true);
    } else {
        console.log(false);
    }

    //using a ternary operator
    console.log(a === b ? true : false)

    // comparing variables
    console.log(a === b);

    // comparing argument values directly
    console.log(process.argv[2] === process.argv[3]);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How could we improve the code for when a user fails to enter two arguments?

  * 🙋 We could check if `a` or `b` is falsy and instead console log a message with directions.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Node.js documentation on process.argv](https://nodejs.org/api/process.html#process_process_argv), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 22. Instructor Demo: Read/Write File (5 min) 

* Navigate to `13-Ins_Read-Write-File` and run `node index.js` from the command line to demonstrate the following: 

  * 🔑 When we run this application, we can see that the output is the content of the companion `.csv` file in the project folder, as shown in the following example:

    ```sh
    10,123,76,5003,9,0.127,40,-1,2^4
    ```

  * 🔑 This is made possible through the use of Node.js's native `fs` module. The `fs` module is part of the **standard library** that includes dozens of modules that extend the basic functionality of Node.js.

  * 🔑 To use these modules, we need to import them into the app using `require` statements. In the following example, we are importing `fs` and assigning it to a variable of the same name:

    ```js
    var fs = require("fs");
    ```

  * 🔑 The `fs` method `readFile` accepts three arguments&mdash;the file we want to read, the encoding format we want to use to read the file, and a callback, as shown in the following example:

    ```js
    fs.readFile("data.csv", "utf8", function(error, data) {

    if (error) {
        return console.log(error);
    }

    console.log(data);
    });
    ```

* Comment out the `readFile` function and comment in the `writeFile` function in `13-Ins_Read-Write-File/index.js`.
  
  * 🔑 `fs.writeFile` will not only generate nonexistent files but will also overwrite them if they already exist.
  
  * 🔑 This code is similar, but different from the previous demo in a few key ways. Note in the following example that we don't start out with a `.txt` file in the working directory:

    ```js
    fs.writeFile("log.txt", process.argv[2], function(err) {

    if (err) {
        return console.log(err);
    }

    console.log("Success!");
    ```

 * 🔑  When we run the preceding code using `node index.js Hello`, we will get a newly created `log.txt` file with the text “Hello” in it.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What do you think this application does?

  * 🙋 This application will read a file (`data.csv`) and will log the results stored in a variable (`data`).

  * ☝️ Why do you think we need to import modules if they are built into Node.js to begin with?

  * 🙋 We import modules into the application to load only exactly what we need, speeding up application performance. 
  
  * ☝️ What is different about the code in the `writeFile` example?
  
  * 🙋 Rather than `readFile`, we are using the `fs` method `writeFile`. Rather than specifying an encoding format, the second argument is `process.argv[2]`.

  * ☝️ What happens when we run the application multiple times?

  * 🙋 `writeFile` overwrites existing files.

  * ☝️ How can we resolve this issue?

  * 🙋 We need a method that can append text to files.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `14-Stu_appendFile/README.md`.

### 23. Student Do: Append File (15 min) 

* Direct students to the activity instructions found in `14-Stu_appendFile/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of `fs.appendFile()`

  Work with a partner to add comments describing the functionality of the code found in [index.js](./Unsolved/index.js).

  ## 📝 Notes

  Refer to the documentation: 

  [Node.js documentation on the fs module](https://nodejs.org/api/fs.html#fs_fs_appendfile_path_data_options_callback)

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is a ternary operator?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 24. Instructor Review: Append File (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel appending to files? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `fs.appendFile`

  * ✔️ ternary operator

* Open `14-Stu_appendFile/Solved/index.js` in your IDE and explain the following: 

  * In our command line, if we run `node index.js "First"`, we see the message "Commit logged!".

  * When we check the newly created `log.txt` file, we see the word "First" on line 1.

  * If we run the following commands in our command line, we should see each message appended to the `log.txt` file

    ```sh
    node index.js "commit early and often"
    node index.js "everyone wants a log"
    ```

  * `fs.appendFile` appends text to file rather than overwriting the file.

  * 🔑 The first argument is the path; the filename of where to append the text. If the file doesn't exist yet, it will create it. The second argument is the data which is the string of text to append to the file. Here we used `${process.argv[2]}`. And finally the callback function.

    ```js
    fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
      err ? console.error(err) : console.log('Commit logged!')
    );
    ```

  * 🔑 Notice we used a ternary operator instead of an `if` statement. A ternary operator takes in a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.
  
    ```js
    err ? console.error(err) : console.log('Commit logged!')
    ```

  * It isn't crucial that we understand and use this now. Think of it as a sneak peak into another way we can write `if` statements.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What does the `\n` do when we concatenate it with the value store in `process.argv[2]`?
  
  * 🙋 This creates a new line character.
  
  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Node.js documentation on the fs module](https://nodejs.org/api/fs.html#fs_fs_appendfile_path_data_options_callback), and stick around for office hours to ask for help.

* Answer any questions before ending class for the day.

### 25. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete [this anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
