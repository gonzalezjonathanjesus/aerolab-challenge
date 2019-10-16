import React from "react";
import { Styled } from "./StyledProductItemInfo";
import { ProductItemName } from "./ProductItemName";
import { ProductItemPrice } from "./ProductItemPrice";
import { AddToCart } from "./AddToCart";

export const ProductItemInfo = props => {
  return (
    <div>
      <Styled.Catalog.ProductLink to={`/product/${props.id}`} primaryColor={props.primaryColor}>
        <ProductItemName name={props.name} />
        <ProductItemPrice
          primaryColor={props.primaryColor}
          discount={props.discount}
          originalPrice={props.originalPrice}
          price={props.price}
        />
      </Styled.Catalog.ProductLink>
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