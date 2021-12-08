import './App.css';
import ExpandableListItem from './components/ExpandableListItem/ExpandableListItem';


function App() {
  const url = "https://ko.reactjs.org/";

  return (
    <ol>
      <ExpandableListItem title='Mitarbeiter/in für das IT Center-Projektbüro' url={url}/>
      <ExpandableListItem title='Technische(r) Bauzeichner/-in' url={url}/>
      <ExpandableListItem title='Studentische Hilfskraft' url={url}/>
    </ol>
  );
}

export default App;
