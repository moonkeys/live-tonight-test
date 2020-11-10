import React, { Component } from "react";
import { Header, Rating, Grid, Image } from "semantic-ui-react";

export default class Avis extends Component {
  render() {
    const listeAvis = [
      {
        profil: "",
        imageProfil: "",
        commentaire: `Groupe très sympathique. Toujours à notre écoute pour s'adapter selon nos besoins ou désirs. \r
        Très bon répertoire. L'animation de notre déjeuner a été très appréciée par nos invités. \r
        Merci encore à Noémie, Jean et Benjamin pour nous avoir fait partager leur passion.`,
        date: "mars 2020",
        note: 5,
      },
      {
        profil: "",
        imageProfil: "",
        commentaire: `Organisation tres simple avec livetonight,
        la prestation était tres bien,
        soirée d'entreprise réussie ;)`,
        date: "janvier 2020",
        note: 5,
      },
      {
        profil: "L'or et le châteaux",
        imageProfil: `https://res.cloudinary.com/dcyafbpoh/image/upload/c_fill,f_auto,g_auto,h_80,q_auto:eco,w_80/avatar4Fichier_4.svg`,
        commentaire: "",
        date: "octobre 2019",
        note: 5,
      },
      {
        profil: "",
        imageProfil: "",
        commentaire: "Super prestation ! Je recommande !",
        date: "juillet 2019",
        note: 5,
      },
      {
        profil: "SBG Lutèce Sophie fauche",
        imageProfil:
          "https://res.cloudinary.com/dcyafbpoh/image/upload/c_fill,f_auto,g_auto,h_80,q_auto:eco,w_80/avatar4Fichier_4.svg",
        commentaire: `Un quatuor qui nous a enchanté de ses notes un très bon moment grâce à 4 talents qui en plus sont d une gentillesse et d un professionnalisme ! Je conseille vivement ! Un vrai plaisir ! Encore bravo ! \r
        Pour les futurs clients : adaptables , ponctuels, discrets , disponibles et à l écoute ; contrat réussi au delà de mes espérances ! Vous pourrez compter sur eux pour une soirée réussie .`,
        date: "juin 2019",
        note: 5,
      },
      {
        profil: "Sylvie's",
        imageProfil:
          "https://res.cloudinary.com/dcyafbpoh/image/upload/c_fill,f_auto,g_auto,h_80,q_auto:eco,w_80/avatar4Fichier_4.svg",
        commentaire: `Je souhaitais un groupe de jazz pour mes 60 ans et faire la surprise à mes invités. Tout le monde a adoré, et moi j'étais aux anges !!!! Super groupe, très sympa, très gentils et très professionnels. Une soirée inoubliable ! Encore Merci....`,
        date: "juin 2019",
        note: 5,
      },
      {
        profil: "Camille",
        imageProfil:
          "https://res.cloudinary.com/dcyafbpoh/image/upload/c_fill,f_auto,g_auto,h_80,q_auto:eco,w_80/avatar1Fichier_1.svg",
        commentaire: `Groupe formidable qui a mis une super ambiance à notre événement. Musiciens et chanteuse sympathiques et très talentueux.
        Merci au groupe Dyslexic Swing!!!`,
        date: "juin 2019",
        note: 5,
      },
      {
        profil: "Catherine",
        imageProfil:
          "https://res.cloudinary.com/dcyafbpoh/image/upload/c_fill,f_auto,g_auto,h_80,q_auto:eco,w_80/avatar1Fichier_1.svg",
        commentaire: `Nous avons encore votre musique et vos chansons en tête, quelle belle surprise pour nos collaborateurs. Merci beaucoup pour votre prestation de vendredi soir pendant notre diner et surtout autour du feu de camp. Merci pour votre professionnalisme et vos sourires lors de notre séminaire d'entreprise. Je vous recommande à tous ceux qui aiment la musique et la danse. \r
        Catherine`,
        date: "juin 2019",
        note: 5,
      },
      {
        profil: "Yasmine Brahim",
        imageProfil:
          "https://res.cloudinary.com/dcyafbpoh/image/upload/c_fill,f_auto,g_auto,h_80,q_auto:eco,w_80/avatar8Fichier_9.svg",
        commentaire: `Excellente prestation ! Nous organisions une soirée guinguette et les musiciens ont parfaitement collé au thème. Avant la soirée, ils ont tous été très à l'écoute et réactifs lors de nos échanges. L'équipe de Livetonight a également été d'une grande aide. \r
        Merci !`,
        date: "juin 2019",
        note: 5,
      },
    ];

    let moyenneNotes = 0;
    listeAvis.map((avis) => (moyenneNotes = avis.note + moyenneNotes));
    moyenneNotes = moyenneNotes / listeAvis.length;

    return (
      <div>
        <Header as="h1" attached="top">
          Avis
        </Header>{" "}
        <Rating icon="star" defaultRating={moyenneNotes} maxRating={5} />{" "}
        {moyenneNotes} -{listeAvis.length} avis
        <Grid>
          {listeAvis.map((avis) => (
            <Grid.Row
              textAlign="center"
              verticalAlign="middle"
              columns="equal"
              centered
            >
              <Grid.Column width="2" textAlign="center">
                {avis.imageProfil === "" && (
                  <Image
                    src="https://res.cloudinary.com/dcyafbpoh/image/upload/c_fill,f_auto,g_auto,h_80,q_auto:eco,w_80/avatar6Fichier_6.svg"
                    size="tiny"
                    circular
                    centered
                  />
                )}
                {avis.imageProfil !== "" && (
                  <Image src={avis.imageProfil} centered size="tiny" circular />
                )}
                {avis.profil !== "" && <Header as="h4"> {avis.profil}</Header>}
                {avis.profil === "" && <Header as="h4"> Profil anonyme</Header>}
              </Grid.Column>
              <Grid.Column>
                <Grid.Row>
                  {avis.commentaire}
                  <Grid.Row>
                    {avis.date}{" "}
                    <Rating
                      icon="star"
                      defaultRating={avis.note}
                      maxRating={5}
                    />
                  </Grid.Row>
                </Grid.Row>{" "}
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </div>
    );
  }
}
