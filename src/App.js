import DetailsOrEdit from '../components/DetailsOrEdit';
import LogInOrCreate from './componentes/LoginOrCreate';
import Reviews from '../components/Reviews';
import Search from '../components/Security';


function App() {
  return (
    <div id="App">
      <div id="left">
        <LogInOrCreate />
        <Search />
        <Reviews />
      </div>
      <div id="right">
        <DetailsOrEdit />
      </div>
    </div>
  );
}

export default App;
