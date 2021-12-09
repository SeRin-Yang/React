import './App.css';
import ExpandableListItem from './components/ExpandableListItem/ExpandableListItem';


function App() {
  const url = "https://ko.reactjs.org/";

  return (
    <ol>
      <ExpandableListItem index='01' title='Mitarbeiter/in für das IT Center-Projektbüro' url={url}/>
      <ExpandableListItem index='02'title='Technische(r) Bauzeichner/-in' url={url}/>
      <ExpandableListItem index='03' title='Studentische Hilfskraft' url={url}/>
    </ol>
  );
}

export default App;
