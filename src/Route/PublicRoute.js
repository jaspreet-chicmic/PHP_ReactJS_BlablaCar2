import Search from "../Components/Molecules/Search";
import Home from "../View/Home";

export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "*",
    component: <Home />,
  },
  {
    path: "/search-car-sharing",
    component: <Search />,
  },
];
