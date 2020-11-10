import React, { Component } from "react";
import { Header, Button, Grid } from "semantic-ui-react";

export default class Prestations extends Component {
  render() {
    const prestations = [
      {
        formation: "Dyslexic Swing Duo",
        description: `Formation appréciée pour les réunions en petit comité, le DUO
    s'adapte au format de votre événement : présence musicale
    discrète ou dialogue amical avec vos invités. \r Formation :
    guitare + violon ou duo de guitaristes. \r Durée : 2 sets de 45 min
    + pause (230 € par set supplémentaire). \n Boissons et
    nourriture appréciées`,
        nbMusiciens: "2 musiciens",
        tempsPresta: "2 heures",
        prix: "à partir de 780€",
      },
      {
        formation: "Dyslexic Swing Trio",
        description: `Formation d'origine, le TRIO convient à tout type d'événements (cocktail, soirée dansante, concert public). \r
        Dans cette configuration, les musiciens, tous chanteurs, intègrent à leur répertoire les grands succès vocaux des Andrews Sisters, The Chordettes, Cats & The Fiddle, etc. \r
        Formation : Violon, 2 guitares & voix \r
        Durée : 2 sets de 45 min + pause \n Boissons et
    nourriture appréciées`,
        nbMusiciens: "3 musiciens",
        tempsPresta: "2 heures",
        prix: "à partir de 1140 €",
      },
      {
        formation: "Dyslexic Swing Quartet",
        description: `Formation préférée des amateurs du genre, le QUARTET place le jazz au coeur de votre événement. Dynamisé par la contrebasse et les arrangements vocaux, le répertoire du groupe prend toute sa dimension. La formule idéale pour faire danser vos invités ! \r
        Formation : Violon, 2 guitares, Contrebasse & 4 voix \r
        Durée : 2 sets de 45 min + pause \n Boissons et
    nourriture appréciées`,
        nbMusiciens: "4 musiciens",
        tempsPresta: "2 heures",
        prix: "à partir de 1530 €",
      },
      {
        formation: "Dyslexic Swing Quintet",
        description: `Formation identique à celle du légendaire Quintet du Hot Club de France de 1934. C'est le son du swing 100% acoustique. Les deux guitares rythmiques et la contrebasse permettent de s'affranchir de la batterie, et donnent une assise puissante aux solistes. \r
        Plus qu'idéal pour vos mariages ou vos soirées dansantes ! \r
        Formation : violon, contrebasse, 3 guitares ou 2 guitares & soliste supplémentaire (trompette, sax...) & 4 voix chantées
        Durée : 2 sets de 45 min + pause \n Boissons et
        nourriture appréciées`,
        nbMusiciens: "5 musiciens",
        tempsPresta: "2 heures",
        prix: "à partir de 1915 €",
      },
    ];

    return (
      <div>
        <Header as="h1" attached="top">
          Prestations standards
        </Header>{" "}
        <Grid>
          {prestations.map((prestation) => (
            <Grid.Row
              textAlign="center"
              verticalAlign="middle"
              columns="equal"
              centered
            >
              <Grid.Column width="5">
                <Header>{prestation.formation}</Header>
                <p>{prestation.description}</p>
              </Grid.Column>
              <Grid.Column>{prestation.nbMusiciens}</Grid.Column>
              <Grid.Column>{prestation.tempsPresta} </Grid.Column>
              <Grid.Column>{prestation.prix}</Grid.Column>
              <Grid.Column>
                <Button>Contacter</Button>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </div>
    );
  }
}
