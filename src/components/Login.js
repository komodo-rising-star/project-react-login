import React, { Component } from "react";
import axios from "axios";
export default class Login extends Component {
  submitPost = event => {
    event.preventDefault();
    axios
      .post(`https://cobacoba-hayepe.herokuapp.com/user/login`, {
        email: "babang@gmail.com",
        password: "password"
      })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  logOut = event => {
    event.preventDefault();
    axios
      .get(`https://cobacoba-hayepe.herokuapp.com/user/logout`)
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor=""> E- Mail </label>
          <input type="text" placeholder="email" />
          <br />
          <label htmlFor=""> Password </label>
          <input type="text" placeholder="password" />
          <br />
          <button onClick={this.submitPost}>Submit</button>
          <button onClick={this.logOut}>Cancel</button>
        </form>
      </div>
    );
  }
}
