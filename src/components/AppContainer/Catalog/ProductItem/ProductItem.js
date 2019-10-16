import React from "react";
import { Styled } from "./StyledProductItem";
import { ProductItemPhoto } from "./ProductItemPhoto";
import { ProductItemInfo } from "./ProductItemInfo";

export const ProductItem = props => {
  return (
    <Styled.ProductItem>
      <ProductItemPhoto
        primaryColor={props.primaryColor}
        discount={props.discount}
        photo={props.photo}
        name={props.name}
      />
      <ProductItemInfo
        primaryColor={props.primaryColor}
        id={props.id}
        discount={props.discount}
        name={props.name}
        brand={props.brand}
        originalPrice={props.originalPrice}
        price={props.price}
        cant={props.cant}
        addSeveralProducts={props.addSeveralProducts}
        addProduct={props.addProduct}
        removeProduct={props.removeProduct}
      />
    </Styled.ProductItem>
  );
};
