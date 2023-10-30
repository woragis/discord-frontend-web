import { routerType } from "../types/router.types";
import Home from "./Home";
import CreateAccount from "./CreateAccount";
import LoginAccount from "./LoginAccount";

const pagesData: routerType[] = [
  { path: "", element: <Home />, title: "Home" },
  {
    path: "create-account",
    element: <CreateAccount />,
    title: "Create Account",
  },
  { path: "login", element: <LoginAccount />, title: "Login" },
];
export default pagesData;
