import DetailsOrEdit from './components/DetailsOrEdit';
import CreateOrSecurity from './components/CreateOrSecurity';
import Search from './components/Search';


function App() {
  return (
    <div id="App">
      <div id="left">
        <CreateOrSecurity />
        <Search />
      </div>
      <div id="right">
        <DetailsOrEdit />
      </div>
    </div>
  );
}

export default App;
