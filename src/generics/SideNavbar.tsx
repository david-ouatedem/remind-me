import { NavLink } from "react-router-dom";
import { AppRoutes } from "../router/Routes.ts";
import { twMerge } from "tailwind-merge";

const appRoutes = [
  {
    path: AppRoutes.home,
    name: "home",
    icon: "",
  },
  {
    path: AppRoutes.reminders,
    name: "reminders",
    icon: "",
  },
  {
    path: AppRoutes.contacts,
    name: "contacts",
    icon: "",
  },
];

const SideNavbar = () => {
  return (
    <nav>
      <ul>
        {appRoutes.map((route, index) => (
          <li key={route.name + index.toString()}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                twMerge(
                  "flex items-center gap-x-2 w-full p-2 capitalize",
                  isActive ? "bg-tertiary rounded-2xl" : ""
                )
              }
            >
              {route.icon}
              <p className="text-xl font-medium">{route.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavbar;
