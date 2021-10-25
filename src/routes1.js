import GeneralInformationdata from "views/Pages/GeneralInformationdata";
import SignIn from "views/Pages/SignIn.js";
var NdashRoutes = [
  {
    path: "/GeneralInformationdata",
    component: GeneralInformationdata,
    layout: "/auth",
  },
  {
    path: "/signin",
    component: SignIn,
    layout: "/auth",
  },
];
export default NdashRoutes;
