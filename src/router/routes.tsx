import { createHashRouter, Navigate } from "react-router-dom";
import App, { appLoader } from "../App";
import AboutMe, { aboutMeLoader } from "../pages/aboutMe/AboutMe";
import Resume, { resumeLoader } from "../pages/resume/Resume";
import Portfolio, { portfolioLoader } from "../pages/portfolio/Portfolio";
import ContactMe, { contactMeLoader } from "../pages/contactMe/ContactMe";
import ErrorPage from "../pages/errorPage/ErrorPage";

const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/about-me" replace />,
  },
  {
    path: "/",
    element: <App />,
    loader: appLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about-me",
        element: <AboutMe />,
        loader: aboutMeLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "resume",
        element: <Resume />,
        loader: resumeLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
        loader: portfolioLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "contact-me",
        element: <ContactMe />,
        loader: contactMeLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
