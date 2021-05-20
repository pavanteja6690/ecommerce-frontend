import React from "react";
import "./style.css";
function Product({ title, price, image, rating }) {
  return (
    <div className="product">
      <div className="productinfo">
        <p>{title}</p>
      </div>
      <img src={image} alt="" />
      <div className="productrating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div>

      <p className="productprice">
        <small>Rs.</small>
        <strong>{price}</strong>
      </p>
      {/* <button className="addtobasketbtn" onClick={handleaddtocart}>
        add to cart
      </button> */}
    </div>
  );
}

export default Product;
