import { Outlet } from "react-router-dom";
import data from "./rootLoader";

const Root = () => {
  return (
    <div>
      <h1>My Website</h1>
      <Outlet />
    </div>
  );
};

export default Root;
