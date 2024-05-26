import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import PageHome from "./components/pages/PageHome";
import EPagesPaths from "./enum/EPagesPaths";
import Navigation from "./components/navigation/Navigation";
import { getWindowSize } from "./utils/getWindowsSize";
import WrapperPageContent from "./components/wrappers/pageContent/WrapperPageContent";
import "./app.css";

// prettier-ignore
const App = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <>
    <Navigation width={windowSize.width}/>
    <WrapperPageContent>
    <Routes>
      <Route path={EPagesPaths.HOME} element={<PageHome />} />
    </Routes>
    </WrapperPageContent>
    </>
  );
};

export default App;
