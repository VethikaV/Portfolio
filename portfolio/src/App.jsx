import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Project from './components/project';
import Achievement from './components/achievement';
import Contact from './components/contact';

function App() {
  return (
    <>
      <NavBar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="achievement">
        <Achievement />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
