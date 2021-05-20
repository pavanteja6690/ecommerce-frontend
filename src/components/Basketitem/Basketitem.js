import React from "react";
import "./style.css";
import img from "../../images/demoproduct.jpg";
import { Link } from "react-router-dom";
import {
  decreasecount,
  increasecount,
  removefromcart,
} from "../../redux/actions/cartactions";
import { useDispatch, useSelector } from "react-redux";
function Basketitem({ title, price, image, id }) {
  const dispatch = useDispatch();
  const handleremovefromcart = (id) => {
    dispatch(removefromcart(id));
  };
  const handleincreasecount = (id) => {
    dispatch(increasecount(id));
  };
  const handledecreasecount = (id) => {
    dispatch(decreasecount(id));
  };
  const cartitems = useSelector((state) => state.cartactionreducers);
  console.log(cartitems);
  const cartitemcount = cartitems.find((ele) => ele.id == id);
  console.log(id, cartitemcount);
  return (
    <div className="topdiv">
      <div className="imagediv">
        <img src={image} />
      </div>
      <div className="infodiv">
        <Link className="link" to={`/products/${id}`}>
          <h2>{title}</h2>
          <h3>Rs {price}</h3>
          <p>see more info</p>
        </Link>
        <div className="counter">
          <button
            className="counterbutton"
            onClick={() => handledecreasecount(id)}
          >
            -
          </button>
          <button className="count">{cartitemcount.count}</button>
          <button
            className="counterbutton"
            onClick={() => handleincreasecount(id)}
          >
            +
          </button>
        </div>

        <button
          className="removebutton"
          productid={id}
          onClick={() => handleremovefromcart(id)}
        >
          remove from basket
        </button>
      </div>
    </div>
  );
}

export default Basketitem;
