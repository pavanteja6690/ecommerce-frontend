import React from "react";
import Checkout from "./Checkout";
import { useSelector } from "react-redux";
function Checkout2() {
  let loggedin = useSelector((state) => state.userreducer.loggedin);
  console.log(loggedin);
  if (!loggedin) {
    return (
      <div>
        <Checkout class="inactive" />
      </div>
    );
  } else
    return (
      <div>
        <Checkout class="active" />
      </div>
    );
}

export default Checkout2;
