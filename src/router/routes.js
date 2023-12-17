import { Navigate } from "react-router";
import { lazy } from "react";
const Main = lazy(() => import("../pages/Main/Main"));
const Work = lazy(() => import("../pages/Work/Work"));
const Experience = lazy(() => import("../pages/Experience/Experience"));
const About = lazy(() => import("../pages/About/About"));
const Page404 = lazy(() => import("../pages/Page404/Page404"));
const routes = [
  {
    path: "/",
    element: <Navigate to="/home" replace={true} />,
  },
  {
    path: "/home",
    name: "home",
    element: <Main></Main>,
  },
  {
    path: "/work",
    name: "work",
    element: <Work></Work>,
  },
  {
    path: "/experience",
    name: "experience",
    element: <Experience></Experience>,
  },
  {
    path: "/about",
    name: "about",
    element: <About></About>,
  },
  {
    path: "/404",
    name: "404",
    element: <Page404></Page404>,
  },
];
export default routes;
