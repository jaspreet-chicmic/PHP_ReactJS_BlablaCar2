import AddOrEditProfilePic from "../Components/Cells/AddOrEditProfilePic";
import VerifyEmail from "../Components/Cells/VerifyEmail";
import Profile from "../Components/Molecules/Profile";
import AddVehicleDetails from "../Components/Molecules/Profile/ProfileView/AddVehicle";
import EditOrDeleteVehicle from "../Components/Molecules/Profile/ProfileView/AddVehicle/EditorDeleteVehicle";
import Search from "../Components/Molecules/Search";

export const PRIVATE_ROUTES = [
  {
    path: "/dashboard/profile/menu",
    component: <Profile />,
  },

  {
    path: "/dashboard/profile/picture",
    component: <AddOrEditProfilePic />,
  },
  {
    path: "/dashboard/profile/vehicle/:id",
    component: <EditOrDeleteVehicle />,
  },
  {
    path: "/dashboard/profile/vehicle/add",
    component: <AddVehicleDetails />,
  },
  {
    path: "/account_activations/:id/edit",
    component: <VerifyEmail />,
  },
];
