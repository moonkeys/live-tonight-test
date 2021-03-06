import React, { Component } from "react";
import { Header, Divider, Grid, Icon } from "semantic-ui-react";
import { StyledHeader } from "./StyledComponent/StyledHeader";

export default class Prestations extends Component {
  render() {
    const colorStyle = { color: "#3CE295" };
    return (
      <div style={{ padding: "2vh 0vh" }}>
        <StyledHeader as="h1" dividing>
          Cagnotte Livetonight{" "}
        </StyledHeader>{" "}
        <Divider clearing />
        <Grid>
          <Grid.Row
            textAlign="center"
            verticalAlign="middle"
            columns="equal"
            centered
          >
            <Grid.Column width="2">
              <Icon
                size="massive"
                name="birthday cake"
                style={colorStyle}
              ></Icon>
            </Grid.Column>
            <Grid.Column width="5">
              <Header style={colorStyle}>
                Dyslexic Swing & The Silent Brocoli
              </Header>
              <p>
                Solliciter vos invités via un "chapeau digital" pour profiter
                d'une prestation musicale lors de votre événement. <br></br>
                Le prix final sera fixé après discussion avec le musicien.
              </p>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Header>1.</Header>Contactez et échangez avec le musicien.
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Header>2.</Header>Partagez le lien de la cagnotte à vos invités.{" "}
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Header>3.</Header>Clôturez la cagnotte et profitez de votre
              soirée en musique !
            </Grid.Column>
            <Grid.Column textAlign="center">
              {" "}
              Intéressé ? Contactez-nous à l'adresse suivante:
              booking@livetonight.fr
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
