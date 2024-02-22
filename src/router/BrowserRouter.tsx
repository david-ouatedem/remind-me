import { Navigate, createBrowserRouter } from "react-router-dom";
import { AppRoutes, BASE_ROUTE } from "./Routes.ts";
import App from "../App.tsx";
import RemindersList from "../dashboard/reminders/index/RemindersList.tsx";
import ContactsList from "../dashboard/contacts/ContactsList.tsx";
import HomePageView from "../dashboard/index/HomePageView.tsx";

export const ROUTER = createBrowserRouter([
  {
    path: BASE_ROUTE,
    element: <App />,
    children: [
      {
        path: AppRoutes.home,
        element: <HomePageView />,
      },
      {
        path: AppRoutes.reminders,
        element: <RemindersList />,
      },
      {
        path: AppRoutes.contacts,
        element: <ContactsList />,
      },
      {
        path: "",
        element: <Navigate to={AppRoutes.home} />,
      },
    ],
  },
]);
