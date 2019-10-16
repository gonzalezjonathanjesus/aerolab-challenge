import React from "react";
import { Styled } from "./StyledProductItemInfo";

export const ProductItemPrice = props => {
  if (props.location === 'shoppingCart') {
    return props.discount !== 0 ? (
      <Styled.ShoppingCart.ProductPrice primaryColor={props.primaryColor}>
        <Styled.ShoppingCart.OriginalPrice> ${((props.originalPrice).toFixed(2)).replace('.', ',')} </Styled.ShoppingCart.OriginalPrice>
        <span>${((props.price).toFixed(2)).replace('.', ',')}</span>
      </Styled.ShoppingCart.ProductPrice>
    ) : (
      <Styled.ShoppingCart.ProductPrice primaryColor={props.primaryColor}>
        <span>${((props.price).toFixed(2)).replace('.', ',')}</span>
      </Styled.ShoppingCart.ProductPrice>
    );
  } else {
    return props.discount !== 0 ? (
      <Styled.Catalog.ProductPrice primaryColor={props.primaryColor}>
        <Styled.Catalog.OriginalPrice> ${((props.originalPrice).toFixed(2)).replace('.', ',')} </Styled.Catalog.OriginalPrice>
        <span>${((props.price).toFixed(2)).replace('.', ',')}</span>
      </Styled.Catalog.ProductPrice>
    ) : (
      <Styled.Catalog.ProductPrice primaryColor={props.primaryColor}>
        <span>${((props.price).toFixed(2)).replace('.', ',')}</span>
      </Styled.Catalog.ProductPrice>
    );
  }
};