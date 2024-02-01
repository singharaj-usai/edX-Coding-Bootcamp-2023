# Create the dashboard.html File

Inside the `templates` folder, create a new HTML file called `dashboard.html`. Copy and paste the following HTML into your newly created `dashboard.html` file:

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org"
      xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout"
      layout:decorate="~{layout}">
<head>
    <title>Dashboard</title>
</head>

<body>

<div layout:fragment="content">

  <div th:if="${notice}" class="flash-message">
    <h3>[[${notice}]]</h3>
  </div>

  <section>
    <h2>Create New Post</h2>

    <form action="#" th:action="@{/posts}" th:object="${post}" method="post" class="new-post-form">
      <div>
        <label for="post-title">Title</label>
        <input type="text" th:field="*{title}" id="post-title" name="post-title"/>
      </div>
      <div>
        <label for="post-url">Link</label>
        <input type="text" th:field="*{postUrl}" id="post-url" name="post-url"/>
      </div>
      <button type="submit" class="btn">Create</button>
    </form>
  </section>

  <section th:if="${postList.size() > 0}">
    <h2>Your Posts</h2>
    <ol>
      <li th:each="post : ${postList}">
        <div th:insert="fragments/post-fragment :: post-fragment"></div>
        <a th:href="@{/dashboard/edit/{id}(id=${post.id})}" class="edit-link">Edit post</a>
      </li>
    </ol>
  </section>

</div>


</body>
</html>
```

All of the Thymeleaf constructs used here should now look familiar to you. But if any specific Thymeleaf elements are still giving you trouble, it wouldn't hurt to review this code block.

---
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.