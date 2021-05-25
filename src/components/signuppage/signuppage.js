import "./style.css";
import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";
import { useDispatch } from "react-redux";
function Signuppage() {
  const popuphandler = useRef();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  // const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const handleemailchange = (e) => {
    setEmail(e.target.value);
  };
  const handlenamechange = (e) => {
    setName(e.target.value);
  };
  // const handlemobilechange = (e) => {
  //   setMobile(e.target.value);
  // };
  const handlepasswordchange = (e) => {
    setPassword(e.target.value);
  };
  const handlesignup = async (e) => {
    e.preventDefault();
    console.log(email, name, password);
    await axios
      .post("https://ecommerce-login-backend.herokuapp.com/auth/signup", {
        // .post("https://ecommerce-login-backend.herokuapp.com/auth/signup", {
        username: name,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(popuphandler.current);
        console.log(response.data);
        if (response.data === "Emailexists") {
          popuphandler.current.innerHTML = "Email already exists";
          popuphandler.current.style.color = "red";
        } else {
          // popuphandler.current.innerHTML =
          //   "Signup successful<Link to='/',"login"> <h6>Please login</h6></Link>";
          // popuphandler.current.style.color = "green";
          // return <Redirect to="/signin" />;
          // from here popuphandler.current.innerHTML =
          //   "Signup successful<h6 style='color:black;font-weight:normal;font-size:10px;margin-top:10px;'>Redirecting you to login page.....</h6>";
          // popuphandler.current.style.color = "green";
          // console.log(popuphandler.current);
          // popuphandler.current.style.visibility = "visible";
          // setTimeout(() => {
          //   history.push("/signin");
          // }, 3000);
          localStorage.setItem("token", response.data.token);
          dispatch({ type: "user", payload: response.data.user });
          history.push("/homepage");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="signuptopdiv">
      <Link to="/">
        <h1>LOGO</h1>
      </Link>
      <h3 ref={popuphandler} className="popup">
        {""}
      </h3>

      <form className="signupblock">
        <h2>Sign up</h2>
        <div>
          <h6>Your name</h6>
          <input
            type="text"
            placeholder=""
            value={name}
            onChange={handlenamechange}
          />
        </div>
        {/* <div>
          <h6>Mobile number</h6>
          <input
            type="tel"
            value={mobile}
            onChange={handlemobilechange}
            placeholder=""
          />
        </div> */}
        <div>
          <h6>Email</h6>
          <input
            required="true"
            id="email"
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

        <button type="submit" onClick={handlesignup}>
          Sign up
        </button>

        <Link to="/signin">
          <div className="newuser">
            <h6>Already have an account?</h6>
            <h5>Sign in</h5>
          </div>
        </Link>
      </form>
    </div>
  );
}

export default Signuppage;
