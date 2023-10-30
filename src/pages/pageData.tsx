import { routerType } from "../types/router.types";
import Home from "./Home";
import CreateAccount from "./CreateAccount";
import LoginAccount from "./LoginAccount";
import About from "./About";
import Contact from "./Contact";

const pagesData: routerType[] = [
  { path: "/", element: <Home />, title: "Home" },
  {
    path: "create-account",
    element: <CreateAccount />,
    title: "Create Account",
  },
  { path: "login", element: <LoginAccount />, title: "Login" },
  { path: "about", element: <About />, title: "About" },
  { path: "contact", element: <Contact />, title: "Contact" },
];
export default pagesData;
