import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import Logo from "../image/star.jpeg";

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,

} from "semantic-ui-react";
class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      email: "",
      password: "",
      errorStatus: null
    };
  }

  submitPost = event => {
    event.preventDefault();
    // this.props.history.push("/");

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
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err.message);
        // alert(err.message);
        if (err.response.status === 422) {
          console.log("Data Duplicate detected!");
          this.setState({
            errorStatus: 422
          });
        }
        if (err.response.status === 500) {
          console.log("Server Side Error!");
          this.setState({
            errorStatus: 500
          });
        }
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
    console.log(this.props);
    const {
      firstName,
      lastName,
      gender,
      email,
      password,
      mobileNumber,
      dateOfBirth,
      errorStatus
    } = this.state;

    if (errorStatus !== null) {
      return <div>{errorStatus}</div>;
    }

    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ width: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src={Logo} /> Registration Form
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                icon="user"
                type="text"
                placeholder="First Name"
                name="firstName"
                iconPosition="left"
                value={firstName}
                onChange={this.handleChange}
              />
              <Form.Input
                icon="user"
                type="text"
                placeholder="Last Name"
                name="lastName"
                iconPosition="left"
                value={lastName}
                onChange={this.handleChange}
              />
              <Form.Input
                icon="calendar alternate outline"
                type="date"
                placeholder="date "
                name="dateOfBirth"
                iconPosition="left"
                value={dateOfBirth}
                onChange={this.handleChange}
              />
              <Form.Input
                icon="phone"
                type="tel"
                placeholder="Mobile Number"
                name="mobileNumber"
                iconPosition="left"
                value={mobileNumber}
                onChange={this.handleChange}
              />
              <Form.Input
                icon="user"
                type="text"
                placeholder="Gender"
                name="gender"
                iconPosition="left"
                value={gender}
                onChange={this.handleChange}
              />
              <Form.Input
                icon="mail"
                type="email"
                placeholder="email"
                name="email"
                iconPosition="left"
                value={email}
                onChange={this.handleChange}
              />
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
              <div class="ui checkbox">
                <input type="checkbox" onClick={this.showPassword} />
                <label>Show Password</label>
              </div>
            </Segment>
            <Button color="teal" fluid size="large" onClick={this.submitPost}>
              Register
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default withRouter(Registration);
