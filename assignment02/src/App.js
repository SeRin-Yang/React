import './App.css';
import ExpandableListItem from './Components/ExpandableListItem';


function App() {
  const alertA = () => {
    alert("Sind Sie auf der Suche nach einem Job?")
  };

  return (
    <>
      <ExpandableListItem index='1' title='Mitarbeiter/in für das IT Center-Projektbüro' clickEvent={alertA}/>
      <ExpandableListItem index='2' title='Technische(r) Bauzeichner/-in' clickEvent={alertA}/>
      <ExpandableListItem index='3' title='Studentische Hilfskraft' clickEvent={alertA}/>
    </>
  );
}

export default App;
