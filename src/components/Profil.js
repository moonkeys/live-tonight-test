import { Parallax } from "react-parallax";
import React, { Component } from "react";
import { Button, Image, Item, Rating } from "semantic-ui-react";
import imageParallax from "../pictures/artiste_parallax.jpg";

export default class Profil extends Component {
  render() {
    const imageProfil =
      "https://res.cloudinary.com/dcyafbpoh/image/upload/c_fill,f_auto,g_face,h_200,q_auto,w_250/kg4hu0apoumxozfjw7mh";

    return (
      <div>
        {/* <Parallax bgImage={imageParallax} strength={500}>
          <div style={{ height: 1 }}>
           
          </div>
        </Parallax> */}
        {/* <Image src={imageParallax} size="big" wrapped centered /> */}
        <div>
          <Item.Group>
            <Item>
              <Item.Image size="medium" src={imageProfil}  />

              <Item.Content verticalAlign="middle">
                <Item.Header as="a">
                  Dyslexic Swing & The Silent Brocoli
                </Item.Header>
                <Item.Meta>Jazz / Guinguette / Swing</Item.Meta>
                <Item.Description>
                <Rating icon='star' defaultRating={5} maxRating={5} /> (9 avis)
                </Item.Description>
                <Item.Extra>à partir de 780 €</Item.Extra>
                <Item.Extra> <Button basic >Réserver</Button></Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>{" "}
        </div>
      </div>
    );
  }
}
