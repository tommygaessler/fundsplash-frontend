import React from 'react';
import axios from 'axios';
import { Component } from 'react';

class Auth extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    var code = this.props.location.query.code;

    axios.post('http://localhost:3000/auth', {
      code
    })
    .then((response) => {
      console.log(response.data);
      this.setState({
        "authResponse":response.data.username
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <h1>You are authenticated</h1>
        <span>{this.state.authResponse}</span>
      </div>
    )
  }
}

module.exports = Auth;
