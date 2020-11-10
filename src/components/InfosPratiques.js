import React from "react";
import { Card, Feed, Icon } from "semantic-ui-react";

const InfosPratiques = () => (
  <Card style={{padding: "0px !important"}}>
    <Card.Content>
      <Card.Header>Informations Pratiques</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
        <Icon name='home' size='big' />
          <Feed.Content>Paris, France (peut se déplacer)</Feed.Content>
        </Feed.Event>

        <Feed.Event>
        <Icon name='microphone' size='big' />
          <Feed.Content>Jazz / Guinguette / Swing</Feed.Content>
        </Feed.Event>

        <Feed.Event>
        <Icon name='music' size='big' />
          <Feed.Content>Reprise: Oui</Feed.Content>
        </Feed.Event>

        <Feed.Event>
        <Icon name='settings' size='big' />
          <Feed.Content>Matériel: Matériel d'amplification fourni</Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
);

export default InfosPratiques;
