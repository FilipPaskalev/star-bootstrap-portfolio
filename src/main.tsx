import * as ReactDOM from "react-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";

import rootLoader from "./routes/Root";
import Root from "./routes/Root";

import aboutMeLoader from "./pages/aboutMe/aboutMeLoader";
import AboutMe from "./pages/aboutMe/AboutMe";

import resumeLoader from "./pages/resume/resumeLoader";
import Resume from "./pages/resume/Resume";

import portfolioLoader from "./pages/portfolio/portfolioLoader";
import Portfolio from "./pages/portfolio/Portfolio";

import contactMeLoader from "./pages/contactMe/contactMeLoader";
import ContactMe from "./pages/contactMe/ContactMe";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "about-me",
        element: <AboutMe />,
        loader: aboutMeLoader,
      },
      {
        path: "resume",
        element: <Resume />,
        loader: resumeLoader,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
        loader: portfolioLoader,
      },
      {
        path: "contact-me",
        element: <ContactMe />,
        loader: contactMeLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
