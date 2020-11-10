import React, { Component } from "react";
import { Menu, Button, Popup, Header } from "semantic-ui-react";

export default class MenuExampleStackable extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fixed="top" stackable>
        <Menu.Item header>
          {/* <p style={{color:"#3CE295"}}>LIVE </p> TONIGHT */}
          <Header as="h1"><a style={{color:"#3CE295"}}>LIVE</a>TONIGHT </Header>
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item name="contact">
            <Popup
              content={
                <div>
                  <p> Vous cherchez des musiciens pour votre événement ?</p>
                  <p>Appelez-nous au</p>
                  <p>
                    <b>06 69 78 09 98</b>
                  </p>
                  <p>
                    {" "}
                    ou consultez notre{" "}
                    <a href="https://au-secours.livetonight.fr/">
                      centre d'aide
                    </a>
                  </p>
                </div>
              }
              on="click"
              pinned
              position="bottom center"
              trigger={<Button content="Nous contacter" />}
            />
          </Menu.Item>

          <Menu.Item
            name="devis"
            link="https://www.livetonight.fr/demande-de-devis/groupe-musique-dj"
          >
            DEVIS{" "}
          </Menu.Item>

          <Menu.Item name="sign-in">
            <Button content="CONNEXION//INSCRIPTION" color="blue" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
