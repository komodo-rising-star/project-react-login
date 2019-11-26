import React, { Component } from "react";
import axios from "axios";

import Logo from "../image/star.jpeg"

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react"
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
      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
     <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="teal" textAlign="center">
        <Image src={Logo}/> Registration Form
      </Header>
        <Form.Input
          icon="user"
          type="text"
          placeholder="First Name"
          name="firstName"
          iconPosition="left"
          value={firstName}
          onChange={this.handleChange}
        />
        <br />
        <Form.Input
          icon="user"
          type="text"
          placeholder="Last Name"
          name="lastName"
          iconPosition="left"
          value={lastName}
          onChange={this.handleChange}
        />
        <br />
        <Form.Input
          icon="calendar alternate outline"
          type="date"
          placeholder="date "
          name="dateOfBirth"
          iconPosition="left"
          value={dateOfBirth}
          onChange={this.handleChange}
        />
        <br />
        <Form.Input
          icon="phone"
          type="tel"
          placeholder="Mobile Number"
          name="mobileNumber"
          iconPosition="left"
          value={mobileNumber}
          onChange={this.handleChange}
        />
        <br />
        <Form.Input
          icon="user"
          type="text"
          placeholder="Gender"
          name="gender"
          iconPosition="left"
          value={gender}
          onChange={this.handleChange}
        />
        <br />
        <Form.Input
        icon="mail"
          type="email"
          placeholder="email"
          name="email"
          iconPosition="left"
          value={email}
          onChange={this.handleChange}
        />
        <br />
        <Form.Input
          icon="lock"
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          iconPosition="left"
          value={password}
          onChange={this.handleChange}
        />
        <br />
        <input type="checkbox" onClick={this.showPassword} /> Show Password
        <br />
        <button onClick={this.submitPost}>Submit</button>
        <button>Cancel</button>
        </Grid.Column>
  </Grid>
      </div>
    );
  }
}
