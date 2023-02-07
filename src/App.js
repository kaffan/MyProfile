import './App.css';
import HeadMain from './Components/Header/HeadMain';
import Navbar from './Components/Header/Navbar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Experience/Projects';
import ProExperience from './Components/ProExperience/ProExperience';

function App() {
  return (
    <div className="App">
      <HeadMain></HeadMain>
      <Skills></Skills>
      <About></About>
      <Projects></Projects>
      <ProExperience></ProExperience>
    </div>
  );
}

export default App;
