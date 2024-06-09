import { createHashRouter, Navigate } from "react-router-dom";

import App from "../App";
import appDataLoader from "./appDataLoader";

import HomePage from "../pages/home/HomePage";
import homePageDataLoader from "../pages/home/homePageDataLoader";

import ResumePage from "../pages/resume/ResumePage";
import resumePageDataLoader from "../pages/resume/resumePageDataLoader";

import PortfolioPage from "../pages/portfolio/PortfolioPage";
import portfolioPageDataLoader from "../pages/portfolio/portfolioPageDataLoader";

import ContactMePage from "../pages/contactMe/ContactMePage";
import contactMePageDataLoader from "../pages/contactMe/contactMePageDataLoader";

import ErrorPage from "../pages/errorPage/ErrorPage";

const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/",
    element: <App />,
    loader: appDataLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <HomePage />,
        loader: homePageDataLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "resume",
        element: <ResumePage />,
        loader: resumePageDataLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
        loader: portfolioPageDataLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "contact-me",
        element: <ContactMePage />,
        loader: contactMePageDataLoader,
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
