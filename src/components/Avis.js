import React, { Component } from "react";
import { Header, Rating, Grid, Image, Divider } from "semantic-ui-react";
import { StyledHeader } from "./StyledComponent/StyledHeader";
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
    commentaire: `En tant qu’organisatrice de mariages, j'ai recommandé à mes mariés les talents de Dyslexic Swing & The Silent Brocoli. Ils ont été ravis de la prestation et leurs invités également \r
        Leur musique a offert beaucoup de fraîcheur et de rythme durant le cocktail. Un vrai bonheur ! \r
        Je continuerai de recommander leurs services avec plaisir !`,
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
export default class Avis extends Component {
  render() {
    let moyenneNotes = 0;
    listeAvis.map((avis) => (moyenneNotes = avis.note + moyenneNotes));
    moyenneNotes = moyenneNotes / listeAvis.length;

    const ratingStyle = {
      colorBackground: "green !important",
    };
    const imageStyle = {
      padding: "0px !important",
      padding: "0px !important",
    };

    const dateStyle = {
      color: "grey",
    };

    const gridStyle = {
      padding: "0px !important",
      paddingTop: "0px !important",
      paddingBottom: "0px !important",
    };

    return (
      <div style={{ padding: "2vh 0vh" }}>
        <StyledHeader as="h1" dividing>
          Avis
        </StyledHeader>{" "}
        <Divider clearing />
        <div style={{ padding: "0px 0px 2vh 0px" }}>
          {" "}
          <Rating
            icon="star"
            defaultRating={moyenneNotes}
            maxRating={5}
            disabled
            style={ratingStyle}
          />{" "}
          {moyenneNotes} -{listeAvis.length} avis{" "}
        </div>
        {listeAvis.map((avis) => (
          <Grid>
            {" "}
            <Grid.Row
              textAlign="center"
              verticalAlign="middle"
              columns="equal"
              centered
              style={gridStyle}
            >
              <Grid.Column width="2" textAlign="center">
                {avis.imageProfil === "" && (
                  <Image
                    src="https://res.cloudinary.com/dcyafbpoh/image/upload/c_fill,f_auto,g_auto,h_80,q_auto:eco,w_80/avatar6Fichier_6.svg"
                    size="tiny"
                    circular
                    centered
                    style={imageStyle}
                  />
                )}
                {avis.imageProfil !== "" && (
                  <Image
                    src={avis.imageProfil}
                    style={imageStyle}
                    centered
                    size="tiny"
                    circular
                  />
                )}
                {avis.profil !== "" && (
                  <Header as="h4" style={imageStyle}>
                    {" "}
                    {avis.profil}
                  </Header>
                )}
                {avis.profil === "" && (
                  <Header as="h4" style={imageStyle}>
                    {" "}
                    Profil anonyme
                  </Header>
                )}
              </Grid.Column>
              <Grid.Column>
                <Grid.Row>
                  {avis.commentaire}
                  <Divider hidden />
                  <Grid.Row>
                    <p style={dateStyle}>
                      {" "}
                      {avis.date}{" "}
                      <Rating
                        icon="star"
                        defaultRating={avis.note}
                        maxRating={5}
                        disabled
                      />
                    </p>
                  </Grid.Row>
                </Grid.Row>{" "}
              </Grid.Column>
            </Grid.Row>{" "}
            <hr
              style={{
                color: "#AAB7B8",
                width: "75%",
                borderTop: "dashed 0.2vh",
              }}
            />
          </Grid>
        ))}
      </div>
    );
  }
}
