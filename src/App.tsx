import "./App.css";
import About from "./Page/About";
import AboutFrontend from "./Page/AboutFrontend";
import AboutBackend from "./Page/AboutBackend";
import Header from "./components/Header";
import Footer from "./components/Footer";

const bgColour: string = "bg-slate-100";

function App() {
  return (
    <div className={`App h-screen relative -z-10 ${bgColour}`}>
      <div className={`relative -z-10 ${bgColour}`}>
        <Header />
      </div>
      <div className={`relative -z-10 h-[100%] ${bgColour} md:h-[80%]`}>
        <About />
      </div>
      <div className={`h-[100%] relative -z-10 ${bgColour} `}>
        <AboutFrontend />
      </div>
      <div className={`h-[100%] relative -z-10 ${bgColour} `}>
        <AboutBackend />
      </div>
      <div className={`relative -z-10 bg-indigo-950`}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
