import { Outlet, useLoaderData } from "react-router-dom";
import useBreakpoint from "./hooks/useBreakpoint";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import "./scss/app.scss";
import MainContentWrapper from "./wrappers/mainContent/MainContentWrapper";

const App = () => {
  const navLabel = useLoaderData() as string;
  const breakpoint = useBreakpoint();

  return (
    <>
      <Navigation brandLabel={navLabel} breakpoint={breakpoint} />
      <MainContentWrapper breakpoint={breakpoint}>
        <Outlet />
      </MainContentWrapper>
      <Footer />
    </>
  );
};

export default App;
