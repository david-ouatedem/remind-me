import { NavLink } from "react-router-dom";
import { AppRoutes } from "../router/Routes.ts";
import { BsPerson } from "@react-icons/all-files/bs/BsPerson.js";
import { BsBook } from "@react-icons/all-files/bs/BsBook.js";
import { twMerge } from "tailwind-merge";
const SideNavbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={AppRoutes.reminders}
            className={({ isActive }) =>
              twMerge(
                "flex items-center gap-x-2 w-full p-2 capitalize",
                isActive ? "bg-tertiary rounded-2xl" : ""
              )
            }
          >
            <BsBook size="1.5rem" className="fill-secondary stroke-secondary" />
            <p className="text-xl font-medium">rappels</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={AppRoutes.contacts}
            className={({ isActive }) =>
              twMerge(
                "flex items-center gap-x-2 w-full p-2 capitalize",
                isActive ? "bg-tertiary rounded-2xl" : ""
              )
            }
          >
            <BsPerson
              size="1.5rem"
              className="fill-secondary stroke-secondary"
            />
            <p className="text-xl font-medium">contacts</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavbar;
