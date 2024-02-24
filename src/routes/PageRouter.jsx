import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoPlayer from "../pages/VideoPlayer";
import routes from "../routes/routes.json";
import PageNotFound from "../pages/PageNotFound";

const PageRouter = () => {
  const route = createBrowserRouter([
    {
      path: `${routes.HOME}`,
      element: <VideoPlayer />,
      errorElement: <PageNotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default PageRouter;
