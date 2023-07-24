import About from "./components/about";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Progress from "./components/Progress";
import Services from "./components/Services";
function App() {
  return (
    <div className="custom-gradient h-fit-content ">
      <Header />
      <Greeting />
      <About />
      <Services />
      <Progress />
    </div>
  );
}

export default App;
