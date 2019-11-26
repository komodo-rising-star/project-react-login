import React, { Component } from "react";
import axios from "axios";

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      email: "",
      password: ""
    };
  }

  submitPost = event => {
    event.preventDefault();

    let tanggal = Date.now().toLocaleDateString;

    const data = {
      mobileNumber: this.state.mobileNumber,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dateOfBirth: this.state.dateOfBirth,
      gender: this.state.gender,
      email: this.state.email,
      password: this.state.password
    };
    console.log(data);
    axios
      .post(`https://cobacoba-hayepe.herokuapp.com/user/register`, data, {
        headers: { "content-type": "application/json; charset=UTF-8" }
      })
      .then(result => {
        console.log(result);
        this.setState({
          mobileNumber: "",
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          gender: "",
          email: "",
          password: ""
        });
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });

    // console.log(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log(event.target);
    this.setState({
      [name]: value
    });
  };

  showPassword() {
    const x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  render() {
    const {
      firstName,
      lastName,
      gender,
      email,
      password,
      mobileNumber,
      dateOfBirth
    } = this.state;

    return (
      <div>
        <label htmlFor=""> First Name </label>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor=""> Last Name </label>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor=""> Date of Birth </label>
        <input
          type="date"
          placeholder="date "
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor=""> Mobile Number </label>
        <input
          type="text"
          placeholder="Mobile Number"
          name="mobileNumber"
          value={mobileNumber}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor=""> Gender </label>
        <input
          type="text"
          placeholder="Gender"
          name="gender"
          value={gender}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor=""> E- Mail </label>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor=""> Password </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <input type="checkbox" onClick={this.showPassword} /> Show Password
        <br />
        <button onClick={this.submitPost}>Submit</button>
        <button>Cancel</button>
      </div>
    );
  }
}
