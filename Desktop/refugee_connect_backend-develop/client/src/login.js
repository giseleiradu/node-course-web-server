import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class Signin extends Component {
  state ={
    user: {
        uname:" ",
        password:""
        
    }
  }

  submition =  (event) => {


    axios.post('http://localhost:3002/api/v1/auth/signin', {
       
        uname:this.refs.uname.value,
      
        password:this.refs.password.value
       
    })
      .then((req, res) => {
        
        // res.redirect('http://localhost:3002/api/v1/auth/signin');
        return req.user;
      })
      .then(user => this.setState({ user }));
  }
  render() {
    console.log(this.state.user);
    return (
      <div className="App">
      <a href="/signin"> Sign In</a>
      <h1> Signin</h1>
      <div>
         <form onSubmit={this.submition}>
         
          <label>Username</label>
          <input ref="uname"/>
          <br />
          
          <label>Password</label>
          <input ref="password" type = "password"/>
          <br />
          
      <button value="submit">Submit</button>
      </form>
      </div>
      </div>
    );
   
  }
}

export default Signin;

// add(data){
//     const headers = new Headers();
//     headers.append("Content_Type", "application/json");
    // const request = new Request()
// }