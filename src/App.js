import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UploadPublications from "./components/UploadPublications/UploadPublications";
import ViewPublications from "./components/ViewPublications/ViewPublications";
import Login from "./login";
import Main from "./main";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/view" element={<ViewPublications />}></Route>
        <Route path="/upload" element={<UploadPublications />}></Route>
      </Routes>
    </div>
  );
};
export default App;
