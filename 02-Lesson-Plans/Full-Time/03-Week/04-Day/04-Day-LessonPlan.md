# 03.4 Full-Time Lesson Plan: Server-Side APIs

## Overview

* Most of today's activities pick up where you left off last time, using `fetch()` with the GitHub API. You will also introduce students to the Chrome DevTools Network tab, the `response` object, and the `document.location` Web API method.

## Instructor Notes

* In this lesson, students will complete activities `09-Ins_Demo_Dynamic` through `20-Stu_Documentation_Location`.

* Before class, be sure to read over the activities and try to anticipate any questions that students might have. Take a few minutes to familiarize yourself with the [MDN Web Docs on Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) and the [Google documentation on inspecting network activity](https://developers.google.com/web/tools/chrome-devtools/network).

* Remind students throughout class that all of this will get easier as they gain familiarity with the GitHub API documentation and using `fetch()`.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code. 

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

By the end of class, students will be able to:

* Use the Chrome DevTools Network tab.

* Implement and use the `Response` object from a `fetch()` request.

* Implement deconstructed parameters in an API request URL.

* Implement `fetch()` options for a `fetch()` request.

* Use `document.location` to replace the URL in the browser.

## Time Tracker

| Start  | #   | Activity Name                                | Duration |
|---     |---  |---                                           |---       |
| 10:00AM| 1   | Instructor Demo: Generate Dynamic Elements   | 0:05     |
| 10:05AM| 2   | Student Do: Generate Dynamic Elements        | 0:15     |
| 10:20AM| 3   | Instructor Review: Generate Dynamic Elements | 0:10     |
| 10:30AM| 4   | Instructor Do: Stoke Curiosity               | 0:10     |
| 10:40AM| 5   | Instructor Demo: Network Activity Tab        | 0:05     |
| 10:45AM| 6   | Student Do: Network Activity Tab             | 0:15     |
| 11:00AM| 7   | Instructor Review: Network Activity Tab      | 0:10     |
| 11:10AM| 8   | Instructor Demo: fetch() Status              | 0:05     |
| 11:15AM| 9   | Student Do: fetch() Status                   | 0:15     |
| 11:30AM| 10  | Instructor Review: fetch() Status            | 0:10     |
| 11:40AM| 11  | FLEX                                         | 0:20     |
| 12:00PM| 12  | BREAK                                        | 0:30     |
| 12:30PM| 13  | Instructor Demo:Deconstruct Parameters       | 0:05     |
| 12:35PM| 14  | Student Do:Deconstruct Parameters            | 0:15     |
| 12:50PM| 15  | Instructor Review: Deconstruct Parameters    | 0:10     |
| 1:00PM | 16  | Instructor Demo: fetch() Options             | 0:05     |
| 1:05PM | 17  | Student Do: fetch() Options                  | 0:15     |
| 1:20PM | 18  | Instructor Review: fetch() Options           | 0:10     |
| 1:30PM | 19  | Instructor Demo: Document Location           | 0:05     |
| 1:35PM | 20  | Student Do: Document Location                | 0:15     |
| 1:50PM | 21  | Instructor Review: Document Location         | 0:10     |
| 2:00PM | 22  | FLEX                                         | 0:30     |
| 2:30PM | 23  | END                                          | 0:00     |
  
---

## Class Instruction

### 1. Instructor Demo: Generate Dynamic Elements (5 min)

* Welcome students to class.

* Open `09-Ins_Demo_Dynamic/index.html` in your browser and demonstrate the following:

  * 🔑 When we press the Click Me button, the page is populated with dynamically generated HTML.

  * 🔑 We see a list of the last five issues from the Node.js repo, along with the users who posted them.

* Open `09-Ins_Demo_Dynamic/assets/js/script.js` in your IDE and explain the following.

  * We first grab the root elements we will append to later, shown in the following code:

    ```js
    var issueContainer = document.getElementById('issues');
    var fetchButton = document.getElementById('fetch-button');
    ```

  * We make the `fetch()` request and then loop through the data. When we loop, we create new HTML elements, give them the content of the response, and append them to the page, as follows:

    ```js
    var userName = document.createElement('h3');
    var issueTitle = document.createElement('p');
    userName.textContent = data[i].user.login;
    issueTitle.textContent = data[i].title;
    issueContainer.append(userName);
    issueContainer.append(issueTitle);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Can this all be done without a third-party library?

  * 🙋 Yes! `fetch()` and other features of vanilla JavaScript will allow us to achieve this.

  * ☝️ How is this useful?

  * 🙋 It allows us to display the API responses on a webpage&mdash;dynamically!

  * ☝️ How would we build this?

  * 🙋 We would loop over the data provided by the `fetch()` response. On each loop, we create an HTML element, give it the content of the response, and append it to the page.

* Let students know that they only need to generate the dynamic elements; the `fetch()` request has been provided for them in this upcoming activity.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu_Demo_Dynamic/README.md`.

### 2. Student Do: Generate Dynamic Elements (15 min)

* Direct students to the activity instructions found in `10-Stu_Demo_Dynamic/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement a fetch() Request to Display GitHub Data as HTML

  Work with a partner to implement the following user story:

    * As a user, I want to see a list of GitHub users and links to their profiles.

  ## Acceptance Criteria

    * It's done when I press the "Click Me" button, and a list of five GitHub users appears underneath on the page.

    * It's done when each user includes their login name and a URL to their GitHub profile.

  ---

  ## 💡 Hints

  Use the previous three exercises as references if needed to put this together.

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are some other third-party APIs you could make `fetch()` requests to?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 3. Instructor Review: Generate Dynamic Elements (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with generating HTML from Fetch data? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ `document.getElementById`

  * ✔️ `for` loop

  * ✔️ dot notation

  * ✔️ `document.createElement`

  * ✔️ `.append`

* Open [script.js](./Solved/assets/js/script.js) in your IDE and explain the following:

  * 🔑 We use `document.getElementById` to target the `users` `<div>`and the `fetch-button` `<div>`. We save them to the variables `usersContainer` and `fetchButton` respectively, as follows:

    ```js
    var usersContainer = document.getElementById('users');
    var fetchButton = document.getElementById('fetch-button');
    ```

  * We use `fetch()` to make a request to receive some data. We are sure to convert it to JSON so that it can be more easily consumed, as shown in the following example:

    ```js
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    ```

  * 🔑 We use a `for` loop to iterate through the response data, like in the following example:

    ```js
    for (var i = 0; i < data.length; i++) 
    ```

  * 🔑 On each iteration, we create an `H3` and `p` tag, like in the following code:

    ```js
    var userName = document.createElement('h3');
    var userUrl = document.createElement('p');
    ```

  * 🔑 We take the `.login` and `.url` properties off of the current iteration of the `data` array, making those the `textContent` of the `userName` and `userUrl` tags we created, as follows:

    ```js
    userName.textContent = data[i].login;
    userUrl.textContent = data[i].url;
    ```

  * 🔑 We finally append the created elements with their newly added text content to the `<div>`, as follows:

    ```js
    usersContainer.append(userName);
    usersContainer.append(userUrl);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why do we look at the response data properties?

  * 🙋 So that we know which data we need to use.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [GitHub documentation on REST](https://docs.github.com/en/rest), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Do: Stoke Curiosity (10 min)

* Explain that we will continue to use the Fetch API by learning how to create complex `fetch()` requests. We will also learn about some options available to help us debug fetch requests.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ When something goes wrong with a `fetch()` request, how do we find out what the issue was?

  * 🙋 We can use the `Response` object and the Chrome DevTools Network tab to help us find out what went wrong.

  * ☝️ When trying to debug a problem, what would be a good first step towards solving it?

  * 🙋 We could use search engines like Google, tech forums like Stack Overflow, or even do some **rubber duck debugging**. (This method involves stating the problem out loud, to oneself or to an inanimate object like a rubber duck. Sometimes vocalizing the issue brings about an aha moment!)

* Open the [MDN Web Docs on Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) in your browser and scroll to Properties, then explain the following:

  * When we make a `fetch()` request, we receive a `Response` object back. That object contains methods that allow us to parse out particular pieces of data.
  
* Select the `Response.status` property, and scroll down to the following coded example:

  ```js
  var myImage = document.querySelector('img');

  var myRequest = new Request('flowers.jpg');

  fetch(myRequest).then(function(response) {
    console.log(response.status); // returns 200
    response.blob().then(function(myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        myImage.src = objectURL;
    });
  });
  ```

  * We can use the `response.status` method to receive a **status code**.

  * HTTP response status codes can tell us whether a request was a success or failure.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we learn more about the `Response` object and status codes?

  * 🙋 We can visit the [MDN Web Docs on HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) or the [MDN Web Docs on Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)!
  
### 5. Instructor Demo: Network Activity Tab (5 min) 

* Open `11-Ins_Network_Activity/index.html` in your browser to the Network tab and demonstrate the following:

  * 🔑 Press Command+R (Mac) or Ctrl+R (Widows) to record the reload.

  * 🔑 The Network tab records the loading of local and remote resources.

  * 🔑 The status codes indicate whether these resources came through successfully or not.

  * 🔑 Status codes will quickly let us know what happened with a particular request.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the Network tab useful for?

  * 🙋 It allows us to track requests and resources to and from applications.

  * ☝️ How do we learn about using the Network tab?

  * 🙋 The Chrome DevTools documentation.

* Reiterate that whenever students use a new library, framework, or technology, it's best to familiarize themselves with the documentation as much as possible.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `12-Stu_Network_Activity/index.html`.

### 6. Student Do: Network Activity Tab (15 min) 

* Direct students to the activity instructions found in `12-Stu_Network_Activity/index.html`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Error Appears in the Chrome DevTools Network Tab

  Work with a partner to resolve the following issue(s):

  * As a developer, I want all of my scripts to be properly loaded by the browser.

  ## Expected Behavior

  A request to `script.js` displays a status of "Finished".

  ## Actual Behavior

  A request to `script.js` displays a status of "(failed)".

  ## Steps to Reproduce the Problem

  1. Open [Unsolved/index.html](./Unsolved/index.html) in the browser.

  2. Open Chrome DevTools and navigate to the Network Activity tab.

  3. Refresh the page.

  4. Note that the `script.js` file failed to load.

  ---

  ## 💡 Hints

  How are JavaScript files usually loaded by an HTML page?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What other features are available in the Chrome DevTools Network tab?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra.

### 7. Instructor Review: Network Tab (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel using the Network tab? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Network tab

  * ✔️ Status codes

  * ✔️ Debugging

* Open the browser to the Network tab and demonstrate the following:

  * Refresh the page with Command+R (Mac) or Ctrl+R (Windows) to record the reload.
  
  * 🔑 We examine the status codes of the resources in the Network tab.

  * 🔑 Red status codes indicate errors.

  * Mention that after debugging, the `script.js` file now has a status code of 200.

* Open `12-Stu_Network_Activity/Solved/index.html` in your IDE and explain the following:

  * We can see that the `src` URL was originally incorrect, as shown in the following example:

    ```html
    <script src="./script.js"></script>
    ```

  * If we change the `src` to the correct relative path, it works&mdash;as shown in the following example:

    ```html
    <script src="./assets/js/script.js"></script>
    ```

  * 🔑 After correcting the error we can go back to the Network tab to check whether the corrections work.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we find out if something went wrong with the resources in the Network tab?

  * 🙋 By checking the status code for each resource.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Google documentation on inspecting network activity](https://developers.google.com/web/tools/chrome-devtools/network), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: fetch() Status (5 min)

* Open `13-Ins_Fetch_Status/index.html` in the browser to the Network tab and demonstrate the following:

  * Press Command+R (Mac) or Ctrl+R (Windows) to record the reload.

  * 🔑 The status for the `fetch()` request is listed with the value of 200.

  * 🔑 This confirms that the `fetch()` request is successful.

* Open `13-Ins_Fetch_Status/asset/js/script.js` in your IDE and demonstrate the following:

  * 🔑 We check whether the `response.status` equals 200, as follows:
  
    ```js
      .then(function (response) {
      if (response.status === 200){
    ```

  * 🔑 If it does, we assign the status code from `response.status` to the `textContent`, like in the following example:

    ```js
    responseText.textContent = response.status;
    ```

  * 🔑 Finally, we return `response.json()`, as follows:

    ```js
    return response.json();
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we learn more about using the `Response` object?

  * 🙋 We can read the documentation.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `14-Stu_Fetch_Status/README.md`.

### 9. Student Do: fetch() Status (15 min) 

* Direct students to the activity instructions found in `14-Stu_Fetch_Status/README.me`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement Status Checking to Display a 404 Message

  Work with a partner to implement the following user story:

  * As a user, I want to know when the webpage has failed to retrieve data.

  ## Acceptance Criteria

  * It's done when a request is made to an invalid API URL, and the 404 status displays on the page.

  ---

  ## 💡 Hints

  What HTML element can you use to display the response's status code?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * At some point in your coding journey, when working with APIs, you will have to deal with CORS. What is CORS, and how could it interfere with your `fetch()` request?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 10. Instructor Review: fetch() Status (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel using `response.status`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points: 

  * ✔️ `response.status`

  * ✔️ `textContent`

* Open `14-Stu_Fetch_Status/Solved/assets/js/script.js` in your IDE and explain the following:

  * 🔑 We check whether the `response.status` does not equal 200, as follows:

    ```js
    .then(function (response) {
      if (response.status !== 200) {
    ```

  * 🔑 We assign the `textContent` to be equal to the `response.status`, as shown in the following example:

    ```js
    responseText.textContent = response.status;
    ```

  * 🔑 We still return `response.json()` as `fetch()` will try to resolve the response most of the time, like in the following example:

    ```js
    return response.json();
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why are status codes useful?

  * 🙋 Status codes allow us to quickly identify what is causing issues.

  * ☝️ How does this help us as developers?

  * 🙋 By identifying errors quickly, we can debug more efficiently and improve the user experience.

  * ☝️ How do we check whether the `fetch()` request is working properly?

  * 🙋 We check the `response.status`.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on Response](https://developer.mozilla.org/en-US/docs/Web/API/Response), and stick around for office hours to ask for help.

* Answer any questions before proceeding.

### 11. FLEX (20 mins)

* This time can be utilized for reviewing key topics learned so far in this module.

### 12. BREAK (30 mins)

### 13. Instructor Demo: Deconstruct Parameters (5 min) 

* Open `15-Ins_Deconstruct_Parameters/index.html` in the browser and navigate to the console, demonstrating the following:

  * 🔑 Sometimes we need to make a specific request to be sure we receive only the information we want.

  * 🔑 We can change requests by chaining parameters onto the endpoints.

  * 🔑 We can find these parameters in the APIs documentation.

* Open `15-Ins_Deconstruct_Parameters/assets/script/js` in your IDE and demonstrate the following:

  * 🔑 We attached multiple parameters after `?` in the URL, as shown in the following example:

    ```js
    fetch('https://api.github.com/gists/public?since=2020-06-01&per_page=100')
    ```

  * 🔑 Each parameter offers a specific filter. In the following example, `since` filters for a start-from date:

    ```js
    ?since=2020-06-01
    ```

  * 🔑 We use the `&` symbol to chain the parameters together, like in the following example:

    ```js
    ?since=2020-06-01&per_page=100
    ```

  * 🔑 While 30 is the default number of results returned, here we user the `per_page` filter to specify 100, as shown in the following code:

    ```js
    &per_page=100
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is chaining parameters useful?

  * 🙋 It allows us to send a request that will only come back with relevant data, reducing the information that we will have to sort through.

  * ☝️ What are request parameters useful for?

  * 🙋 They enable us to make more specific requests.

  * ☝️ How would we know which parameters we can use in the `fetch()` request?

  * 🙋 By reading the documentation for the API being accessed.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `16-Stu_Deconstruct_Parameters/README.md`.

### 14. Student Do: Deconstruct Parameters (15 min) 

* Direct students to the activity instructions found in `16-Stu_Deconstruct_Parameters/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of API Parameters

  Work with a partner to add comments describing the functionality of the code found in [Unsolved/assets/js/script.js](./Unsolved/assets/js/script.js).

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are query strings, and how are they used to create parameters for APIs?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 15. Instructor Review: Deconstruct Parameters (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel using parameters? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:
  
  * ✔️ `?`

  * ✔️ `&`

  * ✔️ `state=open`

  * ✔️ `sort=created`

  * ✔️ `direction=desc`

* Open `16-Stu_Deconstruct_Parameters/Solved/assets/js/script.js` in your IDE and explain the following: 

  * 🔑 We attached multiple parameters after `?` in the URL, as follows:

    ```js
    fetch('.......?per_page=10&state=open&sort=created&direction=desc')
    ```

  * 🔑 We limit the results to 10 per page, as shown in the following code:
  
    ```js
    per_page=10
    ```

  * 🔑 We chain multiple parameters using the `&` symbol. The first chained parameter is `state`, setting the value to `open`&mdash;which will show us only `open` issues&mdash;as follows:

    ```js
    per_page=10&state=open
    ```

  * 🔑 We `sort` them by their creation date, as shown in the following code:

      ```js
      sort=created
      ```

  * 🔑 We then pass a parameter to display them in descending order, as follows:

    ```js
    direction=desc
    ```
  
  * Ensure that you review what each parameter filters in the comments section.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Where do we write the parameters?

  * 🙋 After `?` in the URL.

  * ☝️ How do we chain multiple parameters?

  * 🙋 With the `&` symbol.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the documentation for the API that we're accessing, and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: fetch() Options (5 min)

* Open `17-Ins_Fetch_Options/assets/js/script.js` in your IDE and demonstrate the following:

  * 🔑 We write the `fetch()` request, as follows:

    ```js
    fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5')
    ```

  * 🔑 `fetch()` options are passed through as an additional `init` object argument, like in the following example:

    ```js
    fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
        method: 'GET',
        credentials: 'same-origin',
        redirect: 'follow',
    })
    ```

  * 🔑 `fetch()` options are optional. Their usage is dependent on the API's documentation or the application's requirements.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we learn about `fetch()` options?

  * 🙋 We read the [MDN Web Docs on using fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `18-Stu__Fetch_Options/README.md`.

### 17. Student Do: fetch() Options (15 min)

* Direct students to the activity instructions found in `18-Stu__Fetch_Options/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement Cache Reloading for fetch() Requests

  Work with a partner to implement the following user story:

  * As a developer, I want `fetch()` requests to reload the browser's cache.

  ## Acceptance Criteria

  * It's done when I make a `fetch()` request, and the `cache` option is set to `reload`.

  ## 📝 Notes

  Refer to the documentation: 

  [MDN Web Docs on using fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
      
  ---

  ## 💡 Hints

  How can you use an object to pass through the options?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is OAuth, and how does it tie into APIs?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 18. Instructor Review: fetch() Options (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with using `fetch()` options? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points: 

  * ✔️ `fetch()` request

  * ✔️ `fetch()` option(s)

  * ✔️ `cache: reload`

* Open `18-Stu__Fetch_Options/Solved/assets/js/script.js` in your IDE and explain the following: 

  * 🔑 We write the `fetch()` request, as follows:

    ```js
    fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5',
    ```

  * 🔑 We pass through the `cache: reload` option using the `init` object.

  * 🔑 The browser fetches the resource from the remote server without first looking in the cache, but then it will update the cache with the downloaded resource&mdash;as shown in the following example:

    ```js
    fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
        cache: 'reload',
    })
    ```

  * We write the remainder of the `fetch()` request, as follows:

    ```js
    .then(function (response) {
        return response.json();
    })
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we write `fetch()` options?

  * 🙋 With an `init` object that is passed as an additional argument in the `fetch()` request.

  * ☝️ How do we know which `fetch()` options to use with the API?

  * 🙋 By reading the API's documentation.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on using fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 19. Instructor Demo: Document Location (5 min) 

* Navigate to the [MDN Web Docs on document.location](https://developer.mozilla.org/en-US/docs/Web/API/Document/location), scroll down to Syntax, and explain the following:

  * 🔑 The `document.location` is a read-only property that returns a `Location` object.

  * 🔑 This provides information on the URL of the document.

* Open your browser and enter the console. Then type `document.location` and press Enter. Expand the `Location` object and demonstrate the following: 

  * 🔑 This is the `Location` object, which contains the browser's current location.

  * 🔑 We can use the `location.href` property to set or get the URL.

* Now type `document.location.href = 'https://www.google.com'` into the console, press Enter, and explain the following:

  * 🔑 The browser URL changed to the value assigned to `document.location.href`.

  * 🔑 The `Location` object has other methods that can change the URL for specific purposes.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How could we learn to use the `Location` object?

  * 🙋 We could read the [MDN Web Docs on document.location](https://developer.mozilla.org/en-US/docs/Web/API/Document/location). 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `20-Stu__Document_Location/README.md`.

### 20. Student Do: Document Location (15 min) 

* Direct students to the activity instructions found in `20-Stu__Document_Location/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement the Location Web API to Redirect 404 Errors

  Work with a partner to implement the following user story:

  * As a developer, I want to direct users to a different page if there is an error.

  ## Acceptance Criteria

  * It's done when I make a `fetch()` request that results in a 404 status, and the browser redirects to `404.html`.

  ## 📝 Notes

  Refer to the documentation: 

  [MDN Web Docs on location.replace](https://developer.mozilla.org/en-US/docs/Web/API/Location/replace)

  ---

  ## 💡 Hints

  What object does `location.replace` belong to? What are relative paths?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Sometimes APIs don't return JSON; they can return other data formats like XML. How can you convert XML to JSON?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 21. Instructor Review: Document Location (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with using the `Location` object? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Checking `response.status`

  * ✔️ Replacing `document.location`

  * ✔️ New `document.location`

* Open `20-Stu__Document_Location/Solved/assets/js/script.js` in your IDE and explain the following: 

  * We set the redirect URL to a variable. This is the URL that the `replace()` method will use, as shown in the following example:

    ```js
    var redirectUrl = './404.html';
    ```

  * We send the `fetch()` request, as follows:

    ```js
    fetch(badRequestUrl)
    ```

  * 🔑 We check the `response.status` to see whether it equals 404, like in the following example:
  
    ```js
    if (response.status === 404)
    ```
  
  * 🔑 If the `response.status` equals 404, we pass the `redirectURL` variable as an argument into the `document.location.replace` method, as shown in the following example:

    ```js
    document.location.replace(redirectUrl);
    ```

  * If the `response.status` does not equal 404, we return `response.json()`, as follows:

    ```js
    else {
        return response.json();
    }
    ```

  * This time we did not return `response.json()` after the `if` statement, because we are changing the `document.location` based on the `response.status`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What does the `document.replace` method do? 

  * 🙋 The `document.replace` method replaces the current document with the URL that is passed as an argument.  

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on document.location](https://developer.mozilla.org/en-US/docs/Web/API/Document/location), and stick around for office hours to ask for help.

* Answer any questions before proceeding.

### 22. FLEX (30 mins)

* This time can be utilized for reviewing key topics learned so far in this module.

* Answer any questions before ending the class.

### 23. END (0 mins)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.