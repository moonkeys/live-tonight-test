import { Parallax } from "react-parallax";
import React, { Component } from "react";
import { Button, Image, Item, Rating } from "semantic-ui-react";
export default class Profil extends Component {
  render() {
    const imageProfil =
      "https://res.cloudinary.com/dcyafbpoh/image/upload/c_fill,f_auto,g_face,h_200,q_auto,w_250/kg4hu0apoumxozfjw7mh";
    const imageParallax =
      "https://www.musilink.com/uploads/bands/442/pictures/4745/show.jpg";
    return (
      <div
        style={{
          // backgroundImage: `url(${imageParallax})`,
          maxWidth: "100%",
          height: "auto",
          padding: "0px !important",
        }}
      >
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={imageParallax}
          bgImageAlt="the dog"
          strength={-200}
        >
          Blur transition from min to max
          <div style={{ padding: "0px 5vh", height: "500px" }} />
        </Parallax>
        {/* <Image src={imageParallax} size="medium" wrapped centered /> */}
        <div>
          <Item.Group>
            <Item>
              <Item.Image size="medium" src={imageProfil} />

              <Item.Content verticalAlign="middle">
                <Item.Header as="a">
                  <div className="header">
                    Dyslexic Swing & The Silent Brocoli
                  </div>
                </Item.Header>
                <Item.Meta>Jazz / Guinguette / Swing</Item.Meta>
                <Item.Description>
                  <Rating icon="star" defaultRating={5} maxRating={5} /> (9
                  avis)
                </Item.Description>
                <Item.Extra>à partir de 780 €</Item.Extra>
                <Item.Extra>
                  {" "}
                  <Button basic>Réserver</Button>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>{" "}
        </div>
      </div>
    );
  }
}
