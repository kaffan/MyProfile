import './App.css';
import HeadMain from './Components/Header/HeadMain';
import Navbar from './Components/Header/Navbar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <HeadMain></HeadMain>
      <Skills></Skills>
      <About></About>
    </div>
  );
}

export default App;
