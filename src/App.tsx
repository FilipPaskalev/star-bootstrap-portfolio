import { Outlet } from "react-router-dom";
import "./css/app.css";
import Navigation from "./components/Navigation";

export const appLoader = async () => {
  // Load necessary data
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
