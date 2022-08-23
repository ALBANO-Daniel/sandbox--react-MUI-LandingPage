import './App.css';
import { MuiNavBar } from './components/MuiNavBar';
import { Footer } from './pages/Footer';
import { Home } from './pages/Home';
import { Live } from './pages/Live';


function App() {
  return (
    <div className="App">
      <MuiNavBar />
      <Home />
      <Live />
      <Footer />
    </div>
  );
}

export default App;
