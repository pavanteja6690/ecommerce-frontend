import React from "react";
import { useSelector } from "react-redux";
import Basketitem from "../Basketitem/Basketitem";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LockIcon from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";
function Checkout(props) {
  let cartitems = useSelector((state) => state.cartactionreducers);
  // console.log(cartitems);
  let cnt = 0;
  let price = 0;
  cartitems.forEach((ele) => {
    cnt = cnt + parseInt(ele.count);
    price = price + ele.price * ele.count;
  });
  if (props.class == "inactive") {
    return (
      <div>
        <div id="myModal" class="modal">
          <div className="modal-content">
            <LockIcon style={{ fontSize: 75 }} />
            <p>You need to login to access the cart</p>
            <Link to="/signin">
              <button className="unlocklogin">Login</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={`checkout ${props.class}`}>
      <div className="checkoutleft">
        <h2>Your Shopping basket</h2>
        <hr />
        {cartitems.map((ele) => (
          <Basketitem
            image={ele.image}
            title={ele.title}
            price={ele.price}
            id={ele.id}
          />
        ))}
      </div>
      <div className="checkoutright">
        <div className="subtotal">
          <h3>
            Subtotal({cnt} items):<span> Rs {price}</span>
          </h3>
          <div className="gift">
            <input type="checkbox" />
            <p>This order contains a gift</p>
          </div>
          <button>Proceed to buy</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
