import DetailsOrEdit from './components/DetailsOrEdit';
import LogInOrCreate from './components/LogInOrCreate';
import Search from './components/Security';


function App() {
  return (
    <div id="App">
      <div id="left">
        <LogInOrCreate />
        <Search />
      </div>
      <div id="right">
        <DetailsOrEdit />
      </div>
    </div>
  );
}

export default App;
