import { Outlet } from "react-router-dom";
import "./css/app.css";
import Navigation from "./components/navigations/Navigation";

// Load data
export const appLoader = async () => {
  return {
    /* data */
  };
};

const App = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2024 Footer section</p>
      </footer>
    </div>
  );
};

export default App;
