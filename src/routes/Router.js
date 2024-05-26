import { Navigate } from "react-router-dom";

/****Layouts*****/
import FullLayout from "../layouts/FullLayout.js";

/***** Pages ****/
import Starter from "../views/Starter.js";
import About from "../views/About.js";
import Alerts from "../views/ui/Alerts";
import Badges from "../views/ui/Badges";
import Buttons from "../views/ui/Buttons";
import Cards from "../views/ui/Cards";
import Grid from "../views/ui/Grid";
import Tables from "../views/ui/Tables";
import Forms from "../views/ui/Forms";
import Breadcrumbs from "../views/ui/Breadcrumbs";
import LoginPage from "../views/ui/Login.js";
import SignupPage from "../views/ui/Signup.js";

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      { path: "/login", exact: true, element: <LoginPage /> },
      { path: "/signup", exact: true, element: <SignupPage /> },
    ],
  },
];

export default ThemeRoutes;
