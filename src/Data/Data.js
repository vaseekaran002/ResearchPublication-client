import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faHouse,
  faFileCirclePlus,
  faMagnifyingGlass,
  faMinusCircle,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

export const SidebarData = [
  {
    icon: faHouse,
    heading: "DashBoard",
  },
  {
    icon: faMagnifyingGlass,
    heading: "View Publications",
    path: "view",
  },
  {
    icon: faFileCirclePlus,
    heading: "Add Publications",
    path: "upload",
  },
];
