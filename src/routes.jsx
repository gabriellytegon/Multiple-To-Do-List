import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/DetailToDoList/:id",
    element: <></>,
  },
  {
    path: "/MultipleToDoList",
    element: <></>,
  },
]);

export const Routes = () => <RouterProvider router={router} />;
