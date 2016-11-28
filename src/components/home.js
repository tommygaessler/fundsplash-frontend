import React from 'react';
import { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Fundsplash</h1>
        <a href="https://unsplash.com/oauth/authorize?client_id=3500c188f8334662d427d07186a12a9ed4b32e0d30c08c85487bc8a20120f107&redirect_uri=http://localhost:8080/auth&response_type=code&scope=public+write_likes+write_followers+read_user">Login with Unsplash</a>
      </div>
    )
  }
}

module.exports = Home;
