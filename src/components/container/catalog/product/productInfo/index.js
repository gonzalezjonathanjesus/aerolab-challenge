import React from "react";
//import styled from "styled-components";
import ProductName from "./productName";
import ProductPrice from "./productPrice";
import AddToCart from "./addToCart";

const ProductInfo = props => {
  return (
    <div>
      <ProductName name={props.name} />
      <ProductPrice
        primaryColor={props.primaryColor}
        discount={props.discount}
        originalPrice={props.originalPrice}
        price={props.price}
      />
      <AddToCart
        primaryColor={props.primaryColor}
        id={props.id}
        cant={props.cant}
        addSeveral={props.addSeveralProducts}
        addOne={props.addProduct}
        removeOne={props.removeProduct}
      />
    </div>
  );
};

export default ProductInfo;
