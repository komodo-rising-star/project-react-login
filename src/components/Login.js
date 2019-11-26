import React, { Component } from "react";

export default class Login extends Component {
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
          <button>Submit</button>
          <button>Cancel</button>
        </form>
      </div>
    );
  }
}
