import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import login from './login';
import signup from './signup';
import axios from 'axios';
import './App.css';

class App extends Component {
  state ={
    user: []
  }
  componentDidMount() {

    axios.get('http://localhost:3002/api/v1/auth/signup')
      .then(res => {
        this.setState({ user: res.body.users })
        return res.data.users;
      })
      .then(users => this.setState({ users }));
  }
  render() {
    console.log(this.state.users);
    return (
      <div className="App">
      <h1> Users</h1>
      { this.state.users.length > 0  ? 
      this.state.users.map(user=> <div key={user.id} >{user.uname} </div>)
      : ''}
      </div>
    );
  }
}

const Navigator = () => (
      <BrowserRouter>
        <Route path='/login' exact Component={login}/>
        <Route path='/' Component={App}/>
      </BrowserRouter>
    )

export default Navigator;
