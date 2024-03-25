import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../Layouts/App";
import ActivitiesDashboard from "../../Features/activities/dashboard/ActivitiesDashboard";
import ActivityForm from "../../Features/activities/form/ActivityForm";
import ActivityDetails from "../../Features/activities/details/ActivityDetails";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "activities", element: <ActivitiesDashboard /> },
      { path: "createActivity", element: <ActivityForm key="create" /> },
      { path: "activities/:id", element: <ActivityDetails /> },
      { path: "editActivity/:id", element: <ActivityForm key="edit" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
