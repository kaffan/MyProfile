import './App.css';
import HeadMain from './Components/Header/HeadMain';
import Navbar from './Components/Header/Navbar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Experience/Projects';

function App() {
  return (
    <div className="App">
      <HeadMain></HeadMain>
      <Skills></Skills>
      <About></About>
      <Projects></Projects>
    </div>
  );
}

export default App;
