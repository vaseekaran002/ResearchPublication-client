import React from "react";
import Logo from "../../utils/ssn-logo.jpg";
import "../SideBar/SideBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { SidebarData } from "../../Data/Data";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              onClick={() => navigate("/" + item.path)}
              className="menuItems"
            >
              <div>
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItems">
          <div>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </div>
          <span>Sign out</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
