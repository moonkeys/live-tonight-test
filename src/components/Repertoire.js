import React, { Component } from "react";
import { Header } from "semantic-ui-react";

export default class Repertoire extends Component {
  render() {
    const repertoire = [
      {
        artiste: "Shoo Shoo Baby",
        musique: "Andrew Sisters",
      },
      {
        artiste: "Songe d’Automne",
        musique: "Archibald Joyce",
      },
      {
        artiste: "Topsy ",
        musique: "Basie",
      },
      {
        artiste: "Place Du Tertre",
        musique: " Bireli Lagrene",
      },
      {
        artiste: "Ma Premiere Guitare",
        musique: "Brousolle-Distel",
      },
    ];
    return (
      <div>
        <Header as="h1" className="header" dividing>
          Aperçu du répertoire
        </Header>{" "}
        <div>
          {repertoire.map((musique) => (
            <p>
              {musique.artiste} - {musique.musique}{" "}
            </p>
          ))}
        </div>
      </div>
    );
  }
}
