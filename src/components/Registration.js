import React, { Component } from "react";
import axios from "axios";

export default class Registration extends Component {
  submitPost = event => {
    event.preventDefault();
    let tanggal = Date.now().toLocaleDateString;
    const data = {
      mobileNumber: "02188888888",
      firstName: "babang",
      lastName: "taufik",
      dateOfBirth: "1993/12/01",
      gender: "male",
      email: "babang@gmail.com",
      password: "password"
    };
    console.log(data);
    axios
      .post(`https://cobacoba-hayepe.herokuapp.com/user/register`, data, {
        headers: { "content-type": "application/json; charset=UTF-8" }
      })
      .then(result => console.log(result))
      .catch(err => console.log(err));

    // console.log(this.state);
  };

  render() {
    return (
      <div>
        <label htmlFor=""> First Name </label>
        <input type="text" placeholder="First Name" />
        <br />
        <label htmlFor=""> Last Name </label>
        <input type="text" placeholder="Last Name" />
        <br />
        <label htmlFor=""> Date of Birth </label>
        <input type="text" placeholder="Date of Birth " />
        <br />
        <label htmlFor=""> Gender </label>
        <input type="text" placeholder="Gender" />
        <br />
        <label htmlFor=""> E- Mail </label>
        <input type="text" placeholder="email" />
        <br />
        <label htmlFor=""> Password </label>
        <input type="text" placeholder="Password" />
        <br />
        <button onClick={this.submitPost}>Submit</button>
        <button>Cancel</button>
      </div>
    );
  }
}
