import { Route, Routes } from "react-router-dom";
import EPagesPaths from "./enum/EPagesPaths";
import "./app.css";

const App = () => {
  return (
    <Routes>
      <Route path={EPagesPaths.HOME} element={<PageHome />} />
    </Routes>
  );
};

export default App;
