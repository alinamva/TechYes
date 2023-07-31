import About from "./components/about";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Progress from "./components/Progress";
import Services from "./components/Services";
import { Element } from "react-scroll";
import Parallax from "./components/Parallax";
function App() {
  return (
    <div className="bg-black">
      <div className="custom-gradient h-fit-content bg-no-repeat ">
        <Header />
        <Greeting />
      </div>
      <Element name="aboutus">
        <About />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Parallax />

      <Element name="progress">
        <Progress />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
