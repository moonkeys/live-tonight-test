import { Parallax } from "react-parallax";
import React, { Component } from "react";
import InfosPratiques from "./InfosPratiques";
import { Header, Segment, Grid, Embed, Image } from "semantic-ui-react";

export default class Presentation extends Component {
  render() {
    return (
      <div>
        <Header as="h1" attached="top" dividing>
          Présentation
        </Header>{" "}
        <Grid columns={2} divided>
          <Grid.Column>
            <Segment attached>
              <p>
                {" "}
                Créé en 2015 dans l'esprit du Hot Club de France, Dyslexic Swing
                & The Silent Brocoli re-dynamise le jazz manouche et le swing
                américain des jump bands avec une jubilation contagieuse et des
                références solides : le swing de Django et le swag de Grappelli
                !{" "}
              </p>
              <p>
                {" "}
                Egalement chanteurs, ils vous entrainent dans l'euphorie des
                années 30-50 en intégrant à leur répertoire les succès
                indémodables des Andrews Sisters, The Chordettes, Cats & The
                Fiddle, etc.
              </p>{" "}
              <p>
                {" "}
                Dyslexic Swing & The Silent Brocoli dispose du materiel
                nécéssaire pour sonoriser les espaces de tout type et se déplace
                partout en France pour animer de nombreux événements :
                festivals, concerts privés, cocktails. Benjamin Ramòn (guitare,
                chant), Noémie Le Borgne (violon, chant), Jean Barthomier
                (guitare, chant), Elaine Beaumont (contrebasse, chant).{" "}
              </p>
              <Grid columns="three" divided>
                <Grid.Row>
                  <Grid.Column>
                    <Embed
                      id="f2PA1grSHGg"
                      placeholder="https://img.youtube.com/vi/f2PA1grSHGg/mqdefault.jpg"
                      source="youtube"
                    ></Embed>
                    When Hollywood Goes Black
                  </Grid.Column>
                  <Grid.Column>
                    <Embed
                      id="Tr8OA-PJfe8"
                      placeholder="https://img.youtube.com/vi/Tr8OA-PJfe8/mqdefault.jpg"
                      source="youtube"
                    ></Embed>
                    Teaser EP / Walkin' One and Only
                  </Grid.Column>
                  <Grid.Column>
                    <Embed
                      id="W7NcC0CWl6I"
                      placeholder="https://img.youtube.com/vi/W7NcC0CWl6I/mqdefault.jpg"
                      source="youtube"
                    ></Embed>
                    Deed I Do
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Grid.Column>
              <InfosPratiques />
            </Grid.Column>

            <Grid.Column>
              <Image
                src="https://res.cloudinary.com/dcyafbpoh/image/upload/v1602770254/gif-services2.gif"
                size="medium"
              ></Image>
            </Grid.Column>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
