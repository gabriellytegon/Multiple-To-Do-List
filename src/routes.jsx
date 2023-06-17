import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DetailToDoList } from "./pages/DetailToDoList";
import { MultipleToDoList } from "./pages/MultipleToDoList";

export const router = createBrowserRouter([
  {
    path: "/DetailToDoList/:id",
    element: <DetailToDoList />,
  },
  {
    path: "/MultipleToDoList",
    element: <MultipleToDoList />,
  },
]);

export const Routes = () => <RouterProvider router={router} />;
