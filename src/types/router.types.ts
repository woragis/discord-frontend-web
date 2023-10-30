import React from "react";
export type routerType = {
  title: String;
  path: String;
  element: React.FunctionComponentElement<Object>;
  children?: JSX.Element;
};
