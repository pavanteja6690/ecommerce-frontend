import React from "react";
import "./style.css";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../../redux/actions/cartactions";

function Productdetailspage() {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.userreducer);
  let cartitems = useSelector((state) => state.cartactionreducers);
  let history = useHistory();
  const { id } = useParams();
  //   console.log(id);
  const handleaddtocart = async (e) => {
    if (user.loggedin) {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err) => {
          console.log(err);
        });
      // console.log(response);

      dispatch(addtocart(response));
      await axios
        .post(
          "http://localhost:5000/userinfopost",
          { user, cartitems },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      history.push("/checkout");
    }
  };
  //   const handleaddtocart = (e) => {

  //     dispatch(addtocart(id));
  //   };
  const [selectedproduct, setselectedproduct] = useState("");
  const fetchproduct = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log(err);
      });
    setselectedproduct(response.data);
  };
  useEffect(() => {
    fetchproduct(id);
  });
  //   title,description,category,price,image
  return (
    <div className="highestdiv">
      <div className="productdetailstopdiv">
        <div className="productdetailsimagediv">
          <img
            className="productdetailsimage"
            src={selectedproduct.image}
            alt="img"
          />
        </div>
        <div className="productdetailsinfo">
          <h1>{selectedproduct.title}</h1>
          <h2>{selectedproduct.description}</h2>
          <h1>
            <span>Rs.</span>
            {selectedproduct.price}
          </h1>
          {/* <Link to="/checkout"> */}
          <button className="addtobasketbtn" onClick={handleaddtocart}>
            Add to cart
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Productdetailspage;
