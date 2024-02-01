import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// The code defines a React functional component called NavTabs, which takes in an object props as its argument.
// The object has two key-value pairs: currentPage and handlePageChange.
// The component returns a set of unordered list elements (a navbar) that are used to navigate between different pages.
// Each list item is an anchor element that is associated with a particular page.
// The currentPage prop is used to set the class of the active link to "nav-link active", while all other links have the class "nav-link".
// This allows the user to easily see which page they are currently on.
// To extract the key-value pairs from the props object, the component uses destructuring syntax in the function parameter list, like this:
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="course-content/20-React/01-Activities/Day-3/24-Stu_Conditional-Rendering/Unsolved/src/components/NavTabs#home"
          onClick={() => handlePageChange('Home')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          //* This syntax allows us to extract only the properties we are interested in (in this case, currentPage and handlePageChange) from the props object, and use them directly in our component code.
          // The onClick event handler for each anchor element calls the handlePageChange function, passing in the name of the page that was clicked.
          // This function is defined outside of the component and is responsible for updating the currentPage state variable with the new page name.
          // The ternary operator used in the className attribute for each anchor element is a conditional operator.
          // It checks whether the currentPage prop is equal to the name of the current link (e.g. 'Home', 'About', etc.), and if so, sets the class to "nav-link active".
          // Otherwise, it sets the class to "nav-link".
          // This allows the component to display the active link differently from the other links.

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="course-content/20-React/01-Activities/Day-3/24-Stu_Conditional-Rendering/Unsolved/src/components/NavTabs#about"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="course-content/20-React/01-Activities/Day-3/24-Stu_Conditional-Rendering/Unsolved/src/components/NavTabs#blog"
          onClick={() => handlePageChange('Blog')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="course-content/20-React/01-Activities/Day-3/24-Stu_Conditional-Rendering/Unsolved/src/components/NavTabs#contact"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
