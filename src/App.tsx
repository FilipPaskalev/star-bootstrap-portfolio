import { Outlet, useLoaderData } from "react-router-dom";
import useBreakpoint from "./hooks/useBreakpoint";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import "./scss/app.scss";
import { BREAKPOINTS } from "./utils/constants/breakpoints";

const App = () => {
  const navLabel = useLoaderData() as string;
  const breakpoint = useBreakpoint();

  const leftPusherClass: string =
    breakpoint === BREAKPOINTS.XL.key || breakpoint === BREAKPOINTS.XXL.key
      ? "left-pusher"
      : "";

  return (
    <>
      <Navigation brandLabel={navLabel} breakpoint={breakpoint} />
      <main className={leftPusherClass}>
        <section className="resume-section" id="about-me">
          <div className="resume-section-content">
            <Outlet />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
