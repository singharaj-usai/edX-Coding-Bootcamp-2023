# 11.4 Full-Time Lesson Plan: useReducers Hook and MERN Review

## Overview

In this class, students will learn about the `useReducer` hook. This class also reviews key MERN-stack topics including React Hooks, React Router, Apollo Client, and user authentication -- emphasizing the skills that students will need for final projects.

## Instructor Notes

* In this lesson, students will complete activities `09-Ins_useReducer` through `20-Stu_useReducer-Review`.

* Module 22 Challenge is **extra credit**. It is not required for submission, nor will it count towards one of the two assignments that students can skip. If students choose to skip this Challenge, their final grade will not be affected in any way. This Challenge is an opportunity for students to further practice their skills and get feedback on it. Please let students know about this extra credit opportunity!

* Be sure to prepare and review the activities before class. Try to anticipate any questions that students might have.

* Today's activities emphasize the skills needed for full-stack app development. Because the code and activities will be familiar, encourage students to use activity time to further explore the code, ask questions, and build on their existing skills. For an additional challenge, encourage students to explore the Bonus.

* Some activities will use the React practice app created in the previous class. Remind students to copy the `src` directory into the React practice app. The `README.md` files of these activities will also remind students to do so.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

* Use reducers with the `useReducer` Hook.

* Explain and identify use cases for React Hooks.

* Implement React Router in a React application.

* Implement Apollo Client in a MERN-stack application.

* Explain and implement JSON Web Tokens for user authentication.

## Time Tracker

| Start  | #   | Activity Name                      | Duration |
|---     |---  |---                                 |---       |
| 10:00AM| 1   | Instructor Demo: useReducer        | 0:05     |
| 10:05AM| 2   | Student Do: useReducer             | 0:15     |
| 10:20AM| 3   | Instructor Review: useReducer      | 0:10     |
| 10:30AM| 4   | Instructor Do: Stoke Curiosity     | 0:10     |
| 10:40AM| 5   | Instructor Demo: React Hooks       | 0:05     |
| 10:45AM| 6   | Student Do: React Hooks            | 0:15     |
| 11:00AM| 7   | Instructor Review: React Hooks     | 0:10     |
| 11:10AM| 8   | Instructor Demo: React Router      | 0:05     |
| 11:15AM| 9   | Student Do: React Router           | 0:15     |
| 11:30AM| 10  | Instructor Review: React Router    | 0:10     |
| 11:40AM| 11  | FLEX                               | 0:20     |
| 12:00PM| 12  | BREAK                              | 0:30     |
| 12:30PM| 13  | Instructor Demo: Apollo Client     | 0:05     |
| 12:35PM| 14  | Student Do: Apollo Client          | 0:15     |
| 12:50PM| 15  | Instructor Review: Apollo Client   | 0:10     |
| 1:00PM | 16  | Instructor Demo:  JWT              | 0:05     |
| 1:05PM | 17  | Student Do: JWT                    | 0:15     |
| 1:20PM | 18  | Instructor Review: JWT             | 0:10     |
| 1:30PM | 19  | Instructor Demo: useReducer Hook   | 0:05     |
| 1:35PM | 20  | Student Do: useReducer Hook        | 0:15     |
| 1:50PM | 21  | Instructor Review: useReducer Hook | 0:10     |
| 2:00PM | 22  | FLEX                               | 0:30     |
| 2:30PM | 23  | END                                | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: useReducer (5 min)

* Welcome students to class.

* Copy the `src` directory from `09-Ins_useReducer` and paste it into `00-practice-app`.

* Open `src/components/ThemeComponent.js` in your IDE and demonstrate the following:

  * In this demo, we are introducing a new React Hook called `useReducer`. This is where we can start to use the `reducer` that we have been making.

  * The `useReducer` Hook accepts a `reducer` and an initial state object as an argument and returns an array that contains the `state` object and a `dispatch()` function.

  * Here is the implementation in `ThemeComponent`. We begin by importing the reducer and the `useReducer` Hook into the component:

    ```js
    import React, { useReducer } from 'react';
    import { reducer } from '../utils/reducers';
    ```

  * Then we use destructuring assignment with the `useReducer` Hook to extract the `state` and `dispatch()` function. Notice that we pass in the reducer function and an initial state:

    ```js
    const [state, dispatch] = useReducer(reducer, initialState);
    ```

  * Instead of calling the methods from inside components as we have before, now we will call `dispatch()`, which accepts an object that contains `type` and `payload` attributes.

  * Here is an example of dispatch being called in the `ThemeComponent`:

    ```js
    onClick={() =>
      dispatch({ type: TOGGLE_THEME, payload: state.darkTheme })
    }
    ```

* Navigate to `00-practice-app` in your command line and run `npm install` and `npm start`.

* Open `localhost:3000` in your browser to demonstrate the following:

  * 🔑 When we run the application, we encounter a page that has a theme and a button to toggle it.

  * 🔑 Additionally, the value of `state.darkTheme` is displayed on the page to indicate that the `useReducer()` function is being used to call on an action and update the global state:

    ```jsx
    <section className="text-center">
        The current value from global state for{' '}
        <code style={{ fontWeight: 'bold' }}>
          darkTheme: {state.darkTheme.toString()}
        </code>
      </section>
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What argument does the `useReducer` Hook accept?

  * 🙋 The `useReducer` Hook accepts an argument of the reducer function.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu_useReducer/README.md`.

### 2. Student Do: useReducer (15 min)

* Direct students to the activity instructions found in `10-Stu_useReducer/README.md`.

