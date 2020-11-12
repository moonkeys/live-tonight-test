import React, { Component } from "react";
import { Button, Item, Rating, Icon } from "semantic-ui-react";
    const imageProfil =
      "https://res.cloudinary.com/dcyafbpoh/image/upload/c_fill,f_auto,g_face,h_200,q_auto,w_250/kg4hu0apoumxozfjw7mh";
    const imageParallax =
      "https://scontent.fcdg1-1.fna.fbcdn.net/v/t31.0-8/24131947_515102065532136_396875774037290652_o.jpg?_nc_cat=103&ccb=2&_nc_sid=cdbe9c&_nc_ohc=wQ4JEK1HpS0AX9ADsvG&_nc_ht=scontent.fcdg1-1.fna&oh=0c892e90a97eb19ef2b789a03b58c2a0&oe=5FD1476A";

    const reseauxSociaux = {
      facebook: "https://www.facebook.com/dyslexicswing/",
      siteOfficiel: "https://www.dyslexicswing.com/",
      youtube: "https://www.youtube.com/channel/UCAC8FhMKDgpGFt2R1paIyyA",
    };
export default class Profil extends Component {
  render() {

    return (
      <div
        style={{
          height: " 360px",
          zIndex: "1",
          backgroundSize: "cover !important",
          backgroundPosition: "center",
          backgroundImage: `linear-gradient(-225deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 50%), url(${imageParallax})`,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "15vh",
            top: "25vh",
            zIndex: "1",
          }}
        >
          <Item.Group>
            <Item>
              <Item.Image
                size="medium"
                src={imageProfil}
                style={{ border: " 1vh solid white" }}
              />

              <Item.Content verticalAlign="top" style={{ color: "white" }}>
                <div>
                  <Item.Header as="h1" style={{ color: "white" }}>
                    Dyslexic Swing & The Silent Brocoli
                  </Item.Header>
                  <Item.Meta style={{ color: "white" }}>
                    Jazz / Guinguette / Swing {"  "}
                    <a href={reseauxSociaux.facebook} target="_blank">
                      {" "}
                      <Icon link color="blue" name="facebook" />{" "}
                    </a>
                    <a href={reseauxSociaux.youtube} target="_blank">
                      {" "}
                      <Icon link color="red" name="youtube" />{" "}
                    </a>
                    <a href={reseauxSociaux.siteOfficiel}>
                      {" "}
                      <Icon
                        link
                        color="green"
                        name="globe"
                        target="_blank"
                      />{" "}
                    </a>
                  </Item.Meta>
                  <Item.Description>
                    <Rating icon="star" defaultRating={5} maxRating={5} /> (9
                    avis)
                  </Item.Description>
                  <Item.Extra style={{ color: "white" }}>
                    à partir de 780 €
                  </Item.Extra>
                  <Item.Extra>
                    {" "}
                    <Button size="medium" basic inverted color="grey">
                      Réserver
                    </Button>
                  </Item.Extra>
                </div>
              </Item.Content>
            </Item>
          </Item.Group>{" "}
        </div>
      </div>
    );
  }
}
