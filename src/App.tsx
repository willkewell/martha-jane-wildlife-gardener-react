import About from "./about/About";
import "./App.css";
import Contact from "./contact/Contact";
import Feedback from "./feedback/Feedback";
import Gallery from "./gallery/Gallery";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import Services from "./services/Services";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Services />
      <Gallery />
      <Feedback />
      <Contact />
    </>
  );
}

export default App;
