import React, { Component } from "react";
import { Icon, Divider } from "semantic-ui-react";
import { StyledHeader } from "./StyledComponent/StyledHeader";

const repertoire = [
  {
    artiste: "Shoo Shoo Baby",
    musique: "Andrew Sisters",
    link: "dyR_bhpB6LY",
  },
  {
    artiste: "Songe d’Automne",
    musique: "Archibald Joyce",
    link: "3Q_dT_yJ8ec",
  },
  {
    artiste: "Topsy ",
    musique: "Basie",
    link: "Zl7CITge_5A",
  },
  {
    artiste: "Place Du Tertre",
    musique: " Bireli Lagrene",
    link: "G5LRuBstTFY",
  },
  {
    artiste: "Ma Premiere Guitare",
    musique: "Brousolle-Distel",
    link: "kvVZGQf-AaU",
  },
];

export default class Repertoire extends Component {
  render() {
    return (
      <div style={{ padding: "2vh 0vh" }}>
        <StyledHeader as="h1" dividing>
          Aperçu du répertoire
        </StyledHeader>{" "}
        <Divider clearing />
        <div>
          {repertoire.map((musique) => (
            <div>
              {musique.artiste} - {musique.musique}{" "}
              <a
                target="_blank"
                href={"https://www.youtube.com/watch?v=" + musique.link}
              >
                {" "}
                <Icon name="youtube play" link color="red" />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
