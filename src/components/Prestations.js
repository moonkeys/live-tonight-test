import React, { useState } from "react";
import {
  Header,
  Button,
  Grid,
  Modal,
  Form,
  TextArea,
  Divider,
  Icon,
  Popup,
} from "semantic-ui-react";

import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

export default function Prestations() {
  const [open, setOpen] = React.useState(false);

  const [currentDate, setNewDate] = useState(null);
  const onChange = (event, data) => setNewDate(data.value);
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
      prix: "780€",
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
      prix: "1140 €",
    },
    {
      formation: "Dyslexic Swing Quartet",
      description: `Formation préférée des amateurs du genre, le QUARTET place le jazz au coeur de votre événement. Dynamisé par la contrebasse et les arrangements vocaux, le répertoire du groupe prend toute sa dimension. La formule idéale pour faire danser vos invités ! \r
        Formation : Violon, 2 guitares, Contrebasse & 4 voix \r
        Durée : 2 sets de 45 min + pause \n Boissons et
    nourriture appréciées`,
      nbMusiciens: "4 musiciens",
      tempsPresta: "2 heures",
      prix: "1530 €",
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
      prix: "1915 €",
    },
  ];

  const buttonStyle = {
    color: "white",
    background: "#3CE295",
    borderRadius: "100px",
    padding: "10px 30px",
  };

  const headerStyle = {
    color: "#3CE295",
  };

  return (
    <div>
      <Header as="h1" dividing>
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
            <Grid.Column width="6">
              <Header style={headerStyle}>{prestation.formation}</Header>
              <p>{prestation.description}</p>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Icon size="huge" name="user"></Icon> <br />
              {prestation.nbMusiciens}
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Icon size="huge" name="time"></Icon>
              <br />
              {prestation.tempsPresta}{" "}
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Icon size="huge" name="eur"></Icon> <br />à partir de
              {prestation.prix}{" "}
              <Popup
                content={
                  <div>
                    Il s'agit du{" "}
                    <font color="purple !important">prix standard </font> . Le
                    prix pourra varier en fonction de la durée de la prestation,
                    des frais de transport ou encore du matériel supplémentaire
                    à prévoir.
                  </div>
                }
                pinned
                position="bottom center"
                trigger={<Icon name="info circle"></Icon>}
              />
            </Grid.Column>
            <Grid.Column>
              <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={
                  <Button size="medium" style={buttonStyle}>
                    Contacter
                  </Button>
                }
                size="small"
              >
                <Modal.Header
                  style={{
                    backgroundColor: "#202eb6",
                    textAlign: "center",
                    font: "Impact",
                    color: "white",
                  }}
                >
                  Demande de réservation
                </Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <Header>{prestation.formation}</Header>
                    <Grid columns={2} relaxed="very">
                      <Grid.Column>
                        {" "}
                        <p>{prestation.nbMusiciens}</p>
                        <p>{prestation.tempsPresta}</p>
                      </Grid.Column>
                      <Grid.Column textAlign="right">
                        {" "}
                        à partir de{" "}
                        <Header style={{ color: " #3CE295" }}>
                          {prestation.prix}
                        </Header>
                      </Grid.Column>
                    </Grid>
                  </Modal.Description>
                  <Form>
                    <Form.Group widths="equal">
                      <SemanticDatepicker
                        onChange={onChange}
                        label="Date - Obligatoire"
                      />
                      <Form.Input
                        fluid
                        label="Lieu - Obligatoire"
                        placeholder="Lieu..."
                      />
                    </Form.Group>
                    <Form.Field
                      id="form-textarea-control-opinion"
                      control={TextArea}
                      label="Votre message au musicien - Obligatoire"
                      placeholder="Décrivez vos envies à l artiste..."
                    />
                  </Form>
                  <Divider />
                  <div>
                    {" "}
                    Faire une demande de réservation ne vous engage à rien: cela
                    vous permettra simplement d'entamer l'échange avec
                    l'artiste.
                  </div>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    content="Suivant"
                    labelPosition="center"
                    icon="checkmark"
                    onClick={() => setOpen(false)}
                    positive
                  />
                </Modal.Actions>
              </Modal>
            </Grid.Column>
          </Grid.Row>
        ))}
      </Grid>
    </div>
  );
}
