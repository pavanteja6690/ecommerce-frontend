import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function Header() {
  const option1 = useRef();
  const option2 = useRef();
  const option3 = useRef();
  const dropdownbtn = useRef();
  const dispatch = useDispatch();
  const [optionlink, setoptionlink] = useState("/signin");
  const cartproductscnt = useSelector((state) => state.cartactionreducers);
  const cnt = cartproductscnt.length;
  var currentuser = useRef("guest");
  const user = useSelector((state) => state.userreducer);
  useEffect(() => {
    if (user.loggedin === false) {
      option1.current.innerHTML = "Hello guest";
      option2.current.style.display = "none";
      option3.current.style.display = "block";
      option3.current.innerHTML = "Sign in";
      setoptionlink("/signin");
      currentuser.current = "guest";
      dropdownbtn.current.className = "a";
    } else {
      option1.current.innerHTML = "Hello";
      option2.current.display = "block";
      currentuser.current = user.username;
      option2.current.innerHTML = currentuser.current;
      // console.log("entered", optionlink.current);
      setoptionlink("/checkout");
      console.log(optionlink);
      // console.log(option3.current);
      // option1.current.innerHTML = "Hello";
      option3.current.style.display = "none";
      dropdownbtn.current.className = "dropdown";
    }
  }, [user, optionlink]);
  const signouthandler = () => {
    dispatch({ type: "signout", payload: [] });
  };
  return (
    <div class="header">
      {/* logo */}
      <Link to="/">
        {/* <img className="headerlogo" src={headerlogo} /> */}
        <h1 className="headerlogo">LOGO</h1>
      </Link>
      {/* search */}
      <div className="headersearch">
        <input className="headersearchinput" type="text" />
        <SearchIcon className="headersearchicon" />
      </div>
      <div className="headernav">
        <div ref={dropdownbtn} className="dropdown">
          <div className="dropdownbtn">
            <Link to={optionlink}>
              <div className="headeroption">
                <span ref={option1} className="headeroptionlineone">
                  hello guest
                </span>
                <span ref={option2}></span>
                <span ref={option3} className="headeroptionlinetwo">
                  sign in
                </span>
              </div>
            </Link>
          </div>
          <div className="dropdowncontainer">
            <p>Your account</p>
            <p>Your orders</p>
            <p>Your wishlist</p>
            <p onClick={signouthandler}>signout</p>
          </div>
        </div>
        <div className="headeroption">
          <span className="headeroptionlineone">returns</span>
          <span className="headeroptionlinetwo">orders</span>
        </div>

        {/* <div className="headeroption">
          <span className="headeroptionlineone">your</span>
          <span className="headeroptionlinetwo">prime</span>
        </div> */}
        <Link to="/checkout">
          <div className="headeroptionbasket">
            <ShoppingCartIcon />
            <span className="headeroptionlinetwo headerbasketcount">{cnt}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
