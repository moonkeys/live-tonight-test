import React, { Component } from "react";
import { Menu, Button } from "semantic-ui-react";

export default class MenuExampleStackable extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item
          name="features"
          active={activeItem === "features"}
          onClick={this.handleItemClick}
        >
          LIVE TONIGHT
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="contact"
            active={activeItem === "contact"}
            onClick={this.handleItemClick}
          >
            <Button content="NOUS CONTACTER" basic />
          </Menu.Item>

          <Menu.Item
            name="devis"
            active={activeItem === "devis"}
            onClick={this.handleItemClick}
          >
            DEVIS
          </Menu.Item>

          <Menu.Item
            name="sign-in"
            active={activeItem === "sign-in"}
            onClick={this.handleItemClick}
          >
            <Button content="CONNEXION//INSCRIPTION" primary />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
