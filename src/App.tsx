import { Route, Routes } from "react-router-dom";
import PageHome from "./components/pages/PageHome";
import EPagesPaths from "./enum/EPagesPaths";

// prettier-ignore
const App = () => {
  return (
    <Routes>
      <Route path={EPagesPaths.HOME} element={<PageHome />} />
    </Routes>
  );
};

export default App;
