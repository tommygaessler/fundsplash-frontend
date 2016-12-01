import React from 'react';
import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>This is the header</h1>
          <a href="/">Home</a>
          <a href="/campaign">Campaign</a>
        </header>
      </div>
    )
  }
}

module.exports = Header;
