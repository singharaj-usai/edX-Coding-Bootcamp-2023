import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles = {
  header: {
    backgroundColor: 'lightblue',
    padding: '20px',
    textAlign: 'center',
  },
  h1: {
    fontSize: '36px',
    color: 'white',
    textShadow: '2px 2px 4px #000000',
  },
};
function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header className="header">
      <h1 style={styles.h1}>Welcome</h1>
    </header>
  );
}

export default Header;