* Remind students to copy the `src` directory from `10-Stu_useReducer/` into their `00-practice-app` folder.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement useReducer for a Component

  Work with a partner to implement the following user story:

  * As a developer, I want to use a Hook to define and respond to actions in my app, allowing me to have better control over complex state changes.

  ## Setup

  Copy the `src` directory from the `Unsolved` folder into `00-practice-app` before you begin.

  ## Acceptance Criteria

  * It's done when I have used `studentContext` to provide the initial state for my reducer.

  * It's done when I have implemented `onClick` actions for adding and removing students using `dispatch()`.

  * It's done when the component renders correctly without errors in the browser.

  ## 📝 Notes

  Refer to the documentation:

  [React documentation on useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

  ---

  ## 💡 Hints

  What arguments do `useReducer()` and `dispatch()` expect?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How would you explain Redux to a friend or family member?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 3. Instructor Review: useReducer (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the `useReducer` Hook? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `dispatch()`

  * ✔️ `action.payload`

  * ✔️ `useReducer`

* Be sure that you have copied the `src` directory from `10-Stu_useReducer/Solved/` into `00-practice-app`.

* Open `src/components/StudentList.js` in your IDE and explain the following:

  * We first need to import the `useReducer` Hook from React to complete this activity.

   ```js
   import React, { useReducer } from 'react';
   ```
]

  * We also need to import the action types and the `reducer`:

    ```js
    // Import type variables
    import {
      ADD_STUDENT,
      REMOVE_STUDENT,
      SET_STUDENT_NAME,
      SET_STUDENT_MAJOR,
    } from '../utils/actions';

    // Import reducer from our utils folder
    import reducer from '../utils/reducers';
   
  * Also in this file, the custom `useStudentContext` Hook is being imported from `'../utils/StudentContext'`:

    ```js
    import { useStudentContext } from '../utils/StudentContext';
    ```

  * To use the `useReducer` Hook, first we have to consider the `reducer` and `initialState` objects that need to be passed. The reducer might be easy to remember because it is called `reducer`, but `initialState` might be tricky to remember.

  * The custom Hook `useStudentContext` will return `students` and `majors` -- exactly what we need for the initial state object. So we set the initial state's value to exactly the return value of `useStudentContext`:

    ```js
    const initialState = useStudentContext();
    ```

  * Now that we know what to pass, we initialize the `useReducer` Hook.

  * 🔑  Remember that `useReducer` returns `state` and a `dispatch()` function:

    ```js
    const [state, dispatch] = useReducer(reducer, initialState);
    ```

  * Next we refactor the `students` array such that it pulls from the global state rather than a local variable.

  * To do this, we add `state.students` in place of `students`:

    ```js
    return (
      <div>
        {state.students ? ( ... )
      </div>
    ```

  * We do the same for the `map()` methods:

    ```jsx
    {state.students.map((student) => ( ... ) }
    ```

  * 🔑 Finally, to make this app work we have to manipulate state using the `dispatch()` function. This method expects an object with `type` and `payload` attributes:

    ```jsx
    <button
      type="button"
      onClick={() => {
        console.log('🚀 StudentList.js: Dispatched remove!');
        return dispatch({
          type: REMOVE_STUDENT,
          payload: student.id,
        });
      }}
    >
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What does the `useReducer` Hook return?

  * 🙋 The `useReducer` Hook returns a state object and a `dispatch()` function.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React documentation on useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Do: Stoke Curiosity (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is GraphQL?

  * 🙋 GraphQL is a modern query language that is an alternative to REST APIs.

  * ☝️ What are some of the benefits to using GraphQL to build APIs?

  * 🙋 GraphQL allows clients to request the exact data they need using only one endpoint and makes it easier to aggregate data from multiple sources.

* Another benefit of GraphQL is the ability to have strictly typed interfaces. For example, consider the following endpoint that uses a standard RESTful API:

  ```sh
  api/v1/books
  ```

* This query seems simple enough. It should return an array of all the books, but we have no way of checking that it does.

* What if we wanted to include the author name in that query and maybe sort the results in ascending order? With REST APIs, we have to rely on query parameters to pass this information along to the server, introducing further complexity to just one endpoint in the API:

  ```sh
  api/v1/books?include=author&sort=ASC
  ```

* GraphQL allows a single endpoint to handle all sorts of requests.

* Navigate to `21-Ins_Typedefs/server` in your command line and run `npm install` and `npm start`.

* Open `localhost:3001/graphql` in your browser to demonstrate the following:

  * The schema provided to GraphQL will outline the available resources and the parameters that we can use.

  * Click the "docs" tab on the right side of the page to demonstrate the self-documentation of the Apollo playground.

  * Run the following query inside the Apollo playground to demonstrate the request-response flow of GraphQL:

    ```gql
    query getAuthors {
      authors{
        id,
        firstName,
        lastName
      }
    }
    ```

* Today we will revisit some GraphQL concepts as well as some React Hooks that we were introduced to previously. Let's get started!

### 5. Instructor Demo: React Hooks Review (5 min)

* Navigate to `11-Ins_React-Hooks-Review` in your command line and run `npm install` and `npm start`.

* Open `localhost:3000` in your browser and demonstrate the following:

  * We can enter the organization, account name, or repository name into the search bar to get a list of open issues for that given repository.

  * When we search for a given term, that term is used to perform a fetch request to GitHub's API.

* Open `11-Ins_React-Hooks-Review/src/App.js` in your IDE and demonstrate the following:

  * We import the `useState` and `useEffect` Hooks into the `App` component:

    ```js
    import React, { useState, useEffect } from 'react';
    ```

  * Next, we initialize a state variable called `issues` to store an array of the GitHub issues that we get back from the API:

    ```js
    const [issues, setIssues] = useState([]);
    ```

  * `useEffect` is only used to update the document title once when the component mounts. Notice the empty dependency array as the second argument in the callback function:

    ```js
    useEffect(() => {
      document.title = 'React Hooks Review';
    }, []);
    ```

  * We house the methods to update state in the `App` component because it is the parent component. The `App` component then passes the `issues` array, and the method to update the array with the API results, to the components:

    ```js
    return (
      <div className="container">
        <SearchBar onFormSubmit={getRepoIssues} />
        <div className="col auto">
          <div className="row">
            <div className="col-11">
              <IssueList issues={issues} />
            </div>
          </div>
        </div>
      </div>
    );
    ```

* Open `11-Ins_React-Hooks-Review/src/components/SearchBar.js` in your IDE and demonstrate the following:

  * Note that the `SearchBar` component accepts props as an argument. In this case, we use destructuring assignment to pluck off the `onFormSubmit()` method.

  * We also use the `useState` Hook in the `SearchBar` component. Because this component is responsible for handling all the logic for the input field, we declare a state variable called `term` and a function to update it, `setTerm()`.

    ```js
    function SearchBar({ onFormSubmit }) {
      const [term, setTerm] = useState('microsoft/vscode');
      ...
    }
    ```

  * Another method in this component is responsible for invoking the `onFormSubmit()` function with the `term` passed in:

    ```js
    const sendTerm = (e) => {
      e.preventDefault();
      onFormSubmit(term);
    };
    ```

  * Inside the `return` portion of this component, we can see that the form is linked to the `sendTerm()` function by way of the `onSubmit` attribute.

  * Additionally, we use the `setTerm()` method in the input field by attaching it to the `onChange` attribute:

    ```js
    return (
      <>
        ...
        <div className="form-group">
          <form className="form" onSubmit={sendTerm}>
            <div className="field">
              <label style={{ marginRight: '5px' }}>Retrieve GitHub Issues</label>
              <input
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="facebook/react"
              />
              <button className="btn" style={{ margin: '5px' }}>
                Search
              </button>
            </div>
          </form>
        </div>
      </>
    );
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Besides using a `useState` Hook, what is another way to manage state with React?

  * 🙋 We can also manage state by creating an object inside class-based components.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `12-Stu_React-Hooks-Review/README.md`.

### 6. Student Do: React Hooks Review (15 min)

* Direct students to the activity instructions found in `12-Stu_React-Hooks-Review/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement React Hooks

  Work with a partner to implement the following user story:

  * As a developer, I want to use React Hooks to perform an API request inside a React app.

  ## Acceptance Criteria

  * It's done when I have imported `useState` and `useEffect` into my React App.

  * It's done when I have written a method, `getRepoIssues()`, to fetch all GitHub issues for a given repository.

  * It's done when I have written a `useEffect` Hook that will invoke `getRepoIssues()` and fetch issues for the React repository on GitHub.

  * It's done when the results of the API request are stored in a state variable called `issues`.

  * It's done when a list of issues is displayed when a user visits the page.

  ## 📝 Notes

  Refer to the documentation:

  [React documentation on using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)

  [MDN Web Docs on using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

  ---

  ## 💡 Hints

  How can we use the browser's built-in `fetch()` method to perform the GET request?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can we restrict the `useEffect` Hook to running only once after the component mounts?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: React Hooks Review (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with React Hooks? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `useState`

  * ✔️ `useEffect`

* Open `12-Stu_React-Hooks-Review/Unsolved/src/App.js` in your IDE and explain the following:

  * If we open the `App` component, this application looks similar to the demo, with one key difference -- now we will be using `useEffect` instead of a search field to invoke the search.

  * First, we import the `useState` and `useEffect` Hooks:

    ```js
    import React, { useState, useEffect } from 'react';
    ```

  * Then we create a new state variable using the `useState` Hook inside the `App` component:

    ```js
    const [issues, setIssues] = useState([]);
    ```

  * 🔑 We use `useEffect()` to call the method once the component mounts. Note that we have a hardcoded value, because we only want to perform one specific search when the page loads:

    ```js
    useEffect(() => {
      getRepoIssues('facebook/react');
    }, []);
    ```

  * This method performs an API request and uses `setIssues()` to update the state variable:

    ```js
    const getRepoIssues = async (repo) => {
      let issuesURL = `https://api.github.com/repos/${repo}/issues?direction=asc`;
      const response = await fetch(issuesURL);
      const data = await response.json();
      setIssues(data);
    };
    ```

  * In the return method, we still pass the `issues` array down to the `IssueList` component:

    ```jsx
    <IssueList issues={issues} />
    ```

* Open `12-Stu_React-Hooks-Review/Unsolved/src/components/IssueList.js` in your IDE and demonstrate the following:

  * In the components directory, we no longer need a `SearchBar` component to maintain a state variable for `term`. Because we are performing one hardcoded search, we can move on to the `IssueList` component.

  * `IssueList` accepts `props` as an argument and uses the `issues` property of `props` to create a list that ultimately gets rendered to the screen.

  * We map over the `issues` inside the `IssueList` and store the result in a new variable called `renderedList`. Each issue will be rendered in its own `IssueItem` component:

    ```js
    const IssueList = ({ issues }) => {
      const renderedList = issues.map((issue) => {
        return <IssueItem key={issue.id} issue={issue} />;
      });

      return <div className="ui relaxed divided list">{renderedList}</div>;
    };
    ```

* Open `12-Stu_React-Hooks-Review/Unsolved/src/components/IssueItem.js` in your IDE and demonstrate the following:

  * The `IssueItem` component takes a single issue and renders some JSX for the important details for each issue:

    ```js
    const IssueItem = ({ issue }) => {
      return (
        <div className="card mb-3" style={{ border: 'none' }}>
          <div
            className="card-header bg-info text-light p-2 m-0"
            style={{ color: 'white', borderRadius: '5px' }}
          >
            <a
              style={{ color: 'white', borderRadius: '5px' }}
              className="header"
              href={issue.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {issue.title}
            </a>
            <div className="description">{issue.description}</div>
          </div>
        </div>
      );
    };
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ When would we provide an empty array as the second argument to `useEffect`?

  * 🙋 We pass an empty array as the second argument when we want the callback function to run only once.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React documentation on Hooks](https://reactjs.org/docs/hooks-overview.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: React Router Review (5 min)

* Navigate to `13-Ins_React-Router-Review` in your command line and run `npm install`, `npm run seed`, and `npm run develop`.

  * React Router is a great way to add declarative routing to an app. As we click around on the different pages, the router renders the matching route, allowing easy navigation between pages.

* Open `13-Ins_React-Router-Review/client/src/App.js` in your IDE and demonstrate the following:

  * We use React Router to move through a React app while still preserving state. React Router also allows us to be declarative about the route that we want to give for a specific component.

  * To use React Router, first we have to install it using npm:

    ```sh
    npm install react-router-dom
    ```

  * Next, we need to import it into the `App` component. We set an alias for the `BrowserRouter` variable by using the syntax `as Router`:

    ```js
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    ```

  * Inside the `App` component, we wrap all of the elements inside the `Router` tags:

    ```js
    function App() {
      return (
        ...
        <Router>
          ...
        </Router>
      )
    ```

  * We wrap any `Route` components in a `Routes` tag. Each `Route` component contains the path of the component as well as the component we want to render:

    ```js
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
    </Routes>
    ```

  * 🔑 For each `Route`, we add a `path` attribute that specifies what the path should be in the URL. For example, the preceding route will be located at `http://localhost:3000/;`.

  * 🔑 We can also add a `element` property that tells React Router which component you want to reference at a given path.

  * We can also add path parameters to routes -- such as the route to get a specific profile.

  * `:profileId` is a path parameter in the URL that will encompass anything that follows `/profile`, allowing us to access specific profile pages using the URL `http://localhost:3000/profiles/<profileId>`:

    ```js
    <Routes>
      <Route
        path="/profiles/:profileId"
        element={<Profile />}
      />
    </Routes>
    ```

* Open `13-Ins_React-Router-Review/client/src/components/ProfileList/index.js` in your IDE to demonstrate the following:

  * We can navigate between components using the `Link` component.

  * To do this, we first import `Link`:

    ```js
    import { Link } from 'react-router-dom';
    ```

  * `Link` components function like an `a` element, but instead of using `href`, we use the `to` attribute to link to an existing route.

  * We also use string interpolation to concatenate the `profile_id` with the rest of the path:

    ```jsx
    <Link
      className="btn btn-block btn-squared btn-light text-dark"
      to={`/profiles/${profile._id}`}
    >
    ```

* Open `13-Ins_React-Router-Review/client/src/pages/Profile.js` in your IDE and explain the following:

  * To access the URL parameters from the route, we use the `useParams` Hook:

    ```js
    const { profileId } = useParams();
    ```

  * We can also run queries inside the React component by using the `useQuery` Hook, which is specific to Apollo but is incredibly useful for conditional rendering.

  * The `useQuery` Hook accepts a `gql` query string and returns an object that contains `loading`, `error`, and `data` properties:

    ```js
    const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
      variables: { profileId: profileId },
    });
    ```

  * We use the `loading` property to render a `<div>`, telling the user that we are still waiting for a server response:

    ```js
    if (loading) {
      return <div>Loading...</div>;
    }
    ```

  * We use the `data` property to extract the profile data, with the help of the `?` operator, which helps us check whether `profile` exists on the `data` object. If it does, we make `data.profile` the value for the `profile` variable. Otherwise, we set it to an empty object:

    ```js
    const profile = data?.profile || {};
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are the benefits of using React Router inside the app?

  * 🙋 React Router allows us to point to a specific component rather than perform a new GET request for a full webpage each time.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `14-Stu_React-Router-Review/README.md`.

### 9. Student Do: React Router Review (15 min)

* Direct students to the activity instructions found in `14-Stu_React-Router-Review/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement Single-Thought Page Display

  Work with a partner to implement the following user stories:

  * As a user, I want to view individual thoughts and a list of comments.

  * As a user, I want to be able to bookmark a thought's page so I can return and read more comments.

  ## Acceptance Criteria

  * It's done when, once I select a thought on the homepage, I am taken to that thought's page to view its comments without reloading the page.

  * It's done when, once I visit the thought directly in the browser, I am taken to that thought's page to view its comments.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![The single-thought page displays the thought's information, a list of comments, and a form to add a new comment.](./Images/01-screenshot.png)

  ---

  ## 💡 Hints

  How can the value of the `to` prop in each thought's `<Link>` component help us define the route?

  How can we define a route with a parameter using React Router?

  How can we use the `useParams()` Hook to retrieve data for use in the `useQuery()` Hook?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Which browser API does React Router leverage?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: React Router Review (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with React Router? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ path attribute

  * ✔️ element attribute

  * ✔️ Apollo Hooks

* Open `14-Stu_React-Router-Review/Solved/client/src/App.js` in your IDE and explain the following:

  * When we open the `App` component, the first thing we need to do is add a route for displaying a single thought's comments.

  * 🔑 In this exercise, to nest the component that we want to render, we have enclosed the `SingleThought` component with the opening and closing `<Route>` tags.

  * This route has a `path` attribute and a path parameter of `:thoughtId`:

    ```js
    <Routes>
      <Route
        ...
        path="/thoughts/:thoughtId"
        element={<SingleThought />}
      />
    </Routes>
    ```

* Open `14-Stu_React-Router-Review/Solved/client/src/components/ThoughtList/index.js` in your IDE to demonstrate the following:

  * To create internal hyperlinks, we have to import the `Link` component from `react-router-dom`:

    ```js
    import { Link } from 'react-router-dom';
    ```

  * In the return statement, we use string interpolation to concatenate the `/thoughts/` route with the specific `thought._id`, causing the `Link` component to point to that specific thought page.

  * The `thought._id` is the path parameter for `:thoughtId`:

    ```js
    <Link
      className="btn btn-primary btn-block btn-squared"
      to={`/thoughts/${thought._id}`}
    >
    ```

* Open `14-Stu_React-Router-Review/Solved/client/src/pages/SingleThought.js` in your IDE to demonstrate the following:

  * Now that we have the link to an individual thought page, let's review the code for the `SingleThought` component.

  * To extract the `thoughtId` from the path parameter, we must import the `useParams` Hook from `react-router-dom`:

    ```js
    import { useParams } from 'react-router-dom';
    ```

  * Next, we write code to retrieve the query parameter using the `useParams` Hook:

    ```js
    const SingleThought = () => {
      const { thoughtId } = useParams();
      ...
    }
    ```

  * 🔑 To run a GraphQL query in an Apollo application, we use the `useQuery` Hook. This Hook accepts a GraphQL query string and returns an object with `loading`, `error`, and `data` properties.

  * We also pass a configuration object for the variables. In this case, we only have one for `thoughtId`:

    ```js
    const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
      variables: { thoughtId: thoughtId },
    });
    ```

  * When the data comes back from the GraphQL request, it is assigned to the `data` variable. We check whether the `data` object has a property of `thought`, and if it does we assign `data.thought` to a variable called `thought`. Otherwise. we set it to an empty object:

    ```js
    const thought = data?.thought || {};
    ```

  * We also account for a situation in which the GraphQL request is still loading -- if so, the `loading` property returned from `useQuery` comes in handy:

    ```js
    if (loading) {
      return <div>Loading...</div>;
    }
    ```

  * Now that we have the thought data assigned to its own variable, assuming the request is complete and `data.thought` exists, we can use that data in the component:

    ```js
    return (
      <div className="my-3">
        <h3 className="card-header bg-dark text-light p-2 m-0">
          {thought.thoughtAuthor} <br />
          <span style={{ fontSize: '1rem' }}>
            had this thought on {thought.createdAt}
          </span>
        </h3>
        <div className="bg-light py-4">
          <blockquote
            className="p-4"
            style={{
              fontSize: '1.5rem',
              fontStyle: 'italic',
              border: '2px dotted #1a1a1a',
              lineHeight: '1.5',
            }}
          >
            {thought.thoughtText}
          </blockquote>
        </div>

        <div className="my-5">
          <CommentList comments={thought.comments} />
        </div>
        <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
          <CommentForm thoughtId={thought._id} />
        </div>
      </div>
    );
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are two different ways that you can reference a component with `<Link>`?

  * 🙋 With `<Link>` you can add a component attribute, or you can wrap the component that you want to link to inside the `Link` tag.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React Router documentation](https://reactrouter.com/web/guides/quick-start), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. FLEX (20 mins)

* This time can be utilized for reviewing key topics learned so far in this module.

### 12. BREAK (30 mins)

### 13. Instructor Demo: Apollo Client Review (5 min)

* Navigate to `15-Ins_Apollo-Review` in your command line and run `npm install`, `npm run seed`, and `npm run develop`.

* Open `http://localhost:3000` in your browser and demonstrate the following:

  * 🔑 When we start the application, we are presented with a form where we can enter the name of a profile that we would like to add. Once we have added the profile, the page should update and display the recently added name to the list.

  * 🔑 To mutate data in the database, we need to use the `useMutation` Hook included with Apollo.

  * But first let's review how to create the mutation itself.

* Open `15-Ins_Apollo-Review/client/src/utils/mutations.js` in your IDE to demonstrate the following:

  * 🔑 Instead of writing the mutation inside the playground, we declare it as a variable inside the `mutations.js` file, using the `gql` library from `Apollo`:

    ```js
    export const ADD_PROFILE = gql`
    ```

  * The mutation starts with the actual word `mutation`, to tell Apollo that we want to update some data instead of just querying it. Next, we name the mutation `addProfile`:

    ```js
    mutation addProfile($name: String!) {
    ```

  * 🔑 Note that the mutation name, `addProfile`, and variable name, `ADD_PROFILE`, are the same, helping to prevent confusion within the code.

  * We then explicitly tell Apollo that we will expect a `name` variable that is of type `String`. All variables in GraphQL queries and mutations are denoted by a dollar sign:

    ```js
    import { gql } from '@apollo/client';

    export const ADD_PROFILE = gql`
      mutation addProfile($name: String!) {
        addProfile(name: $name) {
          _id
          name
          skills
        }
      }
    `;
    ```

* Open `15-Ins_Apollo-Review/client/src/components/ProfileForm/index.js` in your IDE to demonstrate the following:

  * Now that we have written the mutation, let's review the component that will use it. First, we import the mutation and the Hook into the `ProfileForm` component:

    ```js
    import { useMutation } from '@apollo/client';
    import { ADD_PROFILE } from '../../utils/mutations';
    ```

  * The `useMutation` Hook accepts an argument of a `gql` mutation.

  * We can expect the `useMutation` Hook to return a Promise-based mutation function and also an object that contains the status of the mutation:

    ```js
    const [addProfile, { error }] = useMutation(ADD_PROFILE);
    ```

  * Now that we have access to the `addProfile` mutation function, it is time to use it in the component. In this case, because the function is a Promise, we want to execute it inside of a `try...catch` block.

  * We want the `addProfile()` function to fire when a user submits the form, so we handle this logic inside the `handleFormSubmit()` function.

  * The`addProfile` mutation expects a `name` to be passed to the function. To do this, we pass an object to the `addProfile` method that includes a `variables` object. Inside, we will pass `name`:

    ```js
    try {
      const { data } = await addProfile({
        variables: { name },
      });
      ...
    }
    ```

  * We add a `catch` block to log any errors:

    ```js
    } catch (err) {
      console.error(err);
    }
    ```

  * If successful, the page should reload once the request is complete:

    ```js
    window.location.reload();
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What does the `useMutation` Hook return?

  * 🙋 The `useMutation` Hook returns the mutation function and an object that contains the status of the mutation.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `16-Stu_Apollo-Review/README.md`.

### 14. Student Do: Apollo Client Review (15 min)

* Direct students to the activity instructions found in `16-Stu_Apollo-Review/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement Mutation to Create New Thought

  Work with a partner to implement the following user story:

  * As a user, when I submit a new thought, I want that thought to be created and displayed on the page.

  ## Acceptance Criteria

  * It's done when a thought is added to the database on form submission.

  * It's done when a successful thought submission reloads the page and displays the new thought.

  ---

  ## 💡 Hints

  Where can we define mutations that accept arguments?

  What information about the mutation's state can we use in the UI?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can Apollo Client be set up as a state-management tool?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: Apollo Client Review (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Apollo? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Mutation syntax

  * ✔️ `useMutation` Hook

* Open `16-Stu_Apollo-Review/Unsolved/client/src/utils/mutations.js` in your IDE to demonstrate the following:

  * This activity requires a mutation that would accept multiple arguments for the `thoughtText` and the `thoughtAuthor`.

  * 🔑 Note that both variables that we pass to the mutation have to be of type `String`, and they can't be `null` or `undefined`, as indicated by the exclamation mark.

  * We assign the entire query to a template string preceded by `gql`:

    ```js
    export const ADD_THOUGHT = gql`
      mutation addThought($thoughtText: String!, $thoughtAuthor: String!) {
        addThought(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
          _id
          thoughtText
          thoughtAuthor
          createdAt
          comments {
            _id
            commentText
          }
        }
      }
    `;
    ```

  * Now that we have an idea of what the query looks like, let's study the `ThoughtForm` component.

* Open `16-Stu_Apollo-Review/Unsolved/client/src/components/ThoughtForm/index.js` in your IDE to demonstrate the following:

  * First we import the `useMutation` Hook and the mutation itself into the component:

      ```js
      import { useMutation } from '@apollo/client';
      import { ADD_THOUGHT } from '../../utils/mutations';
      ```

  * Next we extract the mutation function and an object that will give us the status of the mutation, by passing in the mutation that we just imported:

    ```js
    const [addThought, { error }] = useMutation(ADD_THOUGHT);
    ```

  * Now that we have the `addThought` mutation function available, we can use it in the `handleFormSubmit` method:

    ```js
    const handleFormSubmit = async (event) => {
      event.preventDefault();

      try {
        const { data } = addThought({
          variables: { ...formState },
        });

        window.location.reload();
      } catch (err) {
        console.error(err);
      }
    };
    ```

  * 🔑 Remember that the `addThought()` mutation function is a Promise, so to gracefully handle errors we will implement a `try...catch` block.

  * First we assign the value of the `addThought()` function to `data`, assuming that the mutation is successful.

  * We also pass an object to the `addProfile()` method that includes a `variables` object. Inside, we will pass the content of the `formState` object:

    ```js
    try {
      const { data } = addThought({
        variables: { ...formState },
      });
      ...
    }
    ```

  * If an error occurs, the `catch` block will log that error to the console:

    ```js
    } catch (err) {
      console.error(err);
    }
    ```

  * Assuming that the mutation was successful, we want to reload the window by calling `window.location.reload()`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we pass a variable to a mutation when using the function that gets returned from `useMutation`?

  * 🙋 We can pass a variable to the function by passing an object that contains a `variables` property.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Apollo documentation on mutations](https://www.apollographql.com/docs/react/data/mutations/), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: JWT (5 min)

* Open `17-Ins_JWT-Review/server/utils/auth.js` in your IDE and explain the following:

  * 🔑 We use JSON Web Tokens to authenticate users and keep the full-stack app secure.

  * 🔑 To start, we implement middleware that will decode the token before it reaches the resolver.

  * First we import the `jwt` library into the auth file:

    ```js
    const jwt = require('jsonwebtoken');
    ```

  * Next we export a function called `authMiddleware` that will receive a request object:

    ```js
    module.exports = {
      authMiddleware: function ({ req }) { ... }
    }
    ```

  * We use the request body to check for a token that was passed from the header, from the body, or as a query parameter. If any of these exist, we assign it to a variable called `token`:

    ```js
    let token = req.body.token || req.query.token || req.headers.authorization;
    ```

  * Now that we have the token stored from the request object, we can check whether it is valid by using the `jwt.verify()` method. This method accepts a token, a public or private secret, and a verify options object.

  * If the token is valid, we can assign the payload to the `data` variable:

    ```js
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }
    ```

  * Once we have the payload assigned to the `data` variable, we can return the request object from the `authMiddleware()` function:

    ```js
    return req
    ```

* Open `17-Ins_JWT-Review/server/server.js` in your IDE to demonstrate the following:

  * To use the middleware in the context of the Apollo server, we need to import it into the server file:

      ```js
      const { authMiddleware } = require('./utils/auth');
      ```

  * Next, we add a `context` property and set the value to `authMiddleware` -- allowing the incoming requests to be verified and the data returned from the `authMiddleware()` function to be made available to the resolvers:

    ```js
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: authMiddleware,
    })
    ```

  * To use the payload provided by the context, we pass in a `context` object, along with the `parent` and `args` parameters -- allowing us to pass data from the token so that it can be used by the resolvers.

* Open `17-Ins_JWT-Review/server/schemas/resolvers.js` in your IDE to demonstrate the following:

  * 🔑 The order of the arguments is important in this case. Because parameters in resolvers are positional, the `context` parameter must always be in the third place:

    ```js
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we handle an invalid token before it gets to the resolver?

  * 🙋 By adding a context option to the Apollo Server configuration, we give it the value of `authMiddleware`. This gives us a chance to intercept the traffic and attempt to decode the token before we return the payload. If the token is invalid, we throw an `AuthenticationError`.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `18-Stu_JWT-Review/README.md`.

### 17. Student Do: JWT (15 min)

* Direct students to the activity instructions found in `18-Stu_JWT-Review/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Profile Page Isn't Displaying the Logged-In User's Data

  Work with a partner to resolve the following issue(s):

  * As a user, I want to see my own thoughts when I visit the profile page.

  ## Expected Behavior

  A logged-in user should see the thoughts that they created when they visit the `/me` route.

  ## Actual Behavior

  The profile page displays a message informing the user that they must be logged in to see the content.

  ## Steps to Reproduce the Problem

  1. Navigate to `26-Stu_Resolver-Context/Unsolved` from the command line.

  2. Run `npm install`, `npm run seed`, and `npm run develop`.

  3. Open <localhost:3000/login> in the browser.

  4. Log in with the following test credentials, or create your own user and some thoughts:

    {
      "email": "lernantino@techfriends.dev",
      "password": "password10"
    }

  5. Navigate to <localhost:3000/me>.

  6. The app doesn't display the thoughts from this user.

  ## Assets

  The following image demonstrates the profile page's appearance and functionality:

  ![The logged-in user's profile page displays thoughts that they've created and a form to create more thoughts.](./Images/01-screenshot.png)

  ---

  ## 💡 Hints

  What is the difference between the server-side `QUERY_ME` and `QUERY_SINGLE_USER` query resolvers that would cause one to work and the other to not work?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How could we implement authentication in a React app without using GraphQL?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 18. Instructor Review: JWT (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with JWT authentication? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `authMiddleware`

  * ✔️ `context: authMiddleware`

  * ✔️ `me: async (parent, args, context)`

* Open `18-Stu_JWT-Review/Solved/server/utils/auth.js` in your IDE and explain the following:

  * In this activity, we need to resolve an issue associated with individual thoughts not being displayed for a given user. Users are presented with a message that they need to log in.

  * Inside the `auth.js` file, we find that the logic in the `authMiddleware()` function is responsible for checking whether a token is valid or not. If the token is valid, we return a `data` object that can be used by the resolver:

    ```js
    authMiddleware: function ({ req }) {
      let token = req.body.token || req.query.token || req.headers.authorization;
        if (req.headers.authorization) {
          token = token.split(' ').pop().trim();
        }
        if (!token) {
          return req;
        }

        try {
          const { data } = jwt.verify(token, secret, { maxAge: expiration });
          req.user = data;
        } catch {
          console.log('Invalid token');
        }
    ```

* Open `18-Stu_JWT-Review/Solved/server/server.js` in your IDE to demonstrate the following:

  * When we create the Apollo Server instance, we pass in a `context` object that will contain the `authMiddleware()` function. This function will in turn pass the `data` object that gets returned to every resolver.

  * 🔑 This is how the user's account information sent by the client reaches the resolver:

    ```js
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: authMiddleware,
    });
    ```

* Open `18-Stu_JWT-Review/Solved/server/schemas/resolvers.js` in your IDE to demonstrate the following:

  * In the resolvers file, we added a `context` parameter to the resolver. The order of arguments matters when dealing with resolvers, so the code was not functioning properly.

  * Initially, `context` was passed a second argument, causing the login data to be routed to the wrong place:

    ```js
    me: async (parent, args, context) => {
    ```

  * With the `context` parameter in the third position, we can now use `context` to check whether the user data exists. If so, we can identify the user with their `id` and populate the `thoughts` associated with the user:

    ```js
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('thoughts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we provide context to a resolver?

  * 🙋 We add a context option to the Apollo Server instance.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Apollo documentation on the context argument](https://www.apollographql.com/docs/apollo-server/data/resolvers/#the-context-argument), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 19. Instructor Demo: useReducer (5 min)

* Copy the `src` directory from `19-Ins_useReducer-Review` and paste it into `00-practice-app`.

* Navigate to `00-practice-app` in your command line and run `npm start`.

* Open `localhost:3000` in your browser to demonstrate the following:

  * 🔑 When we run the application, we are presented with a page that asks a user to enter a username.

  * 🔑 As the user is typing, the application will check whether the username is valid or not.

  * Also, when the user clicks submit, they are presented with a message regarding the validity of their final submission.

* Open `src/components/NameComponent.js` in your IDE and demonstrate the following:

  * In this demo we are reviewing the `useReducer` Hook inside of a username validator. If the username is valid, the alert will return a message that the username is valid. Otherwise, we provide a message that states that the username is invalid.

  * The `useReducer` Hook accepts a `reducer` and an initial state object as an argument and returns an array that contains the `state` object and a `dispatch()` function.

  * Here is the implementation in `NameComponent`. We begin by importing the `reducer` and the `useReducer` Hook into the component:

    ```js
    import React, { useReducer } from 'react';
    import { useName } from '../utils/NameContext';
    import { reducer } from '../utils/reducers';
    ```

  * Then we use destructuring assignment with the `useReducer` Hook to extract the `state` and `dispatch()` function. Notice that we pass in the reducer function and an initial state:

    ```js
    const [state, dispatch] = useReducer(reducer, initialState);
    ```

  * To update state, call `dispatch()`, which accepts an object that contains `type` and `payload` attributes.

  * Let's look at the `handleInputChange()` method, where we first use the `dispatch()` function.

  * In the return method, the input has an `onChange` property that references `handleInputChange()`:

    ```js
    <input
      type="text"
      placeholder="hello123"
      onChange={handleInputChange}
    ></input>
    ```

  * When the user starts typing a username, the function `handleInputChange()` gets called and will in turn invoke the `dispatch()` function using the `CHANGE` action:

    ```js
    const handleInputChange = (e) => {
      dispatch({
        type: CHANGE,
        value: e.target.value,
      });
    };
    ```

  * We use the `dispatch()` function again when the user wants to submit their username:

    ```js
    <button
      id="button"
      onClick={handleSubmit}
      className="btn"
      type="button"
    >
    ```

  * On submit, the `handleSubmit()` function will be invoked, dispatching the `SUBMIT` type and also alerting the user as to the validity of their username:

    ```js
    const handleSubmit = (e) => {
      e.preventDefault();
      const result = state.isValid
        ? 'Username is valid!'
        : 'Username is not valid';
      alert(result);
      dispatch({
        type: SUBMIT,
      });
    };
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What argument does the `useReducer` Hook accept?

  * 🙋 The `useReducer` Hook accepts an argument of the reducer function.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `20-Stu_useReducer-Review/README.md`.

### 20. Student Do: useReducer (15 min)

* Direct students to the activity instructions found in `20-Stu_useReducer-Review/README.md`.

* Remind students to copy the `src` directory from `20-Stu_useReducer-Review/` into their `00-practice-app` folder.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of useReducer

  Work with a partner to add comments describing the functionality of the code found in [StudentList](Unsolved/src/components/StudentList.js).

  ## Setup

  Copy the `src` directory from the unsolved folder into `00-practice-app` before you begin.

  ## 📝 Notes

  When is local state being used as opposed to global state in this application?

  What do we need to pass to the `dispatch()` function to add a new major?

  Refer to the documentation:

  [React documentation on useReducer Hook](https://reactjs.org/docs/hooks-reference.html#usereducer)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How does React know what to update if the state has changed?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 21. Instructor Review: useReducer (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the `useReducer` Hook? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `dispatch()`

  * ✔️ `action.payload`

  * ✔️ `useReducer`

* Be sure that you have copied the `src` directory from `20-Stu_useReducer/Unsolved/` into `00-practice-app`.

* Open `src/components/StudentList.js` in your IDE and explain the following:

  * We import the `useReducer` Hook from React, as well as the new `action` type and `reducer`:

    ```js
    import React, { useReducer, useState } from 'react';
    import { ADD_STUDENT, REMOVE_STUDENT, ADD_MAJOR } from '../utils/actions';
    import reducer from '../utils/reducers';
    ```

  * We also import the custom `useStudentContext` Hook from `'../utils/StudentContext'`:

    ```js
    import { useStudentContext } from '../utils/StudentContext';
    ```

  * In the `StudentList` file, we create a new state variable called `newMajorName`, along with a function to update it.

  * This is a local state variable that will be used to hold the value of the new major before we dispatch any actions:

    ```js
    const [newMajorName, setNewMajorName] = useState('');
    ```

  * We use `dispatch()` with the `REMOVE_STUDENT` action:

    ```jsx
    <button
      type="button"
      onClick={() => {
        return dispatch({
          type: REMOVE_STUDENT,
          payload: student.id,
        });
      }}
    >
    ```

* Open `20-Stu_useReducer-Review/Solved/src/utils/reducers.js` in your IDE to demonstrate the following:

  * When the action is dispatched to the reducer, the `switch` statement will look for a case called `REMOVE_STUDENT` and enter that code block.

  * Inside the code block, we are returning a copy of `state` and a modified copy of the `students` array. The modified array is the result of filtering out the `id` that was passed in the `action.payload`:

    ```js
    case REMOVE_STUDENT: {
      return {
        ...state,
        students: [...state.students].filter(
          (student) => student.id !== action.payload
        ),
      };
    }
    ```

  * Let's return to the `StudentList` component and review what happens when a major gets added.

* Open `src/components/StudentList.js` in your IDE and explain the following:

  * In the return method, we are looking at `state.majors` and mapping over each of them to produce a little drop-down menu for the users to pick from.

  * When the state eventually gets updated by the `ADD_MAJOR` action, the entire component will re-render, allowing us to see the new major that was added in the drop-down:

    ```js
    {state.majors.map((major) => (
      <option key={major} value={major}>
        {major}
      </option>
    ))}
    ```

  * Let's examine the button that invokes the `ADD_MAJOR` action.

  * Remember that earlier we created a new local state variable called `newMajorName` -- which is used when we invoke the `dispatch()` method with an action of `ADD_MAJOR` and a payload of `newMajorName`:

    ```js
    <button
      type="button"
      onClick={() => {
        console.log('🚀 StudentList.js: Dispatched add major! ');
        return dispatch({
          type: ADD_MAJOR,
          payload: newMajorName,
        });
      }}
    >
    ```

* Open `20-Stu_useReducer-Review/Solved/src/utils/reducers.js` in your IDE to demonstrate the following:

  * When the `ADD_MAJOR` action is dispatched, we return to the reducers file and check which case in the `switch` statement gets used.

  * In this code block, we are simply returning a copy of state and an updated copy of the majors array with the payload from the action:

    ```js
    case ADD_MAJOR: {
      return {
        ...state,
        majors: [...state.majors, action.payload],
      };
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What does the `useReducer` Hook return?

  * 🙋 The `useReducer` Hook returns a state object and a `dispatch()` function.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React documentation on useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer), and stay for office hours to ask for help.

### 22. FLEX (30 mins)

* This time can be utilized for reviewing key topics learned so far in this module.

* Answer any questions before ending the class.

### 23. END (0 mins)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
