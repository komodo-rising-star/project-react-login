import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div>
        <Menu position="right">
          <Menu.Item name="Komodo Rising Star" />
          <Menu.Item name="home" as={Link} to="/home" />
          <Menu.Item name="profile" as={Link} to="/profile" />
          <Menu.Menu position="right">
            <Menu.Item name="log in" as={Link} to="/login" />
            <Menu.Item name="sign up" as={Link} to="/signup" />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
