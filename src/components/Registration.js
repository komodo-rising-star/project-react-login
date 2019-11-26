import React, { Component } from "react";

export default class Registration extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="">First Name</label>
          <input type="text" placeholder="First Name" />
          <br />
          <label htmlFor="">Last Name</label>
          <input type="text" placeholder="Last Name" />
          <br />
          <label htmlFor="">Date of Birth/label>
          <input type="text" placeholder="Date of Birth" />
          <br />
          <label htmlFor="">Gender/label>
          <input type="text" placeholder="Gender" />
          <br />
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Email" />
          <br />
          <label htmlFor="">Password</label>
          <input type="text" placeholder="Password" />
          <br />
          <button>Submit</button>
          <button>Cancel</button>
        </form>
      </div>
    );
  }
}
