import React from "react";
//import styled from "styled-components";
import { ProductItemName } from "./ProductItemName";
import { ProductItemPrice } from "./ProductItemPrice";
import { AddToCart } from "./AddToCart";

export const ProductItemInfo = props => {
  return (
    <div>
      <ProductItemName name={props.name} />
      <ProductItemPrice
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