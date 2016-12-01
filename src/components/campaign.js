import React from 'react';
import { Component } from 'react';
import Header from './header';

class Campaign extends Component {

  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    console.log(this.state.username);
  }

  render() {
    return (
      <div>
        <Header></Header>
        <h1>Your Campaign!</h1>
      </div>
    )
  }
}

module.exports = Campaign;
