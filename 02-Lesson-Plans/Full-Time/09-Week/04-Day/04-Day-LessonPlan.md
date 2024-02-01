# 09.4 Full-Time Lesson Plan: Introduction to Mongoose

## Overview

In this class, you will introduce students to Mongoose, a Node.js package that provides a schema-based solution that you can use to model your Node.js application data. Students will build upon their knowledge of MongoDB and learn about how Mongoose makes it easier to handle data from the database.

## Instructor Notes

* In this lesson, students will complete activities `09-Ins_Cursor-Methods` through `20-Stu_Aggregates`.

* Today's activities do not have a front end and all routes will be tested using Insomnia. Please make sure you have Insomnia installed locally prior to class. Refer to the [Insomnia installation docs](https://insomnia.rest/download) as needed.

* As we continue to work with MongoDB, Mongoose will be the focus of today's activities. Reassure students that Mongoose is simply a "wrapper" around MongoDB that uses a schema to map to a MongoDB collection and makes it easier to manage relationships among data. This relationship is similar to how Sequelize works with MySQL.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

* Limit, sort, and skip documents using MongoDB methods.

* Define the structure of the database with schema, and use validators.

* Create a model to map to the MongoDB document.

* Execute CRUD queries using Mongoose.

* Explain how instance methods perform some action on a specific instance of a Model.

* Create and manipulate a document that is nested within another document.

* Access MongoDB's aggregate framework through Mongoose.

## Time Tracker

| Start  | #   | Activity Name                             | Duration |
|---     |---  |---                                        |---       |
| 10:00AM| 1   | Instructor Demo: Cursor Methods           | 0:05     |
| 10:05AM| 2   | Student Do: Cursor Methods                | 0:15     |
| 10:20AM| 3   | Instructor Review: Cursor Methods         | 0:10     |
| 10:30AM| 4   | Instructor Do: Stoke Curiosity            | 0:10     |
| 10:40AM| 5   | Instructor Demo: Models and Schema        | 0:05     |
| 10:45AM| 6   | Student Do: Models and Schema             | 0:15     |
| 11:00AM| 7   | Instructor Review: Model and Schema       | 0:10     |
| 11:10AM| 8   | Instructor Demo: CRUD Mongoose            | 0:05     |
| 11:15AM| 9   | Student Do: CRUD Mongoose                 | 0:15     |
| 11:30AM| 10  | Instructor Review: CRUD Mongoose          | 0:10     |
| 11:40AM| 11  | FLEX                                      | 0:20     |
| 12:00PM| 12  | BREAK                                     | 0:30     |
| 12:30PM| 13  | Instructor Demo: Instance Methods         | 0:05     |
| 12:35PM| 14  | Student Do: Instance Methods              | 0:15     |
| 12:50PM| 15  | Instructor Review: Instance Methods       | 0:10     |
| 1:00PM | 16  | Instructor Demo: Subdocuments             | 0:05     |
| 1:05PM | 17  | Student Do: Opening Subdocuments          | 0:15     |
| 1:20PM | 18  | Instructor Review: Subdocuments           | 0:10     |
| 1:30PM | 19  | Instructor Demo: Aggregates               | 0:05     |
| 1:35PM | 20  | Student Do: Creating Aggregates           | 0:15     |
| 1:50PM | 21  | Instructor Review: Aggregates             | 0:10     |
| 2:00PM | 22  | FLEX                                      | 0:30     |
| 2:30PM | 23  | END                                       | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Cursor Methods (5 min)

* Open `09-Ins_Cursor-Methods/server.js` in your IDE and explain the following:

  * In the `GET` route, we see a number of methods that are working to constrain the data that is actually returned.

  * `find()` is used to first return all the documents in the `letterList` collection.

    ```js
    .find()
    ```

  * 🔑 Then, chained to `find()`, we add `sort()` to order the data by a field in ascending or descending order. We use 1 to sort in ascending order and -1 to sort in descending order.

    ```js
    .sort({ letter: 1 })
    ```

  * 🔑 To skip a certain number of documents and not include them in the results, we  use `skip()`. The number added as a parameter equals the number of documents that we want to skip. Using `skip()`, all the documents after the last one skipped will be returned.

    ```js
    .skip(1)
    ```

  * 🔑 Finally, to set a maximum number of results to return, we use `limit()` and set a number as the parameter, such as 10. This will limit the results to a maximum of 10.

    ```js
    .limit(10)
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are three methods we can use to change the data returned in a query?

  * 🙋 We can use `sort()` to sort the data in ascending or descending order, `skip()` to skip over a certain number of documents and exclude them, and `limit()` to set the maximum number of results returned.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu_Cursor-Methods/README.md`.

### 2. Student Do: Cursor Methods (15 min)

* Direct students to the activity instructions found in `10-Stu_Cursor-Methods/README.md`, which are also shown below.

