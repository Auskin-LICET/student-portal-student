// import
import Dashboard from "views/Dashboard/Dashboard.js";
import GeneralInformation from "views/Dashboard/GeneralInformation";
import Academics from "views/Dashboard/Academics";
import ProfessionalDevelopment from "views/Dashboard/ProfessionalDevelopment";
import InternationalExposure from "views/Dashboard/InternationalExposure";
import Extracurricular from "views/Dashboard/Extracurricular";
import FacultyFeedback from "views/Dashboard/FacultyFeedback";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/GeneralInformation",
    name: "General Information",
    icon: <StatsIcon color="inherit" />,
    component: GeneralInformation,
    layout: "/admin",
  },
  {
    path: "/Academics",
    name: "Academics",
    icon: <StatsIcon color="inherit" />,
    component: Academics,
    layout: "/admin",
  },
  {
    path: "/ProfessionalDevelopment",
    name: (
      <p
        style={{
          textAlign: "left",
          lineHeight: "1.2rem",
          whiteSpace: "normal",
          wordWrap: "break-word",
        }}
      >
        Professional Development
      </p>
    ),
    icon: <StatsIcon color="inherit" />,
    component: ProfessionalDevelopment,
    layout: "/admin",
  },
  {
    path: "/InternationalExposure",
    name: (
      <p
        style={{
          textAlign: "left",
          lineHeight: "1.2rem",
          whiteSpace: "normal",
          wordWrap: "break-word",
        }}
      >
        International Exposure
      </p>
    ),
    icon: <StatsIcon color="inherit" />,
    component: InternationalExposure,
    layout: "/admin",
  },
  {
    path: "/Extracurricular",
    name: "Extracurricular",
    icon: <StatsIcon color="inherit" />,
    component: Extracurricular,
    layout: "/admin",
  },
  {
    path: "/FacultyFeedback",
    name: (
      <p
        style={{
          textAlign: "left",
          lineHeight: "1.2rem",
          whiteSpace: "normal",
          wordWrap: "break-word",
        }}
      >
        Faculty Feedback and Analysis
      </p>
    ),
    icon: <StatsIcon color="inherit" />,
    component: FacultyFeedback,
    layout: "/admin",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
