import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import UploadPublications from "./components/UploadPublications/UploadPublications";
import ViewPublications from "./components/ViewPublications/ViewPublications";

function Main() {
  return (
    <div className="Main">
      <div className="GlassApp">
        <SideBar />
        <Routes>
          <Route path="/view" element={<ViewPublications />}></Route>
          <Route path="/upload" element={<UploadPublications />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Main;
