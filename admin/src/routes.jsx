import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  UsersIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Acc, Profile, Docs, DataSource, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "accounts",
        path: "/acc",
        element: <Acc />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "docs",
        path: "/Docs",
        element: <Docs />,
      },
      {
        icon: <UsersIcon {...icon} />,
        name: "groups",
        path: "/notifications",
        element: <Notifications />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: "data sources",
        path: "/DataSource",
        element: <DataSource />,
      },
    ],
  },
  // {
  //   title: "auth pages",
  //   layout: "auth",
  //   pages: [
  //     {
  //       icon: <ServerStackIcon {...icon} />,
  //       name: "sign in",
  //       path: "/sign-in",
  //       element: <SignIn />,
  //     },
  //   ],
  // },
  
];

export default routes;
