import React from "react";
import { Styled } from "./StyledProductItemInfo";
import Truncate from "react-truncate";

export const ProductItemName = props => {
  if (props.location === 'shoppingCart') {
    return (
      <Styled.ShoppingCart.ProductName>
        <Truncate lines={2} ellipsis={<span>...</span>}>
          {props.name}
        </Truncate>
      </Styled.ShoppingCart.ProductName>
    );
  } else {
    return (
      <Styled.Catalog.ProductName>
        <Truncate lines={2} ellipsis={<span>...</span>}>
          {props.name}
        </Truncate>
      </Styled.Catalog.ProductName>
    );
  }
};