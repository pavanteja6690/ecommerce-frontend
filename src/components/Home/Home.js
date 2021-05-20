import React, { useEffect } from "react";
import "./style.css";
import bannerpic from "../../images/bannerpic3.jpg";
import { Link } from "react-router-dom";
import Product from "../product/Product";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
function Home() {
  const dispatch = useDispatch();

  const fetchproducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    console.log(response.data[0].image);
    // response.data.map((ele) => {
    //   return dispatch(setproduct(ele));
    // });
    dispatch({ type: "Setproducts", payload: response.data });
  };
  const cnt = useSelector((state) => state.cntreducer);
  console.log(cnt);
  const products = useSelector((state) => state);

  useEffect(() => {
    // if (cnt == 0) {
    fetchproducts();
    // dispatch(flagcounter(1));
    // }
  });

  // products.productlistreducers.forEach((ele) => {
  //   // console.log(ele);
  // });
  return (
    <div className="home">
      <div className="homecontainer">
        <div className="bannerpiccontainer">
          <img src={bannerpic} className="homecontainerbannerpic" alt="" />
        </div>
        <div className="homerow">
          {products.productlistreducers.map((ele) => (
            <div>
              <Link to={`/products/${ele.id}`}>
                <Product
                  title={ele.title}
                  price={ele.price}
                  image={ele.image}
                  rating={4}
                />
              </Link>
            </div>
          ))}

          {/* <Product
            title="the lean startup"
            price={29.99}
            image={demoproduct}
            rating={4}
          />
          <Product
            title="the second product on the website"
            price={20320}
            image={demoproduct2}
            rating={5}
          />
          <Product
            title="the lean startup"
            price={29.99}
            image={demoproduct}
            rating={4}
          />
          <Product
            title="the second product on the website"
            price={20320}
            image={demoproduct2}
            rating={5}
          />
          <Product
            title="the second product on the website"
            price={20320}
            image={demoproduct2}
            rating={5}
          /> */}
          {/* <Product /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
