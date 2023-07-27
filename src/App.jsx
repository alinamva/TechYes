import About from "./components/about";
import Contact from "./components/Contact";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Progress from "./components/Progress";
import Services from "./components/Services";
function App() {
  return (
    <div className="bg-black">
      <div className="custom-gradient h-fit-content bg-no-repeat ">
        <Header />
        <Greeting />
      </div>
      <About />
      <Services />
      <Progress />
      <Contact />
    </div>
  );
}

export default App;
