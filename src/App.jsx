import About from "./components/about";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Progress from "./components/Progress";
import Services from "./components/Services";
import { Element } from "react-scroll";
import Parallax from "./components/Parallax";
import { motion } from "framer-motion";
import Loading from "./components/Loading";

function App() {
  return (
    <>
      <Loading />
      <motion.div
        className="bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, type: "spring" }}
      >
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
      </motion.div>
    </>
  );
}

export default App;