* Break your students into pairs who will work together on this activity.

  ```md
  # 📖 Implement Cursor Methods to Change How Documents Are Returned

  Work with a partner to implement the following user story:

  * As a developer, I want to change the order in which read operations return documents.

  * As a developer, I want to omit documents from the list of returned documents and limit the returned number of documents.

  ## Acceptance Criteria

  * It is done when the documents are returned in descending order using MongoDB methods.

  * It is done when the results are limited to five documents.

  * It is done when documents that contain the largest five numbers are skipped.

  * It is done when routes are successfully tested and the results are returned in Insomnia.

  ## 📝 Notes

  Refer to the documentation:

    * [MongoDB docs on Sort](https://docs.mongodb.com/manual/reference/method/cursor.sort/)

    * [MongoDB docs on Skip](https://docs.mongodb.com/manual/reference/method/cursor.skip/)

    * [MongoDB docs on Limit](https://docs.mongodb.com/manual/reference/method/cursor.limit/)

  ## 💡 Hints

  * Does MongoDB store documents in a particular order? What happens if there are duplicate values?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What method can we use to maximize performance and prevent MongoDB from returning more results than required for processing?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 3. Instructor Review: Cursor Methods (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with sorting, skipping, and limiting results using cursor methods? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `sort()`

  * ✔️ `skip()`

  * ✔️ `limit()`

* Open `10-Stu_Cursor-Methods/Solved/server.js` in your IDE and explain the following:

  * 🔑 We start with a working `GET` route that is currently finding all the documents in the `numbersList` collection. This route has been provided for us.

    ```js
    app.get('/read', (req, res) => {
      db.collection('numberList')
      .find()
      ...
      .toArray((err, results) => {
        if (err) throw err;
        res.send(results);
      });
     });
    ```

  * 🔑 To sort the data by the `number` field in descending order, we chain a `sort()` method after the `find()` method. Order matters here! We always want to fetch the data using `find()` before applying any cursor methods to constrain the data.

    ```js
    .find()
    .sort({ number: -1 })
    ```

  * 🔑 Next, we add `skip()`. Because we want to skip over the first 5 results, we set the parameter to 5.

    ```js
    .find()
    .sort({ number: -1 })
    .skip(5)
    ```

  * 🔑 Finally, we want to return a maximum of 5 documents, so we use `limit()`.

    ```js
    .find()
    .sort({ number: -1 })
    .skip(5)
    .limit(5)
    ```

  * Our completed `GET` route will return sorted documents that skip the first 5 documents and have a maximum limit of 5. While sort, skip, and limit can be used alone, these three methods are often used together to constrain results to tailor the returned results to only those we need.

    ```js
    app.get('/read', (req, res) => {
       db.collection('numberList')
      .find()
      .sort({ number: -1 })
      .skip(5)
      .limit(5)
      .toArray((err, results) => {
        if (err) throw err;
        res.send(results);
      });
     });
    ```

* In your command line, navigate to `10-Stu_Cursor-Methods/Solved` and run `npm install` and `node server` to demonstrate the following in Insomnia:

  * When we test the `GET` request with the route `localhost:3001/read`, we see that the results are sorted by the `number` field in descending order, 5 results are skipped, and the results are limited to 5.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between `limit()` and `skip()` cursor methods?

  * 🙋 The `limit()` cursor methods sets a maximum number of documents that will be returned, whereas the `skip()` method excludes a certain number of documents and returns only the documents that come after them. Both methods are frequently used to constrain the data returned in a MongoDB query.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MongoDB docs on cursor methods](https://docs.mongodb.com/manual/reference/method/js-cursor/), and attend Office Hours to ask for help.

  * Answer any questions before proceeding to the next activity.

### 4. Instructor Do: Stoke Curiosity (10 mins)

* The topic of today's lesson is Mongoose, an Object Data Modeling (ODM) library for MongoDB. Using the prompts provided, discuss the usefulness of data modeling and ODMs.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is data modeling? Or more specifically, what is an object-based data model?

  * 🙋 Generally speaking, Object Data Modeling is focused on how the data is represented. It isn't so much about what the data is, but more about how it is visualized and connected. Data modeling can help us handle large amounts of data efficiently and get the right data back quickly.

  * ☝️ Where have we seen something similar to this before?

  * 🙋 We saw something similar to this when we used Sequelize, an object-relational mapper (ORM), with our MySQL database. Mongoose is similar to Sequelize in that respect. Mongoose is an Object Data Modeling (ODM) library, also known as an Object Data Mapper, for MongoDB. Think of it like a wrapper around MongoDB which makes it easier to manage relationships among data.

  * ☝️ What are the benefits of using Mongoose with MongoDB?

  * 🙋 Mongoose makes it easier to use MongoDB because of its built-in structure and methods. The structure of Mongoose contains business logic that helps you organize your data. The built-in methods help automate common tasks and queries, which help you work more quickly and efficiently.

  * ☝️ Do we have to use Mongoose when working with MongoDB?

  * 🙋 Not at all! It is important to remember that Mongoose is simply a helpful tool for working with MongoDB databases, especially when compared to ORMs like Sequelize, which were more essential for relational databases. MongoDB has plenty of built-in features that help us organize, analyze, and keep track of our data on its own. However, Mongoose lets us handle the data more easily.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: Models and Schema (5 min)

* Open `11-Ins_Models-Schemas/config/connection.js` in your IDE and demonstrate the following:

  * 🔑 In order to implement Mongoose, we need to wrap it around our local connection to MongoDB. We use the `connect()` method to accomplish this.

    ```js
     mongoose.connect('mongodb://127.0.0.1:27017/mygroceryDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    ```

  * You'll notice some options that we are using in our `connect()` method. These are not crucial to understand, but if you want to know more about it, you can check out the [Mongoose docs on connections](https://mongoosejs.com/docs/connections.html#options). They fix the deprecation warnings regarding the MongoDB Node.js driver to make sure that the connection works. You can read more about this in the [Mongoose docs on deprecation warnings](https://mongoosejs.com/docs/deprecations.html).

* In your IDE, open `11-Ins_Models-Schemas/models/Item.js` and demonstrate the following:

  * 🔑 We need to define a schema for our model. Everything in Mongoose starts with a **schema**. Each schema maps to a MongoDB collection and defines the shape of the documents in that collection. We are using the `grocerySchema`.

    ```js
    const grocerySchema = new mongoose.Schema({
      item: { type: String, required: true },
      stockCount: Number,
      price: Number,
      inStock: Boolean,
      lastAccessed: { type: Date, default: Date.now },
    });
    ```

  * Each key in the `grocerySchema` defines a property in our documents that will be cast to its associated `SchemaType`. For example, `item` is a property with the `String SchemaType`. It is also using a built-in validator, `required`, which means that this property must exist in order for the instance to be created.

    ```js
    item: { type: String, required: true }
    ```

  * Notice that `Number` and `Boolean` is shorthand for `{type: Number}` and `{type: Boolean}` for the `price` and `inStock` properties.

    ```js
    price: Number,
    inStock: Boolean,
    ```

  * 🔑 Now that we have our schema set up, we can compile our model. When we call the `model()` method on our schema, Mongoose will compile a model for us!

    ```js
    const Item = mongoose.model('Item', grocerySchema);
    ```

  * The first argument of the `model()` method is the singular name of the collection our model is for, which in our case is `Item`. Mongoose will look for the plural, lowercase version of the model name as the collection in our database, which in our case will be `items`.

  * The second argument of the `model()` method is the schema we are using, which is `grocerySchema`.

  * 🔑 To create a new document, we will use the `.create()` method on our model. We are using the model to create individual documents that have the properties as defined in our schema.

    ```js
    Item.create(
      {
        item: 'banana',
        stockCount: 10,
        price: 1,
        inStock: true,
      },
      (err) => (err ? handleError(err) : console.log('Created new document'))
    );
    ```

* Open `11-Ins_Models-Schemas/server.js` in your IDE and demonstrate the following:

  * We need to require our `Item` model at the top of the file.

    ```js
    const { Item } = require('./models');
    ```

  * 🔑 In our GET route, we are using the model to `.find()` all documents that are instances of that model.

    ```js
    app.get('/all-items', (req, res) => {
      Item.find({}, (err, result) => {
        if (err) {
          res.status(500).send({ message: 'Internal Server Error' });
        } else {
          res.status(200).json(result);
        }
      });
    });
    ```

  * We are using the `.find()` method on our `Item` model inside the GET route.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use a Mongoose model to create a new document?

  * 🙋 First, we would need to create a schema that defines the properties of the data we want to store. Then we would compile the model. Finally, we would create new documents based on the model we just created.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `12-Stu_Models-Schemas/README.md`.

### 6. Student Do: Models and Schema (15 min)

* Direct students to the activity instructions found in `12-Stu_Models-Schemas/README.md`, which are also shown below.

* Break your students into pairs who will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of Models and Schemas Using Mongoose

  Work with a partner to add comments that describe the functionality of the code found in [models/Book.js](./Unsolved/models/Book.js) and [server.js](./Unsolved/server.js).

  ## 📝 Notes

  Refer to the documentation:

  [Mongoose docs on models](https://mongoosejs.com/docs/models.html)

  [Mongoose docs on schemas](https://mongoosejs.com/docs/guide.html)

  [Mongoose docs on validation](https://mongoosejs.com/docs/validation.html)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can you design a custom validator using a validation function to suit your data's needs?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: Models and Schema (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Mongoose models and schema? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `mongoose.Schema()`

  * ✔️ `mongoose.model()`

  * ✔️ `.create()`

  * ✔️ `.find()`

* Open `12-Stu_Models-Schemas/Solved/models/Book.js` in your IDE and explain the following:

  * 🔑 First, we are creating our `bookSchema`. We use the `Schema()` method to define the `bookSchema`. We specify the `SchemaType` and use validation to specify which properties are required.

    ```js
    const bookSchema = new mongoose.Schema({
      title: { type: String, required: true },
      author: { type: String, required: false },
      publisher: String,
      stockCount: Number,
      price: Number,
      inStock: Boolean,
      lastAccessed: { type: Date, default: Date.now },
    });
    ```

  * 🔑 Next, we compile a model based on our `bookSchema`.

    ```js
    const Book = mongoose.model('Book', bookSchema);
    ```

  * 🔑 We create a new instance of the `Book` model. This instance includes all of the properties outlined in our schema.

    ```js
    Book.create(
      {
        title: 'Diary of Anne Frank',
        author: 'Anne Frank',
        publisher: 'Scholastic',
        stockCount: 10,
        price: 10,
        inStock: true,
      },
      (err) => (err ? handleError(err) : console.log('Created new document'))
    );
    ```

  * But the next instance only includes the `title`, which is required, and the `author`, which isn't specifically required.

    ```js
    Book.create(
      { title: 'Oh the Places You Will Go!', author: 'Dr. Seuss' },
      (err) => (err ? handleError(err) : console.log('Created new document'))
    );
    ```

  * The last instance simply includes only the required property, which was `title`.

    ```js
    Book.create({ title: 'Harold and the Purple Crayon' }, (err) =>
      err ? handleError(err) : console.log('Created new document')
    );
    ```

  * This is a good example of the flexibility of NoSQL databases and how validators can be useful when specifying the type of data you want to have in the database. This allows better control of the quality of data that gets saved in your database.

* Open `12-Stu_Models-Schemas/Solved/server.js` in your IDE and explain the following:

  * First, we need to import our `Book` model.

    ```js
    const { Book } = require('./models');
    ```

  * Next, in our GET route, we are using the `.find()` method on our `Book` model to find all the books in our collection.

    ```js
    app.get('/all-books', (req, res) => {
      Book.find({}, (err, result) => {
        if (err) {
          res.status(500).send({ message: 'Internal Server Error' });
        } else {
          res.status(200).json(result);
        }
      });
    });
    ```

* Run `npm install` and `npm start` to start the application. Open Insomnia and demonstrate the following:

  * When we make a GET request to `localhost:3001/all-books`, we see all of our books returned in JSON format. Every book instance has a title, because it was required, but the other properties were optional.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are some other Mongoose built-in validators?

  * 🙋 Numbers have `min` and `max` validators. Strings have `enum`, `match`, `minLength`, and `maxLength` validators.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Mongoose docs on schemas](https://mongoosejs.com/docs/guide.html#definition), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: CRUD Mongoose (5 min)

* Open the previous Instructor Demo file, `11-Ins_Models-Schemas/models/Item.js`, in your IDE and demonstrate the following:

  * When we execute CRUD operations with Mongoose, we will see how similar they are to regular MongoDB CRUD methods.

  * 🔑 When we create a new instance of a model, we can use `.create()` or `.save()`. We used `.create()` to create a document of the `Item` model.

    ```js
    Item.create(
      {
        item: 'banana',
        stockCount: 10,
        price: 1,
        inStock: true,
      },
      (err) => (err ? handleError(err) : console.log('Created new document'))
    );
    ```

  * Another way to create a document is to use the `.save()` method, which we will demo next.

* Open `13-Ins_CRUD-Mongoose/server.js` in your IDE and demonstrate the following:

  * 🔑 We see a POST request being made to create a new `Department`. We will take the name of the new department from the params. Notice that we are using the `.save()` method to create this new document.

    ```js
    app.post('/new-department/:department', (req, res) => {
      const newDepartment = new Department({ name: req.params.department });
      newDepartment.save();
      if (newDepartment) {
        res.status(201).json(newDepartment);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ error: 'Something went wrong' });
      }
    });
    ```

  * 🔑 We know we can use the `.find()` method to query the database to find all the documents that are instances of that model, but Mongoose also provides static helper functions for MongoDB CRUD operations. If we want to find one specific document, we can use the `.findOne()` method.

    ```js
    app.get('/find-wine-department', (req, res) => {
      Department.findOne({ name: 'Wine' }, (err, result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          console.log('Uh Oh, something went wrong');
          res.status(500).json({ error: 'Something went wrong' });
        }
      });
    });
    ```

  * In the preceding code block, we see a GET route to find the wine department. We are using the `.findOne()` method on the `Department` model and hardcoding the name of the department as Wine for now. This will return the first document with the name Wine.

  * 🔑 Another helper function that we can use for MongoDB CRUD operations is the `.findOneAndDelete()`. This will find the document and delete it from the database. This time, instead of hardcoding the name, we will use the URL params.

    ```js
    app.delete('/find-one-delete/:departmentName', (req, res) => {
      Department.findOneAndDelete(
        { name: req.params.departmentName },
        (err, result) => {
          if (result) {
            res.status(200).json(result);
            console.log(`Deleted: ${result}`);
          } else {
            console.log('Uh Oh, something went wrong');
            res.status(500).json({ error: 'Something went wrong' });
          }
        }
      );
    });
    ```

  * In the preceding code block, we see a DELETE route to find one department and delete it. The `.findOneAndDelete()` method will take in the name of the department from the params, query the database, and delete that document.

  * Now that we've seen the code, let's test these routes in Insomnia.

* Run `npm install` and `npm start` to start the application. Open Insomnia and demonstrate the following:

  * First, let's create a new department. We will make a POST request to `localhost:3001/new-department/Snacks` to create a new Snacks department in Insomnia. If the request is successful, we should get the new document returned, similar to the following:

    ```json
    {
      "_id": "611d1fc95db4d4153d5d11fe",
      "name": "Snacks",
      "lastAccessed": "2021-08-18T14:57:13.184Z"
    }
    ```

  * Next, let's find the first Wine document. We will make a GET request to `localhost:3001/find-wine-department` in Insomnia. If the request is successful, we should get the first Wine document returned, similar to the following:

    ```json
    {
      "_id": "6115cecd9da5b53b2ac2e0d3",
      "name": "Wine",
      "lastAccessed": "2021-08-13T01:45:49.653Z",
      "__v": 0
    }
    ```

  * Finally, let's delete the Snacks department that we just created. We will make a DELETE request to `localhost:3001/find-one-delete/Snacks` in Insomnia. If the request is successful, we should get the deleted Snacks department returned, similar to the following:

    ```json
    {
      "_id": "611d1fc95db4d4153d5d11fe",
      "name": "Snacks",
      "lastAccessed": "2021-08-18T14:57:13.184Z",
      "__v": 0
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We can check the [Mongoose docs on queries](https://mongoosejs.com/docs/queries.html) to use the helper functions for CRUD operations.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `14-Stu_CRUD-Mongoose/README.md`

### 9. Student Do: CRUD Mongoose (15 min)

* Direct students to the activity instructions found in `14-Stu_CRUD-Mongoose/README.md`, which are also shown below.

* Break your students into pairs who will work together on this activity.

  ```md
  # 📖 Implement CRUD Operations Using Mongoose

  Work with a partner to implement the following user story:

  * As a developer, I want to be able to find a single document and update it by using a Mongoose CRUD method.

  ## Acceptance Criteria

  * It is done when I use a Mongoose CRUD method to select a single document with the `name` property of `Kids` and update it.

  * It is done when the updated document has an updated `name` property value that matches the value provided in the route parameter.

  * It is done when only the `name` property has been updated in the document and no other changes have been made.

  * It is done when I test the `POST` Route in Insomnia and the updated document is returned.

  ## 📝 Notes

  Refer to the documentation:

  [Mongoose docs on findOneAndUpdate()](https://mongoosejs.com/docs/tutorials/findoneandupdate.html)

  ---

  ## 💡 Hints

  * How can you add an option to your Mongoose CRUD method so that the updated object is returned?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the difference between `insert()`, `insertMany()`, and `create()`? Why would you use one method over the other?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: CRUD Mongoose (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with CRUD operations in Mongoose? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `.findOneAndUpdate()`

* Open `14-Stu_CRUD-Mongoose/Solved/server.js` in your IDE and explain the following:

  * We had to find the document with the name Kids and update it to a different name of our choice. We were also given the Mongoose docs on how to use `.findOneAndUpdate()`.

  * 🔑 First, we use the `.findOneAndUpdate()` method on the `Genre` model.

    ```js
    Genre.findOneAndUpdate(
    ```

  * The first parameter is the condition; what are we looking for? We are looking for the document with the name Kids.

    ```js
    { name: 'Kids' },
    ```

  * The next parameter is update; what are we updating it to? We are updating the name to what the value of the URL param is.

    ```js
    { name: req.params.genre },
    ```

  * The last parameter is a bit tricky. We need to use an option to return the updated information, not the original document. To do that, we set the `new` option to `true`.

    ```js
    { new: true },
    ```

  * Finally, we need to add the callback function that handles our errors and returns the updated document.

    ```js
    (err, result) => {
      if (result) {
        res.status(200).json(result);
        console.log(`Updated: ${result}`);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ message: 'something went wrong' });
      }
    }
    ```

* Run `npm install` and `npm start` to start the application. Open Insomnia and demonstrate the following:

  * Let's make sure it works! We will make a POST request to `localhost:3001/find-one-update/History` to change the name of the genre to History, or whatever else you would like, in Insomnia.

  * If the request is successful, we should get the updated genre returned, similar to the following:

    ```json
    {
      "_id": "611d25f4886a0717e9d419d8",
      "name": "History",
      "lastAccessed": "2021-08-18T15:23:32.667Z",
      "__v": 0
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are the two ways in which a Mongoose query can be executed?

  * 🙋 We can pass in a callback function, which will allow Mongoose to execute the query asynchronously and pass the results to the callback. Or we can use `.then` and use the query as a promise.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Mongoose docs on queries](https://mongoosejs.com/docs/queries.html), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. FLEX (20 mins)

* This time can be utilized for reviewing key topics learned so far in this module.

* Ask students if they have any questions about Mongoose so far.

### 12. BREAK (30 mins)

### 13. Instructor Demo: Instance Methods (5 min)

* Open `15-Ins_Models-Instance-Methods/models/Department.js` in your IDE and demonstrate the following:

  * 🔑 We use instance methods to perform some action on a specific instance. There are built-in instance methods with Mongoose as well as custom instance methods that we can create.

  * First, let's define the schema for Department.

    ```js
    const departmentSchema = new mongoose.Schema({
      name: { type: String, required: true },
      totalStock: Number,
      lastAccessed: { type: Date, default: Date.now },
    });
    ```

  * 🔑 Next, we need to create the custom instance methods. After defining our schema, we can create a custom instance method `getDocumentInfo` to the `methods` object of our schema. This will get the `name` and `totalStock` data for that instance.

    ```js
    departmentSchema.methods.getDocumentInfo = function () {
      console.log(
        `This department has the name ${this.name} and a total stock of ${this.totalStock}`
      );
    };
    ```

  * Let's create the `Department` model and a new instance of the model, called `produce` with a `totalStock` value of `100`.

    ```js
    const Department = mongoose.model('Department', departmentSchema);

    const produce = new Department({ name: 'Produce', totalStock: 100 });
    ```

  * 🔑 Before we use the custom instance method, let's first use the built-in instance method `.get()` to get the `totalStock` of `produce`.

    ```js
    const responseGetInstance = produce.get('totalStock', String);
    console.log(
      `The value of the totalStock for this document in string form is ${responseGetInstance}`
    );
    ```

  * The instance method `.get()` takes in three parameters: the path, and two optional parameters, type and options. In our case, we are getting the value of `totalStock` and we want it returned as a `String`. We didn't use options in our case.

  * Now let's call the custom instance method, `.getDocumentInfo()`, on the instance.

    ```js
    produce.getDocumentInfo();
    ```

* In the command line, run `npm install` and `node models/Department.js` to demonstrate the following:

  * First, we see the response from the built-in instance method.

    ```text
    The value of the totalStock for this document in string form is 100
    ```

  * Then we see the response from calling the `getDocumentInfo()` custom instance method on `produce`.

    ```text
    This department has the name Produce and a total stock of 100
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use a custom instance method with our model?

  * 🙋 We need to define the schema, create a custom instance method, and run the custom method on an instance of the model.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `16-Stu_Models-Instance-Methods/README.md`.

### 14. Student Do: Instance Methods (15 min)

* Direct students to the activity instructions found in `16-Stu_Models-Instance-Methods/README.md`, which are also shown below.

* Break your students into pairs who will work together on this activity.

  ```md
  # 🏗️ Implement Instance Methods on a Mongoose Model

  Work with a partner to implement the following user story:

  * As a developer, I want to perform an action on a specific instance of a Mongoose model.

  ## Acceptance Criteria

  * It is done when I define a new schema named `bookSchema`.

  * It is done when the new schema has three properties: `title`, `author`, and `price`.

  * It is done when I assign a function named `getDiscount` to the methods object of the `bookSchema` that reduces the price by 50 percent and console logs the title of the book and the reduced price.

  * It is done when I have created a model named `Book`.

  * It is done when I have created an instance of the model, or document, named `discountedBook`.

  * It is done when I test the instance method by running `node models/Book.js`.

  * It is done when the price of `discountedBook` is reduced by 50 percent and the results are logged to the console.

  ---

  ## 💡 Hints

  What is the difference between an instance method and a static method?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can you add query helper methods to extend Mongoose's chainable query builder API?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: Instance Methods (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with instance methods? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `.getDiscount()`

* Open `16-Stu_Models-Instance-Methods/Solved/models/Book.js` in your IDE and explain the following:

  * First, we have to define a new schema named `bookSchema` that has three properties: `title`, `author`, and `price`.

    ```js
    const bookSchema = new mongoose.Schema({
      title: { type: String, required: true },
      author: String,
      price: { type: Number, required: true },
    });
    ```

  * 🔑 Next, we created a custom instance method, `.getDiscount()`. We assigned it to the `methods` object of the `bookSchema`. This function will reduce the price by 50 percent and console log the title and reduced price of the book.

    ```js
    bookSchema.methods.getDiscount = function () {
      const discountPrice = this.price * 0.5;
      console.log(
        `The book's title is ${this.title} and the discounted price is ${discountPrice}`
      );
    };
    ```

  * Then we create a model named `Book`.

    ```js
    const Book = mongoose.model('Book', bookSchema);
    ```

  * Then we create a new instance of the model called `discountedBook`. You can name the book and price whatever you want.

    ```js
    const discountedBook = new Book({
      title: 'Oh the Places You Will Go!',
      price: 100,
    });
    ```

  * Finally, we called the `.getDiscount()` custom instance method on the instance.

    ```js
    discountedBook.getDiscount();
    ```

* In the command line, run `npm install` and `node models/Book.js` to demonstrate the following:

  * When we run the file, we see the discounted price of the book in the console.

    ```text
    The book's title is Oh the Places You Will Go! and the discounted price is 50
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Where should we define the custom instance methods?

  * 🙋 We should define custom instance methods right after we define our schema.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Mongoose docs on instance methods](https://mongoosejs.com/docs/guide.html#methods), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: Subdocuments (5 min)

* Open `17-Ins_Subdocuments/models/Department.js` in your IDE and demonstrate the following:

  * 🔑 In Mongoose, **subdocuments** are documents that are embedded in other documents; these are otherwise known as **embedded documents** in MongoDB. This allows us to nest schemas in parent schemas. In Mongoose, we can do this in two ways: an array of subdocuments or a single nested subdocument.

  * 🔑 First, we need to define the schema of the subdocuments, also called the **child documents**. Let's create a `managerSchema` and `employeeSchema`.

    ```js
    const managerSchema = new mongoose.Schema({
      name: { type: String, required: true },
      salary: Number,
    });

    const employeeSchema = new mongoose.Schema({
      name: { type: String, required: true },
      salary: Number,
    });
    ```

  * Next, let's define the schema of the parent document that will include these two child documents.

    ```js
    const departmentSchema = new mongoose.Schema({
      name: { type: String, required: true },
      manager: managerSchema,
      employees: [employeeSchema],
      lastAccessed: { type: Date, default: Date.now },
    });
    ```

  * In the preceding code block, we included the `manager` as a single nested subdocument and the `employees` as an array of subdocuments.

  * Let's create the model and instances of the model to see how this will look! Notice that the `managerData` is a single object, but the `employeeData` is an array of objects.

    ```js
    const Department = mongoose.model('Department', departmentSchema);

    const managerData = { name: 'Taylor', salary: 80000 };
    const employeeData = [
      { name: 'Ann', salary: 40000 },
      { name: 'Liu', salary: 50000 },
    ];

    Department.create(
      { name: 'Shoes', manager: managerData, employees: employeeData },
      (err, data) => {
        if (err) {
          console.error(err);
        }
        console.log(data);
      }
    );
    ```

* In the command line, run `npm install` and `npm start` to demonstrate the following:

  * When we run the application, we see the `Shoes` department returned with one manager and an array of two employees.

    ```js
    {
      _id: 611d528eed231427e2d386e3,
      name: 'Shoes',
      manager: { _id: 611d528eed231427e2d386e4, name: 'Taylor', salary: 80000 },
      employees: [
        { _id: 611d528eed231427e2d386e5, name: 'Ann', salary: 40000 },
        { _id: 611d528eed231427e2d386e6, name: 'Liu', salary: 50000 }
      ],
      lastAccessed: 2021-08-18T18:33:50.036Z,
      __v: 0
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We need to create the schema for the child and parent documents.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `18-Stu_Subdocuments/README.md`.

### 17. Student Do: Subdocuments (15 min)

* Direct students to the activity instructions found in `18-Stu_Subdocuments/README.md`, which are also shown below.

* Break your students into pairs who will work together on this activity.

  ```md
  # 📖 Implement Subdocuments in a Mongoose Schema

  Work with a partner to implement the following user story:

  * As a developer, I want to nest a child document in a parent document.

  ## Acceptance Criteria

  * It is done when I define a new schema named `bookSchema` for the subdocument.

  * It is done when the `bookSchema` has two properties: `title` and `price`.

  * It is done when the `books` subdocument is nested in the parent document.

  * It is done when I have created a model named `Library`.

  * It is done when I have created an array of three books using the `bookSchema`.

  * It is done when I have created a new instance of the `Library` model which includes the `books` subdocument.

  * It is done when I test the `GET` route in Insomnia and the subdocuments are nested in the parent document.

  ## 📝 Notes

  Refer to the documentation:

  [Mongoose docs on subdocuments](https://mongoosejs.com/docs/subdocs.html)

  ## 💡 Hints

  * When is subdocument data saved?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What method can we use to remove a subdocument?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 18. Instructor Review: Subdocuments (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with subdocuments? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `bookSchema`

  * ✔️ `librarySchema`

  * ✔️ `Library` model

  * ✔️ `Books` instance

* Open `18-Stu_Subdocuments/Solved/models/Library.js` in your IDE and explain the following:

  * 🔑 First, we define the subdocument schema, which in our case is `bookSchema`.

    ```js
    const bookSchema = new mongoose.Schema({
      title: { type: String, required: true },
      price: Number,
    });
    ```

  * 🔑 Next, we nest the subdocument `books` in the parent document as an array.

    ```js
    const librarySchema = new mongoose.Schema({
      name: { type: String, required: true },
      books: [bookSchema],
      lastAccessed: { type: Date, default: Date.now },
    });
    ```

  * 🔑 Then, we create a model named `Library` using the `librarySchema`.

    ```js
    const Library = mongoose.model('Library', librarySchema);
    ```

  * 🔑 Finally, we create the array of books that will use the `bookSchema` when we create a new instance of `Library`. You can use any titles of books and prices.

    ```js
    const bookData = [
      { title: 'Diary of Anne Frank', price: 10 },
      { title: 'One Thousand Years of Solitude', price: 20 },
      { title: 'History of Hogwarts', price: 5 },
    ];

    Library.create({ name: 'Books', books: bookData }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
    ```

* In the command line, run `npm install` and `npm start` to demonstrate the following:

  * When we start the application, we see the new `Books` instance returned that has an array of `books` nested within it, similar to the following:

    ```js
    {
      _id: 611d5dbd896f452ac77fec21,
      name: 'Books',
      books: [
        {
          _id: 611d5dbd896f452ac77fec22,
          title: 'Diary of Anne Frank',
          price: 10
        },
        {
          _id: 611d5dbd896f452ac77fec23,
          title: 'One Thousand Years of Solitude',
          price: 20
        },
        {
          _id: 611d5dbd896f452ac77fec24,
          title: 'History of Hogwarts',
          price: 5
        }
      ],
      lastAccessed: 2021-08-18T19:21:33.017Z,
      __v: 0
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ When should we define the subdocument's schema?

  * 🙋 The subdocument schema must be defined before the parent document's schema.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Mongoose docs on subdocuments](https://mongoosejs.com/docs/subdocs.html), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 19. Instructor Demo: Aggregates (5 min)

* Open `19-Ins_Aggregates/server.js` in your IDE and demonstrate the following:

  * 🔑 The `aggregate()` function is how you would use MongoDB's aggregation framework with Mongoose. Remember, Mongoose is simply a "wrapper", so any aggregation query that works with MongoDB will work in Mongoose.

  * 🔑 An aggregation framework is an array of stages. Each stage transforms the document before passing it on to the next stage. This array of stages that you pass into the `aggregate()` function is called the **aggregation pipeline**.

  * 🔑 One stage that is used commonly is the `$match` stage. This is the stage where we can filter out documents that don't match the given `filter` parameter.

  * Let's say that we have a collection of various grocery items and prices. We want to find the sum, average, maximum price, and minimum price of these items. But we only want to query items whose prices are less than or equal to 5.

  * 🔑 In order to filter out the items that are not less than or equal to 5, we would use the `$match` stage.

    ```js
    app.get('/sum-price', (req, res) => {
      Item.aggregate(
        [
          // Where prices are less than or equal to 5
          { $match: { price: { $lte: 5 } } },
    ```

  * 🔑 Another stage that is often used is the `$group` stage. This stage is similar to a `reduce()` function. We can group data from multiple documents by a specified expression and combine them into one result.

  * Let's take a look at our example again. After we filter out the items whose prices are not less than or equal to 5, we can use the `$group` stage to run different aggregation operators, like `$sum`, `$avg`, `$max`, and `$min` on the filtered items.

    ```js
    {
      $group: {
        // Group by null (no additional grouping by id)
        _id: null,
        // Sum of all prices
        sum_price: { $sum: '$price' },
        // Average of all prices
        avg_price: { $avg: '$price' },
        // Maximum price
        max_price: { $max: '$price' },
        // Minimum price
        min_price: { $min: '$price' },
      },
    },
    ```

* In the command line, run `npm install` and `npm start` to start the application. Open Insomnia to demonstrate the following:

  * Let's make a GET request to `localhost:3001/sum-price`. We should get the sum of the prices, an average price, the maximum price, and the minimum price of the items whose prices are less than or equal to 5, similar to the following:

    ```json
    [
      {
        "_id": null,
        "sum_price": 23,
        "avg_price": 2.875,
        "max_price": 5,
        "min_price": 1
      }
    ]
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What two stages do we use to filter and group our aggregate results?

  * 🙋 We use the `$match` stage to filter out documents and the `$group` stage to group the results of the aggregation performed into one document.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `20-Stu_Aggregates/README.md`.

### 20. Student Do: Aggregates (15 min)

* Direct students to the activity instructions found in `20-Stu_Aggregates/README.md`, which are also shown below.

* Break your students into pairs who will work together on this activity.

  ```md
  # 🐛 GET Route Returns Wrong Summary Price Data

  Work with a partner to resolve the following issue:

  * As a user, I should be able to see summary statistics for the prices of books in stock.

  ## Expected Behavior

  When I test the `sum-price` GET route in Insomnia, summary statistics for only books that are in stock should be returned.

  ## Actual Behavior

  When I test the `sum-price` GET route in Insomnia, summary statistics for all books are returned.

  ## Steps to Reproduce the Problem

  Follow these steps to reproduce the problem:

  1. Run `npm install` and `npm start` to start the app.

  2. Navigate to Insomnia on your local machine and test the `sum-price` GET route.

  3. The summary data for all books are being returned. To see a list of all books for comparison, use the `all-books` GET route.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![Returned data showing only in-stock summary books.](./assets/image_1.png)

  ---

  ## 💡 Hints

  What MongoDB aggregate pipeline stage do you use to filter data?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Aggregate middleware is one of four types of Mongoose middleware. What are the other three and how are they used?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 21. Instructor Review: Aggregates (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with aggregates? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `$match`

* Open `20-Stu_Aggregates/Solved/server.js` in your IDE and explain the following:

  * We are given a collection of books, but we only want the stats on the books that are in stock. We need to filter out the books that are not in stock.

  * 🔑 In order to do that, we need to use the `$match` stage before the `$group` stage in the aggregate pipeline.

    ```js
    app.get('/sum-price', (req, res) => {
      Book.aggregate(
        [
          // Where book is in stock
          { $match: { inStock: true } },
          {
            $group: {
              _id: null,
              sum_price: { $sum: '$price' },
              avg_price: { $avg: '$price' },
              max_price: { $max: '$price' },
              min_price: { $min: '$price' },
            },
          },
        ],
        (err, result) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).json(result);
          }
        }
      );
    });
    ```

* In the command line, run `npm install` and `npm start` to start the application. Open Insomnia and demonstrate the following:

  * When we make a GET request to `localhost:3001/all-books`, we get a list of all of the books. Notice that there are some books whose `inStock` property is set to `false`. We want to filter out those books.

  * When we make a GET request to `localhost:3001/sum-price`, we get a summary of the prices for the books that are in stock, similar to the following:

    ```json
    [
      {
        "_id": null,
        "sum_price": 36,
        "avg_price": 9,
        "max_price": 20,
        "min_price": 4
      }
    ]
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between aggregation pipeline stages and aggregation pipeline operators?

  * 🙋 Aggregation pipeline stages appear in an array in the `aggregate()` function and documents pass through the stages in sequence. Aggregation pipeline operators are used in the pipeline stages to construct expressions. The most common ones are arithmetic expression operators that perform math operations on numbers. In our activity, we used accumulator operators like `$avg`, `$max`, `$min`, and `$sum`.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Mongoose docs on aggregate](https://mongoosejs.com/docs/api/aggregate.html), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 22. FLEX (30 mins)

* This time can be utilized for reviewing key topics learned so far in this module.

* Ask students if they have any questions about IndexedDB or anything else covered so far in this module.

* Answer any questions before ending the class.

### 23. END (0 mins)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
