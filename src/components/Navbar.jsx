import React, { Component } from 'react';

//Displaying the basic navbar with the LAB name
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
