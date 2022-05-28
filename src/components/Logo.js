import image from "../utils/ssn-logo.jpg";
import React from "react";

export const Logo = () => {
  return (
    <div className="d-flex flex-column ">
      <div className=" d-flex justify-content-center">
        <img src={image} height={90} width={200} />
      </div>
      <div className="d-flex justify-content-center">
        <h4 style={{ fontWeight: "bold", marginTop: "15px" }}>
          Reseach Publication Record
        </h4>
      </div>
    </div>
  );
};

export default Logo;
