import React from "react";
import { Card, Feed } from "semantic-ui-react";

const InfosPratiques = () => (
  <Card>
    <Card.Content>
      <Card.Header>Informations Pratiques</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image="/images/avatar/small/jenny.jpg" />
          <Feed.Content>Paris, France (peut se déplacer)</Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="/images/avatar/small/molly.png" />
          <Feed.Content>Jazz / Guinguette / Swing</Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="/images/avatar/small/elliot.jpg" />
          <Feed.Content>Reprise: Oui</Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="/images/avatar/small/elliot.jpg" />
          <Feed.Content>Matériel: Matériel d'amplification fourni</Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
);

export default InfosPratiques;
