import { Outlet } from "react-router-dom";
import "./css/app.css";

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
        <h1>My Website</h1>
        {/* Add navigation links here */}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2024 My Website</p>
      </footer>
    </div>
  );
};

export default App;
