import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import XeroCodeeAI from "pages/XeroCodeeAI";
import Sectioncards from "pages/Sectioncards";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "xerocodeeai",
      element: <XeroCodeeAI />,
    },
    {
      path: "sectioncards",
      element: <Sectioncards />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
