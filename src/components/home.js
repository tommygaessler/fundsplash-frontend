import React from 'react';
import { Component } from 'react';
import Header from './header';

class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <h1>Fundsplash</h1>
        <a href="https://unsplash.com/oauth/authorize?client_id=2c9aa4160523a0848dc028d33ed50635abaa5d8a5f360a58d5760d8ebdedfac6&redirect_uri=http://localhost:8080/auth&response_type=code&scope=public+write_likes+write_followers+read_user">Login with Unsplash</a>
      </div>
    )
  }
}

module.exports = Home;
