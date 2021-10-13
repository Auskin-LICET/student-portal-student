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
import GeneralInformationdata from "views/Pages/GeneralInformationdata";
import Academicsdata from "views/Pages/Academicdata";
import ProfessionalDevelopmentdata from "views/Pages/ProfessionalDevelopmentData";
import InternationalData from "views/Pages/InternationalData";
import ExtraCurricularData from "views/Pages/ExtraCurricularData";
import Feedbackdata from "views/Pages/Feedbackdata";
import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
} from "components/Icons/Icons";
import {
  Avatar,
  Badge,
  Button,
  Flex,
  FormControl,
  Input,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";


//function nfunction(){
//  console.log("HELLO");
//}

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },

  {
    path: "/GeneralInformationdata",
    name: (
      <p
        style={{
          textAlign: "left",
          lineHeight: "1.2rem",
          whiteSpace: "normal",
          wordWrap: "break-word",
        }}
      >
        General Information
      </p>
    ),
    icon: <StatsIcon color="inherit" />,
    component: GeneralInformationdata,
    layout: "/admin",
  },

  {
    path: "/Academicsdata",
    name: (
      <p
        style={{
          textAlign: "left",
          lineHeight: "1.2rem",
          whiteSpace: "normal",
          wordWrap: "break-word",
        }}
      >
        Academics
      </p>
    ),
    icon: <StatsIcon color="inherit" />,
    component: Academicsdata,
    layout: "/admin",
  },
  {
    path: "/ProfessionalDevelopmentdata",
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
    component: ProfessionalDevelopmentdata,
    layout: "/admin",
  },
  {
    path: "/InternationalData",
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
    component: InternationalData,
    layout: "/admin",
  },

  {
    path: "/ExtracurricularData",
    name: (
      <p
        style={{
          textAlign: "left",
          lineHeight: "1.2rem",
          whiteSpace: "normal",
          wordWrap: "break-word",
        }}
      >
        ExtraCurricular
      </p>
    ),
    icon: <StatsIcon color="inherit" />,
    component: ExtraCurricularData,
    layout: "/admin",
  },
  {
    path: "/Feedbackdata",
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
    component: Feedbackdata,
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
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign Out",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/GeneralInformationdata",
        name: "Genaral",
        icon: <PersonIcon color="inherit" />,
        component: GeneralInformationdata,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
