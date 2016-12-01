import React from 'react';
import axios from 'axios';
import { Component } from 'react';
import Header from './header';

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
      console.log(response);

      sessionStorage.setItem('token', response.data.session);

      this.setState({
        "username": response.data.data.username,
        "bio": response.data.data.bio,
        "downloads": response.data.data.downloads,
        "first_name": response.data.data.first_name,
        "last_name": response.data.data.first_name,
        "profile": response.data.data.links.html,
        "location": response.data.data.location,
        "portfolio_url": response.data.data.portfolio_url,
        "name": response.data.data.name,
        "total_likes": response.data.data.total_likes,
        "profile_image": response.data.data.profile_image.large
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <Header></Header>
        <h1>You are authenticated</h1>
        <h2>Welcome { this.state.name }!</h2>
        <span>{ this.state.username }</span>
        <img src={ this.state.profile_image } />
        <a href={ this.state.profile }>profile</a>

        <a href="/campaign">Start a campaign</a>
      </div>
    )
  }
}

module.exports = Auth;
