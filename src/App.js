import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import styles from './components/header/header.module.css';
import SearchBar from './components/searchBar/searchBar';
import style from './components/searchBar/searchBar.module.css';
import Search from './components/search/search';
import styling from './components/search/search.module.css'
import searchresults from './components/searchresults/searchresults';
import st from './components/searchresults/searchresults.module.css'
import SearchResults from './components/searchresults/searchresults';
import Playlist from './components/playlist/playlist';
import Tracklist from './components/tracklist/tracklist';
import Track from './components/track/track';

function App() {
  const data= [ {name: 'calling', artist: 'henson', album: 'Jazz', id: 1}, {name: 'hello', artist: 'Chiringlamo', album: 'whyisitso', id:2}, {name: 'comegowithme', artist: 'booring', album: 'theendofall', id: 3}];
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <Search />
      <SearchResults />
      <Tracklist items={data} />
      
    </div>
  );
}

export default App;
