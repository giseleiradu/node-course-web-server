import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class Profile extends Component {
  state ={
    courses: []
  }
  componentDidMount() {

    axios.get('http://localhost:3002/api/v1/courses/')
      .then(res => {
        this.setState({ users: res.data.courses })
        return res.data.courses;
      })
      .then(courses => this.setState({ courses }));
  }
  render() {
    console.log(this.state.courses);
    return (
      <div className="App">
      <h1>Available Courses</h1>
      { this.state.courses.length > 0  ? 
      this.state.courses.map(course=> <div> <div key={course.id} >{course.courseName} </div>
        <div>{course.coursecredits} </div> </div>)
      : ''}
      </div>
    );
  }
}

export default Profile;
