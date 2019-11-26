import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import axios from "axios";
import logo from "../image/star.jpeg";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null,
      isLogin: false
    };
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submitPost = event => {
    event.preventDefault();

    const { email, password, error, isLogin } = this.state;
    axios
      .post(`https://cobacoba-hayepe.herokuapp.com/user/login`, {
        email,
        password
      })
      .then(result => {
        console.log(result);
        this.setState({ isLogin: result.data.isLoggedIn });
        alert(
          `Welcome, ${result.data.getUser.firstName} ${result.data.getUser.lastName} `
        );
        this.props.history.push("/profile");
      })
      .catch(err => {
        console.log(err);
        this.setState({ error });
        alert(err);
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
    const { email, password } = this.state;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src={logo} /> Log-in to your account
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                name="email"
                value={email}
                onChange={this.handleOnChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={this.handleOnChange}
              />
              <input type="checkbox" onClick={this.showPassword} /> Show
              Password
              <Button color="teal" fluid size="large" onClick={this.submitPost}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to="/signup">Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
export default withRouter(Login);
