import React, { useState } from "react";
import Logo from "./components/Logo";
import { Route, Routes, useNavigate } from "react-router-dom";
import classes from "./styles/login.module.css";
import Main from "./main";

export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("Invalid login");
  const router = useNavigate();
  const [isError, setIsError] = useState(true);
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email + " " + password);
    try {
      const response = await fetch("http://localhost:8090/api/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
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
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div
        style={{ background: "#ffffff", borderRadius: "30px", height: "70%" }}
        className="col-11 col-xl-4 col-lg-4 col-md-6 col-sm-7 d-flex flex-column"
      >
        <div
          style={{ marginTop: "7%" }}
          className="col-sm-10 col-md-12 col-11 "
        >
          <Logo></Logo>
        </div>

        <form
          style={{ marginTop: "5%" }}
          className=" d-flex flex-column align-items-center"
          onSubmit={handleLogin}
        >
          <div style={{ color: "red", marginBottom: "3%" }} hidden={isError}>
            {errorMessage}
          </div>
          <input
            placeholder="Username"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Username")}
            type="text"
            className={classes.username}
            onChange={(e) => setemail(e.target.value)}
          ></input>
          <input
            placeholder="Password"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Password")}
            type="password"
            className={classes.password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button type="submit" className={classes.login}>
            Log in
          </button>
          <div className={classes.forgotPassword}>
            Forgot Username or Password?
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
