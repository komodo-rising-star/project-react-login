import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu position="right">
          <Menu.Item name="Komodo Rising Star" />
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="log in"
              active={activeItem === "log in"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="sign up"
              active={activeItem === "sign up"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
