import React, { useEffect } from "react";
import "../UploadPublications/UploadPublications.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import * as XLSX from "xlsx";

const UploadPublications = () => {
  const [excelData, setExcelData] = useState(null);
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);
  const [title, setTitle] = useState("");
  const [domain, setDomain] = useState("");
  const [yearOfPublication, setYearOfPublication] = useState("");
  const [author, setAuthor] = useState("");
  const [indexing, setIndexing] = useState("");
  const [externalResources, setExternalResources] = useState("");
  const [journalName, setJournalName] = useState("");
  const fileType = ["application/vnd.ms-excel"];
  const [errorMessage, setErrorMessage] = useState("Invalid login");
  const router = useNavigate();
  const [isError, setIsError] = useState(true);
  console.log(excelFile);

  useEffect(() => {
    console.log("Data", excelData);
  }, [excelData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8090/api/paper/paperRecord",
        {
          method: "POST",
          body: JSON.stringify({
            title: title,
            domain: domain,
            yearOfPublication: yearOfPublication,
            author: author,
            indexing: indexing,
            journalName: journalName,
            externalResources: externalResources,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.json();
      data.then((res) => {
        const items = res;
        console.log(items);
        if (res._id) {
          router("/main");
        } else {
          console.log(errorMessage);
          setIsError(false);
        }
      });
    } catch (err) {
      console.log(err);
    }
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
        <form
          className="form-group col-5"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          {/* {title
"asd"
domain
"sd"
yearOfPublication
"2022"
author
"2022"
indexing
"asdf"
journalName
"sdfv"
externalResources
"sdf"} */}
          <label>Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            name="title"
          ></input>
          <label>Domain</label>
          <input
            onChange={(e) => setAuthor(e.target.value)}
            name="domain"
          ></input>
          <label>Year Of Publication</label>
          <input
            onChange={(e) => setYearOfPublication(e.target.value)}
            name="yearOfPublication"
          ></input>
          <label>Author</label>
          <input
            onChange={(e) => setAuthor(e.target.value)}
            name="author"
          ></input>
          <label>Index</label>
          <input
            onChange={(e) => setIndexing(e.target.value)}
            name="indexing"
          ></input>
          <label>Journal Name</label>
          <input
            onChange={(e) => setJournalName(e.target.value)}
            name="journalName"
          ></input>
          <label>External Resources</label>
          <input
            onChange={(e) => setExternalResources(e.target.value)}
            name="externalResources"
          ></input>
          {/* <label>
            <h5>Upload Excel file</h5>
          </label>
          <br></br>
          <input
            type="file"
            className="form-control"
            onChange={handleFile}
            required
          ></input>
          {excelFileError && <div>{excelFileError}</div>} */}
          <button type="submit" className="submit" style={{ marginTop: "5%" }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadPublications;
