import { Route, Routes } from "react-router-dom";
// Enums
import EPagesPaths from "./enum/EPagesPaths";
// Pages
import Home from "./components/pages/home";
import Resume from "./components/pages/resume";
import Projects from "./components/pages/projects";
import Contact from "./components/pages/contact";

const App = () => {
  return (
    <Routes>
      <Route path={EPagesPaths.HOME} element={<Home />} />
      <Route path={EPagesPaths.RESUME} element={<Resume />} />
      <Route path={EPagesPaths.PROJECTS} element={<Projects />} />
      <Route path={EPagesPaths.CONTACT} element={<Contact />} />
    </Routes>
  );
};

export default App;
