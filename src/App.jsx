import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home";
import Projects from "./Views/Projects";
import About from "./Views/About";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

function App() {
  return (
    <div className="app-shell">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}

export default App;
