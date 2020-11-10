import "./App.css";
import Menu from "./components/Menu";
import Presentation from "./components/Presentation";
import Profil from "./components/Profil";
import Repertoire from "./components/Repertoire";
import Prestations from "./components/Prestations";
import Cagnotte from "./components/Cagnotte";
import Avis from "./components/Avis";


function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Profil />
      <Presentation />
      <Repertoire />
      <Prestations />
      <Cagnotte />
      <Avis/>
    </div>
  );
}

export default App;
