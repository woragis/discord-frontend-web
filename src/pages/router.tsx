import { Route, Routes } from "react-router-dom";
import { routerType } from "../types/router.types";
import DefaultLayout from "./Layout";
import pagesData from "./pageData";

const Router = () => {
  const pageRoutes = pagesData.map(({ title, path, element }: routerType) => {
    return <Route key={`${title}`} path={`/${path}`} element={element} />;
  });
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {pageRoutes}
      </Route>
    </Routes>
  );
};

export default Router;
