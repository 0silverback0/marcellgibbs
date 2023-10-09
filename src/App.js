
import AboutMe from './AboutMe';
import './App.css';
import Certifications from './Certifications';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
