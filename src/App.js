import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Map from './components/Map';
import AlertList from './components/AlertList';

function App() {
  return (
    <div>
    <Navbar/>
    <Alert/>
    <ul><li><Map/></li>
    <li><AlertList/></li>
    </ul>
    
    </div>
  );
}

export default App;
