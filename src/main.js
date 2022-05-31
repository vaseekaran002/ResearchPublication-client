import React, { useEffect, useState } from "react";
import './App.css'
import Logo from '../src/imgs/ssn-logo.jpg'
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import UploadPublications from "./components/UploadPublications/UploadPublications";
import ViewPublications from "./components/ViewPublications/ViewPublications";
import DashBoard from "./components/DashBoard/DashBoard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faHouse,
  faFileCirclePlus,
  faMagnifyingGlass,
  faMinusCircle,
  faUser,
  faUserCircle,
  faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";

function Main() {

  const [pageRoute, setPageRoute] = useState("dashboard");

  return (
    <div className="Main">
      <div className="GlassApp">
        <div className="Sidebar">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <div className="menu">
          
            <div
            onClick={() => {
              setPageRoute("dashboard");
            }}
              className="menuItems"
            >
              <div>
                <FontAwesomeIcon icon={faHouse} />
              </div>
              <span>DashBoard</span>
              </div>

            <div
            onClick={() => {
              setPageRoute("uploadpublications");
            }}
              className="menuItems"
            >
              <div>
                <FontAwesomeIcon icon={faHouse} />
              </div>
              <span>Upload Publications</span>
            </div>

            <div
            onClick={() => {
              setPageRoute("viewpublications");
            }}
              className="menuItems"
            >
              <div>
                <FontAwesomeIcon icon={faHouse} />
              </div>
              <span>View Publications</span>
            </div>
          
       
        <div className="menuItems">
          <div>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </div>
          <span>Sign out</span>
        </div>
      </div>
      <div
        style={{ height: "100vh" }}
        className="home d-flex flex-column col-12 col-md-8 col-sm-12 col-lg-9 col-xl-9"
      >
      {(() => {
          if (pageRoute.match("uploadpublications") ) {
            return (
              <UploadPublications
              ></UploadPublications>
            );
           } else if (pageRoute.match("viewpublications")) {
            return (
               <ViewPublications
               ></ViewPublications>
             );
           } else if (
             pageRoute.match("mentormeeting")) {
              return (
               <DashBoard
               ></DashBoard>
             );
           }// else if (
          //   pageRoute.match("additionaldetails") &&
          //   studentId.length !== 0
          // ) {
          //   return (
          //     <AdditionalDetails
          //       canEdit={false}
          //       studentId={studentId}
          //       editButton={false}
          //     ></AdditionalDetails>
          //   );
          // } else {
          //   return <></>;
          // }
        })()}
        </div>
    </div>
        
      </div>
    </div>
  );
}

export default Main;


{/*<SideBar />
         <Routes>
          <Route path="/view" element={<ViewPublications />}></Route>
          <Route path="/upload" element={<UploadPublications />}></Route>
        </Routes> */}