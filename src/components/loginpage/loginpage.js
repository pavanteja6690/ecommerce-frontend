import "./style.css";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
function Loginpage() {
  const dispatch = useDispatch();
  const loginpopuphandler = useRef();
  const history = useHistory();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const handleemailchange = (e) => {
    setemail(e.target.value);
  };
  const handlepasswordchange = (e) => {
    setpassword(e.target.value);
  };
  const signinhandler = async () => {
    await axios
      .post("https://ecommerce-login-backend.herokuapp.com/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        // console.log(response.data);
        if (response.data === "Email doesn't exist") {
          loginpopuphandler.current.innerHTML = "Email doesn't exist";
          loginpopuphandler.current.style.visibility = "visible";
          loginpopuphandler.current.style.color = "red";
        } else if (response.data === "incorrect password") {
          loginpopuphandler.current.innerHTML = "Incorrect password";
          loginpopuphandler.current.style.visibility = "visible";
          loginpopuphandler.current.style.color = "red";
        } else {
          console.log(response.data);
          localStorage.setItem("token", response.data.token);
          // document.cookie = "jwttoken = " + response.data.token;
          // var x = document.cookie.split("=")[1];
          // console.log(x);
          // console.log(response.data.user.email);
          dispatch({
            type: "Fillcartsignin",
            payload: response.data.user.cartitems,
          });
          console.log(response.data.user.cartitems);
          dispatch({ type: "user", payload: response.data.user });
          console.log(response.data);
          history.push("/homepage");
        }
      })
      .catch((err) => {
        console.log("some error occurred");
      });
  };
  return (
    <div className="logintopdiv">
      <Link to="/">
        <h1>LOGO</h1>
      </Link>
      <h3 ref={loginpopuphandler}>{""}</h3>
      <div className="loginblock">
        <h2>Sign in</h2>
        <div>
          <h6>Email</h6>
          <input
            type="email"
            value={email}
            onChange={handleemailchange}
            placeholder=""
          />
        </div>
        <div>
          <h6>password</h6>
          <input
            type="password"
            value={password}
            onChange={handlepasswordchange}
            placeholder=""
          />
        </div>
        <button onClick={signinhandler}>Sign in</button>
        <Link to="/signup">
          <div className="newuser">
            <h6>New user?</h6>
            <h5>sign up</h5>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Loginpage;
