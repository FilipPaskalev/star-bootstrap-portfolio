import { createHashRouter, Navigate } from "react-router-dom";
import EnumPaths from "./EnumPaths";

import ErrorPage from "../pages/errorPage/ErrorPage";

import App from "../App";
import appDataLoader from "./appDataLoader";

import AboutMePage from "../pages/about-me/AboutMePage";
import aboutMePageDataLoader from "../pages/about-me/aboutMePageDataLoader";

import BioPage from "../pages/bio/BioPage";
import bioPageDataLoader from "../pages/bio/bioPageDataLoader";

import MyWorkPage from "../pages/myWork/MyWorkPage";
import myWorkPageDataLoader from "../pages/myWork/myWorkPageDataLoader";

import LetsTalkPage from "../pages/letsTalk/LetsTalkPage";
import letsTalkPageDataLoader from "../pages/letsTalk/letsTalkPageDataLoader";

const router = createHashRouter([
  {
    path: EnumPaths.ROOT,
    element: <Navigate to={EnumPaths.ABOUT_ME} replace />,
  },
  {
    path: EnumPaths.ROOT,
    element: <App />,
    loader: appDataLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: EnumPaths.ABOUT_ME,
        element: <AboutMePage />,
        loader: aboutMePageDataLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: EnumPaths.BIO,
        element: <BioPage />,
        loader: bioPageDataLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: EnumPaths.MY_WORK,
        element: <MyWorkPage />,
        loader: myWorkPageDataLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: EnumPaths.LETS_TALK,
        element: <LetsTalkPage />,
        loader: letsTalkPageDataLoader,
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
