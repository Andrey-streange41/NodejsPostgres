import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import {
  ADMIN_ROUT,
  BASKET_ROUT,
  SHOP_ROUT,
  DEVICE_ROUT,
  LOGIN_ROUT,
  REGISTRATION_ROUT,
} from "./utils/constants";

export const authRoutes = [
  {
    path: ADMIN_ROUT,
    Component: Admin,
  },
  {
    path: BASKET_ROUT,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUT,
    Component: Shop,
  },
  {
    path: DEVICE_ROUT + "/:id",
    Component: DevicePage,
  },
  {
    path: LOGIN_ROUT,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUT,
    Component: Auth,
  },
];
