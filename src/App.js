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
    <div>
      <Menu></Menu>
      <Profil />
      <div style={{padding:"3vh"}}></div>
      <div className="App">
        <Presentation />
        <Repertoire />
        <Prestations />
        <Cagnotte />
        <Avis />
      </div>
    </div>
  );
}

export default App;
