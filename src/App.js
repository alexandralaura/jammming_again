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

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <Search />
      <SearchResults />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
