import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class Signup extends Component {
  state ={
    user: {
        names: " ",
        uname:" ",
        role:" ",
        password:"",
        email:"",
        phone: "",
        location:""
    }
  }

  submition =  (event) => {


    axios.post('http://localhost:3002/api/v1/auth/signup', {
        names:this.refs.names.value,
        uname:this.refs.uname.value,
        role:this.refs.role.value,
        password:this.refs.password.value,
        email:this.refs.email.value,
        phone:this.refs.phone.value,
        location:this.refs.location.value
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
      <a href="http://localhost:3002/api/v1/auth/signin"> Sign In</a>
      <h1> Signup</h1>
      <div>
         <form onSubmit={this.submition}>
          <label>ID</label>
          <input ref="id" />
          <br/><label>Names</label>
          <input ref="names"/>
          <br />
          <label>Username</label>
          <input ref="uname"/>
          <br />
          <label>Role</label>
          <input ref="role"/>
          <br />
          <label>Password</label>
          <input ref="password" type = "password"/>
          <br />
          <label>Confirm</label>
          <input type="password" ref = "confirm" />
          <br/>
          <label>Email</label>
          <input ref="email"/>
          <br />
          <label>Phone</label>
          <input ref="phone"/>
          <br />
          <label>Location</label>
          <input ref="location"/>
          <br />
          
      <button value="submit">Submit</button>
      </form>
      </div>
      </div>
    );
   
  }
}

export default Signup;

// add(data){
//     const headers = new Headers();
//     headers.append("Content_Type", "application/json");
    // const request = new Request()
// }