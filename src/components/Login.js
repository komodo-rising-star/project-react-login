import React, { Component } from "react";

export default class Login extends Component {
  //   axios.post(`https://cobacoba-hayepe.herokuapp.com/user/login`, {
  //     {
  // 	email: your_email,
  // 	password: your_password
  // }
  // })
  //       .then(result => console.log(result))
  //       .catch(error => console.log(error));
  //   };
  submitPost = event => {
    event.preventDefault();
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
          <button>Submit</button>
          <button>Cancel</button>
        </form>
      </div>
    );
  }
}
