import React, { useEffect } from "react";
import "../UploadPublications/UploadPublications.css";
import { useState } from "react";
//import * as XLSX from "xlsx";

const UploadPublications = () => {
  const [excelData, setExcelData] = useState(null);
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);

  const fileType = ["application/vnd.ms-excel"];

  console.log(excelFile);

  useEffect(() => {
    console.log("Data", excelData);
  }, [excelData]);

  const handleSubmit = (e) => {
    // e.preventDefault();
    // if (excelFile !== null) {
    //   const workbook = XLSX.read(excelFile, { type: "buffer" });
    //   const worksheetName = workbook.SheetNames[0];
    //   const worksheet = workbook.Sheets[worksheetName];
    //   const data = XLSX.utils.sheet_to_json(worksheet);
    //   setExcelData(data);
    // } else {
    //   setExcelData(null);
    // }
  };

  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      let reader = new FileReader();
      reader.readAsArrayBuffer(selectedFile);
      reader.onload = (e) => {
        setExcelFileError(null);
        setExcelFile(e.target.result);
      };
      console.log(excelFile);
    } else {
      console.log("Please select a file");
    }
    console.log("File", selectedFile);
    console.log("File type", selectedFile.type);
  };

  return (
    <div className="UpdatePub">
      <h1 className="header">Add Publications</h1>
      <div className="form">
        <form className="form-group" autoComplete="off" onSubmit={handleSubmit}>
          <label>
            <h5>Upload Excel file</h5>
          </label>
          <br></br>
          <input
            type="file"
            className="form-control"
            onChange={handleFile}
            required
          ></input>
          {excelFileError && <div>{excelFileError}</div>}
          <button type="submit" className="submit" style={{ marginTop: "5%" }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadPublications;
