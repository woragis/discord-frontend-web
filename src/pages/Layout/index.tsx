import { Outlet } from "react-router-dom";
import Header from "../Header";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>
        <small>Footer</small>
      </footer>
    </>
  );
};

export default DefaultLayout;
