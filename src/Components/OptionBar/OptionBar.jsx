import "./OptionBar.css";

import { AiFillHome, AiFillCompass } from "react-icons/ai";
import { MdWatchLater } from "react-icons/md";
import { RiPlayListAddFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export function OptionBar() {
  const menubarList = [
    {
      path: "/",
      label: "home",
      selectedIcon: <AiFillHome />,
    },
    {
      path: "/explore",
      label: "explore",
      selectedIcon: <AiFillCompass />,
    },
    {
      path: "/playlists",
      label: "playlists",
      selectedIcon: <RiPlayListAddFill />,
    },
    {
      path: "/watchLater",
      label: "watch later",
      selectedIcon: <MdWatchLater />,
    },
  ];
  function getActiveStyle({ isActive }) {
    return {
      fontWeight: isActive ? "500" : "",
      color: isActive ? "#66add8" : "black",
    };
  }
  return (
    <ul className="MenuBarList">
      {menubarList.map(({ label, selectedIcon, icon, path }) => {
        return (
          <li key={label}>
            <NavLink
              className="MenuBarListItem"
              to={path}
              style={getActiveStyle}
            >
              <span className="MenuBarIcon">{selectedIcon}</span>
              <span className="MenuBarText">{label}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
