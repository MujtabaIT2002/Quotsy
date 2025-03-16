import { createBrowserRouter } from "react-router-dom";
import Root from "./Root"; 
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Error from "./pages/Error"; 

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home }, 
      { path: "register", Component: Register },
      { path: "login", Component: Login },
      { path: "profile", Component: Profile },
      { path: "settings", Component: Settings },
      { path: "*", Component: Error }, 
    ],
  },
]);

export default Router;
